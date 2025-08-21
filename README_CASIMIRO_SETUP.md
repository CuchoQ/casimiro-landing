# Casimiro Landing (React + Vite + Tailwind + shadcn/ui)

Sigue la guía que te pasé. Este paquete incluye:
- Configs de Tailwind, PostCSS, Vite (alias @), tsconfig paths.
- Utilidad `cn()`.
- Componentes de `components/ui` normalizados (sin imports con versión).
- Correcciones de `motion/react` -> `framer-motion`.
- Reemplazo de `figma:asset/...` por imágenes de `/src/assets` (placeholders).

## Pasos
1) Crear proyecto base con Vite (o copia esta carpeta como base).
2) Instalar dependencias:
```
npm i -D tailwindcss postcss autoprefixer tailwindcss-animate
npm i class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-slot framer-motion
npm i @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```
3) `npm run dev`
