import Vue from 'vue'
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
  confirmed,
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
extend('confirmed', {
  ...confirmed,
  message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
