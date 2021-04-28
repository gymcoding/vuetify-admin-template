<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="i in 20"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <product-item />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ProductItem from '@/components/product/ProductItem'
export default {
  name: 'ProductList',
  components: {
    ProductItem
  }
}
</script>
<style lang="">

</style>
