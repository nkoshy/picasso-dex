<template>
  <div class="table-responsive min-h-orders max-h-xs 4xl:max-h-lg">
    <table class="table">
      <orders-table-header market-column-enabled />
      <tbody v-if="isUserWalletConnected">
        <tr
          is="v-order"
          v-for="(order, index) in orders"
          :key="`orders-${index}-${order.orderHash}`"
          :order="order"
        ></tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Order from '~/components/partials/common/spot/order.vue'
import OrdersTableHeader from '~/components/partials/common/spot/orders-table-header.vue'
import { UiSpotLimitOrder } from '~/types'

export default Vue.extend({
  components: {
    'v-order': Order,
    OrdersTableHeader
  },

  props: {
    orders: {
      required: true,
      type: Array as PropType<UiSpotLimitOrder[]>
    }
  },

  computed: {
    isUserWalletConnected(): boolean {
      return this.$accessor.wallet.isUserWalletConnected
    }
  }
})
</script>
