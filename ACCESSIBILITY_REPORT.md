# Recall accessibility engineering report

WCAG 2.2 AA is the engineering target. No complete conformance or independent accessibility certification is claimed.

## Changes and verified checks

Retained semantic headings, labelled inputs, native controls, Radix dialogs, skip navigation, visible focus and reduced-motion configuration. The new note graph offers labelled nodes, connection evidence, keyboard selection, zoom/pan/fit controls and pointer-button alternatives to dragging. Policy pages have a clear navigation group and draft notices. Permanent workspace deletion requires a labelled confirmation input and cannot activate before DELETE is entered.

Axe scans of the populated note graph, each legal page, overview/mobile workspace and adaptive map returned no violations for the selected WCAG 2 A/AA, 2.1 AA and 2.2 AA tags in the completed browser suite. Browser tests exercised 390/768/1440px graph layouts, command-palette keyboard interaction, assistant focus and reduced-motion hydration. Screenshots use synthetic QA/example notes, not private real notes.

## Manual scope and remaining work

Inspect desktop, tablet and phone screenshots and keyboard paths. Verify title truncation can be resolved through the note inspector. SVG node focus is visible; inspector buttons offer an equivalent readable alternative at overview zoom. Motion is removed or flattened under prefers-reduced-motion.

Automated scans do not prove every color pair, interaction or screen-reader announcement is compliant. VoiceOver/NVDA/TalkBack, high-contrast modes, 200–400% browser zoom, language expansion and real-user assistive-technology testing remain owner review items. Touch-target sizes and scrollable map behavior need testing on actual iOS/Android hardware. Model progress/output is not guaranteed understandable to every assistive technology. No claim of legal accessibility compliance is made.
