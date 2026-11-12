# Proposal: add Italian (`it`) as a built-in UI language

> Bozza da pubblicare nelle Discussions del repository. È in inglese perché è la lingua del progetto; se preferisci presentarti in italiano, la sostanza non cambia.

---

**Title:** Italian UI translation, complete: 3,426 strings across 69 namespaces

Hello — I translated the whole Web UI into Italian and I would like to contribute it as a built-in language, alongside `zh`, `en`, `ja`, `es`, `fr`, `de`, `ru` and `pt`.

**Coverage.** 3,426 strings, 69 namespaces, complete for every namespace — no placeholder left, none of them invented: the key sets come from the dictionaries compiled into the published packages.

**How it was produced.** I extracted the English dictionaries from the compiled `lib/client.js` of each package (many values are shared constants rather than literals, so identifiers were resolved against their definitions), translated the corpus with a project glossary of 267 technical terms, and translated the remaining strings in batches. A build step refuses to emit a dictionary if a key is unknown, a placeholder (`{name}`, `{count}`…) is lost, or a translation is empty. The same pipeline can re-run on every release.

**Format.** `it/<namespace>.ts`, one module per namespace, in the shape the shipped locales use (`export const it = { … } as const`), plus a `manifest.json` mapping each namespace to its package, its version and its directory inside this repository.

**Why Italian.** It is missing from the shipped set while the UI already supports eight languages; the translation is done, so the cost is review, not work.

**What I would need from you.** `CONTRIBUTING.md` says you cannot accept external pull requests at the moment, so I am not opening one. Options, in the order I would try them:

1. a PR, if you re-enable them for this contribution or tell me the branch to target;
2. a patch series against a fork, if that is easier to review;
3. a ZIP of the 69 modules, if you would rather apply it internally.

I can also keep it as a third-party plugin (`dsh-locale-it`) if a ninth built-in language is not something you want to ship — but a built-in locale means every Italian user gets it without installing anything, which is why I am asking.

A few technical notes:

- the emitted modules are complete per namespace, because the shipped dictionaries are type-checked against the Chinese key set;
- the translations are released under the repository's MIT license, as the rest of the work is.

## One thing I would like to fix while I am here: plurals

Italian needs singular and plural. The format already supports the distinction through `.one`/`.other` sibling keys, but only 22 pairs exist in the whole corpus, so most count strings read wrong when the number is 1 — for example `Edited {count} files` becomes "Modificati 1 file" in Italian.

I listed the cases that show up in normal use, with the exact keys and the Italian text ready to paste: 10 keys to split into `.one`/`.other` pairs, nothing speculative (no invariants like "file", no counts that cannot be 1).

Four further strings carry **two independent counts** in one sentence, e.g. `{turns} turns {steps} steps`. A single `.one`/`.other` pair can only agree one of them. I see two ways out and I am not going to pick one for you:

1. split the counts into separate, independently agreed strings the caller composes;
2. adopt ICU plural selection (`{count, plural, one {…} other {…}}`), which handles several counts and zero.

The first is small and changes no infrastructure; the second is the definitive fix but touches the localization engine.

The full table — keys, English, current Italian, proposed `.one` and its Italian — is in `PLURALS.md` next to this proposal. Even if you would rather not take that change now, the language can ship without it: the pack is complete, and these are refinements, not gaps.

Thank you for DeepSeek Harness — the plugin architecture is what made this possible without touching a single line of your code.
