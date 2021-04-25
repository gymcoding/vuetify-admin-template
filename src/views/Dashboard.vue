<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-icon
              :color="checking ? 'red lighten-2' : 'indigo'"
              class="mr-12"
              size="64"
              @click="takePulse"
            >
              mdi-heart-pulse
            </v-icon>
            <v-row align="start">
              <div class="text-caption grey--text text-uppercase">
                Heart rate
              </div>
              <div>
                <span
                  class="text-h3 font-weight-black"
                  v-text="avg || '—'"
                />
                <strong v-if="avg">BPM</strong>
              </div>
            </v-row>

            <v-spacer />

            <v-btn
              icon
              class="align-self-start"
              size="28"
            >
              <v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-card-title>

          <v-sheet color="transparent">
            <v-sparkline
              :key="String(avg)"
              :smooth="16"
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :value="heartbeats"
              auto-draw
              stroke-linecap="round"
            />
          </v-sheet>
        </v-card>
      </v-col>
      <v-col
        v-for="(item, index) in items1"
        :key="`sheet-${index}`"
        cols="12"
        sm="6"
        md="3"
        lg="3"
      >
        <v-card
          class="mt-4 mx-auto"
        >
          <v-sheet
            class="v-sheet--offset mx-auto"
            :color="item.color"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="item.labels"
              :value="item.value"
              color="white"
              line-width="2"
              padding="16"
            />
          </v-sheet>

          <v-card-text class="pt-0">
            <div class="text-h6 my-2">
              {{ item.title }}
            </div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2" />
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock
            </v-icon>
            <span class="text-caption grey--text font-weight-light">last registration 26 minutes ago</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="(color, index) in ['dark', 'cyan', 'success']"
        :key="index"
        cols="12"
        sm="4"
      >
        <v-card
          class="mx-auto text-center"
          :color="color"
          dark
        >
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="item"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item">
                  ${{ item.value }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">
              Sales Last 24h
            </div>
          </v-card-text>

          <v-divider />

          <v-card-actions class="justify-center">
            <v-btn
              block
              text
            >
              Go to Report
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const exhale = ms =>
  new Promise(resolve => setTimeout(resolve, ms))
export default {
  name: 'Dashboard',
  data: () => ({
    checking: false,
    heartbeats: [],
    item: [
      423,
      446,
      675,
      510,
      590,
      610,
      760,
    ],
    items1: [
      {
        color: 'blue',
        title: '총 판매량',
        labels: [
          '12am',
          '3am',
          '6am',
          '9am',
          '12pm',
          '3pm',
          '6pm',
          '9pm',
        ],
        value: [
          200,
          675,
          410,
          390,
          310,
          460,
          250,
          240,
        ],
      },
      {
        color: 'red',
        title: '하루 판매량',
        labels: [
          '12am',
          '3am',
          '6am',
          '9am',
          '12pm',
          '3pm',
          '6pm',
          '9pm',
        ],
        value: [
          200,
          675,
          410,
          390,
          310,
          460,
          250,
          240,
        ],
      },
      {
        color: 'green',
        title: '일 회원 가입 수',
        labels: [
          '12am',
          '3am',
          '6am',
          '9am',
          '12pm',
          '3pm',
          '6pm',
          '9pm',
        ],
        value: [
          200,
          675,
          410,
          390,
          310,
          460,
          250,
          240,
        ],
      },
      {
        color: 'primary',
        title: '월별 매출',
        labels: [
          '12am',
          '3am',
          '6am',
          '9am',
          '12pm',
          '3pm',
          '6pm',
          '9pm',
        ],
        value: [
          200,
          675,
          410,
          390,
          310,
          460,
          250,
          240,
        ],
      }
    ]

  }),
  computed: {
    avg () {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
      const length = this.heartbeats.length

      if (!sum && !length) return 0

      return Math.ceil(sum / length)
    },
  },

  created () {
    this.takePulse(false)
  },

  methods: {
    heartbeat () {
      return Math.ceil(Math.random() * (120 - 80) + 80)
    },
    async takePulse (inhale = true) {
      this.checking = true

      inhale && await exhale(1000)

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat)

      this.checking = false
    },
  },
}
</script>
<style lang="">

</style>
