import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: '#5E35B1',
                        surface: '#FFFFFF',
                        background: '#FAFAFA',
                    },
                },
                dark: {
                    dark: true,
                    colors: {
                        primary: '#7E57C2',
                        surface: '#1E1E1E',
                        background: '#121212',
                    },
                },
            },
        },
        defaults: {
            VCard: { flat: true, border: 'thin' },
            VTextarea: { variant: 'outlined', density: 'comfortable' },
            VSelect: { variant: 'outlined', density: 'comfortable' },
            VBtn: { variant: 'flat' },
        },
    })
    nuxtApp.vueApp.use(vuetify)
})