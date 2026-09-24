---
inclusion: always
---

# Project Structure

The project uses Next.js with the App Router and keeps portfolio content separate from presentation components.

## Expected Layout

Tasnem-Portfolio/
├── .kiro/
│   ├── steering/          # Project context and development rules
│   ├── specs/             # Requirements, design, and implementation tasks
│   ├── hooks/             # Kiro automation hooks
│   ├── skills/            # Reusable Kiro skills
│   └── settings/          # MCP configuration
│
├── public/
│   ├── images/            # Profile and project images
│   └── resume/            # Downloadable CV
│
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout and metadata
│   │   ├── page.tsx       # Main portfolio page
│   │   └── globals.css    # Global styles and design tokens
│   │
│   ├── components/        # Reusable presentation components
│   │
│   └── content/           # Portfolio content and typed data
│       ├── projects.ts
│       ├── skills.ts
│       ├── experience.ts
│       ├── education.ts
│       └── certificates.ts
│
├── package.json
└── tsconfig.json

## Conventions

- Keep portfolio content in `src/content/`, not inside UI components.
- Use `src/app/` for Next.js App Router pages and layouts.
- Keep reusable UI components in `src/components/`.
- Keep static assets such as images and the CV in `public/`.
- Use one main component per file with clear, descriptive names.
- Use TypeScript for application and content files.
- Update this document if the implemented project structure changes.