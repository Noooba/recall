# Recall security engineering report

Reviewed October 11, 2026. No independent penetration test or legal/security certification is claimed.

## Implemented protections

- React text/SVG rendering; source scan found no raw HTML insertion, eval or document.write in application code. Internal note URLs now encode imported note IDs.
- Existing strict Zod notes/backup validation, 4 MB note document cap, 10 MB import read cap, additive imports, corrupt-data preservation, storage-conflict detection and quota errors remain.
- next.config.mjs now defines CSP, nosniff, no-referrer, DENY framing and restrictions on camera/microphone/geolocation/payment/USB. Production excludes JavaScript unsafe-eval; WebAssembly compilation is permitted for local inference.
- New lib/privacy.ts provides verified removal of known workspace keys, best-effort rollback on failure and truthful error reporting. Settings requires typing DELETE in an accessible dialog. Cache removal is separate from content deletion.
- note-graph positions use a null-prototype dictionary; note IDs, titles and tags are treated as data. Relationships use resolved links/exact shared tags, not generated HTML.

## Findings and residual risks

S-01 / Medium / next.config.mjs headers: static App Router boot scripts and Motion styles need unsafe-inline. CDN runtime modules require jsDelivr in script/connect source lists; model downloads permit Hugging Face hosts. This CSP narrows sources but is not a strict nonce/hash XSS policy. No nonce server was introduced into the client-local app. A future strict policy should be designed and regression-tested with dynamic rendering or verified build-time hashes. [Next CSP documentation](https://nextjs.org/docs/app/guides/content-security-policy).

S-02 / High advisory labels, context-dependent exploitability / package-lock.json: npm audit reports 12 findings: 7 high and 5 moderate, zero critical. High chains involve braces/micromatch/chokidar/fast-glob in Tailwind/ESLint tooling; unsafe glob inputs must not be accepted from users. Moderate chains include Transformers.js and native ONNX helper dependencies. The browser worker uses WASM and webpack excludes onnxruntime-node; that does not erase the installed supply-chain findings. Automated fixes proposed major upgrades or an ESLint config downgrade. No breaking force fix was applied. Validate a separately scoped upgrade before commercial release; keep the lockfile and repeat audits. Full advisory data is in docs/evidence/premium-dependency-audit.json.

S-03 / Medium / lib/notes-store.tsx, lib/store.tsx, Settings: localStorage and backups contain readable content. Device access/extensions/XSS can expose it. Deleting one note does not erase derived study content or downloaded files. New whole-workspace deletion is logical deletion, not secure wiping. Avoid storing secrets and use appropriate device controls.

S-04 / Low-to-Medium depending on content / collection navigation links: folder names and note identifiers can appear in request URLs. no-referrer reduces third-party referrer disclosure; hosting access logs remain unverified. Owner should establish logging/retention policies and avoid sensitive collection names.

S-05 / Review item / lib/llm.ts: unused remote provider utilities remain for original JSON-parser tests; no application imports/route were found. Any future wiring would invalidate the local-only inference privacy claim and needs server-side key protection, authorization, input/usage limits and policy updates.

## Validation

50 logic tests, lint, TypeScript and production build passed. 30 browser checks passed across Chromium and Firefox, including core flows, map filtering/keyboard, export/import, quota/corruption recovery, deletion, policy pages and network assertions. Real optional-AI WASM summary/title completed in 31.6s/7.4s on one Chromium run; external downloads had no request bodies and console errors were empty. This is a lab observation, not a guarantee of model accuracy or field performance.
