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

    <template #append>
      <div class="pa-4 text-center">
        <v-btn
          block
          class="font-weight-black"
          color="red"
          rounded
          large
          target="_blank"
          href="https://www.youtube.com/channel/UCZ30aWiMw5C8mGcESlAGQbA/?sub_confirmation=1"
        >
          유튜브 짐코딩 채널
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'DefaultDrawer',
  components: {
    DefaultDrawerHeader: () => import(
      /* webpackChunkName: "default-drawer-header" */
      './DrawerHeader'
    ),
    DefaultList: () => import(
      /* webpackChunkName: "default-list" */
      './List'
    ),
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
      { title: 'Tables', icon: 'mdi-table-settings', items: [
        { title: 'Basic Table', to: '/tables/basic-table' },
        { title: 'App Table', to: '/tables/app-table' },
      ] },
      { title: 'Forms', icon: 'mdi-form-select', items: [
        { title: 'Validation Form', to: '/forms/validation-form' },
        { title: 'App Form', to: '/forms/app-form' },
      ] },
      { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
      { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },

    ],
  })
}
</script>
<style lang="">

</style>
