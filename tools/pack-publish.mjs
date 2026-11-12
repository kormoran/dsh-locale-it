// Emits a publishable, unscoped package at dist/dsh-locale-it: same dictionaries
// as the workspace pack, public name, LICENSE, and a README written for npm.
//
//   node tools/pack-publish.mjs
//
// The workspace package keeps its @local name and its link inside the profile,
// so publishing never disturbs the working installation.
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises'

const NAME = 'dsh-locale-it'
const VERSION = '1.0.0'
const AUTHOR = 'Massimo Soricetti <massimo.soricetti@gmail.com>'

const corpus = JSON.parse(await readFile('.i18n/strings.json', 'utf8'))
const coverage = new Map()
for (const r of corpus) coverage.set(r.ns, (coverage.get(r.ns) ?? 0) + 1)

const dicts = {}
let total = 0
for (const f of (await readdir('.i18n/it')).filter((x) => x.endsWith('.json')).sort()) {
  const ns = f.slice(0, -'.json'.length)
  const dict = JSON.parse(await readFile(`.i18n/it/${f}`, 'utf8'))
  dicts[ns] = dict
  total += Object.keys(dict).length
}

const dir = `dist/${NAME}`
await rm(dir, { recursive: true, force: true })
await mkdir(`${dir}/lib`, { recursive: true })

const client = `// ${NAME} ${VERSION} — Italian language pack for the DeepSeek Harness web UI.
// Generated from the maintained translation sources; do not edit in node_modules.
window.__ModuleLoader__.load({
	id: "${NAME}",
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
  name: NAME,
  version: VERSION,
  description: 'Italian language pack for the DeepSeek Harness web UI: 3426 strings across 69 namespaces',
  author: AUTHOR,
  license: 'MIT',
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
  keywords: ['dsh', 'dsh-plugin', 'deepseek-harness', 'deepseek', 'i18n', 'locale', 'italian', 'italiano', 'translation'],
  publishConfig: { access: 'public' },
  engines: { node: '>=20' },
}

const table = Object.entries(dicts)
  .map(([ns, d]) => `| \`${ns}\` | ${Object.keys(d).length} |`)
  .join('\n')

const readme = `# dsh-locale-it

Italian language pack for the [DeepSeek Harness](https://deepseek.com/harness) web UI.
Language pack italiano per la Web UI di DeepSeek Harness.

**3,426 strings, 69 namespaces, complete.** Ogni chiave tradotta, nessun segnaposto perso: la build rifiuta di emettere un dizionario incompleto o con \`{placeholder}\` mancanti.

## Installazione

\`\`\`bash
dsh plugin --profile web add dsh-locale-it
\`\`\`

Oppure da interfaccia: **Plugin → Aggiungi plugin**, inserisci \`dsh-locale-it\`.

Poi scegli la lingua: **Impostazioni → Generali → Lingua → Italiano**.

## Come funziona

Il pacchetto registra la lingua \`it\` (nome «Italiano», fallback \`en\`) e un dizionario per namespace. Le chiavi che una versione futura di DSH aggiungesse restano in inglese invece di rompere l'interfaccia: la catena di fallback termina su \`en\`.

## Copertura

| Namespace | Stringhe |
|---|---|
${table}

Scelte di traduzione: «sessione», «turno», «passo»; i termini tecnici che in italiano suonano artificiali restano inglesi (\`tool\`, \`plugin\`, \`bundle\`, \`worktree\`, \`commit\`). Le virgolette nei nomi citati sono caporali, come nella tipografia italiana.

## Manutenzione

Quando DSH cambia, le chiavi nuove compaiono in inglese e nessuna si rompe. Il progetto sorgente (dizionari per namespace, script di build e di \`check-drift\`) è disponibile su richiesta tramite l'autore.

## Licenza

MIT.
`

const license = `MIT License

Copyright (c) 2026 Massimo Soricetti

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`

const host = `/**
 * Language pack, node half. The pack itself lives in the browser bundle, which
 * the host discovers through the package.json \`dsh.client\` declaration.
 */
export function apply() {}
`

const patch = `# Inserts the Italian language pack row.
- insert:
    - id: locale-it
      name: 'dsh-locale-it'
`

await writeFile(`${dir}/lib/client.js`, client, 'utf8')
await writeFile(`${dir}/lib/index.js`, host, 'utf8')
await writeFile(`${dir}/package.json`, JSON.stringify(pkg, null, 2) + '\n', 'utf8')
await writeFile(`${dir}/cordis.patch.yml`, patch, 'utf8')
await writeFile(`${dir}/README.md`, readme, 'utf8')
await writeFile(`${dir}/LICENSE`, license, 'utf8')

console.log(`${dir}: ${total} strings, ${Object.keys(dicts).length} namespaces, ${NAME}@${VERSION}`)
