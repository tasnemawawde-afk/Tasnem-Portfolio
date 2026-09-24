# Requirements Document

## Introduction

A professional one-page personal portfolio website for Tasnem Moura, an Electrical and Computer Engineering graduate specialising in VLSI, microelectronics, digital systems, and hardware engineering. The site serves as a professional complement to her CV, targeting recruiters, hiring managers, and engineering teams. It presents her background, projects, skills, experience, education, training, and contact information in a clean, accessible, and responsive format suitable for sharing with potential employers.

---

## Glossary

- **Portfolio_Site**: The Next.js web application that constitutes Tasnem's personal portfolio website.
- **Visitor**: Any person who opens the Portfolio_Site in a web browser, including recruiters, hiring managers, and engineering teams.
- **Hero_Section**: The topmost visible area of the page containing Tasnem's name, title, and a primary call-to-action.
- **About_Section**: The section presenting a short professional biography of Tasnem.
- **Education_Section**: The section listing Tasnem's academic qualifications.
- **Skills_Section**: The section displaying Tasnem's technical skills organised by category.
- **Projects_Section**: The section showcasing Tasnem's notable engineering projects.
- **Experience_Section**: The section listing Tasnem's professional work experience.
- **Training_Section**: The section listing Tasnem's training courses and certificates.
- **CV_Section**: The section providing a link to download Tasnem's CV.
- **Contact_Section**: The section providing Tasnem's contact details and external profile links.
- **Navigation_Bar**: The persistent top navigation component that links to each section of the page.
- **Content_Layer**: The set of TypeScript data files located in `src/content/` that store all portfolio data separately from presentation components.
- **Presentation_Component**: A React component located in `src/components/` whose sole responsibility is to render data passed to it as props.
- **Design_Token**: A CSS custom property defined in `globals.css` representing a reusable value such as a colour, spacing unit, or font size.
- **WCAG_2.1_AA**: The Web Content Accessibility Guidelines version 2.1 at Level AA conformance, the accessibility standard the Portfolio_Site must meet.

---

## Requirements

### Requirement 1: Site Architecture and Content Separation

**User Story:** As a developer maintaining the site, I want all portfolio data stored separately from UI components, so that content can be updated without touching presentation code.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL store all portfolio content — including projects, skills, experience, education, and certificates — exclusively in TypeScript files under `src/content/`, never hard-coded inside Presentation_Components.
2. THE Portfolio_Site SHALL define typed data structures for each content category: `projects.ts`, `skills.ts`, `experience.ts`, `education.ts`, and `certificates.ts`, with each file exporting its data as a typed array or typed object.
3. THE Portfolio_Site SHALL use Next.js App Router with the root layout defined in `src/app/layout.tsx` and the main page in `src/app/page.tsx`, and SHALL NOT define additional page-level routes unless explicitly specified.
4. THE Portfolio_Site SHALL use React Server Components by default and SHALL apply the `"use client"` directive only to components that require browser APIs, state, or effects.
5. THE Portfolio_Site SHALL use CSS Modules (`ComponentName.module.css`) for component-scoped styles and SHALL define all shared Design_Tokens as CSS custom properties in `src/app/globals.css`.
6. IF any component uses Tailwind CSS, styled-components, or inline `style` attributes, THEN the Portfolio_Site SHALL be considered non-compliant and those usages SHALL be removed.
7. THE Portfolio_Site SHALL use a system font stack and SHALL NOT load fonts from any external font service URL.
8. THE Portfolio_Site SHALL ensure that Presentation_Components receive all portfolio content exclusively through typed props. Page components and section-level container components MAY import data directly from `src/content/` files and SHALL pass that data to Presentation_Components as props. Presentation_Components SHALL NOT import from `src/content/`, from API calls, or from inline literal values.

---

### Requirement 2: Navigation

**User Story:** As a Visitor, I want a clear navigation bar, so that I can quickly jump to any section of the portfolio without scrolling manually.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL be visible at all times as a Visitor scrolls through the Portfolio_Site.
2. THE Navigation_Bar SHALL contain labelled links to each of the following sections: Hero, About, Education, Skills, Projects, Experience, Training, CV, and Contact.
3. WHEN a Visitor activates a Navigation_Bar link, THE Portfolio_Site SHALL scroll the page to the corresponding section and SHALL update the URL anchor to reflect the target section's id.
4. WHEN a Visitor activates a Navigation_Bar link for the section already in view, THE Portfolio_Site SHALL take no visible action and the page position SHALL remain unchanged.
5. THE Navigation_Bar SHALL be keyboard navigable so that a Visitor can move between links using the Tab key and activate a link using the Enter key.
6. THE Navigation_Bar SHALL be fully usable on both mobile and desktop viewport widths.
7. WHERE a mobile viewport is detected (viewport width below 768px), THE Navigation_Bar SHALL collapse all navigation links into a hidden state and display a single toggle control; WHEN the toggle control is activated, THE Navigation_Bar SHALL expand the navigation links into a visible menu that does not overlap or obscure page content.
8. WHEN a Visitor activates a Navigation_Bar link on a mobile viewport, THE Navigation_Bar SHALL collapse the navigation menu back to its hidden state.
9. WHILE a section occupies the primary viewport during scrolling, THE Navigation_Bar SHALL apply a visually distinct active style to the corresponding navigation link to indicate the current section.

