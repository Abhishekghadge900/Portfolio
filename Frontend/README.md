# Portfolio – Frontend

Personal portfolio for Abhishek Ghadge, built with React 18, Vite and Tailwind CSS v4.
Live at https://abhishek-ghadge.vercel.app.

## Setup

```bash
npm install
cp .env.example .env   # set VITE_API_BASE_URL if you run the backend locally
npm run dev
```

## Scripts

| Command           | Purpose                         |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the Vite dev server       |
| `npm run build`   | Production build into `dist/`   |
| `npm run preview` | Serve the production build      |
| `npm run lint`    | Run ESLint                      |

## Structure

- `src/components/` – page sections (Navbar, Hero, About, Skills, Projects, Contact, Footer)
- `src/data/` – editable content (see below)
- `src/ReactBits/` – animated components installed from https://reactbits.dev
- `src/api.js` – backend endpoint configuration
- `src/ui.js` – shared Tailwind class strings

The contact form posts to the Express backend in `../server`.

## Updating content

| What                          | Where                                                                 |
| ----------------------------- | --------------------------------------------------------------------- |
| Resume PDF                    | Replace `public/resume.pdf` (keep the filename)                        |
| Resume download name          | `RESUME_FILENAME` in `src/data/site.js`                                |
| Project text, bullets, links  | `src/data/projects.js` (`highlights` are placeholders, `demoLink` is `null` until deployed) |
| Project screenshots           | Replace `public/projects/<id>.webp` (1200x675, WebP preferred)         |
| Email, location, social links | `src/data/site.js`                                                     |
| Profile image                 | Replace `public/profile.webp` (square, 640x640 recommended)            |
| Nav sections                  | `src/navItems.js` (ids must match the `<section id>` in `App.jsx`)     |
| Site title, meta, OG tags     | `index.html`                                                           |

Tip for screenshots: open the deployed project in Chrome at a 1200px-wide window, take a screenshot
(DevTools → Ctrl+Shift+P → "Capture screenshot"), then convert to WebP with
https://squoosh.app and save it over the placeholder.
