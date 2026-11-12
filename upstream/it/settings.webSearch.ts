/**
 * Italian dictionary for the "settings.webSearch" namespace, owned by
 * @deepseek-ai/dsh-client-ui-settings-web-search.
 *
 * 27 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"title": "Ricerca sul web",
	"description": "Configura il provider di ricerca DeepSeek.",
	"useSearchApi": "Usa la nuova API Web Search",
	"useSearchApiHint": "Disattivato per impostazione predefinita: la ricerca passa da DeepSeek Messages. Per le funzionalità e i prezzi della nuova API Web Search, consulta la ",
	"searchGuide": "guida a Search e Fetch",
	"searchGuideUrl": "https://api-docs.deepseek.com/guides/search",
	"apiKey": "Chiave API",
	"apiKeyHint": "Salvata fuori dal file delle impostazioni. Lascia vuoto per mantenere la chiave corrente.",
	"apiKeySet": "È configurata una chiave.",
	"apiKeyUnset": "Nessuna chiave configurata; possono cercare solo le conversazioni che usano un modello con account DeepSeek, tramite l'endpoint predefinito.",
	"baseUrl": "URL di base dell'API Messages",
	"baseUrlHint": "Includi il prefisso API, per esempio https://api.deepseek.com/anthropic/v1. Il provider aggiunge /messages. Lascia vuoto per ripristinare il valore predefinito.",
	"searchApiBaseUrl": "URL di base dell'API Search / Fetch",
	"searchApiBaseUrlHint": "Includi il prefisso API, per esempio https://api.deepseek.com/v1/tools. Il provider aggiunge /search o /fetch. Lascia vuoto per ripristinare il valore predefinito.",
	"maxUses": "Ricerche massime per richiesta",
	"maxUsesHint": "Quante ricerche il modello ausiliario può eseguire in una richiesta Messages. Vale solo per l'API Messages.",
	"count": "Risultati per ricerca",
	"countHint": "Risultati restituiti per query: un intero da 1 a 50, predefinito 10. Controlla il numero di risultati, non le chiamate di ricerca. web_search non conserva più fonti del proprio limite di risultati.",
	"overridden": "Sovrascritto",
	"reset": "Ripristina il valore predefinito",
	"readOnly": "Questa installazione salva le impostazioni in sola lettura.",
	"unavailable": "Questo plugin non è caricato, quindi non può essere configurato in questo momento.",
	"save": "Salva",
	"saving": "Salvataggio…",
	"saveFailed": "L'installazione non ha accettato questi valori; sono stati lasciati perché tu li corregga.",
	"invalidNumber": "Inserisci un numero, oppure lascia vuoto per usare il valore predefinito.",
	"invalidCount": "Inserisci un intero da 1 a 50, oppure lascia vuoto per usare il valore predefinito.",
} as const
