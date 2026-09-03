# PMM Knowledge Base: Web App

A read-only web interface for the Product Marketing Knowledge Base, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

The app reads the markdown files in `frameworks/` and `concepts/` at build time, splits them on H2 boundaries, and generates static pages for every entry and category. The markdown files remain the single source of truth; the web app is a view layer only.

## Production build

```bash
npm run build
npm start
```

Generates 78 static HTML pages (homepage, 10 categories, 66 entries, 404).
