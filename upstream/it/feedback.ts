/**
 * Italian dictionary for the "feedback" namespace, owned by
 * @deepseek-ai/dsh-client-ui-message-feedback.
 *
 * 20 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"action.like": "Buona risposta",
	"action.likeActive": "Rimuovi la valutazione",
	"action.dislike": "Risposta scadente",
	"action.dislikeActive": "Rimuovi la valutazione",
	"dialog.title": "Invia un feedback",
	"dialog.categories": "Categoria del feedback",
	"dialog.detail": "Dettagli del feedback",
	"dialog.hint": "Aggiungi dettagli per aiutarci a migliorare. L'invio includerà il log della conversazione corrente.",
	"category.task-result": "Risultato dell'attività",
	"category.instruction-following": "Comprensione e rispetto delle istruzioni",
	"category.product-interaction": "Funzionalità e interazione del prodotto",
	"category.service-stability": "Stabilità e velocità",
	"category.resource-cost": "Uso delle risorse e costi",
	"category.security-privacy-permission": "Sicurezza, privacy e permessi",
	"category.other": "Altro",
	"toast.recorded": "Grazie per il feedback",
	"error.conflict": "Questo feedback è cambiato altrove; viene mostrato lo stato più recente",
	"error.load": "Impossibile caricare il feedback",
	"error.generic": "Impossibile salvare il feedback",
	"error.noteTooLarge": "La descrizione è troppo lunga; accorciala e invia di nuovo",
} as const
