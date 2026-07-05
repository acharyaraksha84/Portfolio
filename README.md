# Shriraksha P Acharya — Editorial Portfolio

A monochrome, editorial, luxury-brand-style portfolio. React, TypeScript, Vite, Tailwind CSS, Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 (or the port Vite prints).

## Build for production

```bash
npm run build
npm run preview
```

## Customize your content

Everything you'll want to edit lives in:

```
src/data/content.ts
```

Name, roles, statement, bio, education, location, availability, skills, experience, projects, and contact info.

## Add your portrait and resume

- The hero's center column has a placeholder portrait block in `src/components/sections/Hero.tsx` (the `Portrait` component). Drop a **grayscale** photo at `public/portrait.jpg` and replace the placeholder `<div>` with an `<img src="/portrait.jpg" className="h-full w-full object-cover" />`. For the desaturated look, either export the photo in black & white, or add `className="... grayscale"` to the image.
- Drop your resume PDF at `public/resume.pdf` — the Resume buttons already link to `/resume.pdf`.

## Wire up the contact form

`src/components/sections/Contact.tsx` has a UI-only form. Connect `handleSubmit` to Formspree, Resend, or your own backend.

## Design system

- **Palette:** strictly monochrome — `#0A0A0A` background, `#111111` secondary, `#171717` cards, white text, `#A1A1AA` muted text, `#D4D4D4` as the only "accent" (used sparingly, e.g. the last-name highlight in the hero).
- **Type:** Inter, used at two extremes — huge/bold display sizes (`text-hero`, `text-display` in `tailwind.config.ts`) and wide-tracked uppercase labels (`.label-eyebrow` in `index.css`) for an editorial contrast.
- **Signature element:** the hero's center portrait column, which visually overlaps into the About section below it via a negative top margin — echoing the "image overlaps the layout" instruction in the brief.

## Folder structure

```
src/
  components/
    layout/     # Navbar, Footer, scroll progress, loading screen, scroll-to-top
    sections/   # Hero, About, Projects, Experience, Skills, Contact
    ui/         # Reveal, SectionHeading, MagneticButton, Chip
  data/         # content.ts — all copy and structured data
  hooks/        # useActiveSection, useMagnetic, useCounter
  types/        # shared TypeScript interfaces
```

## Deploy

Works out of the box on Vercel, Netlify, or GitHub Pages. Build output goes to `dist/`.
