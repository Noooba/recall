# Privacy policy

Engineering draft · effective October 11, 2026. Operator and contact details require owner review.

## What Recall does

Recall is a knowledge workspace with notes, search, collections, flashcards and study maps. These features process content in your browser. There is no sign-in, note database or account sync in this version. The application itself is served by Vercel, so opening it requires a network connection.

## Information and storage

Notes, titles, collections, tags and trash records are saved in localStorage under recall.notes.v1. Study concepts, questions, answers and scores use recall.session.v1. Flashcard review counts use recall.flashcards.v1. Appearance uses recall.theme. Restoring study or review history can retain a previous recovery snapshot in the same browser.

Generated assistance is displayed in memory unless you copy or save it into a note. The model download may be retained in the browser’s Transformers cache or HTTP cache. Storage is specific to this site and browser profile; other browsers and devices do not share it.

## Network requests and third parties

Normal note editing, local search, note graphs, flashcards and offline passage tools do not send note bodies to an AI provider. We found no wired analytics, advertising scripts or app-authentication cookies in the reviewed source. This is not a promise of zero information collection: Vercel and network providers may receive IP addresses, request URLs and ordinary connection metadata. Their operational logging and retention settings are not verified here.

Navigation URLs can contain note identifiers and collection filter names. Do not put sensitive information in collection names or share URLs containing personal details.

Optional local AI downloads model files from Hugging Face and may obtain ONNX runtime files from jsDelivr. Those providers receive ordinary network metadata and apply their own policies. The downloaded model runs in a worker on this device; note prompts are passed to that worker, not to a remote inference API. This does not guarantee the quality or confidentiality of generated output.

## Your choices and deletion

Export notes as JSON or Markdown, or export a workspace backup in Settings. Imports show a preview; existing note IDs retain their current content. Backup files are not encrypted. Keep them somewhere appropriate for their contents.

Moving a note to Trash is reversible. Permanent deletion removes that note record. Derived study concepts, answers or review counts can remain, as can backups you downloaded. Use Delete all workspace data in Settings to remove notes, trash, study history, review counts, appearance and known recovery snapshots from this browser.

The model-cache control removes the named Transformers cache. A loaded model stays in memory until reloading, and the HTTP cache may retain downloaded files. Browser site-data controls can remove additional caches. Clearing browser data can permanently remove local work. Deletion is logical browser deletion, not guaranteed secure erasure from disks, backups or memory.

## Security limitations

Browser storage is not encrypted or protected by a Recall password. Someone using this browser profile, malicious extensions, compromised scripts or device malware may access it. Recall does not claim end-to-end encryption, independently audited security, guaranteed offline availability or regulatory certification.

The current CSP and security headers provide defense in depth. Static Next.js scripts require an inline-script allowance; this is a documented security limitation. AI output can be incorrect. Check important statements against original sources.

## Children, rights and contact

The intended age range, operator identity, location, hosting retention and applicable privacy jurisdictions have not been supplied. The owner must review children’s privacy and applicable data-protection duties with qualified counsel before a public commercial launch. This app does not collect birth dates or identity documents to resolve those unknowns.

Privacy contact: [Owner must supply a real contact address and operator name]. This placeholder is not a working contact channel. Depending on applicable law, users may have rights concerning information held by service operators. Local exports and deletion controls do not by themselves satisfy every legal right or request procedure.

## Changes

Review this page when the app changes. Any account sync, external AI service, analytics or new data collection needs an updated policy and appropriate engineering and legal review.

Sources: package-lock.json, installed package license files, public/fonts/OFL.txt, lib/notes-store.tsx, lib/store.tsx, lib/ai.worker.ts, next.config.mjs.
