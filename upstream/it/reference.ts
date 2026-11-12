/**
 * Italian dictionary for the "reference" namespace, owned by
 * @deepseek-ai/dsh-client-ui-reference.
 *
 * 15 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"section.files": "File e cartelle",
	"section.subagents": "Subagenti",
	"section.sessions": "Sessioni",
	"candidate.noCwd": "(nessuna cwd)",
	"crumb.root": "Workspace",
	"fileOpen.title": "Impossibile aprire il file",
	"fileOpen.failed": "Impossibile aprire «{path}». Riprova o chiudi questo messaggio.",
	"fileOpen.close": "Chiudi",
	"fileOpen.retry": "Riprova",
	"time.now": "ora",
	"time.minutes": "{n}min",
	"time.hours": "{n}h",
	"time.days": "{n}g",
	"time.months": "{n}mes",
	"time.years": "{n}a",
} as const
