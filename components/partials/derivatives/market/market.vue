<template>
<<<<<<< HEAD
  <v-panel v-if="market" class="h-full">
    <div
      class="flex flex-wrap items-center mt-1 py-2 px-4 lg:py-1 overflow-hidden"
    >
=======
  <v-panel v-if="market" class="h-full bg-light-purple rounded-md">
    <div class="flex flex-wrap items-center mt-1 py-2 px-4 lg:py-1 mr-4 w-full h-full md:w-auto lg:mb-0 overflow-hidden">  
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
      <div
        class="
          flex
          items-center
          mr-4
          w-full
          md:w-auto
          justify-center
          lg:justify-start
          lg:mb-0
        "
      >
        <img
          :src="market.baseToken.icon"
          :alt="market.baseToken.name"
          class="w-6 h-6 mr-4"
        />
        <div class="leading-none">
          <p class="text-gray-100 font-bold font-sora text-sm">{{ market.ticker }}</p>
          <p class="text-gray-500 text-xs">
            {{ market.baseToken.name }}
          </p>
        </div>
<<<<<<< HEAD
      </div>
      <v-market-stats class="flex-1 mt-4 md:mt-0" />
=======
      <!-- </div> -->
      <v-market-stats class="flex-1 mt-4 md:mt-0" />
    </div>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    </div>
  </v-panel>
</template>

<script lang="ts">
import Vue from 'vue'
import MarketStats from './stats.vue'
import { UiDerivativeMarket } from '~/types'

export default Vue.extend({
  components: {
    'v-market-stats': MarketStats
  },

  computed: {
    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    }
  }
})
</script>
