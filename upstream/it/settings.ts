/**
 * Italian dictionary for the "settings" namespace, owned by
 * @deepseek-ai/dsh-client-ui-settings-general.
 *
 * 42 keys. The shipped dictionaries are typed against the Chinese
 * key set, so this module must stay complete for the namespace: TypeScript
 * checks every shipped language against it.
 */
export const it = {
	"trigger": "Impostazioni",
	"shortcut.open": "Apri impostazioni",
	"desktop.update.available": "Aggiorna",
	"desktop.update.checking": "Ricerca aggiornamenti…",
	"desktop.update.progress": "{percent}%",
	"desktop.update.verifying": "Verifica dei file di aggiornamento…",
	"desktop.update.installing": "Preparazione al riavvio…",
	"desktop.update.ready": "Installa e riavvia",
	"desktop.update.retry": "Riprova aggiornamento",
	"desktop.update.versionDetail": "{label}: {version}",
	"desktop.update.downloadDetail": "Download dell'aggiornamento: {percent}%\nVersione di destinazione: {version}",
	"desktop.update.checkFailed": "Impossibile cercare aggiornamenti. Riprova più tardi.",
	"desktop.update.downloadFailed": "Impossibile scaricare l'aggiornamento. Riprova.",
	"desktop.update.installFailed": "Impossibile installare l'aggiornamento. Riprova più tardi.",
	"desktop.update.checkNetworkFailed": "Impossibile cercare aggiornamenti. Controlla la connessione e riprova.",
	"desktop.update.downloadNetworkFailed": "Impossibile scaricare l'aggiornamento. Controlla la connessione e riprova.",
	"desktop.update.installNetworkFailed": "Impossibile installare l'aggiornamento. Controlla la connessione e riprova.",
	"desktop.update.fullscreenTimeout": "Impossibile uscire da schermo intero. Esci da schermo intero, poi riprova l'aggiornamento.",
	"desktop.update.stopFailed": "Impossibile fermare le attività in sicurezza. L'aggiornamento non è stato installato. Riprova più tardi.",
	"desktop.update.tasksChanged": "Sono state avviate nuove attività. Conferma di nuovo per fermare le attività e aggiornare.",
	"desktop.update.tasksUnavailable": "Stato delle attività non disponibile. Riprova l'aggiornamento quando il workspace è pronto.",
	"title": "Impostazioni",
	"close": "Chiudi",
	"openDocument": "Apri file di configurazione",
	"openDocument.error": "Impossibile aprire il file di configurazione",
	"general.nav": "Generali",
	"general.currentVersion": "Versione corrente: {version}",
	"developerTools.title": "Mostra vista di sviluppo",
	"developerTools.error": "Impossibile salvare. Riprova.",
	"developerTools.description": "Mostra traiettoria, differenze di codice e tutti i preset degli agenti",
	"connection.error": "Disconnesso",
	"connection.connecting": "Riconnessione",
	"connection.connected": "Connesso",
	"connection.reconnect": "Disconnesso, riconnetti ora",
	"connection.restart": "Riconnessione, riconnetti ora",
	"hostRelease.title": "Versione del servizio cambiata",
	"hostRelease.description": "La versione del servizio è cambiata. Questa pagina ha sospeso gli aggiornamenti in tempo reale; ricarica per caricare la nuova versione.",
	"hostRelease.service": "Servizio",
	"hostRelease.page": "Pagina",
	"hostRelease.unknown": "Sconosciuto",
	"hostRelease.reload": "Ricarica per caricare la nuova versione",
	"hostRelease.later": "Non ora",
} as const
