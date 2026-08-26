# Jean Puccio — Portafolio

Portafolio profesional desarrollado con Next.js, React, TypeScript y Motion.

**Sitio:** https://drexloan15.github.io/drexloan15/

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Verificación

```bash
npm run typecheck
npm run build
```

La compilación genera una exportación estática en `out/`.

## Estructura

```text
app/                    Página, metadatos y estilos globales
components/             Navegación, portada, proyectos y animaciones
data/portfolio.ts       Contenido estructurado del portafolio
public/                 Archivos estáticos
.github/workflows/      Publicación automática en GitHub Pages
```

## Características

- App Router y componentes de servidor/cliente
- Animaciones con Motion y alternativas para movimiento reducido
- Tema claro y oscuro persistente
- Diseño responsive con composiciones editoriales y bloques bento
- Metadatos SEO, JSON-LD, sitemap y robots
- Exportación estática compatible con GitHub Pages

El proyecto vive dentro de `portfolio/` en el repositorio de perfil. Cada push a `main` ejecuta la compilación y publica el contenido de `out/` mediante GitHub Actions.
