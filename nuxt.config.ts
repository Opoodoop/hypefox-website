// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-icon"
    ],
    dir: {
        public: "static",
        pages: "routes"
    },
    app: {
        cdnURL: "https://cdn.hypefoxstudios.com/hypefox-website"
    }
});