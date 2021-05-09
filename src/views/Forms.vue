<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Stacked Forms
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
        >
          <v-text-field
            :counter="10"
            label="Name"
          />

          <v-text-field
            label="E-mail"
          />

          <v-select
            :items="items"
            label="Item"
          />

          <v-checkbox
            label="Do you agree?"
          />

          <v-btn
            color="success"
            class="mr-4"
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
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
                :counter="10"
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
                :items="items"
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
                label="Do you agree?"
              />
            </v-col>
          </v-row>




          <v-btn
            color="success"
            class="mr-4"
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
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
    email: '',
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
  },
}
</script>
<style lang="">

</style>
