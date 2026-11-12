/**
 * Italian dictionary for the "sidebarPdf" namespace, owned by
 * @deepseek-ai/dsh-client-ui-sidebar-documentpreview.
 *
 * 9 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"title": "PDF",
	"pageImage": "Pagina {page} del PDF",
	"loading": "Rendering del documento…",
	"rendering": "Rendering della pagina…",
	"failed": "Impossibile mostrare il PDF: {message}",
	"password": "Questo PDF richiede una password; le anteprime protette da password non sono supportate.",
	"workerFailed": "Il processo di rendering del PDF non ha potuto continuare. Riprova.",
	"unsupported": "L'anteprima del PDF richiede il contenuto completo del file.",
	"retry": "Riprova",
} as const
