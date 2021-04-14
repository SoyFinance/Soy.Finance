import pkg from "./package";
require("dotenv").config();

export default {
  ssr: false,
  target: "static",
  components: true,
  /*
   ** Headers of the page
   */
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  head: {
    title: process.env.APP_NAME || pkg.name,
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {
        hid: "description",
        name: "description",
        content: process.env.APP_DESC || pkg.description,
      },
      {
        property: "og:title",
        content: process.env.APP_NAME || pkg.name,
      },
      {
        property: "og:description",
        content: process.env.APP_DESC || pkg.description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content:
          process.env.APP_URL || "https://soy.finance" + "/android-chrome-512x512.png",
      },
      {
        property: "og:url",
        content: process.env.APP_URL || "https://soy.finance",
      },
    ],

    script: [],

    link: [
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: `/favicon.ico?v=${pkg.version}`,
      },
      {
        rel: "apple-touch-icon",
        href: `/apple-touch-icon.png?v=${pkg.version}`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: `/android-icon-192x192.png?v=${pkg.version}`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: `/android-icon-512x512.png?v=${pkg.version}`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/favicon-32x32.png?v=${pkg.version}`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/favicon-16x16.png?v=${pkg.version}`,
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/app.scss"],
  styleResources: {
    scss: [
      "@/node_modules/bootstrap/scss/_functions.scss",
      "@/node_modules/bootstrap/scss/_mixins.scss",
      "@/assets/scss/_variables.scss",
    ],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/identicon",
    "~/plugins/perfect-scroll",
    "~/plugins/numbers",
    "~/plugins/vue-countup",
    "~/plugins/vClickOutside",
    "~/plugins/vueintersect",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/svg",
    "@nuxtjs/style-resources",
    "@nuxtjs/localforage",
    "@nuxtjs/dotenv",
    // "nuxt-purgecss",
  ],
  purgeCSS: {
    whitelist: () => ["html", "body", "#__nuxt", "#__layout"],
    whitelistPatterns: () => [/navbar/, /alert/, /bg/, /dropdown/],
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", ["vue-scrollto/nuxt", {duration: 700}]],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
  env: {
    INFURA_KEY: process.env.INFURA_KEY,
    NETWORK: process.env.NETWORK,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    OWNER_ADDRESS: process.env.OWNER_ADDRESS,
    FORTMATICS_KEY: process.env.FORTMATICS_KEY,
    NODE_ENV: process.env.NODE_ENV || "development",
  },
  generate: {
    fallback: true,
  },
};
