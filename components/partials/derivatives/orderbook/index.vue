<template>
<<<<<<< HEAD
  <div>
    <v-table-head :market="market" />
=======
  <v-panel class="relative w-full" extra-classes="bg-tertiary-gradient" :title="$t('order_book')" orderBook>
    <v-orderbook-context slot="context" keep-alive></v-orderbook-context>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    <v-orderbook />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrderBook from './order-book.vue'
import VTableHead from '~/components/partials/common/orderbook/table-head.vue'
import { UiDerivativeMarket } from '~/types'

export default Vue.extend({
  components: {
    VTableHead,
    'v-orderbook': OrderBook
  },

  computed: {
    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    }
  }
})
</script>
