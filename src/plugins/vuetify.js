/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/settings.scss'
// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors:{
          primary_1: '#492bf0', // https://colorffy.com/dark-theme-generator usar primary
          primary_2: '#6944f3',
          primary_3: '#815bf5',
          primary_4: '#9772f8',
          primary_5: '#ab89fa',
          primary_6: '#bda0fb',

          mixed_1: '#1b1625',
          mixed_2: '#2f2b3a',
          mixed_3: '#46424f',
          mixed_4: '#5e5a66',
          mixed_5: '#76737e',
          mixed_6: '#908d96',

          dark_1: '#121212',
          dark_2: '#282828',
          dark_3: '#3f3f3f',
          dark_4: '#575757',
          dark_5: '#717171',
          dark_6: '#8b8b8b',

        }
      },
      light: {
        colors: {
          primary_1: '#492bf0', // https://colorffy.com/dark-theme-generator usar primary
          primary_2: '#6944f3',
          primary_3: '#815bf5',
          primary_4: '#9772f8',
          primary_5: '#ab89fa',
          primary_6: '#bda0fb',

          mixed_1: '#1b1625',
          mixed_2: '#2f2b3a',
          mixed_3: '#46424f',
          mixed_4: '#5e5a66',
          mixed_5: '#76737e',
          mixed_6: '#908d96',

          surface_1: '#121212',
          surface_2: '#282828',
          surface_3: '#3f3f3f',
          surface_4: '#575757',
          surface_5: '#717171',
          surface_6: '#8b8b8b',
        },
      }

    },
  },
})

