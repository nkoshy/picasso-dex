<template>
  <div v-if="market" class="table-responsive table-compact">
    <table class="table">
      <thead class="border-b bg-light-purple">
        <tr class="bg-light-purple">
          <th is="v-ui-table-th" center xs>
            <span>{{ $t('price') }}</span>
          </th>
          <th is="v-ui-table-th" center xs>
            <span>{{ $t('amount') }}</span>
          </th>
          <th is="v-ui-table-th" center xs>
            <span>{{ $t('unfilled') }}</span>
          </th>
          <th is="v-ui-table-th" center xs>
            <span>{{ $t('total') }}</span>
          </th>
          <th is="v-ui-table-th" center xs>
            <span>{{ $t('type') }}</span>
          </th>
          <th is="v-ui-table-th" center xs>
            <span>{{ $t('filled') }}</span>
          </th>
          <th is="v-ui-table-th" center xs>
            <span>{{ $t('actions') }}</span>
          </th>
        </tr>
      </thead>
      <tbody v-if="isUserWalletConnected">
        <tr
          is="v-order"
          v-for="(order, index) in orders"
          :key="`orders-${index}-${order.orderHash}`"
          :order="order"
          :class="index%2==0 ? 'bg-red-900 orders' : 'bg-red-900 orders'"
        ></tr>
        <tr
          is="v-order-empty"
          v-for="(order, index) in emptyOrders"
          :key="`empty-orders-${index}`"
          :class="index%2==0 ? 'bg-red-900 orders' : 'bg-red-900 orders'"
        ></tr>
      </tbody>
      <tbody v-else>
        <tr class="relative h-8">
          <th colspan="7" class="w-full" :rowspan="limit">
            <v-ui-overlay>
              <p>{{ $t('not_connect_orders') }}</p>
            </v-ui-overlay>
          </th>
        </tr>
        <tr
          v-for="(order, index) in [...emptyOrders.slice(1)]"
          :key="`empty-orders-${index}`"
          class="h-8"
        >
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BigNumber } from '@injectivelabs/utils'
import Order from './funds.vue'
import OrderEmpty from './funds-empty.vue'
import { UiDerivativeMarket, UiDerivativeLimitOrder } from '~/types'

export default Vue.extend({
  components: {
    'v-order': Order,
    'v-order-empty': OrderEmpty
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

    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    orders(): UiDerivativeLimitOrder[] {
      const { market } = this

      if (!market) {
        return []
      }

      return this.$accessor.derivatives.subaccountOrders
    },

    emptyOrders(): any[] {
      const { limit, orders } = this

      return orders.length < limit ? new Array(limit - orders.length) : []
    }
  },

  mounted() {
    this.$root.$on('resized-orders-panel', this.onResize)

    this.$nextTick(() => {
      setTimeout(() => {
        this.onResize()
      }, 20)
    })
  },

  methods: {
    onResize() {
      const panelContent = this.$el.closest('.v-panel-content') as HTMLElement

      if (!panelContent) {
        return
      }

      const height = panelContent.offsetHeight
      const rowSize = 32
      const titleHeight = 48
      const totalContentHeight = new BigNumber(height - titleHeight)

      this.limit = totalContentHeight
        .div(rowSize)
        .decimalPlaces(0, BigNumber.ROUND_HALF_CEIL)
        .toNumber()
    }
  }
})
</script>
