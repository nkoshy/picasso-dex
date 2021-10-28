<template>
<<<<<<< HEAD
  <div class="flex flex-col flex-wrap h-full">
    <v-table-head :market="market" />
    <div class="flex-1 w-full overflow-y-auto">
      <ul class="list-trades w-full">
        <v-trade
          v-for="(trade, index) in trades"
          :key="`trade-${index}`"
          :trade="trade"
        ></v-trade>
      </ul>
    </div>
  </div>
=======
  <v-panel class="relativ font-sora text-small font-white"  extra-classes="bg-tertiary-gradient" :title="$t('trades')">
    <v-trades-context slot="context" keep-alive></v-trades-context>
    <v-trades class="flex-1" />
  </v-panel>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
</template>

<script lang="ts">
import Vue from 'vue'
import VTrade from './trade.vue'
import VTableHead from '~/components/partials/common/trades/table-head.vue'
import { UiSpotMarket, UiSpotTrade } from '~/types'

export default Vue.extend({
  components: {
    VTableHead,
    VTrade
  },

  computed: {
    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    trades(): UiSpotTrade[] {
      return this.$accessor.spot.trades
    }
  }
})
</script>
