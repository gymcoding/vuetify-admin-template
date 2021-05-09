<template>
  <v-list-group
    :prepend-icon="item.icon"
    eager
    v-bind="$attrs"
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(child, i) in item.items">
      <default-list-group
        v-if="child.items"
        :key="`sub-group-${i}`"
        :item="child"
      />
      <default-list-item
        v-else
        :key="`child-${i}`"
        :item="child"
      />
    </template>
  </v-list-group>
</template>
<script>
import DefaultListItem from './ListItem'
export default {
  name: 'DefaultListGroup',
  components: {
    DefaultListItem,
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
}
</script>
<style lang="">

</style>
