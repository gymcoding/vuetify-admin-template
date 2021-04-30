<template>
  <v-list-item
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
</template>
<script>
export default {
  name: 'DefaultListItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style lang="">

</style>
