# Implementation Plan: Portfolio Website

## Overview

Build Tasnem Moura's personal engineering portfolio as a Next.js 16 App Router application in TypeScript strict mode. The implementation follows a layered approach: scaffold the project, define design tokens, populate typed content files, build each presentation component with its CSS Module, assemble the page, wire navigation, then add property-based and example tests to validate correctness.

All tasks are coding tasks only. Deployment, user acceptance testing, and documentation are out of scope.

---

## Tasks

- [x] 1. Project scaffolding and global configuration
  - Initialise a Next.js 16 project with App Router and TypeScript strict mode using `npx create-next-app@latest` (select App Router, TypeScript, ESLint; decline Tailwind).
  - Remove any Tailwind references from config files if the scaffolder adds them.
  - Create the directory structure: `src/app/`, `src/components/`, `src/content/`, `src/__tests__/content/`, `src/__tests__/components/`, `src/__tests__/sorting/`, `public/images/`, `public/resume/`.
  - Place a placeholder `TasnemMoura_CV.pdf` in `public/resume/` so the download link resolves without a 404 during development.
  - _Requirements: 1.3, 14.1_

- [x] 2. Design tokens and global styles
  - [x] 2.1 Write `src/app/globals.css` with all design tokens
    - Define all CSS custom properties at `:root`: colour palette (`--color-background`, `--color-surface`, `--color-surface-raised`, `--color-border`, text colours, accent colours, semantic colours), typography scale (`--font-family-base`, `--font-size-*`, `--font-weight-*`, `--line-height-*`), spacing scale (`--space-1` through `--space-24`, `--section-padding-y`, `--section-padding-x`, `--container-max-width`, `--navbar-height`), border radius, transitions, and shadows.
    - Add the `section[id] { scroll-margin-top: var(--navbar-height); }` rule so anchored sections clear the sticky navbar.
    - Add a CSS reset / base rules (box-sizing, margin/padding zero) and set `body` background and colour from tokens.
    - Do NOT import any external font service URL.
    - _Requirements: 1.5, 1.6, 1.7, 12.6, 13.1_

- [x] 3. Content data files
  - [x] 3.1 Create `src/content/hero.ts`
    - Export `HeroContent` interface with fields: `name: string`, `title: string`, `tagline: string` (≤30 words), `cvPath: string`.
    - Export a `hero` constant with Tasnem's real data: name "Tasnem Moura", title "Electrical & Computer Engineer", a tagline referencing VLSI/microelectronics/digital systems/hardware engineering.
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.3_

  - [x] 3.2 Create `src/content/about.ts`
    - Export `AboutContent` interface with fields: `biography: string` and `profileImage: { src, width, height, alt }`.
    - Export an `about` constant with a biography mentioning Tasnem's VLSI/microelectronics/digital systems/hardware specialisations, and profile image metadata pointing to `/images/profile.jpg`.
    - _Requirements: 1.1, 1.2, 4.1, 4.3_

  - [x] 3.3 Create `src/content/education.ts`
    - Export `EducationEntry` interface with fields: `id`, `institution`, `degree`, `fieldOfStudy`, `graduationYear: number`.
    - Export an `education` array with Tasnem's academic qualifications.
    - _Requirements: 1.1, 1.2, 5.1, 5.2_

  - [x] 3.4 Create `src/content/skills.ts`
    - Export `SkillCategory` interface with fields: `id`, `name`, `skills: string[]`.
    - Export a `skills` array with at least four categories: Hardware & VLSI, Programming Languages, Tools & Software, AI & Machine Learning.
    - _Requirements: 1.1, 1.2, 6.1, 6.2_

  - [x] 3.5 Create `src/content/projects.ts`
    - Export `Project`, `ProjectImage`, and `ExternalLink` interfaces matching the design.
    - Export a `projects` array including the Two-Step Time-Domain ADC entry and the MEMS-Based Optical System entry; add further projects as applicable.
    - _Requirements: 1.1, 1.2, 7.1, 7.3, 7.4_

  - [x] 3.6 Create `src/content/experience.ts`
    - Export `ExperienceEntry` interface with fields: `id`, `jobTitle`, `organisation`, `startYear`, `startMonth`, `endYear?`, `endMonth?`, `period`, `description`.
    - Export an `experience` array with Tasnem's work history.
    - _Requirements: 1.1, 1.2, 8.1, 8.2_

  - [x] 3.7 Create `src/content/certificates.ts`
    - Export `Certificate` interface with fields: `id`, `name`, `issuingOrganisation`, `completionDate`, `completionYear`, `credentialUrl?`.
    - Export a `certificates` array with entries covering VLSI-related training, NVIDIA training, and AI-related training.
    - _Requirements: 1.1, 1.2, 9.1, 9.3_

  - [x] 3.8 Create `src/content/contact.ts`
    - Export `ContactContent` interface with fields: `linkedInUrl`, `githubUrl`, `email`.
    - Export a `contact` constant with Tasnem's real LinkedIn URL, GitHub URL, and email address.
    - _Requirements: 1.1, 1.2, 11.1, 11.2, 11.3_

