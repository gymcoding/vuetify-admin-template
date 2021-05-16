<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="이름"
          placeholder="여기에 입력해주세요"
        />
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="나이"
          placeholder="여기에 입력해주세요"
        />
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="닉네임"
          placeholder="여기에 입력해주세요"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import AppTextField from '@/components/app/TextField'
export default {
  components: {
    AppTextField
  },
  data: () => ({
    customValue: null,
  }),
}
</script>
<style lang="">

</style>
