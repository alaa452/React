# Repository Guidelines

This repository contains a React 19 storefront built with Vite, Material UI, React Router, TanStack Query, and Zustand. It includes product browsing, authentication, cart, checkout, and profile pages.

## Project Structure & Module Organization

- `src/main.jsx` mounts the app; `src/App.jsx` composes providers, and `src/router.jsx` defines routes.
- `src/pages/` contains feature pages; `src/component/` holds reusable UI, and `src/layout/` contains shared layouts. Preserve the existing singular directory names.
- `src/hook/` contains data-fetching and mutation hooks; `src/api/` configures Axios clients; `src/store/` and `src/context/` manage shared state.
- `src/validations/` holds Yup schemas. `src/theme.jsx` defines theming, and `src/i18next.jsx` configures translations.
- `src/image/` contains imported images; `public/` contains static assets. No automated test directory currently exists.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite development server.
- `npm run build`: generate the production bundle in `dist/`.
- `npm run preview`: serve the production build locally after building.
- `npm run lint`: run ESLint across JavaScript and JSX files.

## Coding Style & Naming Conventions

Use JavaScript ES modules and functional React components. Prefer two-space indentation for new code; match surrounding quote and semicolon styles when editing existing files. No Prettier configuration is present.

Use PascalCase for component names and files, such as `ProductDetails.jsx`, and camelCase with a `use` prefix for hooks and stores, such as `useProducts.jsx`. Reuse existing Axios clients, query hooks, MUI components, and translation keys. ESLint enforces recommended JavaScript, React Hooks, and React Refresh rules.

## Testing Guidelines

No test runner, `npm test` script, or coverage threshold is configured. Run lint and build checks before submitting changes, and report any failures. Manually verify affected routes, loading/error states, authentication, cart behavior, language switching, and responsive layouts as applicable. If adding automated tests, document the runner and command and use descriptive `*.test.jsx` or `*.test.js` filenames.

## Commit & Pull Request Guidelines

History uses short, informal messages such as `add the profile page`; no strict commit format is established. Prefer concise, action-oriented messages describing the affected feature.

Pull requests should explain the change, link relevant issues, list verification performed, and include screenshots for visible UI changes. Keep changes focused.

## Configuration & Security

Set `VITE_BURL` in a local environment file to the backend base URL. Vite-prefixed variables are exposed to the browser; never place secrets in them or commit credentials and access tokens.
