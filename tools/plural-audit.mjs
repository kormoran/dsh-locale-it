// Two checks that do not need a repository clone, because the type declarations
// ship inside the npm packages:
//
//  1. key parity between the Chinese key-set source and the English baseline,
//     read from each package's `lib/types/**/locale*.d.ts`;
//  2. plural-sensitive strings: a count placeholder followed by a plural noun,
//     with no `.one`/`.other` sibling key.
//
//   node tools/plural-audit.mjs [--install <root>]
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 ? process.argv[i + 1] : fallback
}
const installRoot = arg('install', process.env.DSH_INSTALL ?? join(process.env.APPDATA ?? '', 'npm', 'node_modules', '@deepseek-ai', 'dsh', 'node_modules', '@deepseek-ai'))

const corpus = JSON.parse(await readFile('.i18n/strings.json', 'utf8'))
const it = new Map()
for (const f of (await readdir('.i18n/it')).filter((x) => x.endsWith('.json'))) {
  const ns = f.slice(0, -5)
  for (const [k, v] of Object.entries(JSON.parse(await readFile(`.i18n/it/${f}`, 'utf8')))) it.set(`${ns}\t${k}`, v)
}

// --- 1. zh/en key parity, per package, from the shipped declarations ---------
const parity = []
for (const pkg of [...new Set(corpus.map((r) => r.pkg))].sort()) {
  const typesDir = join(installRoot, pkg, 'lib', 'types')
  let files = []
  try {
    files = (await readdir(typesDir, { recursive: true })).filter((f) => f.endsWith('.d.ts'))
  } catch { continue }
  for (const rel of files) {
    const text = await readFile(join(typesDir, rel), 'utf8').catch(() => '')
    // Declarations can appear in any order, so each block runs to the next one.
    const decls = [...text.matchAll(/export declare const (\w+)/g)].map((m) => ({ name: m[1], at: m.index, end: m.index + m[0].length }))
    const block = (i) => text.slice(decls[i].end, decls[i + 1]?.at ?? text.length)
    const count = (s) => (s.match(/^\s+(?:'[^']+'|[A-Za-z_$][\w$]*):/gm) ?? []).length
    const zi = decls.findIndex((d) => d.name === 'zh')
    const ei = decls.findIndex((d) => d.name === 'en')
    if (zi < 0 || ei < 0) continue
    parity.push({ pkg, file: rel.replace(/\\/g, '/'), zh: count(block(zi)), en: count(block(ei)) })
  }
}

// --- 2. plural-sensitive strings without a .one/.other pair ------------------
const keys = new Set(corpus.map((r) => `${r.ns}\t${r.key}`))
const hasPair = (ns, key) => {
  const base = key.replace(/\.(one|other)$/, '')
  return keys.has(`${ns}\t${base}.one`) && keys.has(`${ns}\t${base}.other`)
}
const COUNT = new Set(['count', 'n', 'total', 'done', 'active', 'pending', 'answered', 'retained', 'omitted', 'shown', 'items', 'turns', 'steps', 'files'])
const PLURAL = /\{(\w+)\}\s+(?:[a-zà-ù]+s|people|items)\b/g

const candidates = corpus
  .filter((r) => {
    if (hasPair(r.ns, r.key) || /\.(one|other)$/.test(r.key)) return false
    return [...r.value.matchAll(PLURAL)].some((m) => COUNT.has(m[1]))
  })
  .map((r) => ({ ...r, it: it.get(`${r.ns}\t${r.key}`) ?? '' }))

const parityBad = parity.filter((p) => p.zh !== p.en)
const out = []
out.push('# Plurali: casi visibili e parità delle chiavi', '')
out.push('## Parità `zh` ↔ `en` (dalle dichiarazioni di tipo spedite)', '')
out.push(`File analizzati: ${parity.length} · con conteggi diversi: ${parityBad.length}`, '')
if (parityBad.length) {
  out.push('| Pacchetto | File | zh | en |', '|---|---|---|---|')
  for (const p of parityBad) out.push(`| \`${p.pkg}\` | \`${p.file}\` | ${p.zh} | ${p.en} |`)
} else {
  out.push('Ogni namespace ha lo stesso numero di chiavi in cinese e in inglese: l\'insieme estratto da `en` è quello che il type check upstream pretende.')
}
out.push('', '## Stringhe con una quantità e nessuna coppia `.one`/`.other`', '')
out.push(`${candidates.length} casi in cui un segnaposto numerico è seguito da un sostantivo plurale.`, '')
out.push('| Chiave | Inglese | Italiano |', '|---|---|---|')
for (const c of candidates) out.push(`| \`${c.ns}/${c.key}\` | ${c.value.replace(/\|/g, '\\|')} | ${c.it.replace(/\|/g, '\\|')} |`)

await writeFile('upstream/PLURALS.raw.md', out.join('\n') + '\n', 'utf8')
console.log(`parity files: ${parity.length} (mismatched: ${parityBad.length})`)
console.log(`plural candidates: ${candidates.length}`)
