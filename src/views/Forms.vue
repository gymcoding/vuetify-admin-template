<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Stacked Forms
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
                max: 10
              }"
            >
              <v-text-field
                v-model="name"
                :counter="10"
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
import {
  extend,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import {
  email,
  max,
  min,
  numeric,
  required,
  digits,
} from 'vee-validate/dist/rules'

extend('digits', {
  ...digits,
  message: '{_field_}는 {length} 자리 여야합니다. ({_value_})'
})
extend('email', {
  ...email,
  message: '잘못 입력된 이메일 주소입니다.',
})
extend('max', {
  ...max,
  message: '{_field_} 필드는 {length}자를 초과 할 수 없습니다.'
})
extend('min', {
  ...min,
  message: '{_field_} 필드는 {length}자 미만 이어야 합니다.'
})
extend('numeric', {
  ...numeric,
  message: '{_field_} 필드는 숫자로만 구성되어야합니다.'
})
extend('required', {
  ...required,
  message: '{_field_} 필드는 필수값 입니다.',
})

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
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
