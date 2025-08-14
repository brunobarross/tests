// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@pinia/nuxt",
    "nuxt-auth-utils",
  ],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_API_BASE,
    },
    proxy: {
      "/api": "http://localhost:8080"
    },
  },
});
