# The Legal Chamber

The Legal Chamber is a modern marketing and information site for a law firm, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It ships with shadcn-inspired UI components, reusable animations, and a content-ready structure so you can publish practice areas, notable judgements, news, and more with minimal setup.

---

## Highlights
- App Router + React Server Components for fast, scalable pages
- Tailwind CSS with custom utility plugins and animated UI patterns
- Reusable sections for practice areas, team, testimonials, resources, and CMS-ready routes
- Sanity integration scaffolding (`sanity/` + `src/app/admin/studio`) for headless content management
- Accessible, mobile-first layout, including navbar, hero, and CTA blocks tailored to legal services

---

## Tech Stack
- Next.js ^14.1.0 / React 18
- TypeScript ^5
- Tailwind CSS ^3 with `tailwindcss-animate`
- shadcn-style component registry (`components.json`)
- Framer Motion, lucide-react, @tabler/icons-react
- ESLint (`next/core-web-vitals`)

Recommended Node.js version: **18+ LTS**

---

## Getting Started

```bash
git clone https://github.com/<your-user>/The-Legal-Chamber.git
cd The-Legal-Chamber
npm install
npm run dev
```

Visit `http://localhost:3000` to preview the site.

### Production build
```bash
npm run build
npm run start
```

---

## Available Scripts
- `npm run dev` – start Next.js in development
- `npm run build` – compile the production bundle
- `npm run start` – serve the production build
- `npm run lint` – run ESLint/Next checks

---

## Configuration & Environment
- Create local environment files in `.env.local` (these are gitignored). Typical values include Sanity credentials or auth secrets for the admin routes.
- External image domains are configured in `next.config.mjs`. Add any additional hosts your content needs.
- Tailwind customization lives in `tailwind.config.ts`, including generated CSS variables and SVG background utilities (`bg-grid`, `bg-dot`, etc.).

---

## Project Structure
```
public/           Static assets (hero media, course imagery, icons)
src/
  app/            App Router routes (marketing pages, admin, API routes)
  components/     UI primitives and composed sections
  data/           Sample JSON data for demos
  hooks/, lib/, utils/   Shared logic and helpers
sanity/           Studio configuration and schema definitions
```

Key root files:
- `package.json`, `tsconfig.json`, `next.config.mjs`
- `tailwind.config.ts`, `postcss.config.js`
- `components.json` – shadcn registry + path aliases

---

## Deployment
- Optimized for Vercel, but any Node-compatible host works.
- Set the same environment variables in your hosting provider before deploying.
- Build command: `npm run build`
- Start command: `npm run start`

---

## Contributing
1. Create a feature branch from `main`.
2. Make focused changes and include tests/fixtures if applicable.
3. Run `npm run lint` and ensure the app compiles.
4. Open a pull request with a summary of changes and testing notes.

No LICENSE is included yet—add one (MIT, Apache-2.0, etc.) before making the project public.

---

Need help customizing the content, wiring Sanity, or publishing to GitHub Pages/Vercel? Open an issue or reach out to the maintainer of your fork.

