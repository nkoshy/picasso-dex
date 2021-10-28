<template>
<<<<<<< HEAD
  <HOCLoading :key="$route.fullPath" :status="status">
    <div v-if="market" class="min-h-screen flex flex-col flex-wrap">
      <div class="w-full px-1">
        <v-market />
      </div>
      <div class="flex-1 grid grid-cols-6 lg:grid-cols-12 gap-1 p-1">
        <div class="col-span-6 lg:col-span-3">
          <div class="flex flex-col flex-wrap h-full w-full">
            <v-balances />
            <v-trading class="mt-1 flex-1" />
          </div>
        </div>
        <div class="col-span-6 lg:col-span-9">
          <div class="flex flex-col flex-wrap h-full w-full">
            <div class="w-full">
              <v-card tight>
                <div class="grid grid-cols-6 lg:grid-cols-12">
                  <div class="col-span-6 lg:col-span-8">
                    <v-market-chart :market="market" />
                  </div>
                  <div class="col-span-6 lg:col-span-4">
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
=======
  <HOCLoading v-if="market" :key="$route.fullPath" :status="status">
    <!-- <app-header /> -->
    <div class="h-full max-w-8xl m-auto w-full xl:bg-spot-desktop bg-spot bg-no-repeat bg-cover bg-blend-overlay">
      <app-header landingPage=true />
      <div class="xl:p-4 pl-2 pr-1 pt-0 2xl:ml-auto mr-auto max-w-screen-laptop-screen">
        <grid-layout
          :layout="layout"
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
            :is-draggable="item.isDraggable"
            :is-resizable="item.isResizable"
            :h="item.h"
            :i="item.i"
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
      <modal-acknowledge />
      <v-footer />
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    </div>
  </HOCLoading>
</template>

<script lang="ts">
import Vue from 'vue'
import { Status, StatusType } from '@injectivelabs/utils'
<<<<<<< HEAD
import VModalBridgeDeposit from '~/components/partials/modals/bridge-deposit/index.vue'
import VModalBridgeWithdraw from '~/components/partials/modals/bridge-withdraw/index.vue'
import VModalSubaccountDeposit from '~/components/partials/modals/subaccount-deposit/index.vue'
import VModalSubaccountWithdraw from '~/components/partials/modals/subaccount-withdraw/index.vue'
import VBalances from '~/components/partials/common/balances/index.vue'
import VTrading from '~/components/partials/spot/trading/index.vue'
import VMarketChart from '~/components/partials/common/market/chart.vue'
import VMarket from '~/components/partials/spot/market.vue'
import VOrders from '~/components/partials/spot/orders.vue'
import VOrderbook from '~/components/partials/spot/orderbook.vue'
import HOCLoading from '~/components/hoc/loading.vue'
import { UiSpotMarket } from '~/types'
=======
import { GridLayout, GridItem } from 'vue-grid-layout'
import MarketPriceChartPanel from '~/components/partials/spot/market/chart.vue'
import MarketPanel from '~/components/partials/spot/market/market.vue'
import MarqueePanel from '~/components/partials/spot/market/marquee.vue'
import ModalTransfer from '~/components/partials/spot/transfer.vue'
import ModalTakeOut from '~/components/partials/spot/take-out.vue'
import ModalDeposit from '~/components/partials/spot/deposit.vue'
import ModalWithdraw from '~/components/partials/spot/withdraw.vue'
import TradingPanel from '~/components/partials/spot/trading/index.vue'
import BalancePanel from '~/components/partials/spot/balance.vue'
import SubaccountBalancePanel from '~/components/partials/spot/subaccount-balance/index.vue'
import OrderBookPanel from '~/components/partials/spot/orderbook/index.vue'
import TradesPanel from '~/components/partials/spot/trades/index.vue'
import OrdersPanel from '~/components/partials/spot/orders.vue'
import HOCLoading from '~/components/elements/with-loading.vue'
import { UiSpotMarket, Breakpoint } from '~/types'
import { gridLayouts } from '~/components/partials/spot/grid'
import Header from '~/components/layouts/desktop/header.vue'
import Footer from '~/components/partials/spot/footer.vue'
import ModalAcknowledge from '~/components/partials/acknowledge.vue'
import { Modal } from '~/types'
import { verifyUserAuthentication } from '~/utils/localStroage'

const GRID_ROW_HEIGHT = 73
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215

export default Vue.extend({
  components: {
    HOCLoading,
<<<<<<< HEAD
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
    ModalWithdraw,
    ModalTakeOut,
    BalancePanel,
    TradesPanel,
    OrdersPanel,
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
    'modal-acknowledge': ModalAcknowledge,
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

      return params.spot
    },

    marketFromRoute(): UiSpotMarket | undefined {
      const { markets, slugFromRoute } = this

      return markets.find(
        (m) => m.slug.toLowerCase() === slugFromRoute.toLowerCase()
      )
    },

    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    markets(): UiSpotMarket[] {
      return this.$accessor.spot.markets
    }
  },

  mounted() {
    const authenticate = verifyUserAuthentication();
    if (!authenticate) {
         this.$router.push('/');
    }
    const itemStr = localStorage.getItem("myLoginTime");
    if (itemStr === null) {
      this.$accessor.modal.openModal(Modal.Acknowledge)
      } 
      else {
        const item1 = JSON.parse(itemStr);
        const now2 = new Date();
        if (now2.getTime() > item1.expiry) {
            localStorage.removeItem("myLoginTime");
            this.$accessor.modal.closeModal(Modal.Acknowledge);
            }
            }
    this.$accessor.spot
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
    this.$accessor.spot.reset()
    clearInterval(this.interval)
  },

  methods: {
    //
  }
})
</script>
