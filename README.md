## About this project

### Youtube API
Obtain your api key from: https://developers.google.com/youtube/

The API is stored in the .env file, and in the github secrets under settings.

The APIs use process.env from the runtimeConfig inside the nuxt.config.ts

## Website

This website pulls data from the youtube API and renders two pages:

Index.vue: This is the home page and renders the components, which have the thumbnail image, title, and publication date

[playlist]/[videoid].vue renders the embedded video, title, and description. On the right column, it renders one component of videos

## Components
The components/youtube-channels contains a variety of channels. Each one has their own unique playlist ID.

The Navbar component is located here as well.

## Layout
Nuxt uses the default.vue to use the same layout accross the entire website

> Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
