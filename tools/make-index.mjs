// Builds the plugin index entry for this language pack from the live npm
// registry data, then validates it with the validator DSH itself ships.
//
//   node tools/make-index.mjs
//
// The index can be added in Discover → Add index source once it is reachable at
// an https URL. A private repository is not reachable: the raw URL requires a
// session. Either make the repository public or host this file elsewhere.
import { writeFile, mkdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { join } from 'node:path'

const PACKAGE = 'dsh-locale-it'
const REPO = 'https://github.com/kormoran/dsh-locale-it'

const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(PACKAGE)}`, {
  headers: { accept: 'application/json' },
})
if (!res.ok) {
  console.error(`registry returned ${res.status}`)
  process.exit(1)
}
const meta = await res.json()
const latest = meta['dist-tags']?.latest
const published = meta.time?.[latest]
if (!latest || !published) {
  console.error('cannot determine the latest published version')
  process.exit(1)
}
const publishTimestamp = Math.floor(Date.parse(published) / 1000)

const index = {
  format: 1,
  title: { en: 'Italian language pack', it: 'Language pack italiano' },
  description: {
    en: 'Italian translations for the DeepSeek Harness web UI.',
    it: 'Traduzioni italiane per la Web UI di DeepSeek Harness.',
  },
  metadata: {
    categories: { appearance: { title: { en: 'Appearance', it: 'Aspetto' } } },
    labels: {},
    sortKeys: {},
  },
  plugins: [
    {
      name: PACKAGE,
      title: { en: 'Italian', it: 'Italiano' },
      description: {
        en: 'Complete Italian translation of the web UI: 3,426 strings across 69 namespaces.',
        it: 'Traduzione italiana completa della Web UI: 3.426 stringhe in 69 namespace.',
      },
      author: 'Massimo Soricetti',
      homepage: `${REPO}#readme`,
      repository: { url: REPO },
      metadata: {
        category: 'appearance',
        keywords: ['italian', 'italiano', 'i18n', 'locale', 'translation'],
        labels: [],
        sortKeys: {},
      },
      versions: [
        { version: latest, publishTimestamp, source: { type: 'npm' }, engines: {} },
      ],
    },
  ],
}

await mkdir('plugin-index', { recursive: true })
await writeFile('plugin-index/index.json', JSON.stringify(index, null, '\t') + '\n', 'utf8')

// Validate with the very implementation DSH uses when reading indexes.
const validatorPath = join(
  process.env.APPDATA ?? '',
  'npm', 'node_modules', '@deepseek-ai', 'dsh', 'node_modules', '@deepseek-ai',
  'dsh-plugin-market-index', 'lib', 'index.js',
)
try {
  const { parseMarketIndex } = await import(pathToFileURL(validatorPath).href)
  const parsed = parseMarketIndex(index, `${REPO}/raw/main/plugin-index/index.json`)
  console.log(`valid · ${parsed.plugins.length} plugin · latest ${parsed.plugins[0].versions[0].version}`)
} catch (error) {
  console.error(`validator unavailable or index invalid: ${error.message}`)
  process.exit(1)
}
console.log('plugin-index/index.json')
