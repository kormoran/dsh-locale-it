# Contesti dei termini ancora ambigui

19 voci hanno più di una traduzione. Sotto ciascuna: le stringhe inglesi in cui il termine compare davvero, con namespace e chiave i18n. Le etichette secche vengono per prime.

## filter
`filtra | filtro | filtro di ricerca`
11 occorrenze in 7 namespace, di cui 0 come etichetta esatta.

- «Clear filter» — stats · `steps.clear`
- «Filter types» — session-inspector · `filter.title`
- «Apply filter» — session-inspector · `filter.apply`
- «Filter files…» — forgePanel · `diff.filterFiles`
- «Filter options» — command · `search.aria`
- «Filter sessions» — workspace · `filterBy.label`
- «Filter components» — pluginManager · `partsFilter`
- «filter archived sessions» — workspace · `toast.archivedFilter`
- «No comparison was run because Git filter settings could not be read completely. Check the Git settings and output limit, then retry.» — forgePanel · `diff.filterConfigFailed`
- «Includes all Standard mode capabilities. Better suited to tasks that call tools in batches and then filter, organize, deduplicate, count, or summarize the results.» — ? · `presetPtcDescription`
- … e un'altra stringa distinta

> **Consiglio:** Le etichette sono sostantivi ("Filter sessions", "Clear filter"), le aria sono verbi ("Filter options"). Come voce di glossario serve il sostantivo: `filtro`.

## later
`successivo | più tardi | dopo`
16 occorrenze in 8 namespace, di cui 1 come etichetta esatta.

- «Later» — voice-input · `setupPrompt.later`
- «Configure later» — settings.models · `onboardingLater`
- «Pin failed. Try again later.» — workspace · `toast.pinFailed`
- «Unpin failed. Try again later.» — workspace · `toast.unpinFailed`
- «Could not check for updates. Please try again later.» — settings · `desktop.update.checkFailed`
- «Could not install the update. Please try again later.» — settings · `desktop.update.installFailed`
- «Try again shortly; if it stays unavailable, come back later.» — liveshare · `viewer.status.unavailableHint`
- «This task is queued, running, or was just delivered. Try again later.» — schedule.catalog · `host.executionPending`
- «Could not safely stop the tasks. The update has not been installed. Please try again later.» — settings · `desktop.update.stopFailed`
- «Sign-in status is unavailable right now. Try again later; no share is created before you sign in.» — liveshare · `dialog.identity.unknown`
- … e altre 6 stringhe distinte

> **Consiglio:** Quasi sempre un pulsante o un rinvio ("Later", "Configure later", "try again later"): `più tardi`.

## model provider
`provider del modello | fornitore del modello | fornitore`
5 occorrenze in 2 namespace, di cui 0 come etichetta esatta.

- «Add model provider» — settings.models · `add`
- «Third-party model provider» — settings.models · `addCatalog`
- «No model provider currently advertises a model.» — settings.subagent · `subagentModelSelectionEmpty`
- «Some model providers could not be loaded; saved choices remain removable.» — settings.subagent · `subagentModelSelectionPartial`
- «The API value is sent in the request's reasoning-effort field, such as OpenAI's reasoning_effort. It defaults to the level name; where the model provider's API documentation specifies a different value, follow it. Off turns reasoning off and needs no value; a value already written in the configuration is kept and sent.» — settings.models · `modelReasoningHelpText`

> **Consiglio:** Compara in etichette di aggiunta e in una frase di aiuto: `provider del modello`, coerente con `provider=provider`.

## overridden
`sovrascritto | sostituito | ignorato`
5 occorrenze in 5 namespace, di cui 5 come etichetta esatta.

- «Overridden» — settings.agentLoop · `overridden` (×5)

> **Consiglio:** Un solo stato, ripetuto 5 volte nella stessa vista: `sovrascritto`.

## plan mode
`modo pianificazione`
4 occorrenze in 2 namespace, di cui 0 come etichetta esatta.

- «Enter or leave plan mode» — command · `description.plan`
- «Failed to exit plan mode» — plan · `chip.exitFailed`
- «Plan mode on, press to turn off» — plan · `chip.on.aria`
- «Plan mode on — click to turn off (/plan off)» — plan · `chip.on.title`

