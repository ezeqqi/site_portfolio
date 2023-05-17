<template>
  <v-theme-provider :theme="theme ? 'dark' : 'light'" >
    <v-container class="fill-heigh text-surface_1">
      <v-responsive class="d-flex align-center text-cente fill-heigh">
        <section name="Hello" class="bg-red-lighten- pt-16">
          <div class="text-h5 font-weight-light text-primary_1">Olá, me chamo</div>

          <div class="text-h2 font-weight-bold pt-8">Ezequiel Silveira</div>

          <div class="text-h5 text-mixed_6 py-4">
            Desenvolvedor Web
            <!-- especialista em
            <span class="text-primary_1 text-decoration-underline">Vue Js</span> -->
          </div>

          <div class="text-body-1 text-justif text-mixed_6">
            <p>Frase descrição Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis  Dolores corporis modi <span class="text-primary_1 clickable">veja aqui</span>
            </p>
          </div>
        </section>

        <div name="separator" class="py-16">
          <div class="md-py-16"></div>
        </div>

        <section name="About" class="bg-green-lighten- pt-16">
          <div name="title" class="text-h4 font-weight-bol text-cente pb-8">
          <span class="text-body-1 text-primary_1 pr-4">01 .</span>Sobre
          <v-divider thickness="2"></v-divider>
          </div>
          <v-row justify="end">
            <v-col cols="12" md="9">
              <div>
                <p name="paragraph_1" class="text-justify text-mixed_6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum cupiditate culpa impedit similique, assumenda illo nihil sunt cumque obcaecati suscipit possimus pariatur, id nemo asperiores. Velit perferendis illum aut eligendi.
                </p>
                <p name="paragraph_1" class="py-4 text-justify text-mixed_6" >Illum cupiditate culpa impedit similique, <span class="text-primary_1 clickable">assumenda illo nihil sunt cumque</span> obcaecati suscipit possimus pariatur, id nemo asperiores. Velit perferendis illum aut eligendi.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </v-col>
            <v-col class="bg-secondar">
              <v-card class="rounded-lg">
                <v-img src="@/assets/profile-picture-02.jpg" max-height="2800px"
                  :aspect-ratio="1"/>
              </v-card>
            </v-col>
          </v-row>

        </section>
        <!-- <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-btn
              href="https://vuetifyjs.com/components/all/"
              min-width="164"
              rel="noopener noreferrer"
              target="_blank"
              variant="flat"
              color="primary_1"
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
              color="primary_1"
            >
              <v-icon icon="mdi-account-group" size="large" start />

              Community
            </v-btn>
          </v-col>
        </v-row> -->
      </v-responsive>
    </v-container>
  </v-theme-provider>
</template>
<script setup>
import { computed } from 'vue';
  const props = defineProps(['colorTheme'])
  const theme = computed(() => props.colorTheme)
</script>
