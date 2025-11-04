# HelioSense Webpage

A Vite + React + TypeScript + Tailwind (shadcn/ui) dashboard for the HelioSense solar tracking project.

## Prerequisites
- Node.js 18+ and npm

## Install
```powershell
# From the Webpage folder
cd c:\suntrek\Webpage
npm install
```

## Development
```powershell
npm run dev
# Then open the URL shown (usually http://localhost:5173)
```

## Production build + preview
```powershell
npm run build
npm run preview -- --port 8080
# Preview will start on http://localhost:8080
```

## Notes
- Alias `@` points to `src/`
- If you see missing import errors, ensure the `src/hooks/use-toast.ts` and `src/lib/utils.ts` files exist (added here).
- Tailwind tokens are defined in `src/index.css`.
