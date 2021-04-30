<template>
  <v-navigation-drawer
    v-bind="$attrs"
    dark
    :src="require('@/assets/sidebar.jpg')"
    app
  >
    <template
      #img="props"
    >
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>
    <default-drawer-header />
    <v-divider />
    <default-list :items="items" />
  </v-navigation-drawer>
</template>
<script>
import DefaultDrawerHeader from './DrawerHeader'
import DefaultList from './List'
export default {
  name: 'DefaultDrawer',
  components: {
    DefaultDrawerHeader,
    DefaultList
  },
  data: () => ({
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Pages', icon: 'mdi-menu', items: [
        { title: 'Authentication', icon: 'mdi-login', items: [
          { title: 'SignIn', to: '/authentication/sign-in' },
          { title: 'SignUp', to: '/authentication/sign-up' },
        ]},
        { title: 'ProductList', to: '/page/product-list' },
      ]},
      { title: 'Grid System', icon: 'mdi-grid', to: '/grid-system' },
      { title: 'Breakpoints', icon: 'mdi-responsive', to: '/breakpoints' },
      { title: 'Grid List Page', icon: 'mdi-view-list-outline', to: '/grid-list-page' },
      { title: 'Typography', icon: 'mdi-format-text-variant-outline', to: '/typography' },
      { title: 'Tables', icon: 'mdi-table-settings', to: '/tables' },
      { title: 'Forms', icon: 'mdi-form-select', to: '/forms' },
      { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
      { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },

    ],
  })
}
</script>
<style lang="">

</style>
