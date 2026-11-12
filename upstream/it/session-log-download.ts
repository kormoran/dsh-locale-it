/**
 * Italian dictionary for the "session-log-download" namespace, owned by
 * @deepseek-ai/dsh-session-log-export.
 *
 * 14 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"header.more": "Altre azioni",
	"menu.copyMarkdown": "Copia la sessione come Markdown",
	"menu.download": "Scarica il log della sessione",
	"menu.feedback": "Feedback",
	"toast.copied": "Sessione copiata come Markdown.",
	"toast.preparationFailed": "Impossibile leggere la sessione per la copia. Riprova.",
	"toast.clipboardFailed": "Impossibile scrivere negli appunti. Controlla i permessi degli appunti e riprova.",
	"dialog.preparingTitle": "Esportazione della sessione",
	"dialog.preparingDescription": "Preparazione di un file ZIP con questa sessione, le sue sottosessioni e gli allegati.",
	"dialog.successTitle": "Download della sessione avviato",
	"dialog.successDescription": "Il browser sta scaricando lo ZIP della sessione.",
	"dialog.errorTitle": "Esportazione della sessione non riuscita",
	"dialog.close": "Chiudi",
	"dialog.commandFailed": "Impossibile avviare l'esportazione della sessione.",
} as const
