# Preparazione upstream

Il lavoro è impacchettato nel formato che il repository usa per le lingue già spedite. Verificato su un clone reale, non dedotto.

## Cosa c'è

| Percorso | Contenuto |
|---|---|
| `it/<namespace>.ts` | 69 moduli TypeScript, 3.426 chiavi |
| `manifest.json` | namespace → pacchetto npm, versione, cartella nel repo, chiavi |
| `COVERAGE.md` | la stessa mappa in tabella |
| `PLURALS.md` | i casi in cui manca il singolare, con le chiavi `.one` proposte |
| `PLURALS.raw.md` | dump grezzo dei candidati |
| `PROPOSAL.md` | bozza del messaggio per Discussions |

Rigenerazione: `node tools/prepare-upstream.mjs`.

## Il vincolo, verificato nel codice

In `packages/client/ui-chat/src/client/locale.ts` la forma reale è:

```ts
export const NS = 'chat'

/** Simplified Chinese dictionary and key-set source of truth. */
export const zh = { … } satisfies Record<string, string>
export type ChatKey = keyof typeof zh

export const en = { … } satisfies Record<ChatKey, string>
export const ja = { … } satisfies Record<keyof typeof en, string>
```

e la registrazione avviene in `src/client/apply.ts`:

```ts
ctx.effect(() => ctx.locale.register(NS, { zh, en, ja, es, fr, de, ru, pt }), 'ui-chat: dictionaries')
```

Quindi per ogni pacchetto servono due modifiche, più il catalogo:

1. `export const it = { … } satisfies Record<ChatKey, string>` in `src/client/locale.ts`;
2. `it` aggiunto all'oggetto di `ctx.locale.register(...)` in `src/client/apply.ts`;
3. `{ id: 'it', label: 'Italiano', fallback: 'en' }` nel catalogo di `packages/client/locale`, con l'export nell'indice dei locale.

Niente fallback parziale: se manca una chiave, il type check fallisce. Il pack copre 3.426 chiavi su 3.426, e l'insieme cinese coincide con quello inglese per costruzione (`en` è tipizzato contro `zh`).

## Come si propone — e il limite reale

`CONTRIBUTING.md`, alla lettera:

> *We are sorry that we cannot accept external pull requests at the moment.*
> *Contribute to the ecosystem: create a plugin that excites you and share it with others.*

Quindi **una PR oggi non è possibile**, né per te né per me. I canali sono due:

1. **Discussions** — pubblica `PROPOSAL.md`. Serve il tuo account GitHub; io non ho credenziali e non devo averle.
2. **Ecosistema** — pubblica il pack su npm. È la strada che il progetto dichiara di preferire, e ha un effetto più rapido: chi installa `dsh-locale-it` ha l'italiano senza aspettare una release.

## Verificato / non verificato

Verificato sul clone (`--filter=blob:none --sparse`, 8 MB):

- percorso del modulo locale: `<cartella pacchetto>/src/client/locale.ts`;
- forma delle dichiarazioni: `satisfies Record<ChatKey, string>`, con `ChatKey = keyof typeof zh`;
- punto di registrazione: `<cartella pacchetto>/src/client/apply.ts`, non `index.ts`;
- `CONTRIBUTING.md` esiste e vieta le PR esterne.

Non verificato, perché richiede la lettura di tutti i 61 pacchetti: che **ogni** namespace segua lo stesso schema (due namespace nello stesso pacchetto potrebbero vivere in file separati, come succede per `sidebar-documentpreview`, che ha `locales.ts` per namespace in sottocartelle). Il `manifest.json` riporta la cartella di ogni pacchetto, quindi la verifica è meccanica.

## Comandi

```bash
git clone --filter=blob:none --no-checkout --depth 1 \
  https://github.com/deepseek-ai/deepseek-harness .upstream-repo
cd .upstream-repo
git sparse-checkout init --cone
git sparse-checkout set packages/client/locale packages/client/ui-chat
git checkout master
```
