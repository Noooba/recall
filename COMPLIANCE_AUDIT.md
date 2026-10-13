# Recall engineering compliance audit

Reviewed October 11, 2026. This is a source and browser engineering review, not independent certification or legal advice. The operator, intended audience and jurisdictions have not been provided.

## Verified architecture and data flow

Next.js 15.5.27 / React 18.3, static App Router pages, browser-local providers. No API routes, authentication, account database, analytics SDK or advertising script were found in app/components/lib. HTML/assets are served by Vercel. This is not guaranteed fully offline operation.

Notes are localStorage recall.notes.v1; study concepts, questions, answers and heuristic scores are recall.session.v1; reviews are recall.flashcards.v1. Restores preserve a previous session/review snapshot. Appearance is recall.theme. AI output stays in memory unless copied to a note. JSON import is read in the browser, validated and size-bounded; no upload endpoint exists. Body/text rendering uses React escaping rather than raw HTML.

The worker downloads model files from Hugging Face and runtime assets from jsDelivr; ONNX inference runs locally using WASM. Observed optional-AI external hosts were huggingface.co, us.aws.cdn.hf.co and cdn.jsdelivr.net, using requests without bodies. Two real model actions completed with no browser errors. Core workflow tests observed no external requests or note-body payloads. These observations do not cover malicious extensions or every future code path.

lib/llm.ts retains inactive provider utilities with server-style environment names. Searches found no imports from application routes or components; tests use the JSON parser. There is no configured remote inference route. No literal credential was found in the reviewed application source. Git history and hosting secrets were not available for audit; do not infer they are cleared.

## Privacy limits and controls

Logical deletion of a note removes its note record, but derived study material/review history and downloaded backups may remain. A new explicitly confirmed full-workspace deletion control removes all known Recall content keys and recovery snapshots; an isolated browser test verifies removal. A model-cache control deletes transformers-cache, confirmed against Transformers.js source. HTTP cache, disk recovery, extensions and other devices remain outside these controls.

Collection filter names and note IDs can appear in navigation/request URLs. Hosting operational logs and retention, DPA terms, subprocessors, owner legal identity and a real privacy contact are unverified. Avoid sensitive collection names. Browser storage and exported backups are unencrypted. No cookie banner was added because no consent-triggering app tracker was found; this is not an assurance about hosting infrastructure.

## Regulatory questions for qualified review

The project is educational but the intended ages and child-directed marketing are unknown. COPPA analysis needs those facts and actual operator/third-party collection practices. CCPA/CPRA scope depends on the operator and statutory applicability, not merely public availability. GDPR/UK GDPR analysis depends on establishment, audience, processing and offering/monitoring facts. No birthdays, IDs or speculative consent workflows were introduced.

Owner must review privacy rights handling, lawful basis, children’s privacy, accessibility obligations, consumer terms, provider contracts and international transfers with qualified counsel before commercial launch. Draft policy/terms pages are explicitly marked with unresolved owner/contact/law fields. No jurisdiction or compliance claim was invented.

## Evidence and unresolved release items

See SECURITY_REPORT.md, ACCESSIBILITY_REPORT.md, THIRD_PARTY_NOTICES.md and docs/evidence/premium-* for actual checks. Remaining dependency findings, conversion-specific model licensing, operational privacy facts and real contact details prevent a fully cleared commercial-release claim.

Sources: [FTC COPPA applicability](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions), [California DOJ CCPA guidance](https://oag.ca.gov/privacy/ccpa), [ICO UK GDPR scope](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/personal-information-what-is-it/who-does-the-uk-gdpr-apply-to/). These sources inform the review questions, not an applicability determination.