- [x] 4. Root layout and root page shell
  - [x] 4.1 Write `src/app/layout.tsx`
    - Define the root layout as a Server Component.
    - Set `<html lang="en">`, `<body>`, and include the `NavBar` component.
    - Export a `metadata` object with a descriptive `title` ("Tasnem Moura | Electrical & Computer Engineer" or similar) and a `description` `<meta>` tag.
    - Wrap page content in a `<footer>` with copyright text.
    - Import `globals.css`.
    - _Requirements: 1.3, 1.4, 14.3, 14.4_

  - [x] 4.2 Write `src/app/page.tsx` shell
    - Create a Server Component that imports from all eight content files and renders placeholder `<section>` elements for each section as a stub (to be replaced when each section component is built).
    - Add the reverse-chronological sort logic for `education` and `experience` as described in the design.
    - Wrap all sections in a `<main>` element.
    - _Requirements: 1.3, 1.4, 1.8, 5.3, 8.3_

- [x] 5. NavBar component
  - [x] 5.1 Implement `src/components/NavBar.tsx` and `NavBar.module.css`
    - Add `"use client"` directive.
    - Define the `NAV_ITEMS` static constant with nine items (Home/Hero, About, Education, Skills, Projects, Experience, Training, CV, Contact).
    - Implement `useState` for `isMenuOpen` and `activeSection`.
    - Implement `useEffect` with `IntersectionObserver` (threshold 0.4) watching `section[id]` elements; update `activeSection` on intersection.
    - Apply active CSS class to the matching nav link.
    - Implement hamburger toggle: `aria-expanded={isMenuOpen}`, `aria-controls="nav-links-list"` on the button.
    - On mobile nav link click, call `setIsMenuOpen(false)`.
    - Style with `NavBar.module.css`: sticky positioning, height matching `--navbar-height`, mobile collapse/expand below 768px, visible active link style.
    - Ensure all nav links are keyboard accessible (Tab/Enter).
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 12.5, 13.5_

- [ ] 6. HeroSection component
  - [x] 6.1 Implement `src/components/HeroSection.tsx` and `HeroSection.module.css`
    - Define `HeroProps` interface with `name`, `title`, `tagline`, `cvPath`, `contactHref`.
    - Render `<section id="hero" aria-labelledby="hero-heading">`, `<h1 id="hero-heading">`, title `<p>`, tagline `<p>`, "Get in Touch" `<a href={contactHref}>`, and "Download CV" `<a href={cvPath} download>`.
    - Style: full viewport height on desktop (≥1024px), min-height 480px on mobile (<768px).
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 12.3_

  - [ ] 6.2 Wire HeroSection into `page.tsx`
    - Replace the Hero stub in `page.tsx` with `<HeroSection>` passing `hero` content data and `contactHref="#contact"`.
    - _Requirements: 1.8, 3.1_

