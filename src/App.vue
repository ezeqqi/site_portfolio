<template>
  <v-app :theme="isDarkMode ? 'dark' : 'light'">
    <v-main class="surface_1 pa-2">
      <v-row class="justify-end ">
        <v-col cols="3" class="mt-2">
          <v-btn
            :class="isDarkMode ? '':'text-surface_1'"
            color="negative"
            variant="outlined"
            @click="toggleTheme"
          >
          Theme</v-btn>
        </v-col>
      </v-row>
      <HelloWorld :colorTheme="isDarkMode"></HelloWorld>
    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';
const isDarkMode = ref(true)
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>
