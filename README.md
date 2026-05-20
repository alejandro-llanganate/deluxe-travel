# Deluxe Travel Ecuador

Sitio web de paquetes y tours por Ecuador. React + GitHub Pages.

**Sitio publicado:** https://alejandro-llanganate.github.io/deluxe-travel

## Desarrollo local

```bash
npm install
npm start
```

Coloca el video del hero en `public/assets/video/hero-amazon.mp4` (no está en Git por su tamaño).

## Publicar en GitHub Pages

### Opción A — GitHub Actions (recomendada)

1. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Sube los cambios a `main`; el workflow `.github/workflows/deploy-pages.yml` despliega solo.

### Opción B — Rama `gh-pages`

```bash
npm run deploy
```

## Build de producción

```bash
npm run build
```

La URL base (`/deluxe-travel`) está en `package.json` → `homepage`.
