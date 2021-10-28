<template>
<<<<<<< HEAD
  <div
    v-if="market"
    class="table-responsive min-h-orders max-h-xs 4xl:max-h-lg"
  >
    <table class="table">
      <trades-table-header />
      <tbody v-if="isUserWalletConnected">
        <tr
          is="v-trade"
          v-for="(trade, index) in trades"
          :key="`trades-history-${index}-`"
          :trade="trade"
        ></tr>
      </tbody>
    </table>
    <v-user-wallet-connect-warning v-if="!isUserWalletConnected" />
=======
  <div class="flex flex-col">
    <div
      v-if="market"
      ref="tradesHistory"
      class="table-responsive table-compact"
    >
      <table class="table">
        <thead class="border-b">
          <tr class="bg-light-purple">
            <th is="v-ui-table-th" center xs>
              <span>{{ $t('price') }}</span>
            </th>
            <th is="v-ui-table-th" center xs>
              <span>{{ $t('amount') }}</span>
            </th>
            <th is="v-ui-table-th" center xs>
              <span>{{ $t('notional_size') }}</span>
            </th>
            <th is="v-ui-table-th" center xs>
              <span>{{ $t('fee') }}</span>
            </th>
            <th is="v-ui-table-th" center xs>
              <span>{{ $t('side') }}</span>
            </th>
            <th is="v-ui-table-th" center xs>
              <span>{{ $t('execution_type') }}</span>
            </th>
            <th is="v-ui-table-th" center xs>
              <span>{{ $t('time') }}</span>
            </th>
          </tr>
        </thead>
        <tbody v-if="isUserWalletConnected">
          <tr
            is="v-trade"
            v-for="(trade, index) in trades"
            :key="`trades-history-${index}-`"
            :trade="trade"
            :class= "orders"
          ></tr>
          <tr
            is="v-trade-empty"
            v-for="(trade, index) in emptyTrades"
            :key="`empty-trades-${index}`"
            :class= "orders"
          ></tr>
        </tbody>
        <tbody v-else>
          <tr class="relative h-8">
            <th colspan="7" class="w-full" :rowspan="limit">
              <v-ui-overlay>
                <p>{{ $t('not_connect_trades') }}</p>
              </v-ui-overlay>
            </th>
          </tr>
          <tr
            v-for="(order, index) in [...emptyTrades.slice(1)]"
            :key="`empty-trades-${index}`"
            class="h-8"
          >
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Trade from '~/components/partials/common/spot/trade.vue'
import TradesTableHeader from '~/components/partials/common/spot/trades-table-header.vue'
import { UiSpotMarket, UiSpotTrade } from '~/types'
import { UiSubaccount } from '~/types/subaccount'

export default Vue.extend({
  components: {
    'v-trade': Trade,
    TradesTableHeader
  },

  data() {
    return {
      limit: 9
    }
  },

  computed: {
    isUserWalletConnected(): boolean {
      return this.$accessor.wallet.isUserWalletConnected
    },

    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    trades(): UiSpotTrade[] {
      return this.$accessor.spot.subaccountTrades
    },

    subAccount(): UiSubaccount | undefined {
      return this.$accessor.account.subaccount
    },

    emptyTrades(): any[] {
      const { trades, limit } = this

      return trades.length < limit ? new Array(limit - trades.length) : []
    }
  },

  watch: {
    subAccount() {
      this.$accessor.spot.fetchSubaccountMarketTrades()
    }
  }
})
</script>