## preparing
`in preparazione | preparazione | preparazione in corso`
22 occorrenze in 10 namespace, di cui 0 come etichetta esatta.

- «Preparing a card» — ? · `row.preparing`
- «Preparing questions» — chat · `message.stepProcess.prepare.questions`
- «Preparing tool call» — conversation · `row.preparing`
- «Preparing tool calls» — chat · `message.stepProcess.prepare.tools`
- «Preparing to run code» — chat · `message.stepProcess.prepare.code`
- «Preparing to restart…» — settings · `desktop.update.installing`
- «Preparing deliverables» — deliverables · `row.preparing`
- «Preparing to read files» — chat · `message.stepProcess.prepare.read`
- «Preparing to edit files» — chat · `message.stepProcess.prepare.edit`
- «Preparing installation…» — pluginManager · `installStarting`
- … e altre 12 stringhe distinte

> **Consiglio:** Prefisso di un indicatore di stato ("Preparing to read files"): `in preparazione`.

## queued
`in coda`
14 occorrenze in 3 namespace, di cui 2 come etichetta esatta.

- «Queued» — conversation · `detail.status.queued` (×2)
- «Queued file {name}» — conversation · `queue.file`
- «{n} queued messages» — conversation · `queue.count`
- «Edit queued message» — conversation · `queue.edit`
- «Save queued message» — conversation · `queue.save`
- «Queued message image» — conversation · `queue.image`
- «Steer queued message» — conversation · `queue.steer`
- «Remove queued message» — conversation · `queue.remove`
- «Cmd/Ctrl+Enter steers all queued messages» — conversation · `placeholder.steerQueue`
- «This task is queued or running. Manage it in the session.» — schedule.catalog · `host.executionActive`
- … e altre 3 stringhe distinte

## read
`leggi | leggere | lettura`
63 occorrenze in 19 namespace, di cui 1 come etichetta esatta.

- «Read» — conversation · `tool.title.read`
- «Read Only» — ? · `preset.readOnly`
- «Read only» — liveshare · `dialog.sessionMode.view`
- «Read-only» — liveshare · `dialog.capabilities.tier.read`
- «Read files» — chat · `message.stepProcess.done.read`
- «Read event» — conversation · `tool.title.readEvent`
- «Read image» — conversation · `tool.title.readImage`
- «Read images» — chat · `message.stepProcess.done.readImage`
- «Read terminal» — conversation · `tool.title.readTerminal`
- «Read team task» — conversation · `tool.title.getTeamTask`
- … e altre 48 stringhe distinte

> **Consiglio:** Il termine è il nome del tool e insieme un verbo. Il nome del tool in UI è `Read` → `leggi`; le forme verbali ("could not read") si traducono nella frase.

## reason
`motivo`
26 occorrenze in 7 namespace, di cui 2 come etichetta esatta.

- «Reason» — pluginManager · `reasonLabel` (×2)
- «Failure reason:» — chat · `message.retry.failure`
- «{reason} · {tools} tools» — stats · `event.header.detail`
- «Could not enable: {reason}» — pluginManager · `failedEnable`
- «Could not disable: {reason}» — pluginManager · `failedDisable`
- «Could not uninstall: {reason}» — pluginManager · `failedUninstall`
- «Could not switch to {name}: {reason}» — ? · `switchRefused`
- «Tool was not executed. Reason: {reason}» — conversation · `tool.autoReviewNotExecuted`
- «Could not complete the branch: {reason}» — liveshare · `viewer.row.branchRefused`
- «Could not enable the component: {reason}» — pluginManager · `failedRowEnable`
- … e altre 15 stringhe distinte

> **Consiglio:** Etichetta del campo e prefisso di messaggio ("Reason: {reason}"): `motivo`.

## reasoning effort
`livello di ragionamento`
4 occorrenze in 2 namespace, di cui 0 come etichetta esatta.

