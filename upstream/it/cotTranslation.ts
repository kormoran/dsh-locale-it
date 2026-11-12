/**
 * Italian dictionary for the "cotTranslation" namespace, owned by
 * @deepseek-ai/dsh-experimental-client-ui-cot-translation.
 *
 * 32 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"provider": "Servizio di traduzione",
	"google": "Google",
	"bing": "Bing",
	"deepseekAccount": "DeepSeek Flash — account (a pagamento)",
	"deepseekOfficial": "DeepSeek Flash — API ufficiale (a pagamento)",
	"providerUnavailableOption": "{provider} — non disponibile",
	"providerUnavailable": "Questo provider non è disponibile. Configura il tuo account DeepSeek o il provider dell'API ufficiale, oppure scegli un servizio disponibile.",
	"paidNotice": "Ogni frammento non in cache invia una richiesta DeepSeek Flash a pagamento separata tramite l'account o le credenziali API ufficiali selezionate. Riaprire il ragionamento riusa i risultati salvati; cambiare provider, lingua, testo di partenza o impostazioni della richiesta può inviare una nuova richiesta a pagamento.",
	"anonymousNotice": "Bing e Google non richiedono un accesso per la traduzione né una chiave API. I loro endpoint anonimi possono rifiutare o limitare le richieste.",
	"targetLanguage": "Lingua di destinazione",
	"targetLanguageHint": "auto segue la lingua dell'interfaccia; funzionano anche codici di lingua come zh, en e ja.",
	"privacy": "Il ragionamento espanso viene inviato al servizio selezionato. Può contenere codice o dettagli privati della conversazione.",
	"translation": "Vedi la traduzione",
	"original": "Vedi l'originale",
	"retry": "Riprova",
	"failed": "Traduzione non riuscita. Viene mostrato l'originale.",
	"translating": "Traduzione del ragionamento",
	"invalidProvider": "Scegli un servizio di traduzione.",
	"invalidLanguage": "Inserisci auto oppure un codice di lingua, come zh, en o ja.",
	"overridden": "Sovrascritto",
	"reset": "Ripristina il valore predefinito",
	"unavailable": "Le preferenze di traduzione non sono disponibili.",
	"readOnly": "Questa installazione salva le impostazioni in sola lettura.",
	"saveFailed": "L'installazione non ha accettato questi valori; sono stati lasciati perché tu li corregga.",
	"save": "Salva",
	"saving": "Salvataggio…",
	"copy": "Copia",
	"copied": "Copiato",
	"codeTitle": "Blocco di codice",
	"wrap": "Vai a capo",
	"unwrap": "Non andare a capo",
	"footnotes": "Note a piè di pagina",
} as const