---

### Requirement 3: Hero Section

**User Story:** As a Visitor, I want to immediately see Tasnem's name, title, and a call-to-action when I land on the page, so that I understand who she is and what I can do next.

#### Acceptance Criteria

1. THE Hero_Section SHALL display Tasnem's full name "Tasnem Moura" as the primary heading using an `<h1>` element.
2. THE Hero_Section SHALL display her professional title as "Electrical & Computer Engineer" or equivalent text that explicitly references Electrical and Computer Engineering.
3. THE Hero_Section SHALL display a tagline or summary of no more than 30 words describing her engineering focus areas including VLSI, microelectronics, digital systems, and hardware engineering.
4. THE Hero_Section SHALL provide a call-to-action button or link that allows a Visitor to navigate to the Contact_Section.
5. THE Hero_Section SHALL provide a call-to-action button or link labelled "Download CV" or equivalent that, when activated, SHALL initiate a download of the CV file stored in `public/resume/` using the HTML `download` attribute.
6. WHEN the Portfolio_Site is viewed on a desktop viewport (width 1024px and above), THE Hero_Section SHALL render at full viewport height (100vh).
7. WHEN the Portfolio_Site is viewed on a viewport width below 768px, THE Hero_Section SHALL render with a minimum height of 480px.

---

### Requirement 4: About Section

**User Story:** As a Visitor, I want to read a short professional biography of Tasnem, so that I can understand her background and engineering focus before reviewing her work.

#### Acceptance Criteria

1. THE About_Section SHALL display a professional biography stored in the Content_Layer.
2. THE About_Section SHALL include a profile photograph displayed using `next/image` with explicit `width`, `height`, and a meaningful `alt` attribute.
3. THE About_Section SHALL present information about Tasnem's engineering specialisations including VLSI, microelectronics, digital systems, and hardware engineering.
4. THE About_Section SHALL be labelled with a visible section heading.

---

### Requirement 5: Education Section

**User Story:** As a Visitor, I want to see Tasnem's academic qualifications, so that I can assess her educational background.

#### Acceptance Criteria

1. THE Education_Section SHALL display all academic qualifications stored in `src/content/education.ts`.
2. WHEN rendering an education entry, THE Education_Section SHALL display the institution name, degree title, field of study, and graduation year.
3. THE Education_Section SHALL present education entries in reverse chronological order, with the most recent qualification first.
4. THE Education_Section SHALL be labelled with a visible section heading.

---

### Requirement 6: Technical Skills Section

**User Story:** As a Visitor, I want to see Tasnem's technical skills organised by category, so that I can quickly identify relevant expertise.

#### Acceptance Criteria

1. THE Skills_Section SHALL display all technical skills stored in `src/content/skills.ts`.
2. THE Skills_Section SHALL group skills into named categories such as Hardware & VLSI, Programming Languages, Tools & Software, and AI & Machine Learning.
3. WHEN rendering a skill category, THE Skills_Section SHALL display the category name and the list of skills within it.
4. THE Skills_Section SHALL be labelled with a visible section heading.
5. THE Skills_Section SHALL present skill categories in a layout that is readable on both mobile and desktop viewports.

---

### Requirement 7: Projects Section

**User Story:** As a Visitor, I want to see Tasnem's notable engineering projects with enough detail to understand their scope and her contribution, so that I can evaluate her practical experience.

#### Acceptance Criteria

1. THE Projects_Section SHALL display all projects stored in `src/content/projects.ts`.
2. WHEN rendering a project entry, THE Projects_Section SHALL display the project title, a description, the technologies and tools used, and the project type or domain.
3. THE Projects_Section SHALL include an entry for the Two-Step Time-Domain ADC project describing its role as an analogue-to-digital converter design using time-domain signal processing techniques.
4. THE Projects_Section SHALL include an entry for the MEMS-Based Optical System project describing its role as a micro-electromechanical systems design for optical applications.
5. WHERE a project has an associated external link such as a GitHub repository, THE Projects_Section SHALL render a labelled link to that resource.
6. WHERE a project has an associated image, THE Projects_Section SHALL render the image using `next/image` with explicit `width`, `height`, and a meaningful `alt` attribute.
7. THE Projects_Section SHALL be labelled with a visible section heading.

---

### Requirement 8: Experience Section

**User Story:** As a Visitor, I want to see Tasnem's professional work experience, so that I can assess her industry background.

#### Acceptance Criteria

1. THE Experience_Section SHALL display all experience entries stored in `src/content/experience.ts`.
2. WHEN rendering an experience entry, THE Experience_Section SHALL display the job title, organisation name, employment period, and a description of responsibilities or achievements.
3. THE Experience_Section SHALL present experience entries in reverse chronological order, with the most recent role first.
4. THE Experience_Section SHALL be labelled with a visible section heading.

