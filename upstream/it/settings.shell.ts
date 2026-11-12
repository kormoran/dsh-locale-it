/**
 * Italian dictionary for the "settings.shell" namespace, owned by
 * @deepseek-ai/dsh-client-ui-settings-shell.
 *
 * 14 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"title": "Shell",
	"description": "Limita per quanto tempo ogni comando può essere eseguito e quanto output può produrre.",
	"timeoutMs": "Timeout dei comandi (ms)",
	"timeoutMsHint": "Per quanto tempo un comando può essere eseguito prima di essere terminato.",
	"maxOutputBytes": "Limite di output per flusso (byte)",
	"maxOutputBytesHint": "L'output che supera questo limite viene riversato in un file temporaneo invece di andare perso.",
	"overridden": "Sovrascritto",
	"reset": "Ripristina il valore predefinito",
	"readOnly": "Questa installazione salva le impostazioni in sola lettura.",
	"unavailable": "Questo plugin non è caricato, quindi non può essere configurato in questo momento.",
	"save": "Salva",
	"saving": "Salvataggio…",
	"saveFailed": "L'installazione non ha accettato questi valori; sono stati lasciati perché tu li corregga.",
	"invalidNumber": "Inserisci un numero, oppure lascia vuoto per usare il valore predefinito.",
} as const
