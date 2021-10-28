<template>
<<<<<<< HEAD
  <HOCLoading :key="$route.fullPath" :status="status">
    <div v-if="market" class="min-h-screen flex flex-col flex-wrap">
      <div class="w-full px-1">
        <v-market />
      </div>
      <div class="flex-1 grid grid-cols-6 lg:grid-cols-12 gap-1 p-1">
        <div class="col-span-6 lg:col-span-3 4xl:col-span-2">
          <div class="flex flex-col flex-wrap h-full w-full">
            <v-balances />
            <v-trading class="mt-1 flex-1" />
          </div>
        </div>
        <div class="col-span-6 lg:col-span-9 4xl:col-span-10">
          <div class="flex flex-wrap flex-col w-full h-full">
            <div class="w-full">
              <v-card tight>
                <div class="grid grid-cols-6 lg:grid-cols-12">
                  <div class="col-span-6 lg:col-span-8 4xl:col-span-9">
                    <v-market-chart :market="market" />
                  </div>
                  <div class="col-span-6 lg:col-span-4 4xl:col-span-3">
                    <v-orderbook class="p-2 lg:p-3" />
                  </div>
                </div>
              </v-card>
            </div>
            <div class="w-full flex-1 mt-1">
              <v-card class="h-full">
                <v-orders />
              </v-card>
            </div>
          </div>
        </div>
      </div>
      <v-modal-bridge-deposit />
      <v-modal-bridge-withdraw />
      <v-modal-subaccount-deposit />
      <v-modal-subaccount-withdraw />
      <v-modal-add-margin />
=======
  <HOCLoading v-if="market" :key="$route.fullPath" :status="status">
    <div class="h-full max-w-8xl m-auto w-full xl:bg-spot-desktop bg-spot bg-no-repeat bg-cover bg-blend-overlay">
      <app-header landingPage=true />
      <div class="p-4 pt-0 2xl:ml-auto mr-auto max-w-screen-laptop-screen">
      <grid-layout
        :layout="layout"
        :col-num="grid.colNum"
        :row-height="grid.rowHeight"
        :is-draggable="grid.isDraggable"
        :is-resizable="grid.isResizable"
        :responsive="grid.responsive"
        :vertical-compact="true"
        :use-css-transforms="true"
        @breakpoint-changed="handleBreakpointChanged"
      >
        <grid-item
          v-for="item in grid.layout"
          :key="`grid-item-${item.i}`"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :min-w="item.minW"
          :min-h="item.minH"
          :max-h="item.maxH"
          :h="item.h"
          :i="item.i"
          :is-draggable="item.isDraggable"
          :is-resizable="item.isResizable"
          drag-allow-from=".v-panel-title"
          @resized="$root.$emit(`resized-${item.i}`)"
        >
          <component :is="item.i" />
        </grid-item>
      </grid-layout>
      </div>
      <modal-transfer />
      <modal-deposit />
      <modal-withdraw />
      <modal-take-out />
      <modal-add-margin />
      <v-footer />
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    </div>
  </HOCLoading>
</template>

