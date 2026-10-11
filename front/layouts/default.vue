<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const links = [
  // { title: 'Read Thai', to: '/' },
  { title: 'Lessons', to: '/lessons' },
  { title: 'About', to: '/about' },
  // { title: 'Fonts', to: '/fonttest' },
]

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
    <v-app>
        <v-app-bar flat density="comfortable" color="surface">
            <v-container class="d-flex align-center pa-0" max-width="1200">
                <span class="text-h6 font-weight-medium">
                  <a href="/" style="text-decoration:none">
                    Read Thai
                  </a>
                </span>
                <v-spacer />
                <nav class="d-flex ga-2">
                    <v-btn
                      v-for="link in links"
                      :key="link.to"
                      :to="link.to"
                      variant="text"
                      density="comfortable"
                    >
                      {{ link.title }}
                    </v-btn>
                </nav>
                <v-spacer />
                <v-btn
                  :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                  variant="text"
                  @click="toggleTheme"
                />
            </v-container>
        </v-app-bar>

        <v-main>
            <v-container max-width="1200" class="py-8">
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>