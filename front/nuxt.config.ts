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
  app: {
    head: {
      link: [
        {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ],
      script: [
        // {
        //   src: 'https://mc.yandex.ru/metrika/tag.js',
        //   async: true,
        //   defer: true,
        // },

        {
          children: `
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=113605805', 'ym');

    ym(113605805, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});

          `,
          type: 'text/javascript',
          async: true,
          defer: true,
        }
      ],

      noscript: [
        {
          children: `<div><img src="https://mc.yandex.ru/watch/${'113605805'}" style="position:absolute; left:-9999px;" alt="" /></div>`,
        },
      ],

      htmlAttrs: {
        lang: 'en',
      },
      title: 'Read thai', // default title will be chosen when no other provided
      meta: [
        {'http-equiv': 'Content-Type', 'content': 'text/html; charset=UTF-8'},
        {'http-equiv': 'x-dns-prefetch-control', 'content': 'on'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
        {name: 'format-detection', content: 'telephone=no'},
        {property: 'og:type', content: 'website'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'msapplication-TileColor', content: '#000000'},
      ],
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/content',
    '@nuxtjs/seo'
  ],
  site: {
    url: 'https://readthai.mallonesi.ru/',
    name: 'ReadThai',
  },
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