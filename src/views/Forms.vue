<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Stacked Forms
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          />

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          />

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          />

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
            @click="resetValidation"
          >
            Reset Validation
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Horizontal Forms
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row
            align="center"
            no-gutters
          >
            <v-col
              cols="5"
              md="3"
              lg="2"
              class="text-right grey--text"
            >
              <div class="py-6 px-3">
                Name
              </div>
            </v-col>
            <v-col
              cols="7"
              md="9"
              lg="10"
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                required
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
            no-gutters
          >
            <v-col
              cols="5"
              md="3"
              lg="2"
              class="text-right grey--text"
            >
              <div class="py-6 px-3">
                E-mail
              </div>
            </v-col>
            <v-col
              cols="7"
              md="9"
              lg="10"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                required
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
            no-gutters
          >
            <v-col
              cols="5"
              md="3"
              lg="2"
              class="text-right grey--text"
            >
              <div class="py-6 px-3">
                Item
              </div>
            </v-col>
            <v-col
              cols="7"
              md="9"
              lg="10"
            >
              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                required
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
            no-gutters
          >
            <v-col
              cols="5"
              md="3"
              lg="2"
              class="text-right grey--text"
            />
            <v-col
              cols="7"
              md="9"
              lg="10"
            >
              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              />
            </v-col>
          </v-row>




          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
            @click="resetValidation"
          >
            Reset Validation
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
<style lang="">

</style>
