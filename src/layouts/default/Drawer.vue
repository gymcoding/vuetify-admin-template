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
    <v-list-item>
      <v-list-item-avatar>
        <v-img
          :src="
            require('@/assets/logo-bg.png')"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          GymCoding
        </v-list-item-title>
        <v-list-item-subtitle>
          Vuetify v2.4.5
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="(item, index) in items"
        :key="`item-${index}`"
        link
        :to="item.to"
        class="py-1"
        active-class="primary white--text"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'DefaultDrawer',
  data: () => ({
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Grid System', icon: 'mdi-grid', to: '/grid-system' },
      { title: 'Breakpoints', icon: 'mdi-responsive', to: '/breakpoints' },
      { title: 'Grid List Page', icon: 'mdi-view-list-outline', to: '/grid-list-page' },
      { title: 'Typography', icon: 'mdi-format-text-variant-outline', to: '/typography' },
      { title: 'Tables', icon: 'mdi-table-settings', to: '/tables' },
      { title: 'Forms', icon: 'mdi-form-select', to: '/forms' },
      { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
      { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },
      { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in' },
      { title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up' },
      { title: 'ProductList', icon: 'mdi-reproduction', to: '/page/product-list' },
    ],
  })
}
</script>
<style lang="">

</style>
