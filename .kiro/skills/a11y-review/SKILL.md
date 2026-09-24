---
name: a11y-review
description: Accessibility review of React/Next.js components — semantics, headings, alt text, keyboard, contrast, ARIA. Use when asked about accessibility, a11y, screen readers, WCAG, or "is this usable for everyone".
---

# Accessibility review

Score each item ✅/⚠️/❌ with file:line evidence, then fix ❌ items whose fix is unambiguous. Do not add ARIA where native HTML already does the job. Never change visual design or content while reviewing.

## Checklist (see references/wcag-quick.md for detail)
1. One `<h1>`; h2/h3 in order, no skipped levels.
2. Every `<section>` is labelled — `aria-labelledby` → its heading id, or an `aria-label`.
3. Every `<img>` uses `next/image` with meaningful `alt`, or `alt=""` / `aria-hidden="true"` if decorative.
4. Interactive = `<a href>` or `<button>`; no clickable `<div>`/`<span>`.
5. Focus visible (`:focus-visible` styles) and logical Tab order; skip link first.
6. Accessible names state the action ("Download CV"), not the icon.
7. Colour contrast ≥ 4.5:1 body, ≥ 3:1 large text — check design tokens in globals.css.
8. Motion respects `prefers-reduced-motion`.
9. Form fields (if any) have `<label for>`; errors are announced.
10. `<html lang>` set; language of page correct.

## Output
Report grouped by file, then by category. Give file:line, a short description, and a suggested fix. State explicitly when a category has no issues.
