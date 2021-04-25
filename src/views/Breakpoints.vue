<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Current breakpoint name
      </v-card-title>
      <v-card-text>
        <div class="text-subtitle-1">
          {{ $vuetify.breakpoint.name }}
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Breakpoints
      </v-card-title>
      <v-card-text>
        <div
          v-for="(name, index) in ['xs', 'sm', 'md', 'lg', 'xl']"
          :key="index"
          class="text-subtitle-1"
        >
          {{ name }}: boolean <span class="font-weight-black">{{ $vuetify.breakpoint[name] }}</span>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Conditionals
      </v-card-title>
      <v-card-text>
        <div
          v-for="(name, index) in ['xsOnly', 'smOnly', 'smAndDown', 'smAndUp', 'mdOnly', 'mdAndDown', 'mdAndUp', 'lgOnly', 'lgAndDown', 'lgAndUp', 'xlOnly']"
          :key="index"
          class="text-subtitle-1"
        >
          {{ name }}: boolean <span class="font-weight-black">{{ $vuetify.breakpoint[name] }}</span>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Mobile
      </v-card-title>
      <v-card-text>
        <div>
          mobile: {{ $vuetify.breakpoint.mobile }}
        </div>
        <div>
          mobileBreakpoint: {{ $vuetify.breakpoint.mobileBreakpoint }}
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Dimensions
      </v-card-title>
      <v-card-text>
        <div>
          height: {{ $vuetify.breakpoint.height }}
        </div>
        <div>
          width: {{ $vuetify.breakpoint.width }}
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Thresholds
      </v-card-title>
      <v-card-text>
        <div>
          thresholds: {{ $vuetify.breakpoint.thresholds }}
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        scrollBarWidth
      </v-card-title>
      <v-card-text>
        <div>
          scrollBarWidth: {{ $vuetify.breakpoint.scrollBarWidth }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'Breakpoints',
  data: () => ({
    dialog: false,
  }),
  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name) {
      case 'xs': return 100
      case 'sm': return 200
      case 'md': return 300
      case 'lg': return 400
      default: return 500
      }
    }
  }
}
</script>
<style lang="">

</style>
