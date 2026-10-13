# Recall AI

**Your knowledge, ready when you need it.** A local knowledge workspace for capturing notes, retrieving useful passages, and turning information into study practice.

## Overview

Students, researchers, and curious people collect information faster than they can retrieve or understand it. Recall AI brings capture, organization, retrieval, and practice together. It extends the supplied Recall adaptive-learning app, preserving its knowledge map and review engine while adding a notes workspace.

## Why Recall?

Keep notes useful after writing them: find passages, discover related notes, and build study material. The default path requires no language model, account, or API key. Optional local AI runs separately from the editor so a model failure does not become a storage failure.

## Features

- Notes with autosave, titles, tags, collections, pinning, and previews.
- Weighted keyword search with excerpts; related notes based on shared words and tags.
- Trash, restore, and explicit permanent deletion.
- Versioned JSON export and additive import; existing note IDs win over imported duplicates.
- Keyboard command menu, responsive navigation, collapsible sidebar, self-hosted Geist typography and a graphite/citron workspace, and restrained Motion transitions with reduced-motion support.
- Offline source overview, key passages, explicit action items, study prompts, passage-recall prompts, first-words titles and matching answer passages. The flashcards workspace creates exact sentence cloze cards.
- Verified experimental opt-in local-model summaries and suggested titles. Generative answers, explanations, rewrites, key-point lists and study-material generation are not exposed.
- Original adaptive study: diagnostic questions, knowledge map, prerequisite bottlenecks, Forgetting Radar, and targeted review.

See [FEATURES](docs/FEATURES.md) for implementation details and [TESTING](docs/TESTING.md) for execution evidence. Source implementation alone does not prove browser compatibility.

## Screenshots

Genuine captures from the locally running application:

![Recall workspace overview](docs/screenshots/redesign-overview.png)

![Recall note editor](docs/screenshots/redesign-editor.png)

## Live Demo

