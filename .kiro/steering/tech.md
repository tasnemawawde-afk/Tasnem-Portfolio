---
inclusion: always
---

# Tech Stack & Constraints

- **Framework:** Next.js 16, App Router, TypeScript strict.
- **Components:** Use Server Components by default. Add `"use client"` only when a component needs state, effects, or browser APIs.
- **Styling:** CSS Modules (`Component.module.css`) with design tokens in `src/app/globals.css`.
- **No Tailwind, no styled-components, and no inline `style={}`.**
- **Fonts:** Use a system font stack only. Do not add `next/font/google`.
- **Images:** Use `next/image` with explicit `width` and `height` and meaningful `alt` text.
- **Package manager:** npm. Do not switch to pnpm, yarn, or bun.
- **Linting:** `npm run lint` must pass with no errors.
- **Accessibility:** Every section must be clearly labelled, interactive elements must be keyboard accessible, and colour contrast must meet accessibility requirements.
- **Responsive design:** The portfolio must work well on mobile and desktop.
- **Testing:** Do not add a testing framework unless it is first proposed in a spec.
- **Secrets:** Keep secrets only in `.env.local` and never commit them.

## Non-Negotiable Rule

All portfolio content such as projects, skills, experience, education, and certificates must be stored separately from presentation components. Do not hard-code portfolio content directly inside reusable UI components.