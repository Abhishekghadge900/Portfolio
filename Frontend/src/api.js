// Vite only exposes env vars prefixed with VITE_. Set VITE_API_BASE_URL in
// Frontend/.env (see .env.example); the deployed backend is the fallback.
const BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://portfolio-backend-lemon-zeta.vercel.app"
).replace(/\/$/, "");

export const contactusEndpoint = {
  CONTACT_US_API: `${BASE_URL}/api/v1/reach/contact`,
};
