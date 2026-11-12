# Plurali: i casi visibili e le chiavi che propongo

L'inglese e il cinese non hanno bisogno di distinguere singolare e plurale; l'italiano sì. Il formato attuale prevede già la distinzione, ma solo dove qualcuno l'ha scritta a mano: nel corpus ci sono **22 coppie `.one`/`.other`** su 3.426 chiavi.

Sotto, i casi in cui manca e il numero può valere 1 in una scena normale — non i casi teorici.

## Proposta: dieci chiavi da sdoppiare

Per ognuna, la chiave attuale diventa `.other` e si aggiunge `.one`. Il valore inglese di `.one` è proposto qui; quello italiano è già scritto, pronto da incollare.

| Chiave attuale | Inglese | Italiano attuale (rotto a 1) | `.one` proposto | `.one` italiano |
|---|---|---|---|---|
| `conversation/detail.agents.count` | {count} agents | {count} agenti | {count} agent | {count} agente |
| `conversation/detail.terminals.count` | {count} terminals | {count} terminali | {count} terminal | {count} terminale |
| `conversation/detail.matches.count` | {count} matches | {count} corrispondenze | {count} match | {count} corrispondenza |
| `conversation/search.paths` | {shown} paths | {shown} percorsi | {shown} path | {shown} percorso |
| `stats/turn.images` | {count} images | {count} immagini | {count} image | {count} immagine |
| `stats/steps.total` | {total} steps | {total} passi | {total} step | {total} passo |
| `stats/steps.matched` | {count} steps used {tool} | {count} passi hanno usato {tool} | {count} step used {tool} | {count} passo ha usato {tool} |
| `forgePanel/change.ci.failed` | {count} checks failed | {count} controlli non superati | {count} check failed | {count} controllo non superato |
| `conversation/image.tooMany` | A message can include up to {count} images | … fino a {count} immagini | … up to {count} image | … fino a {count} immagine |
| `deliverables/changes.title` | Edited {count} files | Modificati {count} file | Edited {count} file | Modificato {count} file |

L'ultima è quella che si vede più spesso: compare in **ogni turno che modifica un file**, e con un solo file mostra «Modificati 1 file».

## Il caso che il formato attuale non sa esprimere

Quattro stringhe contengono **due quantità indipendenti** nella stessa frase:

| Chiave | Inglese | Italiano attuale |
|---|---|---|
| `chat/stats.counts` | {turns} turns {steps} steps | {turns} turni {steps} passi |
| `stats/summary` | {turns} turns · {steps} steps | {turns} turni · {steps} passi |
| `conversation/search.matches` | {shown} matches · {files} files | {shown} corrispondenze · {files} file |
| `deliverables/changes.local.viewAria` | {count} files, {added} lines added, {deleted} lines deleted | {count} file, {added} righe aggiunte, {deleted} righe eliminate |

Con una coppia `.one`/`.other` si può accordare **una sola** delle due: se il turno è 1 ma i passi sono 3, `{turns} turni` diventa «1 turno» e `{steps} passi` resta sbagliato.

Le due uscite possibili:

1. **segmentare**: `{turns}` e `{steps}` diventano due stringhe separate, accordate ciascuna per conto proprio, composte dal chiamante;
2. **plurali veri**: adottare la selezione ICU (`{count, plural, one {…} other {…}}`), che gestisce più quantità nella stessa frase e anche lo zero.

La prima è piccola e non cambia infrastruttura; la seconda è la soluzione definitiva ma tocca il motore di localizzazione. Segnalo entrambe invece di scegliere al posto vostro.

## Cosa non propongo

- Stringhe dove il numero non può realisticamente essere 1 (`… truncated at {total} characters`).
- Sostantivi invariabili in italiano: «file», «token», «endpoint», «byte». Lì `{count} file` funziona a ogni valore, e infatti non compare nella tabella.
- Le 22 coppie che esistono già: sono corrette e non vanno toccate.

Dati grezzi: `upstream/PLURALS.raw.md`, rigenerabile con `node tools/plural-audit.mjs`.
