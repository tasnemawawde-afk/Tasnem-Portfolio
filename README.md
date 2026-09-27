# Tasnem Moura — Personal Portfolio

Personal portfolio website of **Tasnem Moura**, Electrical & Computer Engineer (VLSI, microelectronics, digital systems, hardware).

**Live site:** https://tasnemmoura.vercel.app

Built with [Next.js](https://nextjs.org) (App Router), React and TypeScript, styled with CSS Modules.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

All text lives in `src/content/` — no need to touch the components:

| File | What it holds |
| --- | --- |
| `hero.ts` | Name, title, tagline, CV path |
| `about.ts` | Biography and profile photo |
| `projects.ts` | Projects, including the highlighted metrics |
| `skills.ts` | Skill categories |
| `education.ts`, `experience.ts` | Background |
| `certificates.ts` | Training & certificates |
| `contact.ts` | Email, LinkedIn, GitHub |
| `site.ts` | Public URL of the site (used for SEO and link previews) |

The CV is served from `public/resume/TasnemMoura_CV.pdf` and the photo from `public/images/profile.jpg`.

## Deployment

The site is deployed on [Vercel](https://vercel.com). Every push to the `master` branch on GitHub redeploys it automatically.

To move to a custom domain later (e.g. `tasnemmoura.com`): add the domain in the Vercel project's **Settings → Domains**, copy the DNS records into your domain registrar, then update `SITE_URL` in `src/content/site.ts`.
