/**
 * Italian dictionary for the "settings.permission" namespace, owned by
 * @deepseek-ai/dsh-client-ui-permission-presets.
 *
 * 12 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"title": "Permessi",
	"description": "Scegli la modalità di permessi predefinita per le nuove sessioni",
	"loading": "Caricamento",
	"unavailable": "Non disponibile",
	"preset.readOnly": "Sola lettura",
	"preset.workspaceWrite": "Scrittura nel workspace",
	"preset.fullAccess": "Accesso completo",
	"confirm.title": "Attivare l'accesso completo?",
	"confirm.description": "L'accesso completo consente alle nuove sessioni di ridurre i passaggi di conferma e di compiere più azioni direttamente, incluse operazioni sensibili, modifiche ai file o comandi esterni. Usalo solo quando ti fidi delle attività successive.",
	"confirm.acknowledge": "Comprendo i rischi e voglio continuare",
	"confirm.cancel": "Annulla",
	"confirm.enable": "Attiva l'accesso completo",
} as const
