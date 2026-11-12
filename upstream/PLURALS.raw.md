# Plurali: casi visibili e parità delle chiavi

## Parità `zh` ↔ `en` (dalle dichiarazioni di tipo spedite)

File analizzati: 69 · con conteggi diversi: 26

| Pacchetto | File | zh | en |
|---|---|---|---|
| `dsh-client-ui-action-cards` | `client/locales.d.ts` | 0 | 14 |
| `dsh-client-ui-cordis` | `client/locales.d.ts` | 52 | 51 |
| `dsh-client-ui-creation-recommendations` | `client/locales.d.ts` | 0 | 55 |
| `dsh-client-ui-deliverables` | `client/locales.d.ts` | 57 | 0 |
| `dsh-client-ui-layout` | `client/shortcut-locales.d.ts` | 1 | 0 |
| `dsh-client-ui-message-feedback` | `client/locales.d.ts` | 21 | 20 |
| `dsh-client-ui-plugin-market` | `client/locales.d.ts` | 0 | 87 |
| `dsh-client-ui-reference` | `client/locales.d.ts` | 16 | 15 |
| `dsh-client-ui-secret-mask` | `client/locales.d.ts` | 3 | 2 |
| `dsh-client-ui-settings-models` | `client/locales.d.ts` | 0 | 137 |
| `dsh-client-ui-settings-session-log` | `client/locales.d.ts` | 0 | 4 |
| `dsh-client-ui-shortcuts` | `client/locales.d.ts` | 56 | 0 |
| `dsh-client-ui-sidebar-browser` | `client/locales.d.ts` | 26 | 27 |
| `dsh-client-ui-sidebar-documentpreview` | `client/excel/locales.d.ts` | 15 | 16 |
| `dsh-client-ui-sidebar-documentpreview` | `client/html/locales.d.ts` | 4 | 5 |
| `dsh-client-ui-sidebar-documentpreview` | `client/image/locales.d.ts` | 11 | 12 |
| `dsh-client-ui-sidebar-documentpreview` | `client/markdown/locales.d.ts` | 4 | 5 |
| `dsh-client-ui-sidebar-documentpreview` | `client/pdf/locales.d.ts` | 15 | 16 |
| `dsh-client-ui-trajectory` | `client/locales.d.ts` | 1 | 0 |
| `dsh-client-ui-workflow-run` | `client/locales.d.ts` | 18 | 0 |
| `dsh-experimental-client-ui-cot-translation` | `client/locales.d.ts` | 0 | 32 |
| `dsh-experimental-client-ui-forge` | `client/locales.d.ts` | 0 | 1 |
| `dsh-experimental-client-ui-stats` | `client/locales.d.ts` | 1 | 0 |
| `dsh-experimental-client-ui-voice-input` | `client/locales.d.ts` | 0 | 1 |
| `dsh-experimental-session-inspector` | `client/locales.d.ts` | 1 | 0 |
| `dsh-message-quotes` | `client/locales.d.ts` | 1 | 0 |

## Stringhe con una quantità e nessuna coppia `.one`/`.other`

33 casi in cui un segnaposto numerico è seguito da un sostantivo plurale.

| Chiave | Inglese | Italiano |
|---|---|---|
| `common/markdown.truncatedCharacters` | … truncated at {total} characters | … troncato a {total} caratteri |
| `chat/stats.counts` | {turns} turns {steps} steps | {turns} turni {steps} passi |
| `chat/json.truncated` | … truncated, {total} characters total | … troncato, {total} caratteri in totale |
| `conversation/attachment.dropDesc` | Image limit: up to {count} images, {size} each | Limite immagini: fino a {count} immagini, {size} ciascuna |
| `conversation/image.tooMany` | A message can include up to {count} images | Un messaggio può includere fino a {count} immagini |
| `conversation/detail.agents.count` | {count} agents | {count} agenti |
| `conversation/detail.terminals.count` | {count} terminals | {count} terminali |
| `conversation/detail.locations.count` | {count} locations | {count} posizioni |
| `conversation/detail.matches.count` | {count} matches | {count} corrispondenze |
| `conversation/read.window` | Showing {shown} of {total} lines | Righe visualizzate: {shown} di {total} |
| `conversation/search.paths` | {shown} paths | {shown} percorsi |
| `conversation/search.paths.truncated` | Showing {shown} of {total} paths | Percorsi visualizzati: {shown} di {total} |
| `conversation/search.matches` | {shown} matches · {files} files | {shown} corrispondenze · {files} file |
| `conversation/search.matches.truncated` | Showing {shown} of {total} matches · {files} files | Corrispondenze visualizzate: {shown} di {total} · {files} file |
| `deliverables/presented.all` | All {count} files | Tutti i {count} file |
| `deliverables/changes.title` | Edited {count} files | Modificati {count} file |
| `deliverables/changes.all` | All {count} files | Tutti i {count} file |
| `deliverables/diff.truncated` | Showing the first {count} lines | Vengono mostrate le prime {count} righe |
| `workspace/search.hasMore` | Showing the first {n} results. Narrow your search. | Vengono mostrati i primi {n} risultati. Restringi la ricerca. |
| `forgePanel/changes.local.files` | {count} files | {count} file |
| `forgePanel/changes.local.viewAria` | View the changes of this Session: {count} files, {added} lines added, {deleted} lines deleted | Vedi le modifiche di questa sessione: {count} file, {added} righe aggiunte, {deleted} righe eliminate |
| `forgePanel/change.ci.failed` | {count} checks failed | {count} controlli non superati |
| `forgePanel/change.ci.cancelled` | {count} checks cancelled | {count} controlli annullati |
| `forgePanel/change.checks.truncated` | {count} checks loaded; more available | {count} controlli caricati; altri disponibili |
| `forgePanel/diff.allFiles` | All {count} files | Tutti i {count} file |
| `stats/summary` | {turns} turns · {steps} steps | {turns} turni · {steps} passi |
| `stats/detail.lineCap` | Showing the first {shown} of {total} lines | Vengono mostrate le prime {shown} di {total} righe |
| `stats/turn.images` | {count} images | {count} immagini |
| `stats/steps.total` | {total} steps | {total} passi |
| `stats/steps.all` | Show all {total} steps | Mostra tutti i {total} passi |
| `stats/steps.matched` | {count} steps used {tool} | {count} passi hanno usato {tool} |
| `liveshare/dialog.capabilities.summary.read` | Read-only · {count} endpoints | Sola lettura · {count} endpoint |
| `liveshare/viewer.picker.groupCount` | {count} shares | {count} condivisioni |
