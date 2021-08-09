<template>
  <v-panel v-if="market" class="h-full bg-light-purple rounded-md">
    <div class="flex flex-wrap items-center py-0 px-4 lg:py-0 mr-4 w-full h-full md:w-auto lg:mb-0">
        <img
          :src="market.baseToken.icon"
          :alt="market.baseToken.name"
          class="w-6 h-6 mr-4"
        />
        <div>
          <p class="text-gray-100 font-bold font-sora text-sm">{{ market.ticker }}</p>
          <p class="text-gray-500 text-xs">
            {{ market.baseToken.name }}
          </p>
        </div>
      <v-market-stats class="flex-1" />
    </div>
  </v-panel>
</template>

<script lang="ts">
import Vue from 'vue'
import MarketStats from './stats.vue'
import { UiSpotMarket } from '~/types'

export default Vue.extend({
  components: {
    'v-market-stats': MarketStats
  },

  computed: {
    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    }
  }
})
</script>
