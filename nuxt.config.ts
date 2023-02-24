// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss"
    ],
    css: [
        "@fortawesome/fontawesome-svg-core/styles.css"
    ],
    plugins: [
        "~/plugins/fontawesome.ts"
    ],
    dir: {
        pages: "routes"
    },
    app: {
        head: {
            charset: "utf-16",
            viewport: "width=500, initial-scale=1",
            title: "Welcome to Hypefox Studios 👋🏻",
            meta: [
                {
                    name: "description",
                    content: "Hypefox Studios entertains the world with amazing game servers, apps, and software. Providing valuable services to both businesses, projects, and consumers."
                },
                {
                    name: "theme-color",
                    content: "#6616cc"
                }
            ]
        }
    }
});