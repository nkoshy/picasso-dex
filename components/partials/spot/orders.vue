<template>
<<<<<<< HEAD
  <v-card-table-wrap>
    <template #filters>
      <v-button-filter v-model="component" :option="components.openOrders">
        <span>
          {{ $t('open_orders') }}
          {{ `(${orders.length})` }}
        </span>
      </v-button-filter>
      <div class="mx-2 w-px h-4 bg-gray-500"></div>
      <v-button-filter v-model="component" :option="components.tradeHistory">
        <span>
          {{ $t('trade_history') }}
        </span>
      </v-button-filter>
    </template>
    <template #context>
      <v-button
        v-if="component === components.openOrders && orders.length > 0"
        text-xs
        @click.stop="handleCancelAllClick"
      >
        {{ $t('cancel_all') }}
      </v-button>
    </template>
=======
  <v-panel>
    <div slot="context" class="bg-light-blue">
      <div class="flex items-center justify-between">
        <div class="tabs">
          <ul role="tablist" class="tablist">
            <li
              role="tab"
              :aria-selected="component === components.openOrders"
              class="tab"
              @click.stop.prevent="onSelect(components.openOrders)"
            >
              <span>{{ $t('open_orders') }} {{ `(${orders.length})` }}</span>
            </li>
            <li
              role="tab"
              :aria-selected="component === components.orderHistory"
              class="tab"
              @click.stop.prevent="onSelect(components.orderHistory)"
            >
              <span>{{ $t('order_history') }}</span>
            </li>
            <li
              role="tab"
              :aria-selected="component === components.tradeHistory"
              class="tab"
              @click.stop.prevent="onSelect(components.tradeHistory)"
            >
              <span>{{ $t('trade_history') }}</span>
            </li>
            <li
              role="tab"
              :aria-selected="component === components.funds"
              class="tab"
              @click.stop.prevent="onSelect(components.funds)"
            >
              <span>{{ $t('funds') }}</span>
            </li>
            
          </ul>
        </div>
        <!-- <v-ui-button
          v-if="component === components.openOrders"
          xs
          primary
          text
          class="mr-4"
          @click.stop="handleCancelAllClick"
        >
          {{ $t('cancel_all') }}
        </v-ui-button> -->
      </div>
    </div>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    <component :is="component" v-if="component"></component>
  </v-card-table-wrap>
</template>

<script lang="ts">
import Vue from 'vue'
import OpenOrders from './orders/index.vue'
import TradeHistory from './trade-history/index.vue'
import Funds from './funds/index.vue'
import OrderHistory from './order-history/index.vue'
import { UiSpotLimitOrder } from '~/types'

const components = {
  openOrders: 'v-open-orders',
  tradeHistory: 'v-trade-history',
  funds: 'v-funds',
  orderHistory: 'v-order-history'
}

export default Vue.extend({
  components: {
    'v-trade-history': TradeHistory,
    'v-open-orders': OpenOrders,
    'v-funds': Funds,
     'v-order-history': OrderHistory
  },

  data() {
    return {
      components,
      component: components.openOrders
    }
  },

  computed: {
    orders(): UiSpotLimitOrder[] {
      return this.$accessor.spot.subaccountOrders
    }
  },

  methods: {
    onSelect(component: string) {
      this.component = component
    },

    handleCancelAllClick() {
      const { orders } = this

      this.$accessor.spot
        .batchCancelOrder(orders)
        .then(() => {
          this.$toast.success(this.$t('orders_cancelled'))
        })
        .catch(this.$onRejected)
        .finally(() => {
          //
        })
    }
  }
})
</script>
