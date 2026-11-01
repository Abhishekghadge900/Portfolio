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
- `src/ReactBits/` – animated components installed from https://reactbits.dev
- `src/api.js` – backend endpoint configuration
- `src/ui.js` – shared Tailwind class strings

The contact form posts to the Express backend in `../server`.