- «Model and reasoning effort» — model · `menu.aria`
- «This model provides no reasoning effort levels.» — model · `empty.efforts`
- «Select model, current {model}, reasoning effort {effort}» — model · `trigger.ariaEffort`
- «When enabled, agents can choose a provider, model, and reasoning effort for each Subagent from the authorized models below. Applies only to new sessions.» — settings.subagent · `subagentModelSelectionChoose`

> **Consiglio:** Etichetta di un selettore a livelli: `livello di ragionamento`.

## saving
`salvataggio | salvataggio in corso | salva`
12 occorrenze in 9 namespace, di cui 0 come etichetta esatta.

- «Saving…» — schedule.catalog · `rule.saving` (×8)
- «Select at least one model before saving.» — settings.subagent · `subagentModelSelectionRequired`
- «Could not load the run interval limit. Try again before saving.» — schedule.catalog · `host.limitsError`
- «The saved selection is not one whole tier; saving again replaces it with the tier you pick.» — liveshare · `dialog.capabilities.stale`
- «Shortcut configuration or available commands changed. Review the latest bindings before saving.» — ? · `stale`

> **Consiglio:** Indicatore transitorio ripetuto 8 volte: `salvataggio in corso`.

## schedule
`pianificazione`
1 occorrenza in 1 namespace, di cui 0 come etichetta esatta.

- «Choose a future schedule; edit the task timing before resuming» — schedule.catalog · `host.notFuture`

> **Consiglio:** Compare una sola volta, dentro una frase ("Choose a future schedule"): la UI non usa "schedule" come etichetta. Valuta di togliere la voce, o `pianificazione`.

## search
`cerca | ricerca`
40 occorrenze in 12 namespace, di cui 3 come etichetta esatta.

- «Search» — conversation · `tool.title.search` (×3)
- «Search…» — command · `search.placeholder`
- «Web search» — settings.webSearch · `title`
- «Clear search» — model · `search.clear` (×4)
- «Search tasks» — schedule.catalog · `search.label`
- «Search events» — conversation · `tool.title.searchEvents`
- «Search models» — settings.models · `fetchSearch`
- «Search models…» — model · `search.placeholder`
- «Search plugins» — pluginMarket · `search` (×2)
- «Search results» — workspace · `search.results.aria`
- … e altre 23 stringhe distinte

> **Consiglio:** Nome del tool e insieme verbo: `ricerca` come sostantivo, `cerca` nei placeholder e nelle aria.

## sign-in
`accesso`
17 occorrenze in 3 namespace, di cui 0 come etichetta esatta.

- «Copy sign-in link» — ? · `copyLink`
- «Starting sign-in…» — liveshare · `dialog.identity.loginOpening`
- «Copy sign-in command» — forgePanel · `signin.copy`
- «Confirming the sign-in result…» — liveshare · `dialog.identity.loginVerifying`
- «Your sign-in expired.» — liveshare · `viewer.status.reauthenticate`
- «This sign-in expired; start again.» — liveshare · `dialog.identity.loginExpired`
- «Sign-in did not finish. Try again.» — liveshare · `dialog.identity.loginFailed`
- «Sign-in cancelled; no credential was saved.» — liveshare · `dialog.identity.loginCancelled`
- «This sign-in was already used; start again.» — liveshare · `dialog.identity.loginReplayed`
- «Your sign-in expired. Please sign in again.» — liveshare · `viewer.reauthenticate`
- … e altre 7 stringhe distinte

> **Consiglio:** Sempre sostantivo in espressioni composte ("sign-in link", "sign-in status"): `accesso`.

## source
`fonte`
43 occorrenze in 13 namespace, di cui 5 come etichetta esatta.

- «Source» — conversation · `detail.field.source` (×5)
- «Code source» — pluginManager · `sourceSpec`
- «Source code» — pluginMarket · `factSourceCode`
- «Source events» — conversation · `detail.trace.sources`
- «Plugin source» — cordis · `body.source`
- «Index sources» — pluginMarket · `sourcesTitle`
- «Timing source» — trajectory · `timing.source`
- «Add index source» — pluginMarket · `addFirstSource`
- «Source for this DSH» — pluginManager · `sourceTargetSpec`
- «Added index sources» — pluginMarket · `sourcesLabel`
- … e altre 28 stringhe distinte

