// Reports how a dsh installation differs from the English baseline this
// language pack was translated from, so maintenance is a command, not a hunt.
//
//   node tools/check-drift.mjs [--install <root>] [--baseline .i18n/strings.json]
//                              [--translations .i18n/it] [--report drift-report.md]
//
// Exit code: 0 when nothing needs attention, 1 when there is drift or an
// untranslated key.
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { extractDictionaries } from './extract.mjs'

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 ? process.argv[i + 1] : fallback
}

const installRoot = arg('install', process.env.DSH_INSTALL ?? join(process.env.APPDATA ?? '', 'npm', 'node_modules', '@deepseek-ai', 'dsh', 'node_modules', '@deepseek-ai'))
const baselinePath = arg('baseline', '.i18n/strings.json')
const translationsDir = arg('translations', '.i18n/it')
const reportPath = arg('report', 'drift-report.md')

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'))
const id = (r) => `${r.ns}\t${r.key}`

const fresh = await extractDictionaries(installRoot)
if (fresh.length === 0) {
  console.error(`no dictionaries found under ${installRoot}; pass --install <node_modules/@deepseek-ai>`)
  process.exit(2)
}

const baseline = await readJson(baselinePath)
const baselineMap = new Map(baseline.map((r) => [id(r), r]))
const freshMap = new Map(fresh.map((r) => [id(r), r]))

const translated = new Map()
for (const file of (await readdir(translationsDir)).filter((f) => f.endsWith('.json'))) {
  const ns = file.slice(0, -'.json'.length)
  for (const key of Object.keys(await readJson(join(translationsDir, file)))) translated.set(`${ns}\t${key}`, true)
}

const added = [...freshMap.values()].filter((r) => !baselineMap.has(id(r)))
const removed = [...baselineMap.values()].filter((r) => !freshMap.has(id(r)))
const changed = [...freshMap.values()].filter((r) => {
  const old = baselineMap.get(id(r))
  return old !== undefined && old.value !== r.value
})
const untranslated = fresh.filter((r) => !translated.has(id(r)))
const orphans = [...translated.keys()].filter((key) => !freshMap.has(key))

const drift = added.length + removed.length + changed.length
const exitCode = drift + untranslated.length > 0 ? 1 : 0

const quote = (s) => (s.length > 110 ? `${s.slice(0, 110)}…` : s)
const out = []
out.push('# Drift report', '')
out.push(`Installazione: \`${installRoot}\``)
out.push(`Baseline: \`${baselinePath}\` (${baseline.length} stringhe) · installazione corrente: ${fresh.length} stringhe.`, '')
out.push('| Categoria | Conteggio |', '|---|---|')
out.push(`| Chiavi nuove | ${added.length} |`)
out.push(`| Chiavi rimosse | ${removed.length} |`)
out.push(`| Testo inglese cambiato | ${changed.length} |`)
out.push(`| Non tradotte | ${untranslated.length} |`)
out.push(`| Traduzioni orfane | ${orphans.length} |`, '')

if (added.length) {
  out.push('## Chiavi nuove da tradurre', '', '| Chiave | Inglese |', '|---|---|')
  for (const r of added.slice(0, 80)) out.push(`| \`${r.ns}/${r.key}\` | ${quote(r.value).replace(/\|/g, '\\|')} |`)
  if (added.length > 80) out.push('', `… e altre ${added.length - 80}.`)
  out.push('')
}
if (changed.length) {
  out.push('## Testo inglese cambiato (la traduzione va rivista)', '')
  for (const r of changed.slice(0, 40)) out.push(`- \`${r.ns}/${r.key}\` — ora: «${quote(r.value)}»`)
  out.push('')
}
if (removed.length) {
  out.push('## Chiavi sparite (rimuovi la traduzione)', '')
  for (const r of removed.slice(0, 40)) out.push(`- \`${r.ns}/${r.key}\``)
  out.push('')
}
if (untranslated.length) {
  out.push('## Presenti nell\'installazione ma non tradotte', '')
  for (const r of untranslated.slice(0, 40)) out.push(`- \`${r.ns}/${r.key}\` — «${quote(r.value)}»`)
  out.push('')
}
if (orphans.length) {
  out.push('## Traduzioni senza chiave corrispondente', '')
  for (const key of orphans.slice(0, 40)) out.push(`- \`${key.replace('\t', '/')}\``)
  out.push('')
}
if (exitCode === 0) out.push('Nessuna differenza: il pack è allineato a questa installazione.', '')

await writeFile(reportPath, out.join('\n'), 'utf8')

console.log(`added ${added.length} · removed ${removed.length} · changed ${changed.length} · untranslated ${untranslated.length} · orphans ${orphans.length}`)
console.log(`report: ${reportPath}`)
process.exit(exitCode)
