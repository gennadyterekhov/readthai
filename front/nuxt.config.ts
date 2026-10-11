import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
// @ts-ignore
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  moduleResolution: 'node',
  nitro: {
    // preset: 'node-server',
    preset: 'static',
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      buildCommit: '',
      buildTime: '',
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
})