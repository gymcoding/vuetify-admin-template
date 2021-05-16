<template>
  <v-app>
    <default-bar />

    <default-drawer />

    <default-view />
  </v-app>
</template>
<script>
import DefaultBar from './AppBar'
import DefaultDrawer from './Drawer'
import DefaultView from './View'
export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar,
    DefaultDrawer,
    DefaultView
  },
}
</script>
<style lang="">

</style>
