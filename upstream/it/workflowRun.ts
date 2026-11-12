/**
 * Italian dictionary for the "workflowRun" namespace, owned by
 * @deepseek-ai/dsh-client-ui-workflow-run.
 *
 * 18 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"run.title": "{name}",
	"run.members.one": "{count} membro",
	"run.members.other": "{count} membri",
	"run.empty": "Nessun membro avviato",
	"phase.unassigned": "Senza fase",
	"phase.empty": "Nome della fase vuoto",
	"statusCount.running": "In esecuzione {count}",
	"statusCount.completed": "Completati {count}",
	"statusCount.failed": "Non riusciti {count}",
	"statusCount.cancelled": "Annullati {count}",
	"statusCount.interrupted": "Interrotti {count}",
	"member.empty": "Nome del membro vuoto",
	"member.open": "Apri {name}",
	"status.running": "In esecuzione",
	"status.completed": "Completato",
	"status.failed": "Non riuscito",
	"status.cancelled": "Annullato",
	"status.interrupted": "Interrotto",
} as const