<script lang="ts">
import Vue from 'vue'
import { Status, StatusType } from '@injectivelabs/utils'
<<<<<<< HEAD
import VModalAddMargin from '~/components/partials/modals/add-margin/index.vue'
import VModalBridgeDeposit from '~/components/partials/modals/bridge-deposit/index.vue'
import VModalBridgeWithdraw from '~/components/partials/modals/bridge-withdraw/index.vue'
import VModalSubaccountDeposit from '~/components/partials/modals/subaccount-deposit/index.vue'
import VModalSubaccountWithdraw from '~/components/partials/modals/subaccount-withdraw/index.vue'
import VBalances from '~/components/partials/common/balances/index.vue'
import VTrading from '~/components/partials/derivatives/trading/index.vue'
import VMarketChart from '~/components/partials/common/market/chart.vue'
import VMarket from '~/components/partials/derivatives/market.vue'
import VOrders from '~/components/partials/derivatives/orders.vue'
import VOrderbook from '~/components/partials/derivatives/orderbook.vue'
import HOCLoading from '~/components/hoc/loading.vue'
import { UiDerivativeMarket } from '~/types'
=======
import { GridLayout, GridItem } from 'vue-grid-layout'
import MarketPriceChartPanel from '~/components/partials/derivatives/market/chart.vue'
import MarketPanel from '~/components/partials/derivatives/market/market.vue'
import MarqueePanel from '~/components/partials/derivatives/market/marquee.vue'
import ModalTransfer from '~/components/partials/derivatives/transfer.vue'
import ModalDeposit from '~/components/partials/derivatives/deposit.vue'
import ModalTakeOut from '~/components/partials/derivatives/take-out.vue'
import ModalAddMargin from '~/components/partials/derivatives/positions/add-margin/index.vue'
import ModalWithdraw from '~/components/partials/derivatives/withdraw.vue'
import TradingPanel from '~/components/partials/derivatives/trading/index.vue'
import BalancePanel from '~/components/partials/derivatives/balance.vue'
import SubaccountBalancePanel from '~/components/partials/derivatives/subaccount-balance/index.vue'
import OrderBookPanel from '~/components/partials/derivatives/orderbook/index.vue'
import TradesPanel from '~/components/partials/derivatives/trades/index.vue'
import OrdersPanel from '~/components/partials/derivatives/orders.vue'
import PositionsPanel from '~/components/partials/derivatives/positions/index.vue'
import HOCLoading from '~/components/elements/with-loading.vue'
import { UiDerivativeMarket, Breakpoint } from '~/types'
import { gridLayouts } from '~/components/partials/derivatives/grid'
import Header from '~/components/layouts/desktop/header.vue'
import Footer from '~/components/partials/spot/footer.vue'
import { verifyUserAuthentication } from '~/utils/localStroage'

// const GRID_ROW_HEIGHT = 54
const GRID_ROW_HEIGHT = 73
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215

export default Vue.extend({
  components: {
    HOCLoading,
<<<<<<< HEAD
    VModalAddMargin,
    VModalBridgeDeposit,
    VModalBridgeWithdraw,
    VModalSubaccountDeposit,
    VModalSubaccountWithdraw,
    VTrading,
    VBalances,
    VOrders,
    VOrderbook,
    VMarketChart,
    VMarket
=======
    ModalAddMargin,
    BalancePanel,
    TradesPanel,
    ModalTakeOut,
    OrdersPanel,
    ModalWithdraw,
    PositionsPanel,
    OrderBookPanel,
    TradingPanel,
    MarketPanel,
    MarqueePanel,
    MarketPriceChartPanel,
    GridLayout,
    GridItem,
    ModalTransfer,
    ModalDeposit,
    SubaccountBalancePanel,
    'app-header': Header,
     'v-footer': Footer
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
  },

  data() {
    return {
      status: new Status(StatusType.Loading),
      interval: 0 as any
    }
  },

  computed: {
    slugFromRoute(): string {
      const { params } = this.$route

      return params.derivative
    },

    marketFromRoute(): UiDerivativeMarket | undefined {
      const { markets, slugFromRoute } = this

      return markets.find(
        (m) => m.slug.toLowerCase() === slugFromRoute.toLowerCase()
      )
    },

    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    markets(): UiDerivativeMarket[] {
      return this.$accessor.derivatives.markets
    }
  },

  mounted() {
    const authenticate = verifyUserAuthentication();
    if (!authenticate) {
         this.$router.push('/');
    }

    this.$accessor.derivatives
      .changeMarket(this.marketFromRoute)
      .then(() => {
        //
      })
      .catch(this.$onRejected)
      .finally(() => {
        this.status.setIdle()
      })
  },

  beforeDestroy() {
    this.$accessor.derivatives.reset()
    clearInterval(this.interval)
  },

  methods: {
    //
  }
})
</script>
