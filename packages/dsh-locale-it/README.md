# `@local/dsh-locale-it`

Language pack italiano per la Web UI di DSH: 3426 stringhe in 69 namespace.
Autore: Massimo Soricetti &lt;massimo.soricetti@gmail.com&gt;.

| Namespace | Tradotte | Totali |
|---|---|---|
| `actionCards` | 14 | 14 |
| `agent-team` | 25 | 25 |
| `approval` | 7 | 7 |
| `chat` | 195 | 195 |
| `command` | 22 | 22 |
| `common` | 41 | 41 |
| `conversation` | 383 | 383 |
| `cordis` | 51 | 51 |
| `cotTranslation` | 32 | 32 |
| `creationRecommendations` | 55 | 55 |
| `deliverables` | 57 | 57 |
| `documentHtml` | 4 | 4 |
| `documentMarkdown` | 4 | 4 |
| `entryCustomization` | 5 | 5 |
| `feedback` | 20 | 20 |
| `fileActions` | 12 | 12 |
| `fileDrag` | 1 | 1 |
| `forgePanel` | 253 | 253 |
| `goal` | 12 | 12 |
| `job` | 40 | 40 |
| `liveshare` | 225 | 225 |
| `messageQuotes` | 1 | 1 |
| `model` | 23 | 23 |
| `open-in-app` | 28 | 28 |
| `plan` | 16 | 16 |
| `pluginManager` | 291 | 291 |
| `pluginMarket` | 87 | 87 |
| `pluginRecommendations` | 25 | 25 |
| `question` | 31 | 31 |
| `reference` | 15 | 15 |
| `schedule.catalog` | 16 | 16 |
| `secretMask` | 2 | 2 |
| `session-inspector` | 52 | 52 |
| `session-log-download` | 14 | 14 |
| `settings.account` | 55 | 55 |
| `settings.agentLoop` | 12 | 12 |
| `settings.agentPreset` | 28 | 28 |
| `settings` | 42 | 42 |
| `settings.locale` | 1 | 1 |
| `settings.models` | 137 | 137 |
| `settings.permission` | 12 | 12 |
| `settings.pluginInventory` | 37 | 37 |
| `settings.plugins` | 5 | 5 |
| `settings.sessionLog` | 4 | 4 |
| `settings.shell` | 14 | 14 |
| `settings.subagent` | 35 | 35 |
| `settings.theme` | 25 | 25 |
| `settings.webSearch` | 27 | 27 |
| `shortcuts` | 56 | 56 |
| `shortcuts.layout` | 1 | 1 |
| `sidebar` | 8 | 8 |
| `sidebarBrowser` | 26 | 26 |
| `sidebarCodePreview` | 3 | 3 |
| `sidebarDocumentPreview` | 22 | 22 |
| `sidebarExcel` | 15 | 15 |
| `sidebarFiles` | 21 | 21 |
| `sidebarImage` | 5 | 5 |
| `sidebarOffice` | 15 | 15 |
| `sidebarPdf` | 9 | 9 |
| `sidebarRight` | 38 | 38 |
| `sidebarTerminal` | 28 | 28 |
| `skill` | 8 | 8 |
| `slash.menu` | 9 | 9 |
| `stats` | 177 | 177 |
| `subagent` | 42 | 42 |
| `trajectory` | 199 | 199 |
| `voice-input` | 114 | 114 |
| `workflowRun` | 18 | 18 |
| `workspace` | 119 | 119 |

Il pacchetto registra la lingua `it` (nome "Italiano", fallback `en`) e un
dizionario per namespace. Le chiavi non tradotte restano in inglese, perché la
catena di fallback termina su `en`.

Per sceglierla: **Impostazioni → Generali → Lingua**.

## Manutenzione

```bash
node tools/check-drift.mjs      # confronta il pack con l'installazione corrente
node tools/build-pack.mjs       # rigenera il bundle dopo aver tradotto le chiavi nuove
```