- [ ] 7. AboutSection component
  - [x] 7.1 Implement `src/components/AboutSection.tsx` and `AboutSection.module.css`
    - Define `AboutProps` interface.
    - Render `<section id="about" aria-labelledby="about-heading">`, `<h2>`, `<Image>` (next/image with width, height, alt), biography `<p>`.
    - Style responsively: image and text side-by-side on desktop, stacked on mobile.
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 12.3, 12.4, 14.2_

  - [ ] 7.2 Wire AboutSection into `page.tsx`
    - Replace the About stub with `<AboutSection>` passing `about` content data.
    - _Requirements: 1.8, 4.1_

- [ ] 8. EducationSection and EducationCard components
  - [x] 8.1 Implement `src/components/EducationCard.tsx` and `EducationCard.module.css`
    - Define `EducationCardProps` with `institution`, `degree`, `fieldOfStudy`, `graduationYear`.
    - Render a `<article>` or `<div>` card with all four fields as styled text.
    - _Requirements: 5.2_

  - [ ] 8.2 Implement `src/components/EducationSection.tsx` and `EducationSection.module.css`
    - Define `EducationSectionProps` with `entries: EducationEntryProps[]`.
    - Render `<section id="education" aria-labelledby="education-heading">`, `<h2>`, map `entries` to `<EducationCard>` components.
    - _Requirements: 5.1, 5.3, 5.4, 12.3_

  - [ ] 8.3 Wire EducationSection into `page.tsx`
    - Replace the Education stub with `<EducationSection entries={sortedEducation}>`.
    - _Requirements: 1.8, 5.3_

- [ ] 9. SkillsSection and SkillCategory components
  - [x] 9.1 Implement `src/components/SkillCategory.tsx` and `SkillCategory.module.css`
    - Define `SkillCategoryProps` with `name` and `skills: string[]`.
    - Render category name as `<h3>` and skills as a `<ul>` list.
    - _Requirements: 6.3_

  - [ ] 9.2 Implement `src/components/SkillsSection.tsx` and `SkillsSection.module.css`
    - Define `SkillsSectionProps` with `categories: SkillCategoryProps[]`.
    - Render `<section id="skills" aria-labelledby="skills-heading">`, `<h2>`, map `categories` to `<SkillCategory>`.
    - Style as a responsive grid/flex layout readable on mobile and desktop.
    - _Requirements: 6.1, 6.2, 6.4, 6.5, 12.3, 13.2_

  - [ ] 9.3 Wire SkillsSection into `page.tsx`
    - Replace the Skills stub with `<SkillsSection categories={skills}>`.
    - _Requirements: 1.8, 6.1_

- [ ] 10. ProjectsSection and ProjectCard components
  - [x] 10.1 Implement `src/components/ProjectCard.tsx` and `ProjectCard.module.css`
    - Define `ProjectProps` interface (title, description, technologies, domain, externalLink?, image?).
    - Render all required fields as visible text.
    - Conditionally render `<Image>` when `props.image` is defined (next/image with width, height, alt).
    - Conditionally render `<a href={externalLink.href}>` when `props.externalLink` is defined.
    - _Requirements: 7.2, 7.5, 7.6, 12.4, 14.2_

  - [ ] 10.2 Implement `src/components/ProjectsSection.tsx` and `ProjectsSection.module.css`
    - Define `ProjectsSectionProps` with `projects: ProjectProps[]`.
    - Render `<section id="projects" aria-labelledby="projects-heading">`, `<h2>`, map `projects` to `<ProjectCard>`.
    - _Requirements: 7.1, 7.3, 7.4, 7.7, 12.3_

  - [ ] 10.3 Wire ProjectsSection into `page.tsx`
    - Replace the Projects stub with `<ProjectsSection projects={projects}>`.
    - _Requirements: 1.8, 7.1_

