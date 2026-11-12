/**
 * Italian dictionary for the "question" namespace, owned by
 * @deepseek-ai/dsh-client-ui-user-questions.
 *
 * 31 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"error.incomplete": "Completa prima questa domanda.",
	"error.unanswered": "Seleziona un'opzione o inserisci una risposta personalizzata.",
	"error.unavailable": "Impossibile inviare in questo momento; riprova tra poco.",
	"error.resubmit": "La risposta non è arrivata prima che il lavoro proseguisse; inviala di nuovo.",
	"status.sent": "Risposta inviata; il pannello non è riuscito a chiudersi.",
	"wait.takeTime": "Prenditi il tempo che serve",
	"wait.countdown": "Proseguo tra {seconds}s",
	"wait.paused": "In pausa · {seconds}s rimanenti",
	"wait.held": "In attesa della tua risposta",
	"wait.continued": "Il lavoro è proseguito — puoi ancora rispondere",
	"review.status": "Risposta data",
	"review.skipped": "Questa domanda è stata saltata.",
	"reply.label": "Domande e risposte",
	"reply.answerLabel": "Risposta: ",
	"reply.skipped": "Saltata",
	"nav.prev": "Domanda precedente",
	"nav.next": "Domanda successiva",
	"nav.minimize": "Comprimi la scheda della domanda",
	"nav.maximize": "Espandi la scheda della domanda",
	"nav.cancel": "Ignora tutte le domande",
	"nav.close": "Chiudi il pannello — riaprilo dalla chiamata al tool",
	"text.expand": "Espandi",
	"text.collapse": "Comprimi",
	"option.recommended": "Consigliata",
	"custom.placeholder": "Scrivi la tua risposta",
	"action.skip": "Salta",
	"action.next": "Avanti",
	"plan.header": "Revisione del piano",
	"plan.approve": "Approva",
	"plan.decline": "Rifiuta",
	"plan.discuss": "Chiedi modifiche",
} as const
