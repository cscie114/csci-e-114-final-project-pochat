// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/test-utils/module"
  ],

  runtimeConfig: {
    public: {
      youTubeApi: process.env.YOUTUBE_API,
      channelId: process.env.CHANNEL_ID,
      uploadsId: process.env.UPLOADS_ID,
    }
  }
})