- [ ] 11. ExperienceSection and ExperienceCard components
  - [x] 11.1 Implement `src/components/ExperienceCard.tsx` and `ExperienceCard.module.css`
    - Define `ExperienceCardProps` with `jobTitle`, `organisation`, `period`, `description`.
    - Render all four fields as styled text.
    - _Requirements: 8.2_

  - [ ] 11.2 Implement `src/components/ExperienceSection.tsx` and `ExperienceSection.module.css`
    - Define `ExperienceSectionProps` with `entries: ExperienceEntryProps[]`.
    - Render `<section id="experience" aria-labelledby="experience-heading">`, `<h2>`, map `entries` to `<ExperienceCard>`.
    - _Requirements: 8.1, 8.3, 8.4, 12.3_

  - [ ] 11.3 Wire ExperienceSection into `page.tsx`
    - Replace the Experience stub with `<ExperienceSection entries={sortedExperience}>`.
    - _Requirements: 1.8, 8.3_

- [ ] 12. TrainingSection and CertificateCard components
  - [x] 12.1 Implement `src/components/CertificateCard.tsx` and `CertificateCard.module.css`
    - Define `CertificateCardProps` with `name`, `issuingOrganisation`, `completionDate`, `credentialUrl?`.
    - Render required fields; conditionally render `<a href={credentialUrl} target="_blank" rel="noopener noreferrer">Verify Credential</a>` when `credentialUrl` is defined.
    - _Requirements: 9.2, 9.4_

  - [ ] 12.2 Implement `src/components/TrainingSection.tsx` and `TrainingSection.module.css`
    - Define `TrainingSectionProps` with `certificates: CertificateProps[]`.
    - Render `<section id="training" aria-labelledby="training-heading">`, `<h2>`, map `certificates` to `<CertificateCard>`.
    - _Requirements: 9.1, 9.3, 9.5, 12.3_

  - [ ] 12.3 Wire TrainingSection into `page.tsx`
    - Replace the Training stub with `<TrainingSection certificates={certificates}>`.
    - _Requirements: 1.8, 9.1_

- [ ] 13. CVSection component
  - [x] 13.1 Implement `src/components/CVSection.tsx` and `CVSection.module.css`
    - Define `CVSectionProps` with `cvPath: string`.
    - Render `<section id="cv" aria-labelledby="cv-heading">`, `<h2 id="cv-heading">CV</h2>`, a brief prompt paragraph, and `<a href={cvPath} download aria-label="Download Tasnem Moura's CV">Download CV</a>`.
    - Ensure the link is keyboard accessible and has a descriptive aria-label.
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 12.3, 12.5_

  - [ ] 13.2 Wire CVSection into `page.tsx`
    - Replace the CV stub with `<CVSection cvPath={hero.cvPath}>`.
    - _Requirements: 1.8, 10.1_

- [ ] 14. ContactSection component
  - [x] 14.1 Implement `src/components/ContactSection.tsx` and `ContactSection.module.css`
    - Define `ContactSectionProps` with `linkedInUrl`, `githubUrl`, `email`.
    - Render `<section id="contact" aria-labelledby="contact-heading">`, `<h2>`.
    - Render LinkedIn `<a target="_blank" rel="noopener noreferrer" aria-label="Visit Tasnem Moura's LinkedIn profile">`.
    - Render GitHub `<a target="_blank" rel="noopener noreferrer" aria-label="Visit Tasnem Moura's GitHub profile">`.
    - Render `<a href={`mailto:${email}`} aria-label="Send Tasnem an email">{email}</a>`.
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 12.3, 12.5_

  - [ ] 14.2 Wire ContactSection into `page.tsx`
    - Replace the Contact stub with `<ContactSection>` passing `contact` data.
    - _Requirements: 1.8, 11.1_

