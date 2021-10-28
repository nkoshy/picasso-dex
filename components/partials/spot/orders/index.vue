<template>
  <div
    v-if="market"
    class="table-responsive min-h-orders max-h-xs lg:max-h-md 4xl:max-h-lg"
  >
    <table class="table">
<<<<<<< HEAD
      <orders-table-header />
=======
      <thead class="border-b">
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
          <th is="v-ui-table-th" center  xs>
            <span>{{ $t('actions') }}</span>
          </th>
        </tr>
      </thead>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
      <tbody v-if="isUserWalletConnected">
        <tr
          is="v-order"
          v-for="(order, index) in orders"
          :key="`orders-${index}-${order.orderHash}`"
          :order="order"
          :class="index%2==0 ? 'bg-red-900 orders' : 'bg-red-900 orders'"
        ></tr>
<<<<<<< HEAD
=======
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
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
      </tbody>
    </table>
    <v-user-wallet-connect-warning v-if="!isUserWalletConnected" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Order from '~/components/partials/common/spot/order.vue'
import OrdersTableHeader from '~/components/partials/common/spot/orders-table-header.vue'
import { UiSpotMarket, UiSpotLimitOrder } from '~/types'

export default Vue.extend({
  components: {
    'v-order': Order,
    OrdersTableHeader
  },

  computed: {
    isUserWalletConnected(): boolean {
      return this.$accessor.wallet.isUserWalletConnected
    },

    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    orders(): UiSpotLimitOrder[] {
      const { market } = this

      if (!market) {
        return []
      }

      return this.$accessor.spot.subaccountOrders
    }
  }
})
</script>
