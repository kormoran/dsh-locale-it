/**
 * Italian dictionary for the "settings.agentLoop" namespace, owned by
 * @deepseek-ai/dsh-client-ui-settings-agent-loop.
 *
 * 12 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"title": "Ciclo dell'agente",
	"description": "Controlla come l'agente smista le chiamate ai tool.",
	"maxParallel": "Chiamate ai tool in parallelo",
	"maxParallelHint": "Limite massimo di chiamate parallele sicure in esecuzione contemporaneamente in un passo.",
	"overridden": "Sovrascritto",
	"reset": "Ripristina il valore predefinito",
	"readOnly": "Questa installazione salva le impostazioni in sola lettura.",
	"unavailable": "Questo plugin non è caricato, quindi non può essere configurato in questo momento.",
	"save": "Salva",
	"saving": "Salvataggio…",
	"saveFailed": "L'installazione non ha accettato questi valori; sono stati lasciati perché tu li corregga.",
	"invalidNumber": "Inserisci un numero, oppure lascia vuoto per usare il valore predefinito.",
} as const
