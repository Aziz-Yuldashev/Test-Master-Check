# Project Name

## How to start dev mode

      yarn
      yarn run dev

## How to buil app

    yarn run build

## Technologies

<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/><img src="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original.svg" title="Eslint" alt="Eslint" width="40" height="40"/><img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>

## Libraries

-   jwt-decode
-   react-date-range
-   react-hook-form
-   react-helmet
-   dayjs
-   axios
-   @chakra-ui/react

## File Structure

```
├── public
│   └── logo.ico
├── src
│   ├── assets
|   |    ├── fonts
|   |    └── images
│   ├── components
|   |     ├── UI
|   |     └── shared
│   ├──  pages
|   |     ├── 404.tsx
|   |     ├── Home.tsx
|   |     └── Login.tsx
│   ├── utils
|   |     ├── constants
|   |     ├── helpers
|   |     ├── providers
|   |     ├── services
|   |     ├── types
|   |     └── AppRouter.tsx
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── tests
├── vite.config.ts
└── README.md
```

## Recommendation

Generally we have a few rules the response has to follow:

-   Keys should always be returned as camelCase.
-   Code splitting
-   Use Types, not interfaces
-   Add comments for new function or complement them
-   We try to use as few libraries as possible
-   If your code repites twice or more then use this function like helper
-   We try not to use css files, use dynamic styles or style.module.css