---

### Requirement 9: Training and Certificates Section

**User Story:** As a Visitor, I want to see Tasnem's training courses and certificates, so that I can identify her professional development in specialised areas.

#### Acceptance Criteria

1. THE Training_Section SHALL display all training and certificate entries stored in `src/content/certificates.ts`.
2. WHEN rendering a training entry, THE Training_Section SHALL display the course or certificate name, the issuing organisation, and the completion date or year.
3. THE Training_Section SHALL include entries that reference VLSI-related training, NVIDIA training, and AI-related training.
4. WHERE a certificate has a verifiable credential link, THE Training_Section SHALL render a labelled link to that credential.
5. THE Training_Section SHALL be labelled with a visible section heading.

---

### Requirement 10: CV Download Section

**User Story:** As a Visitor, I want to view or download Tasnem's CV from the portfolio, so that I can save or share her credentials without requesting a separate file.

#### Acceptance Criteria

1. THE CV_Section SHALL provide a clearly labelled link or button that allows a Visitor to download Tasnem's CV.
2. WHEN a Visitor activates the CV download link, THE Portfolio_Site SHALL initiate a download of the CV file stored in `public/resume/` using the HTML `download` attribute, causing the browser to save the file rather than navigate to it or open it in a new tab.
3. THE CV_Section SHALL display a brief prompt indicating that the CV is available for download.
4. THE CV_Section SHALL be labelled with a visible section heading.
5. THE CV download link SHALL be keyboard accessible and SHALL have a descriptive accessible label indicating that it downloads the CV.

---

### Requirement 11: Contact Section

**User Story:** As a Visitor, I want to find Tasnem's contact details and external profile links in one place, so that I can reach out to her directly or view her professional profiles.

#### Acceptance Criteria

1. THE Contact_Section SHALL display a link to Tasnem's LinkedIn profile.
2. THE Contact_Section SHALL display a link to Tasnem's GitHub profile.
3. THE Contact_Section SHALL display Tasnem's email address as a `mailto:` link.
4. WHEN a Visitor activates the LinkedIn or GitHub link, THE Portfolio_Site SHALL open the target URL in a new browser tab.
5. THE Contact_Section SHALL be labelled with a visible section heading.
6. ALL external links in the Contact_Section SHALL include `rel="noopener noreferrer"` to prevent opener access from the linked page.
7. ALL links in the Contact_Section SHALL have descriptive accessible labels that identify the destination or action.

---

### Requirement 12: Accessibility

**User Story:** As a Visitor using assistive technology, I want the portfolio to be fully navigable and understandable, so that I can access all content regardless of how I interact with the page.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL conform to WCAG_2.1_AA for all content and interactive elements.
2. THE Portfolio_Site SHALL use semantic HTML5 landmark elements — `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` — to structure the page.
3. EVERY `<section>` element in the Portfolio_Site SHALL have an associated accessible name provided via an `aria-labelledby` attribute referencing its heading element.
4. ALL images rendered by the Portfolio_Site SHALL include meaningful `alt` text; decorative images SHALL use an empty `alt=""` attribute.
5. ALL interactive elements in the Portfolio_Site SHALL be reachable and operable via keyboard navigation.
6. THE Portfolio_Site SHALL maintain a colour contrast ratio of at least 4.5:1 between foreground text and its background for normal text, and at least 3:1 for large text, as defined by WCAG_2.1_AA.
7. THE Portfolio_Site SHALL preserve a logical focus order that matches the visual reading order of the page.

---

### Requirement 13: Responsive Design

**User Story:** As a Visitor on a mobile device, I want the portfolio to be readable and fully functional, so that I can review Tasnem's profile from any device.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL apply a mobile-first CSS strategy where base styles target small viewports and media queries add styles for larger viewports.
2. THE Portfolio_Site SHALL render all sections without horizontal scroll or content overflow on viewport widths from 320px upwards.
3. THE Portfolio_Site SHALL adjust typographic scale, spacing, and layout at defined responsive breakpoints stored as Design_Tokens so that content remains readable at all viewport sizes.
4. ALL images in the Portfolio_Site SHALL be responsive and SHALL NOT exceed their container width on any viewport size.
5. WHILE a Visitor views the Portfolio_Site on a touch device, THE Portfolio_Site SHALL ensure all interactive tap targets are at least 44×44 CSS pixels.

---

### Requirement 14: Performance and Technical Quality

**User Story:** As a Visitor, I want the portfolio to load quickly and run without errors, so that I have a smooth browsing experience.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL pass `npm run lint` with zero errors before deployment.
2. ALL `next/image` usages in the Portfolio_Site SHALL include explicit `width` and `height` attributes to prevent cumulative layout shift.
3. THE Portfolio_Site SHALL define a descriptive `<title>` and `<meta name="description">` in the root layout so that the page is identifiable in browser tabs and search engine previews.
4. THE Portfolio_Site SHALL set the HTML `lang` attribute on the root `<html>` element to the appropriate language code.
