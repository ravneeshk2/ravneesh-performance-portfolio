# Ravneesh Kumar — Performance Marketing Portfolio

A responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Sections
- Home / Hero
- About Me
- Skills & Tools
- Projects
- Services
- Brands
- Contact

## Run locally

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalise before publishing

Search the project for these placeholders and replace them:
- `YOUR_EMAIL@example.com` — your professional email address
- `YOUR-LINKEDIN` — your LinkedIn profile URL
- `ravneeshkumar.vercel.app` in `app/layout.tsx` — update if you use a different domain

Also review:
- `components/portfolio.tsx` for the brand details, market labels, services and project descriptions.
- The 3.5+ years experience figure and all claims for accuracy before publishing.
- The LK-EA market label currently says "Market details to confirm"; update it if you want to specify the market.

## Deploy to Vercel

### Option A — GitHub (recommended)
1. Create a new repository on GitHub.
2. Upload the contents of this folder to the repository (the files inside this folder, not the ZIP itself).
3. Sign in to Vercel with GitHub.
4. Select **Add New → Project**, import this repository.
5. Keep the detected Next.js framework settings and click **Deploy**.
6. After deployment, open **Settings → Domains** to add a custom domain if you have one.

### Option B — Vercel CLI
```bash
npm install
npm run build
npm install -g vercel
vercel
```

## Notes
- Brand names are presented as professional experience, not as official endorsements.
- The portfolio intentionally does not invent campaign results, budgets or ROAS figures. Add verified and client-approved metrics to the project cards when available.
- Brand marks are typographic placeholders. Replace them with approved official logo assets if you have permission to use them.
