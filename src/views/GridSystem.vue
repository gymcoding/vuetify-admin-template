<template>
  <v-container
    id="grid-view"
    fluid
    tag="section"
  >
    <v-row class="text-center">
      <v-col
        v-for="n in 3"
        :key="`cols-${n}`"
        cols="4"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-4
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        v-for="n in 3"
        :key="`sm-${n}`"
        cols="12"
        sm="4"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-sm-4
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        v-for="n in 3"
        :key="`md-${n}`"
        cols="12"
        md="4"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-md-4
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        v-for="n in 3"
        :key="`lg-${n}`"
        cols="12"
        lg="4"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-lg-4
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        v-for="n in 3"
        :key="`xl-${n}`"
        cols="12"
        xl="4"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-xl-4
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        v-for="n in 4 "
        :key="`mixed-${n}`"
        sm="6"
        lg="3"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-xl-4
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col
        md="3"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-md-3
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        md="3"
        class="ml-auto"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-md-4 ml-auto mr-auto
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col
        v-for="n in 2"
        :key="`offset-${n}`"
        class="ml-auto mr-auto"
        md="4"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-md-4 ml-auto mr-auto
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center mb-12">
      <v-col
        class="ml-auto mr-auto"
        md="6"
      >
        <v-card>
          <v-card-text class="red--text text--darken-4">
            col-md-6 ml-auto mr-auto
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12 pt-0">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <h2>Some Title Here</h2>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <h2>Another Title Here</h2>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <h2>Some Title Here</h2>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <h2>Another Title Here</h2>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <h2>Another Title Here</h2>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <h2>Some Title Here</h2>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                <h2>Another Title Here</h2>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
