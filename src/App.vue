<template>
  <v-app :theme="isDarkMode ? 'dark' : 'light'">
    <v-main class="bg-mixed_1">
      <!-- <v-row class="justify-end">
        <v-col cols="3" class="mt-2">
          <v-btn @click="toggleTheme">Toggle</v-btn>
        </v-col>
      </v-row> -->
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';
const isDarkMode = ref(true)
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  console.log('=>', isDarkMode.value)
}
</script>
