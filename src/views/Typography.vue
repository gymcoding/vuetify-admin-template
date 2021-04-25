<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Typography
      </v-card-title>
      <v-card-text>
        <v-item-group mandatory>
          <v-sheet
            class="overflow-y-auto"
            max-height="600"
            tile
          >
            <v-item
              v-for="[
                c,
                text,
                size,
                weight,
                spacing,
                margin
              ] in classes"
              :key="c"
            >
              <template v-slot:default="{ active, toggle }">
                <v-sheet
                  :color="active ? $vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4' : undefined"
                  class="px-4 pt-4 pb-3"
                  tile
                  style="cursor: pointer;"
                  @click="toggle"
                >
                  <div
                    :class="[`text-${c}`, active && `mb-${margin}`]"
                    class="transition-swing"
                    v-text="text"
                  />

                  <v-expand-transition>
                    <v-responsive
                      v-if="active"
                      max-width="350"
                    >
                      <div class="d-flex justify-space-between text-caption">
                        <div>
                          <div class="grey--text mb-2">
                            Font
                          </div>

                          <div class="font-weight-medium">
                            Roboto
                          </div>
                        </div>

                        <div>
                          <div class="grey--text mb-2">
                            Weight
                          </div>

                          <div
                            class="font-weight-medium"
                            v-text="weight"
                          />
                        </div>

                        <div>
                          <div class="grey--text mb-2">
                            Size
                          </div>

                          <div
                            class="font-weight-medium"
                            v-text="size"
                          />
                        </div>

                        <div>
                          <div class="grey--text text-darken-1 mb-2">
                            Letter spacing
                          </div>

                          <div
                            class="font-weight-medium"
                            v-text="spacing"
                          />
                        </div>
                      </div>
                    </v-responsive>
                  </v-expand-transition>
                </v-sheet>
              </template>
            </v-item>
          </v-sheet>
        </v-item-group>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>Text breakpoints</v-card-title>
      <v-card-text>
        <div>
          <v-item-group
            v-model="model2"
            class="pa-2 d-flex justify-center"
            mandatory
          >
            <v-item
              v-for="([icon, bp, size], i) in sizes"
              :key="i"
              :value="size"
            >
              <template v-slot:default="{ active, toggle }">
                <v-hover v-slot="{ hover }">
                  <div
                    :class="[(active || hover) ? 'text--primary' : 'text--secondary']"
                    class="ma-3 text-center"
                    style="cursor: pointer"
                    @click="toggle"
                  >
                    <v-icon
                      :color="(active || hover) ? 'grey darken-4' : 'grey lighten-1'"
                      class="pa-1 mb-1"
                      v-text="icon"
                    />

                    <div
                      class="text-caption"
                      v-text="bp"
                    />
                  </div>
                </v-hover>
              </template>
            </v-item>
          </v-item-group>

          <div class="text-h5 mb-6 text-center">
            <code v-text="typeClass" />
          </div>

          <v-card
            class="d-flex align-center justify-center pa-4 mx-auto"
            max-width="550"
            min-height="76"
            outlined
          >
            <div :class="`text-${model2}`">
              Example Heading
            </div>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>Font weight</v-card-title>
      <v-card-text>
        <p class="font-weight-black">
          Black text.
        </p>
        <p class="font-weight-bold">
          Bold text.
        </p>
        <p class="font-weight-medium">
          Medium weight text.
        </p>
        <p class="font-weight-regular">
          Normal weight text.
        </p>
        <p class="font-weight-light">
          Light weight text.
        </p>
        <p class="font-weight-thin">
          Thin weight text.
        </p>
        <p class="font-italic">
          Italic text.
        </p>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Decoration
      </v-card-title>
      <v-card-text>
        <a
          href="#"
          class="text-decoration-none"
        >Non-underlined link</a>

        <div class="text-decoration-line-through">
          Line-through text
        </div>

        <div class="text-decoration-overline">
          Overline text
        </div>

        <div class="text-decoration-underline">
          Underline text
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    model: null,
    classes: [
      ['h1', 'Heading 1', '6rem', '300', '-.015625em', -1],
      ['h2', 'Heading 2', '3.75rem', '300', '-.0083333333em', 0],
      ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
      ['h4', 'Heading 4', '2.125rem', '400', '.0073529412em', 2],
      ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
      ['h6', 'Heading 6', '1.25rem', '500', '.0125em', 3],
      ['subtitle-1', 'Subtitle 1', '1rem', '400', '.009375em', 4],
      ['subtitle-2', 'Subtitle 2', '0.875rem', '500', '.0071428571em', 4],
      ['body-1', 'Body 1', '1rem', '400', '.03125em', 4],
      ['body-2', 'Body 2', '0.875rem', '400', '.0178571429em', 4],
      ['button', 'Button', '0.875rem', '500', '.0892857143em', 4],
      ['caption', 'Caption', '0.75rem', '400', '.0333333333em', 4],
      ['overline', 'Overline', '0.75rem', '500', '.1666666667em', 4],
    ],
    model2: 'caption',
    sizes: [
      ['mdi-devices', 'all', 'caption'],
      ['mdi-cellphone-iphone', 'sm', 'body-2'],
      ['mdi-laptop', 'md', 'body-1'],
      ['mdi-monitor', 'lg', 'h6'],
      ['mdi-television', 'xl', 'h4'],
    ],
  }),
  computed: {
    typeClass () {
      const type = ['text', this.model2]
      const [, breakpoint] = this.current

      if (breakpoint !== 'all') {
        type.splice(1, 0, breakpoint)
      }

      return `.${type.join('-')}`
    },
    current () {
      return this.sizes.find(size => size[2] === this.model2)
    },
  },
}
</script>
<style lang="">

</style>
