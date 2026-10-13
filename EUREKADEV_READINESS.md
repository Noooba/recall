# EurekaDev demonstration readiness

Recall is a working local-data prototype with optional local model downloads. Describe it as a browser knowledge workspace and heuristic study aid, not scientifically validated mastery measurement or an independently audited commercial service.

## Verified demonstration capabilities

Capture/edit/autosave notes; refresh persistence; retrieve with keyword search; organize collections and pins; trash/restore/permanently remove note records; sentence-cloze flashcards; adaptive concept study; JSON/Markdown/workspace backups and additive imports. The new note graph draws only explicit resolved wiki links and shared-tag relationships, with visible evidence, filters and navigation. Optional WASM summaries/titles run locally after external model/runtime downloads. Offline actions are labelled as passage tools.

50 logic tests and 30 Chromium/Firefox browser checks passed, plus lint/typecheck/build. Two real model actions passed under the CSP in Chromium. The app does not create fake note relationships, testimonials, user statistics or accounts.

## Submission material and review gates

Use only screenshots of synthetic QA/example content. The premium screenshots are created in fresh local test contexts; older screenshots may contain real browser-profile notes. The refreshed submission packaging must exclude old live-profile captures and all .env files except the documented placeholder example. Never include model weights, caches, node_modules or generated build directories. No API keys are required.

Original application code is MIT; retain third-party license texts, font OFL and collected notices. The base model card declares Apache-2.0; converter-specific metadata lacks an explicit license field and requires review. Contact/operator, audience, jurisdiction, hosting logs/DPA and commercial terms remain unresolved. Dependency audit findings remain documented. Legal/privacy documents are drafts, not certification.

## Reproduction

Use the existing npm lockfile. npm ci; npm run dev; npm run test; npm run lint; npm run typecheck; npm run build. Browser checks use Playwright with installed Chromium/Firefox; see playwright.config.ts and docs/TESTING.md. Core functionality does not require a database, AI API key or account. Optional inference requires external model/runtime access and browser WASM support.
