# dsh-locale-it — sorgente

Language pack italiano per la Web UI di [DeepSeek Harness](https://deepseek.com/harness): 3.426 stringhe, 69 namespace, copertura completa.

Pacchetto pubblicato: [`dsh-locale-it`](https://www.npmjs.com/package/dsh-locale-it).

## Come è fatto

| Cartella | Contenuto |
|---|---|
| `.i18n/it/` | **i dizionari**, un file JSON per namespace — è qui che si traduce |
| `.i18n/strings.json` | la baseline inglese estratta dall'installazione: 3.426 stringhe con paese e chiave |
| `tools/` | la pipeline: estrazione, build, controllo del drift, preparazione upstream |
| `packages/dsh-locale-it/` | il pacchetto di sviluppo, installato nel profilo via `link:` |
| `upstream/` | i 69 moduli TypeScript per una proposta al repository ufficiale, più i dati sui plurali |
| `dist/` | generato da `npm publish`, non versionato |

Nessuna delle 3.426 traduzioni è scritta dentro il bundle: `lib/client.js` è un artefatto, rigenerabile dai JSON.

## Comandi

```bash
node tools/build-pack.mjs        # rigenera il bundle di sviluppo dai JSON
node tools/check-drift.mjs       # confronta il pack con l'installazione DSH corrente
node tools/prepare-upstream.mjs  # rigenera upstream/it/*.ts e il manifest
node tools/pack-publish.mjs      # prepara dist/dsh-locale-it per npm
```

`check-drift` esce con codice 1 quando c'è qualcosa da fare: chiavi nuove, chiavi sparite, testi inglesi cambiati, traduzioni mancanti. È pensato per girare anche in CI.

## Come si traduce una chiave nuova

1. `node tools/check-drift.mjs` → elenca le chiavi nuove in `drift-report.md`;
2. aggiungi la voce nel file `.i18n/it/<namespace>.json`;
3. `node tools/build-pack.mjs` — la build rifiuta chiavi sconosciute, `{placeholder}` persi e traduzioni vuote;
4. ricarica la pagina: il cambio è visibile subito.

## Scelte di traduzione

Il glossario tecnico (267 termini) è stato concordato prima di tradurre e ha guidato ogni scelta: «sessione», «turno», «passo»; i termini che in italiano suonano artificiali restano inglesi (`tool`, `plugin`, `bundle`, `worktree`, `commit`); i nomi citati usano le caporali. I dettagli e i limiti noti (i plurali, per esempio) sono in `upstream/PLURALS.md`.

## Licenza

MIT — vedi [LICENSE](LICENSE).
