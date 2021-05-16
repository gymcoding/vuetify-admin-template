<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <v-form
            ref="form"
            @submit.prevent="submit"
          >
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              :rules="{
                required: true,
                max: 20
              }"
            >
              <v-text-field
                v-model="name"
                :counter="20"
                label="Name"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Phone Number"
              :rules="{
                required: true,
                numeric: true,
                digits: 11,
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                :counter="11"
                label="Phone Number"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="E-mail"
              :rules="{
                required: true,
                email: true
              }"
            >
              <v-text-field
                v-model="email"
                label="E-mail"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="select"
              rules="required"
            >
              <v-select
                v-model="select"
                :items="items"
                label="Select"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="checkbox"
              :rules="{
                required: true
              }"
            >
              <v-checkbox
                v-model="checkbox"
                value="1"
                label="Option"
                type="checkbox"
                required
                :error-messages="errors"
              />
            </validation-provider>

            <v-btn
              class="mr-4"
              type="submit"
              color="primary"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    customValue: null,
    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    items: [
      { text: '아이템1', value: 1 },
      { text: '아이템2', value: 2 },
      { text: '아이템3', value: 3 },
    ],
    checkbox: null,
  }),
  methods: {
    submit () {
      this.$refs.observer.validate().then(result => {
        if (result) {
          alert('성공')
        } else {
          alert('실패')
        }
      })
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
