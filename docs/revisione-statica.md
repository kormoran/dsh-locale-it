# Revisione statica del language pack

Stringhe: 3426 · dizionari: 69 · nessuna stringa vuota o con placeholder rotto (lo garantisce la build).

## 1. Etichette che possono sbordare

944 etichette inglesi corte (≤24 caratteri) che in italiano diventano ≥18 caratteri. Le più rischiose, in ordine di crescita:

| Chiave | Inglese | Italiano | Car. |
|---|---|---|---|
| `sidebarRight/command.fullscreen` | Toggle panel fullscreen | Attiva o disattiva lo schermo intero del pannello | +26 |
| `shortcuts.layout/toggle` | Toggle left sidebar | Mostra o nascondi la barra laterale sinistra | +25 |
| `settings.agentPreset/setDefault` | Set as new task default | Imposta come predefinito per le nuove attività | +23 |
| `shortcuts/dismiss` | Close menu or top dialog | Chiudi il menu o la finestra di dialogo in cima | +23 |
| `sidebarRight/command.toggle` | Toggle right sidebar | Mostra o nascondi la barra laterale destra | +22 |
| `chat/message.retry.active` | Retrying model request | Nuovo tentativo della richiesta al modello | +20 |
| `conversation/todo.rowTitle` | Update to-do list | Aggiorna l'elenco delle cose da fare | +19 |
| `session-inspector/table.resizeDetails` | Resize raw data panel | Ridimensiona il pannello dei dati grezzi | +19 |
| `skill/row.failed` | Skill load failed | Caricamento della skill non riuscito | +19 |
| `cordis/status.superseded` | Newer run available | Disponibile un'esecuzione più recente | +18 |
| `pluginManager/installDetailsHide` | Hide install details | Nascondi i dettagli dell'installazione | +18 |
| `question/wait.takeTime` | Take time | Prenditi il tempo che serve | +18 |
| `settings.models/modelReasoningHelp` | About reasoning levels | Informazioni sui livelli di ragionamento | +18 |
| `stats/imagePreview.failed` | Image failed to load | Caricamento dell'immagine non riuscito | +18 |
| `trajectory/block.openSummaryTitle` | Open tool call summary | Apri il riepilogo della chiamata al tool | +18 |
| `voice-input/setupPrompt.trigger` | Open voice input setup | Apri la configurazione dell'input vocale | +18 |
| `forgePanel/change.copy` | Copy change request link | Copia il link della richiesta di modifica | +17 |
| `settings.agentPreset/inUse` | New task default | Predefinito per le nuove attività | +17 |
| `shortcuts/reset` | Restore default | Ripristina il valore predefinito | +17 |
| `shortcuts/reset-all` | Restore all defaults | Ripristina tutti i valori predefiniti | +17 |

## 2. Etichette ripetute rese lunghe

La stessa parola inglese compare in più punti: se la resa è lunga, il costo si paga ovunque.

- «Footnotes» → «Note a piè di pagina» in 6 punti
- «Reset to default» → «Ripristina il valore predefinito» in 5 punti
- «Copy failed» → «Copia non riuscita» in 4 punti
- «Unavailable» → «Non disponibile» in 4 punti
- «Sign in again» → «Accedi di nuovo» in 4 punti
- «Select a session first» → «Seleziona prima una sessione» in 4 punti
- «Load earlier» → «Carica precedenti» in 3 punti
- «System prompt» → «Prompt di sistema» in 3 punti
- «{count} added» → «{count} aggiunti» in 3 punti
- «{count} removed» → «{count} rimossi» in 3 punti
- «{count} tool calls» → «{count} chiamate al tool» in 3 punti
- «Code block» → «Blocco di codice» in 3 punti

## 3. Due testi inglesi diversi con la stessa resa italiana (stessa schermata)

15 gruppi. Qui la UI perde una distinzione che l'inglese faceva.