> **Consiglio:** Etichetta di campo e di elenco ("Source", "index sources"): `sorgente`.

## start
`avvia`
21 occorrenze in 12 namespace, di cui 1 come etichetta esatta.

- «Start» — sidebarRight · `tab.guide.title`
- «Starts with» — ? · `initialContent`
- «Start review» — forgePanel · `review.startReview`
- «start unknown» — stats · `step.partial`
- «Failed to start» — settings.pluginInventory · `failed`
- «Start recording» — voice-input · `start`
- «Step start unavailable» — trajectory · `timing.stepStartUnavailable`
- «Choose a workspace to start» — conversation · `placeholder.workspace`
- «Enter an HTTP(S) address to start browsing» — ? · `start`
- «This sign-in expired; start again.» — liveshare · `dialog.identity.loginExpired`
- … e altre 11 stringhe distinte

> **Consiglio:** Pulsante e verbo ("Start", "Failed to start"): `avvia`.

## time
`tempo | orario`
45 occorrenze in 14 namespace, di cui 3 come etichetta esatta.

- «Time» — conversation · `detail.field.time` (×3)
- «LLM time» — chat · `stats.dialog.llmTime`
- «Run time» — schedule.catalog · `rule.title`
- «Tool time» — chat · `stats.dialog.toolTime` (×2)
- «Time zone» — schedule.catalog · `timing.zone`
- «Take time» — question · `wait.takeTime`
- «Model time» — stats · `column.model`
- «Total time» — stats · `column.time`
- «Time (UTC)» — session-inspector · `table.time`
- «Actual time» — trajectory · `toolbar.actualTime`
- … e altre 32 stringhe distinte

> **Consiglio:** Etichetta di campo e prefisso ("at {time}", "elapsed time"): `orario` per il campo, `tempo` per le durate.

## update
`aggiorna | aggiornamento | aggiornare`
43 occorrenze in 8 namespace, di cui 2 come etichetta esatta.

- «Update» — pluginManager · `update` (×2)
- «Update goal» — conversation · `tool.title.updateGoal`
- «Update list» — settings.models · `fetchAdopt`
- «Retry update» — settings · `desktop.update.retry`
- «Update {name}» — pluginManager · `updateLabel` (×2)
- «Update team task» — conversation · `tool.title.updateTeamTask`
- «Update available» — pluginManager · `statusUpdateAvailable` (×2)
- «Update to-do list» — conversation · `todo.rowTitle`
- «Update to {version}» — pluginManager · `versionsUpdateLabel`
- «System prompt update» — chat · `message.systemPromptUpdate`
- … e altre 30 stringhe distinte

> **Consiglio:** Azione del plugin manager e sostantivo ("Updates available"): `aggiorna` come azione.

## upgrade
`aggiorna alla versione superiore | passa alla versione superiore`
4 occorrenze in 3 namespace, di cui 0 come etichetta esatta.

- «This plugin is already installed. To upgrade it, uninstall it and install it again» — pluginManager · `installProblemInstalled`
- «Shortcut configuration in {location} was created by a newer version. Upgrade Harness and try again.» — ? · `future`
- «This Harness did not report the session permission back: an older owner build needs an upgrade before the share can carry it.» — liveshare · `dialog.sessionMode.notGranted`
- «The Relay at this address does not verify identities yet. Upgrade it before creating a share; this page will not create an anonymous one.» — liveshare · `dialog.identity.relayUnsupported`

> **Consiglio:** Sempre dentro frasi ("Upgrade it before creating a share", "needs an upgrade"): `passa alla versione superiore`.

-----

## Termini che ora condividono la stessa traduzione

Non sono ambiguità nel senso del glossario, ma nella UI due voci distinte diventano indistinguibili.

- **catalogo** ← catalog, inventory
- **cartella** ← directory, folder
- **precedente** ← earlier, previous
- **suggerimento** ← hint, tooltip
- **ultimo** ← last, latest
- **carica** ← load, upload
- **ricarica** ← refresh, reload
- **invia** ← send, submit