- [ ] 15. Checkpoint — Build and lint verification
  - Run `tsc --noEmit` and confirm zero TypeScript errors.
  - Run `npm run lint` and confirm zero ESLint errors.
  - Run `next build` and confirm it completes without errors or missing-image-dimension warnings.
  - Fix any issues found before proceeding to tests.
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 16. Testing infrastructure
  - [ ] 16.1 Install and configure Vitest and fast-check
    - Install `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `fast-check`, and `jest-axe` (or `vitest-axe`) as dev dependencies using npm with pinned versions.
    - Create `vitest.config.ts` configuring the `jsdom` environment, `globals: true`, and the React plugin.
    - Add a `vitest.setup.ts` that imports `@testing-library/jest-dom`.
    - Add a `"test": "vitest --run"` script to `package.json` so tests run in single-pass mode.
    - _Requirements: 14.1_

- [ ] 17. Sorting utility and property tests
  - [ ] 17.1 Extract sort functions into `src/lib/sort.ts`
    - Move the `sortEducation` and `sortExperience` sort functions from `page.tsx` into a dedicated utility file `src/lib/sort.ts` with named exports.
    - Update `page.tsx` to import from `src/lib/sort.ts`.
    - _Requirements: 5.3, 8.3_

  - [ ]* 17.2 Write property tests for reverse-chronological sorting (Property 3)
    - Create `src/__tests__/sorting/sort.test.ts`.
    - Use `fc.array` of arbitrary education entries to assert `sortEducation` output is non-ascending by `graduationYear` (**Property 3**).
    - Use `fc.array` of arbitrary experience entries to assert `sortExperience` output is non-ascending by `(startYear, startMonth)` (**Property 3**).
    - Tag: `// Feature: portfolio-website, Property 3: reverse-chronological ordering`
    - Run 100 iterations each.
    - **Property 3: Reverse-Chronological Ordering**
    - **Validates: Requirements 5.3, 8.3**
    - _Requirements: 5.3, 8.3_

- [ ] 18. Hero content property test
  - [ ]* 18.1 Write property test for tagline word count (Property 8)
    - Create `src/__tests__/content/hero.test.ts`.
    - Import the `hero` constant and assert `hero.tagline.trim().split(/\s+/).length <= 30`.
    - Tag: `// Feature: portfolio-website, Property 8: tagline word count`
    - **Property 8: Tagline Word Count**
    - **Validates: Requirements 3.3**
    - _Requirements: 3.3_

- [ ] 19. EducationSection component tests
  - [ ]* 19.1 Write property tests for EducationSection (Properties 1, 2, 3, 5, 6)
    - Create `src/__tests__/components/EducationSection.test.tsx`.
    - Use `fc.array(arbitraryEducationEntry(), { minLength: 1, maxLength: 20 })` to generate inputs.
    - **Property 1**: Assert every entry's `institution` appears in rendered output.
    - **Property 2**: Assert `institution`, `degree`, `fieldOfStudy`, and `graduationYear` all appear as visible text.
    - **Property 3**: Assert the sorted order is non-ascending by `graduationYear`.
    - **Property 5**: Assert exactly one `<h2>` element is present with non-empty text.
    - **Property 6**: Assert the `<section>` element has `aria-labelledby` matching the `<h2>`'s `id`.
    - Tag each test: `// Feature: portfolio-website, Property N: ...`
    - Run 100 iterations.
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 12.3**
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 12.3_

- [ ] 20. SkillsSection component tests
  - [ ]* 20.1 Write property tests for SkillsSection (Properties 1, 2, 5, 6)
    - Create `src/__tests__/components/SkillsSection.test.tsx`.
    - Use `fc.array(arbitrarySkillCategory(), { minLength: 1, maxLength: 10 })`.
    - **Property 1**: Assert all category entries produce rendered output.
    - **Property 2**: Assert category `name` and all `skills` strings appear as visible text.
    - **Property 5**: Assert exactly one `<h2>` with non-empty text.
    - **Property 6**: Assert `aria-labelledby` on `<section>` matches `<h2>` `id`.
    - Run 100 iterations.
    - **Validates: Requirements 6.1, 6.2, 6.3, 6.4, 12.3**
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 12.3_

