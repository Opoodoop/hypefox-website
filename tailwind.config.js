/** @type {import("tailwindcss").Config} */
module.exports = {
  components: true,
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  plugins: [
    require("flowbite")
  ]
}