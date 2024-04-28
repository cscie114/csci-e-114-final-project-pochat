export default defineNuxtConfig({
  devtools: { enabled: true }, // Optional: Enables developer tools in Nuxt
  modules: [
    "@nuxtjs/tailwindcss", // Enables Tailwind CSS integration
    "@nuxt/eslint",        // Enables ESLint integration
    "@nuxt/test-utils/module" // Enables test utils for unit testing
  ],

  build: {
    ssr: false // Enables Static Site Generation (SSG)
  },

  runtimeConfig: {
    public: {
      youTubeApi: process.env.YOUTUBE_API, // Exposes YouTube API key
      channelId: process.env.CHANNEL_ID,   // (Optional) Additional config
      uploadsId: process.env.UPLOADS_ID,    // (Optional) Additional config
    }
  }
})