- [ ] 21. ProjectsSection component tests
  - [ ]* 21.1 Write property tests for ProjectsSection (Properties 1, 2, 4, 5, 6)
    - Create `src/__tests__/components/ProjectsSection.test.tsx`.
    - Use `fc.array(arbitraryProject(), { minLength: 1, maxLength: 10 })`.
    - **Property 1**: Assert all project entries produce rendered output.
    - **Property 2**: Assert `title`, `description`, `technologies`, and `domain` appear as visible text.
    - **Property 4**: When `externalLink` is defined, assert an `<a>` with matching `href` is present; when undefined, assert no such link. When `image` is defined, assert an `<img>` is present; when undefined, assert none.
    - **Property 5**: Assert exactly one `<h2>` with non-empty text.
    - **Property 6**: Assert `aria-labelledby` on `<section>` matches `<h2>` `id`.
    - Run 100 iterations.
    - **Validates: Requirements 7.1, 7.2, 7.5, 7.6, 7.7, 12.3**
    - _Requirements: 7.1, 7.2, 7.5, 7.6, 7.7, 12.3_

- [ ] 22. ExperienceSection component tests
  - [ ]* 22.1 Write property tests for ExperienceSection (Properties 1, 2, 3, 5, 6)
    - Create `src/__tests__/components/ExperienceSection.test.tsx`.
    - Use `fc.array(arbitraryExperienceEntry(), { minLength: 1, maxLength: 20 })`.
    - **Property 1**: Assert all entries produce rendered output.
    - **Property 2**: Assert `jobTitle`, `organisation`, `period`, and `description` appear as visible text.
    - **Property 3**: Assert sorted order is non-ascending by `(startYear, startMonth)`.
    - **Property 5**: Assert exactly one `<h2>` with non-empty text.
    - **Property 6**: Assert `aria-labelledby` on `<section>` matches `<h2>` `id`.
    - Run 100 iterations.
    - **Validates: Requirements 8.1, 8.2, 8.3, 8.4, 12.3**
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 12.3_

- [ ] 23. TrainingSection component tests
  - [ ]* 23.1 Write property tests for TrainingSection (Properties 1, 2, 4, 5, 6)
    - Create `src/__tests__/components/TrainingSection.test.tsx`.
    - Use `fc.array(arbitraryCertificate(), { minLength: 1, maxLength: 20 })`.
    - **Property 1**: Assert all certificate entries produce rendered output.
    - **Property 2**: Assert `name`, `issuingOrganisation`, and `completionDate` appear as visible text.
    - **Property 4**: When `credentialUrl` is defined, assert an `<a>` with matching `href` is present; when undefined, assert no such link.
    - **Property 5**: Assert exactly one `<h2>` with non-empty text.
    - **Property 6**: Assert `aria-labelledby` on `<section>` matches `<h2>` `id`.
    - Run 100 iterations.
    - **Validates: Requirements 9.1, 9.2, 9.4, 9.5, 12.3**
    - _Requirements: 9.1, 9.2, 9.4, 9.5, 12.3_

- [ ] 24. AboutSection component tests
  - [ ]* 24.1 Write property tests for AboutSection (Properties 2, 5, 6)
    - Create `src/__tests__/components/AboutSection.test.tsx`.
    - Use `fc.record({ biography: fc.string({ minLength: 1 }), profileImage: arbitraryImage() })`.
    - **Property 2**: Assert `biography` text appears in rendered output.
    - **Property 5**: Assert exactly one `<h2>` with non-empty text.
    - **Property 6**: Assert `aria-labelledby` on `<section>` matches `<h2>` `id`.
    - Run 100 iterations.
    - **Validates: Requirements 4.1, 4.4, 12.3**
    - _Requirements: 4.1, 4.4, 12.3_

- [ ] 25. NavBar component tests
  - [ ]* 25.1 Write property test for active navigation link exclusivity (Property 7)
    - Create `src/__tests__/components/NavBar.test.tsx`.
    - **Property 7**: For any `activeSection` string that matches one of the nine nav item `href` values, render NavBar with that state and assert exactly one nav link has the active CSS class, and that link's `href` equals `#<activeSection>`.
    - Tag: `// Feature: portfolio-website, Property 7: active navigation link exclusivity`
    - Run 100 iterations.
    - **Property 7: Active Navigation Link Exclusivity**
    - **Validates: Requirements 2.9**
    - _Requirements: 2.9_

  - [ ]* 25.2 Write example-based tests for NavBar
    - Assert NavBar renders exactly nine nav links with labels: Home, About, Education, Skills, Projects, Experience, Training, CV, Contact (Requirement 2.2).
    - Assert the hamburger button has `aria-expanded` attribute (Requirement 2.7).
    - Assert all nav links are `<a>` elements with non-empty `href` attributes (Requirement 2.5).
    - _Requirements: 2.2, 2.5, 2.7_

