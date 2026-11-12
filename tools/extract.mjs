// Extracts the compiled English UI dictionaries from a dsh installation.
//
// The dictionaries are compiled into each package's `lib/client.js` as object
// literals, often referring to shared constants, so this resolves identifiers
// against their `const NAME = "..."` definitions instead of parsing the bundle.
//
// CLI: node tools/extract.mjs <install-root> [--out .i18n/strings.json]
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const LOCALES = new Set(['en'])

async function clientBundles(root) {
  const out = []
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    try {
      const text = await readFile(join(root, entry.name, 'lib', 'client.js'), 'utf8')
      if (text.includes('locale.register')) out.push({ pkg: entry.name, text })
    } catch {}
  }
  return out
}

function scanBalanced(text, from, open, close) {
  let depth = 0
  let quote = null
  for (let i = from; i < text.length; i++) {
    const c = text[i]
    if (quote) {
      if (c === '\\') { i++; continue }
      if (c === quote) quote = null
      continue
    }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue }
    if (c === open) depth++
    else if (c === close) { depth--; if (depth === 0) return { body: text.slice(from + 1, i), end: i } }
  }
  return null
}

function splitArgs(body) {
  const parts = []
  let depth = 0
  let quote = null
  let start = 0
  for (let i = 0; i < body.length; i++) {
    const c = body[i]
    if (quote) {
      if (c === '\\') { i++; continue }
      if (c === quote) quote = null
      continue
    }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue }
    if (c === '{' || c === '[' || c === '(') depth++
    else if (c === '}' || c === ']' || c === ')') depth--
    else if (c === ',' && depth === 0) { parts.push(body.slice(start, i).trim()); start = i + 1 }
  }
  parts.push(body.slice(start).trim())
  return parts
}

function unquote(raw) {
  const q = raw[0]
  if (q === '`') return null
  if (q === '"') { try { return JSON.parse(raw) } catch { return null } }
  return raw.slice(1, -1).replace(/\\'/g, "'").replace(/\\\\/g, '\\')
}

const escapeName = (name) => name.replace(/\$/g, '\\$')

function resolveString(text, expr) {
  const t = expr.trim()
  if (t.startsWith('"') || t.startsWith("'")) return unquote(t)
  const re = new RegExp(`(?:const|var|let)\\s+${escapeName(t)}\\s*=\\s*("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')`)
  const hit = re.exec(text)
  return hit ? unquote(hit[1]) : null
}

function dictBody(text, name) {
  const re = new RegExp(`(?:const|var|let)\\s+${escapeName(name)}\\s*=\\s*\\{`)
  const m = re.exec(text)
  if (!m) return null
  const start = text.indexOf('{', m.index)
  return scanBalanced(text, start, '{', '}')?.body ?? null
}

function valueOf(expr, text) {
  const t = expr.trim()
  if (t.startsWith('"')) { try { return JSON.parse(t) } catch { return null } }
  if (t.startsWith("'")) return unquote(t)
  const re = new RegExp(`(?:const|var|let)\\s+${escapeName(t)}\\s*=\\s*("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')`)
  const hit = re.exec(text)
  return hit ? unquote(hit[1]) : null
}

/** @returns {Promise<Array<{pkg: string, ns: string, key: string, value: string}>>} */
export async function extractDictionaries(installRoot) {
  const rows = []
  for (const { pkg, text } of await clientBundles(installRoot)) {
    for (const m of text.matchAll(/locale\.register\(/g)) {
      const paren = text.indexOf('(', m.index)
      const call = scanBalanced(text, paren, '(', ')')
      if (!call) continue
      const args = splitArgs(call.body)
      const ns = resolveString(text, args[0])
      if (!ns) continue

      const dict = args[1]?.trim() ?? ''
      let entries = null
      if (dict.startsWith('{')) {
        for (const pair of splitArgs(dict.slice(1, -1))) {
          const idx = pair.indexOf(':')
          const locale = idx < 0 ? pair.trim() : pair.slice(0, idx).trim()
          const expr = idx < 0 ? pair.trim() : pair.slice(idx + 1).trim()
          if (!LOCALES.has(locale)) continue
          entries = dictBody(text, expr)
        }
      } else if (dict.startsWith('"') || dict.startsWith("'")) {
        const locale = unquote(dict)
        if (LOCALES.has(locale) && args[2]?.trim().startsWith('{')) entries = args[2].trim().slice(1, -1)
      }
      if (!entries) continue

      for (const pair of splitArgs(entries)) {
        const idx = pair.indexOf(':')
        if (idx < 0) continue
        const rawKey = pair.slice(0, idx).trim()
        const key = rawKey.startsWith('"') || rawKey.startsWith("'") ? unquote(rawKey) : rawKey
        const value = valueOf(pair.slice(idx + 1), text)
        if (typeof key === 'string' && value != null) rows.push({ pkg, ns, key, value })
      }
    }
  }
  return rows
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}` || process.argv[1]?.endsWith('extract.mjs')) {
  const root = process.argv[2]
  const outFlag = process.argv.indexOf('--out')
  const out = outFlag >= 0 ? process.argv[outFlag + 1] : '.i18n/strings.json'
  if (!root) {
    console.error('usage: node tools/extract.mjs <install-root> [--out <file>]')
    process.exit(2)
  }
  const rows = await extractDictionaries(root)
  await writeFile(out, JSON.stringify(rows, null, '\t') + '\n', 'utf8')
  console.log(`${rows.length} strings, ${new Set(rows.map((r) => r.ns)).size} namespaces -> ${out}`)
}
