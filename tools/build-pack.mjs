// Emits the Italian language pack from .i18n/it/<namespace>.json.
//
// Every key is verified against the extracted English corpus, placeholders are
// compared, and an empty translation (where the English is not empty) refuses
// to build — a broken string never reaches the bundle.
//
//   node tools/build-pack.mjs
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'

const corpus = JSON.parse(await readFile('.i18n/strings.json', 'utf8'))
const source = new Map() // `${ns}\t${key}` -> english
for (const r of corpus) source.set(`${r.ns}\t${r.key}`, r.value)

const files = (await readdir('.i18n/it')).filter((f) => f.endsWith('.json')).sort()
const dicts = {}
for (const f of files) {
  const ns = f.slice(0, -'.json'.length)
  dicts[ns] = JSON.parse(await readFile(`.i18n/it/${f}`, 'utf8'))
}

const problems = []
const ph = (s) => [...s.matchAll(/\{(\w[\w.-]*)\}/g)].map((m) => m[1]).sort().join(',')
let total = 0
for (const [ns, dict] of Object.entries(dicts)) {
  for (const [key, it] of Object.entries(dict)) {
    total++
    const en = source.get(`${ns}\t${key}`)
    if (en === undefined) { problems.push(`unknown key: ${ns}/${key}`); continue }
    if (ph(en) !== ph(it)) problems.push(`placeholder mismatch: ${ns}/${key} (${ph(en)} vs ${ph(it)})`)
    if (typeof it !== 'string') problems.push(`non-string value: ${ns}/${key}`)
    else if (!it.trim() && en.trim() !== '') problems.push(`empty translation: ${ns}/${key}`)
  }
}
if (problems.length) {
  console.error(problems.slice(0, 40).join('\n'))
  console.error(`... ${problems.length} problems`)
  process.exit(1)
}

const coverage = new Map()
for (const r of corpus) coverage.set(r.ns, (coverage.get(r.ns) ?? 0) + 1)

const dir = 'packages/dsh-locale-it'
await mkdir(`${dir}/lib`, { recursive: true })

const client = `// Italian language pack for the DSH web UI.
// Generated from .i18n/it/*.json; edit those files, not this bundle.
window.__ModuleLoader__.load({
	id: "@local/dsh-locale-it",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;

		const DICTIONARIES = ${JSON.stringify(dicts, null, '\t').replace(/\n/g, '\n\t\t')};

		/** Registers the Italian locale and its dictionaries. */
		function apply(ctx) {
			if (ctx.locale === undefined) {
				console.warn("locale-it: the locale service is unavailable; the pack stays idle");
				return;
			}
			ctx.effect(
				() => ctx.locale.addLanguage({ id: "it", label: "Italiano", fallback: "en" }),
				"locale-it: language",
			);
			for (const [namespace, dictionary] of Object.entries(DICTIONARIES)) {
				ctx.effect(
					() => ctx.locale.register(namespace, "it", dictionary),
					\`locale-it: \${namespace} dictionary\`,
				);
			}
		}

		exports.apply = apply;
		exports.inject = ["locale"];
		return module.exports;
	}
});
`

const pkg = {
  name: '@local/dsh-locale-it',
  version: '0.3.0',
  description: `Language pack italiano per la Web UI di DSH (${total} stringhe)`,
  author: 'Massimo Soricetti <massimo.soricetti@gmail.com>',
  type: 'module',
  main: 'lib/index.js',
  exports: {
    '.': './lib/index.js',
    './client': './lib/client.js',
    './package.json': './package.json',
    './cordis.patch.yml': './cordis.patch.yml',
  },
  dsh: {
    bundle: { patch: './cordis.patch.yml' },
    client: { platform: 'web', inject: ['@deepseek-ai/dsh-client-locale'] },
  },
  files: ['lib/index.js', 'lib/client.js', 'cordis.patch.yml'],
  license: 'MIT',
}

const host = `/**
 * Language pack, node half. The pack itself lives in the browser bundle, which
 * the host discovers through the package.json \`dsh.client\` declaration.
 */
export function apply() {}
`

const patch = `# Inserts the Italian language pack row.
- insert:
    - id: locale-it
      name: '@local/dsh-locale-it'
`

const table = Object.entries(dicts)
  .map(([ns, d]) => `| \`${ns}\` | ${Object.keys(d).length} | ${coverage.get(ns) ?? '?'} |`)
  .join('\n')

const readme = `# \`@local/dsh-locale-it\`

Language pack italiano per la Web UI di DSH: ${total} stringhe in ${Object.keys(dicts).length} namespace.
Autore: Massimo Soricetti &lt;massimo.soricetti@gmail.com&gt;.

| Namespace | Tradotte | Totali |
|---|---|---|
${table}

Il pacchetto registra la lingua \`it\` (nome "Italiano", fallback \`en\`) e un
dizionario per namespace. Le chiavi non tradotte restano in inglese, perché la
catena di fallback termina su \`en\`.

Per sceglierla: **Impostazioni → Generali → Lingua**.

## Manutenzione

\`\`\`bash
node tools/check-drift.mjs      # confronta il pack con l'installazione corrente
node tools/build-pack.mjs       # rigenera il bundle dopo aver tradotto le chiavi nuove
\`\`\`
`

await writeFile(`${dir}/lib/client.js`, client, 'utf8')
await writeFile(`${dir}/lib/index.js`, host, 'utf8')
await writeFile(`${dir}/package.json`, JSON.stringify(pkg, null, 2) + '\n', 'utf8')
await writeFile(`${dir}/cordis.patch.yml`, patch, 'utf8')
await writeFile(`${dir}/README.md`, readme, 'utf8')

const untranslated = corpus.length - total
console.log(`keys: ${total} across ${Object.keys(dicts).length} namespaces (${corpus.length - untranslated} of ${corpus.length} strings covered)`)