- **trajectory** · «tool» ← «kind.tool» (TOOL), «column.tools» (Tools), «tab.tools» (Tools), «record.tools» (Tools)
- **conversation** · «in attesa» ← «todo.status.pending» (Pending), «detail.todo.pending» (Pending), «ask.waiting» (waiting)
- **conversation** · «completato» ← «detail.goal.complete» (Completed), «detail.status.completed» (Completed), «terminal.done» (Done)
- **cordis** · «plugin cordis» ← «panel.plugins.aria» (Cordis plugins), «panel.trigger» (Cordis Plugin), «panel.title» (Cordis plugins)
- **forgePanel** · «annulla» ← «review.cancel» (Cancel), «creation.cancel» (Cancel), «toast.undo» (Undo)
- **trajectory** · «ragionamento» ← «column.think» (Think), «usage.reasoning» (Reasoning), «record.thinking» (Thinking)
- **job** · «{count} job in background in esecuzione» ← «count.live.one» ({count} background job running), «count.live.other» ({count} background jobs running)
- **job** · «{count} job in background» ← «count.idle.one» ({count} background job), «count.idle.other» ({count} background jobs)
- **liveshare** · «sola lettura» ← «dialog.sessionMode.view» (Read only), «dialog.capabilities.tier.read» (Read-only)
- **pluginManager** · «impossibile aggiornare a {version}» ← «updateRefused» (Cannot update to {version}), «updateKept» (Could not update to {version})
- **stats** · «vai a capo» ← «detail.code.wrap» (Wrap lines), «detail.wrap» (Wrap)
- **workspace** · «workspace» ← «section.workspaces» (Workspaces), «groupBy.workspace» (WorkSpace)
- **workspace** · «togli dall'archivio» ← «menu.unarchiveSession» (Unarchive session), «actions.unarchive» (Unarchive)
- **workspace** · «togli il fissaggio» ← «menu.unpinSession» (Unpin session), «actions.unpin» (Unpin)
- **workspace** · «{n} job in background: {names}» ← «archive.confirm.jobs.one» ({n} background job: {names}), «archive.confirm.jobs.other» ({n} background jobs: {names})

## 4. Testi rimasti identici all'inglese

134 chiavi. Vanno guardate: molte sono anglicismi voluti, altre possono essere dimenticanze.

- `chat/view.chat` — «Chat»
- `chat/duration.compactSeconds` — «{seconds}s»
- `chat/duration.compactMinutes` — «{minutes}m{seconds}s»
- `chat/duration.milliseconds` — «{milliseconds}ms»
- `chat/stats.cacheHit` — «Cache hit {percent}%»
- `chat/settings.transcript.standard` — «Standard»
- `chat/message.compaction.commandTitle` — «compact»
- `chat/message.retry.status` — «{label} ({retry}/{maximum}) · {seconds}s»
- `chat/message.tokensPerSecond` — «{tps} tok/s»
- `chat/message.turnUsage.cacheHit` — «Cache hit»
- `chat/message.turnUsage.output` — «Output»
- `chat/message.turnUsage.count` — «{count} tok»
- `command/label.feedback` — «Feedback»
- `common/json.label` — «JSON»
- `common/number.thousand` — «{value}K»
- `common/number.million` — «{value}M»
- `conversation/input.file` — «File»
- `conversation/file.label` — «File»
- `conversation/tool.preparing.content` — «{kilobytes}KB»
- `conversation/detail.hours` — «{count} h»
- `conversation/detail.minutes` — «{count} min»
- `conversation/detail.seconds` — «{count} s»
- `conversation/detail.schedule.cron` — «Cron {expression} ({zone})»
- `conversation/detail.field.provider` — «Provider»
- `conversation/row.output` — «OUT»
- `conversation/tool.title.bash` — «Bash»
- `conversation/tool.title.pwsh` — «Pwsh»
- `conversation/tool.title.grep` — «Grep»
- `conversation/tool.title.glob` — «Glob»
- `conversation/web.http` — «HTTP»
- `cordis/body.hostCode` — «Host»
- `cordis/body.clientCode` — «Client»
- `cotTranslation/google` — «Google»
- `cotTranslation/bing` — «Bing»
- `deliverables/presented.file` — «File»
- `deliverables/changes.added` — «+{count}»
- `deliverables/changes.deleted` — «-{count}»
- `documentHtml/title` — «HTML»
- `documentMarkdown/viewer.label` — «Markdown»
- `forgePanel/checkout.worktree` — «Worktree»
- … e altre 94
