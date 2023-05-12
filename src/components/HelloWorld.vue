<template>
  <v-theme-provider :theme="theme ? 'dark' : 'light'" >
    <v-container class="fill-heigh text-surface_1">
      <v-responsive class="d-flex align-center text-center fill-heigh">
        <!-- TODO: emit event para app alterar theme -->
        <!-- <v-row class="justify-end">
          <v-col cols="3">
            <v-btn @click="toggleDarkMode">Theme Toggle</v-btn>
          </v-col>
        </v-row> -->
        <!-- <v-img height="300" src="@/assets/logo.svg" /> -->

        <div class="text-body-2 font-weight-light">Welcome to</div>

        <h1 class="text-h2 font-weight-bold ">My site, bruh</h1>

        <div class="py-6" />

        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-btn
              href="https://vuetifyjs.com/components/all/"
              min-width="164"
              rel="noopener noreferrer"
              target="_blank"
              variant="flat"
              color="primary_2"
            >
              <v-icon icon="mdi-view-dashboard" size="large" start />
              Components
            </v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn
              color="primary_1"
              href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
              min-width="228"
              rel="noopener noreferrer"
              size="x-large"
              target="_blank"
              variant="flat"
            >
              <v-icon icon="mdi-speedometer" size="large" start />

              Get Started
            </v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn
              href="https://community.vuetifyjs.com/"
              min-width="164"
              rel="noopener noreferrer"
              target="_blank"
              variant="flat"
              color="primary_2"
            >
              <v-icon icon="mdi-account-group" size="large" start />

              Community
            </v-btn>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-theme-provider>
</template>
<script setup>
import { computed } from 'vue';
  const props = defineProps(['colorTheme'])
  const theme = computed(() => props.colorTheme)
  console.log('meu thema herdado', theme.value)
</script>