- [ ] 26. Remaining example-based component tests
  - [ ]* 26.1 Write example-based tests for CVSection and ContactSection
    - Create `src/__tests__/components/CVSection.test.tsx`: assert CV download link has `download` attribute and a descriptive `aria-label`, section has `aria-labelledby`, one `<h2>` present.
    - Create `src/__tests__/components/ContactSection.test.tsx`: assert LinkedIn/GitHub links have `target="_blank"` and `rel="noopener noreferrer"`, email link is a `mailto:` href, all links have `aria-label`, section has `aria-labelledby`.
    - _Requirements: 10.2, 10.5, 11.4, 11.6, 11.7, 12.3_

  - [ ]* 26.2 Write example-based tests for HeroSection and root layout
    - Create `src/__tests__/components/HeroSection.test.tsx`: assert `<h1>` contains "Tasnem Moura", "Download CV" link has `download` attribute, "Get in Touch" link href is `#contact`, section has `aria-labelledby`.
    - Create `src/__tests__/components/layout.test.tsx` (or equivalent): assert `<html>` has `lang="en"`, `<title>` is set, `<meta name="description">` is present.
    - _Requirements: 3.1, 3.4, 3.5, 14.3, 14.4_

- [ ] 27. Accessibility smoke tests
  - [ ]* 27.1 Run axe-core against all section components
    - In each component test file, add an `axe` accessibility check using `jest-axe` / `vitest-axe` against a rendered example of each section component.
    - Assert `expect(results).toHaveNoViolations()`.
    - This catches automated WCAG 2.1 AA violations (colour contrast, ARIA roles, landmark structure).
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7_

- [ ] 28. Final checkpoint — All tests, lint, and build pass
  - Run `vitest --run` and confirm all tests pass (or all non-optional tests pass).
  - Run `npm run lint` and confirm zero errors.
  - Run `tsc --noEmit` and confirm zero TypeScript errors.
  - Run `next build` and confirm a successful production build.
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP build; the site will be functionally complete without them.
- Tasks 17.1 through 27.1 depend on task 16.1 (test infrastructure) being complete.
- The `page.tsx` wiring tasks (6.2, 7.2, 8.3, 9.3, 10.3, 11.3, 12.3, 13.2, 14.2) can each be done immediately after the corresponding section component is built.
- Property tests reference the eight correctness properties defined in `design.md` §Correctness Properties.
- Each property test must include a comment tag in the format: `// Feature: portfolio-website, Property N: <title>`.
- All components must use CSS Modules only — no Tailwind, no styled-components, no inline `style={}`.
- Use `next/image` for all images; never use `<img>` directly in application components.
- The `"use client"` directive must appear only in `NavBar.tsx`.

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["2.1", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8"] },
    { "id": 1, "tasks": ["4.1", "4.2", "5.1"] },
    { "id": 2, "tasks": ["6.1", "7.1", "8.1", "9.1", "10.1", "11.1", "12.1", "13.1", "14.1"] },
    { "id": 3, "tasks": ["8.2", "9.2", "10.2", "11.2", "12.2"] },
    { "id": 4, "tasks": ["6.2", "7.2", "8.3", "9.3", "10.3", "11.3", "12.3", "13.2", "14.2"] },
    { "id": 5, "tasks": ["16.1"] },
    { "id": 6, "tasks": ["17.1"] },
    { "id": 7, "tasks": ["17.2", "18.1", "19.1", "20.1", "21.1", "22.1", "23.1", "24.1", "25.1", "25.2", "26.1", "26.2"] },
    { "id": 8, "tasks": ["27.1"] }
  ]
}
```
