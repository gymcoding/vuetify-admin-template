<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
import '@/styles/overrides.sass'
export default {
  name: 'App',
};
</script>
