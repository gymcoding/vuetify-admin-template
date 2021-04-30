<template>
  <v-list-group
    :group="group"
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
  data: () => ({
  }),
  computed: {
    group () {
      return this.genGroup(this.item.items)
    },
  },
  methods: {
    genGroup (items) {
      return items.reduce((acc, cur) => {
        if (!cur.to) return acc

        acc.push(
          cur.items
            ? this.genGroup(cur.items)
            : cur.to.slice(1, -1),
        )

        return acc
      }, []).join('|')
    },
  },
}
</script>
<style lang="">

</style>
