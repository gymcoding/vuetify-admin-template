<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Button Colors
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col
            v-for="(color, index) in colors"
            :key="index"
            cols="auto"
          >
            <v-btn :color="color">
              {{ color }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Buttons with Label
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col
            v-for="(color, index) in colors"
            :key="index"
            cols="auto"
          >
            <v-btn :color="color">
              <v-icon
                left
                v-text="icons[index]"
              />
              {{ color }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Button Size
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col
            v-for="(size, index) in sizes"
            :key="index"
            cols="auto"
          >
            <v-btn
              v-bind="{ [size]: true }"
              color="primary"
            >
              {{ size }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Button Style
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col
            v-for="(style, index) in styles"
            :key="index"
            cols="auto"
          >
            <v-btn
              color="primary"
              v-bind="style.attrs"
            >
              <v-icon
                v-if="style.icon"
                :left="!!style.text"
                v-text="style.icon"
              />

              {{ style.text }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'DashboardButtons',

  data: () => ({
    colors: [
      'default',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
    ],
    groups: [
      ['left', 'middle', 'right'],
      [1, 2, 3, 4],
      [5, 6, 7],
    ],
    icons: [
      'mdi-chevron-left',
      'mdi-chevron-right',
      'mdi-exclamation',
      'mdi-check',
      'mdi-alert',
      'mdi-close',
    ],
    sizes: [
      'x-small',
      'small',
      'regular',
      'large',
      'x-large'
    ],
    social: [
      {
        color: '#55ACEE',
        icon: 'mdi-twitter',
        text: 'Connect with Twitter',
      },
      {
        color: '#3B5998',
        icon: 'mdi-facebook',
        text: 'Share - 2.2K',
      },
      {
        color: '#DD4b39',
        icon: 'mdi-google-plus',
        text: 'Share on Google+',
      },
      {
        color: '#0976B4',
        icon: 'mdi-linkedin',
        text: 'Connect with LinkedIn',
      },
      {
        color: '#CC2127',
        icon: 'mdi-pinterest',
        text: 'Pint It - 212',
      },
      {
        color: '#E52D27',
        icon: 'mdi-youtube',
        text: 'View on Youtube',
      },
      {
        color: '#333333',
        icon: 'mdi-github',
        text: 'Connect with Github',
      },
      {
        color: '#FF4500',
        icon: 'mdi-reddit',
        text: 'Repost - 232',
      },
    ],
    styles: [
      {
        attrs: {},
        text: 'Default',
      },
      {
        attrs: { rounded: true },
        text: 'Rounded',
      },
      {
        attrs: { rounded: true },
        text: 'Default',
        icon: 'mdi-heart',
      },
      {
        attrs: { fab: true, small: true },
        text: '',
        icon: 'mdi-heart',
      },
      {
        attrs: { text: true },
        text: 'Simple',
      },
    ],
  }),
}
</script>
<style lang="">

</style>
