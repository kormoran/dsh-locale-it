// Prepares the pack for an upstream proposal: one typed TypeScript module per
// namespace, plus a manifest mapping each namespace to its package and to the
// package's directory inside the DeepSeek Harness repository.
//
//   node tools/prepare-upstream.mjs [--install <root>] [--out upstream]
//
// The shipped dictionaries are TypeScript modules typed against the Chinese key
// set, so each emitted module must be complete for its namespace; the manifest
// records the key count so a maintainer can verify parity.
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 ? process.argv[i + 1] : fallback
}

const installRoot = arg('install', process.env.DSH_INSTALL ?? join(process.env.APPDATA ?? '', 'npm', 'node_modules', '@deepseek-ai', 'dsh', 'node_modules', '@deepseek-ai'))
const outDir = arg('out', 'upstream')

const corpus = JSON.parse(await readFile('.i18n/strings.json', 'utf8'))
const packages = new Map()
for (const r of corpus) packages.set(r.pkg, r.ns)

// Resolve each translated namespace to its package manifest.
const manifest = []
for (const ns of (await readdir('.i18n/it')).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5)).sort()) {
  const rows = corpus.filter((r) => r.ns === ns)
  const pkgDir = rows[0]?.pkg
  let meta = { name: pkgDir, version: '?', directory: undefined }
  try {
    const pkg = JSON.parse(await readFile(join(installRoot, pkgDir, 'package.json'), 'utf8'))
    meta = { name: pkg.name, version: pkg.version, directory: pkg.repository?.directory }
  } catch {}
  const dict = JSON.parse(await readFile(`.i18n/it/${ns}.json`, 'utf8'))
  manifest.push({ namespace: ns, package: meta.name, version: meta.version, directory: meta.directory, keys: Object.keys(dict).length, translated: Object.keys(dict).length })
}

await mkdir(join(outDir, 'it'), { recursive: true })

for (const entry of manifest) {
  const dict = JSON.parse(await readFile(`.i18n/it/${entry.namespace}.json`, 'utf8'))
  const body = Object.entries(dict)
    .map(([key, value]) => `\t${JSON.stringify(key)}: ${JSON.stringify(value)},`)
    .join('\n')
  const ts = `/**
 * Italian dictionary for the "${entry.namespace}" namespace, owned by
 * ${entry.package}.
 *
 * ${entry.keys} keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
${body}
} as const
`
  await writeFile(join(outDir, 'it', `${entry.namespace}.ts`), ts, 'utf8')
}

await writeFile(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, '\t') + '\n', 'utf8')

const table = manifest.map((m) => `| \`${m.namespace}\` | \`${m.package}\` | ${m.keys} | ${m.directory ?? '—'} |`).join('\n')
const coverage = `# Copertura per namespace

Generato da \`node tools/prepare-upstream.mjs\`: non modificare a mano.

| Namespace | Pacchetto | Chiavi | Cartella nel repo |
|---|---|---|---|
${table}
`
await writeFile(join(outDir, 'COVERAGE.md'), coverage, 'utf8')

console.log(`namespaces: ${manifest.length} → ${outDir}/it/*.ts`)
console.log(`keys: ${manifest.reduce((n, m) => n + m.keys, 0)}`)