[Open Recall AI](https://recall-ai-kohl.vercel.app). The public Vercel deployment opened without authentication; note creation, autosave, refresh persistence and cited offline extraction passed a hosted smoke test. Optional hosted model inference is recorded separately in [TESTING](docs/TESTING.md). GitHub publication is intentionally deferred at the owner's request.

## Tech Stack

Next.js 15.5.27 App Router, React 18, strict TypeScript, npm, Tailwind CSS, product-specific CSS, Lucide icons, Radix Dialog, Motion, Zod, Hugging Face Transformers.js, and ONNX Community SmolLM2 135M Instruct. Browser localStorage holds data; a Web Worker runs optional inference. Tests use Node's test runner and tsx. Exact dependencies are in package.json and package-lock.json.

## Architecture

```text
React workspace -> validated notes store -> localStorage
       |
       +-> keyword retrieval + offline passage extraction
       +-> optional AI runtime -> background Worker -> local model
       +-> study-set creation -> validated graph -> adaptive engine
                                                        |
                                                persisted study session
```

There is no active AI inference API, database, authentication service, or cloud synchronization. Hosting serves code; notes stay in the browser. Model downloads contact the model host. See [ARCHITECTURE](docs/ARCHITECTURE.md).

## Getting Started

Use a maintained Node.js release compatible with the installed Next.js version and npm. The implementation environment used Node.js 24.20.0; see [TESTING](docs/TESTING.md) for final verified checks. Optional AI needs a browser with Web Workers; ordinary notes do not need WebGPU.

On Windows PowerShell, use `npm.cmd` wherever `npm` appears below.

From the source directory:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production build:

```sh
npm run build
npm start
```

In Windows PowerShell use npm.cmd if execution policy blocks npm.

## Environment Variables

None are required by the active application. The safe .env.example contains this explanation. Retained legacy lib/llm.ts provider code is not connected to the UI; supplying provider credentials does not enable remote AI.

## How to Use

1. Select **New note**, add content, tags, and a collection. Check save feedback before closing.
2. Use **Search & recall** or Ctrl/Cmd+K. Ctrl/Cmd+Shift+N creates a note.
3. Open note assistance; labels distinguish offline extraction from model output.
4. Open **Knowledge map** for adaptive practice or /create to build a study set. The Cell Respiration demo is precomputed and labelled.
5. Use **Settings & backup** to export regularly; imports merge without replacing existing IDs.
6. Recover notes from **Trash**. Permanent deletion is destructive.

## AI Processing and Privacy

Local-model assistance is opt-in. SmolLM2 135M runs in a background worker, using the verified portable WASM runtime by default. Cancel terminates the worker; a three-minute deadline bounds stalls. Download reaching 100% does not mean inference is ready.

The selected q4 model weight file is approximately 182.4 MB; first use also downloads supporting assets. Real production-build summaries and titles succeeded in Chromium and Firefox, with no recorded page errors. WASM recovery after WebGPU failure was exercised. This confirms the runtime path, not universal device support or factual quality of every assistance action. Active workflows do not send notes to an inference provider. Storage is not encrypted or a backup; anyone using the browser profile can access it. Clearing site data removes stored notes and progress. Model assistance reads an excerpt of up to 5,000 characters and labels truncation. Responses use a 64-token limit (32 for titles); summaries keep the first two sentences. Unknown source IDs are rejected. Context links identify supplied excerpts and do not prove that every generated claim is supported. Small models can hallucinate or return invalid output.

Offline tools are deterministic and explicitly labelled. Short study answers use keyword grading, which can miss paraphrases; choices use answer keys. See [PRIVACY](docs/PRIVACY.md).

## Testing

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm audit
```

45 unit tests passed, along with lint, typecheck, the final production build, and fourteen production-browser scenarios across Chromium and Firefox. Tests cover notes, validation, storage safeguards, retrieval, AI runtime, session restoration, graph cleaning, grading, and adaptive logic. [TESTING](docs/TESTING.md) records actual outcomes and browser workflows. Listing commands does not imply they passed or that inference succeeded.

## Known Limitations

- Single browser profile and origin; no accounts, collaboration, cloud backup, or cross-device sync.
- 4 MB notes document, 2,000 notes, 100,000 content characters per note. Synchronous localStorage can cause latency at larger sizes.
- Keyword retrieval, not embedding-based semantic search.
- Cross-tab stale-write detection does not atomically merge simultaneous edits. Export unsaved work before reloading a conflict.
- Model support and speed vary; real inference needs device/browser verification.
- Adaptive scores are heuristics, not validated learning or exam predictions. Radar does not implement time-based forgetting.
- Dependency advisories need review; see [AUDIT](docs/AUDIT.md).

## Hackathon Information

Prepared for Eureka Dev Coding Track according to the supplied brief. This extends an existing supplied project; it does not claim the whole codebase was created during the event. The owner records and submits the video. [Submission description](docs/HACKATHON_SUBMISSION.md) and [3:50 demo script](docs/VIDEO_DEMO_SCRIPT.md) are included.

## AI Assistance Disclosure

Codex assisted with inspection, implementation, UI, reliability fixes, test development, and documentation. Supplied code remains credited. Development assistance and product AI are separate; the default workspace runs without a model.

## Credits and References

- Supplied Recall project: adaptive engine, graph components, demo material, existing license.
- [Next.js](https://nextjs.org/docs), [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), [Lucide](https://lucide.dev), [Zod](https://zod.dev).
- [Motion](https://motion.dev/docs/react) powers restrained transitions. [21st sidebar inspiration](https://preview.21st.dev/blog/react-sidebar-component-examples) informed navigation; local 21st design-context initialization and review were used. Hosted 21st search required authentication and was not used.
- [Transformers.js](https://huggingface.co/docs/transformers.js), [ONNX Community model](https://huggingface.co/onnx-community/SmolLM2-135M-Instruct-ONNX-MHA).
- Local development skills and tools informed design and review. Tool availability does not mean a service was used or deployment succeeded.

## License

The supplied repository already includes an [MIT LICENSE](LICENSE), copyright 2026 Recall authors. It is preserved; no new licensing decision was made. Libraries and model assets retain their own terms.






### UI redesign references

The redesigned capture and navigation are informed by [21st community patterns](https://21st.dev/community/components), [Kokonut prompt/toolbar/tab patterns](https://kokonutui.com/llms.txt), and [Motion shared layout examples](https://motion.dev/docs/react-layout-animations). The shipped implementation adapts these ideas to the existing Tailwind 3 and Radix architecture. [Geist](https://github.com/vercel/geist-font) is self-hosted with its [OFL license](public/fonts/OFL.txt).
