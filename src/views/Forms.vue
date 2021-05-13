<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Stacked Forms
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          @submit.prevent="submit"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
          />

          <v-text-field
            v-model="phoneNumber"
            :counter="7"
            label="Phone Number"
          />

          <v-text-field
            v-model="email"
            label="E-mail"
          />

          <v-select
            v-model="select"
            :items="items"
            label="Select"
            data-vv-name="select"
          />

          <v-checkbox
            v-model="checkbox"
            label="Option"
            type="checkbox"
          />

          <v-btn
            class="mr-4"
            type="submit"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: null,
  }),
  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>
<style lang="">

</style>
