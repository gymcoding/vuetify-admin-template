<template>
  <v-app>
    <page-bar />

    <page-view />
  </v-app>
</template>
<script>
import PageBar from './AppBar'
import PageView from './View'
export default {
  name: 'PageLayout',
  components: {
    PageBar,
    PageView
  }
}
</script>
<style lang="">

</style>
