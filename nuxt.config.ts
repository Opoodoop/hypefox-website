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
            viewport: "width=device-width, initial-scale=1.0",
            title: "Welcome to Hypefox Studios 👋🏻",
            meta: [
                {
                    name: "title",
                    content: "Innovative IT-solutions | Hypefox Studios"
                },
                {
                    name: "description",
                    content: "Hypefox Studios entertains the world with amazing game servers, apps, and software. Providing valuable services to both businesses, projects, and consumers."
                },
                {
                    name: "author",
                    content: "Hypefox Studios"
                },
                {
                    name: "keywords",
                    content: "hypefox, software company london, uk software company, software company uk, software company london, software development, software development life cycle, agile software development, i saw it first, it ends with us, it is on"
                },
                {
                    name: "theme-color",
                    content: "#6616cc"
                },
                {
                    name: "og:type",
                    content: "website"
                },
                {
                    name: "og:url",
                    content: "https://hypefoxstudios.com/"
                },
                {
                    name: "og:title",
                    content: "Innovative IT-solutions | Hypefox Studios"
                },
                {
                    name: "og:description",
                    content: "Hypefox Studios entertains the world with amazing game servers, apps, and software. Providing valuable services to both businesses, projects, and consumers."
                },
                {
                    name: "og:image",
                    content: "https://hypefoxstudios.com/img/icon.png"
                },
                {
                    name: "twitter:card",
                    content: "summary_large_image"
                },
                {
                    name: "twitter:url",
                    content: "https://hypefoxstudios.com/"
                },
                {
                    name: "twitter:title",
                    content: "Innovative IT-solutions | Hypefox Studios"
                },
                {
                    name: "twitter:description",
                    content: "Hypefox Studios entertains the world with amazing game servers, apps, and software. Providing valuable services to both businesses, projects, and consumers."
                },
                {
                    name: "twitter:image",
                    content: "https://hypefoxstudios.com/img/icon.png"
                },
                {
                    name: "msapplication-TileColor",
                    content: "#6616cc"
                }
            ]
        }
    }
});