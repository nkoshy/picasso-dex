<template>
  <div class="flex flex-col flex-wrap overflow-y-hidden w-full">
<<<<<<< HEAD
    <div ref="sellOrders" class="overflow-y-scroll w-full orderbook-half-h">
      <div class="flex h-full w-full">
        <ul
          class="list-order-book w-full mt-auto"
          @mouseenter="autoScrollSellsLocked = true"
          @mouseleave="autoScrollSellsLocked = false"
        >
          <v-record
            v-for="(sell, index) in sellsWithDepth"
            :key="`order-book-sell-${index}`"
            :type="DerivativeOrderSide.Sell"
            :user-orders="sellUserOrderPrices"
            :record="sell"
          ></v-record>
        </ul>
      </div>
    </div>
    <div
      v-if="market"
      class="orderbook-middle-h bg-gray-900 flex flex-col items-center justify-center border-t border-b"
    >
      <div class="w-full flex items-center justify-center">
        <v-icon-arrow
          v-if="
            [Change.Increase, Change.Decrease].includes(lastTradedPriceChange)
          "
          class="transform w-3 h-3 lg:w-4 lg:h-4 4xl:w-5 4xl:h-5"
          :class="{
            'text-red-500 -rotate-90':
              lastTradedPriceChange === Change.Decrease,
            'text-aqua-500 rotate-90': lastTradedPriceChange === Change.Increase
          }"
        />
        <span
          :class="{
            'text-red-500': lastTradedPriceChange === Change.Decrease,
            'text-aqua-500': lastTradedPriceChange !== Change.Decrease
          }"
          class="font-bold font-mono text-base lg:text-lg 4xl:text-xl"
        >
          {{ lastTradedPriceToFormat }}
=======
    <ul
      ref="sellOrders"
      class="list-order-book overflow-auto w-full bg-dark-purple"
      @mouseenter="autoScrollSellsLocked = true"
      @mouseleave="autoScrollSellsLocked = false"
    >
      <v-record-empty
        v-for="(emptyOrder, index) in sellsEmptyCount"
        :key="`order-book-sell-empty-${index}`"
      ></v-record-empty>
      <v-record
        v-for="(sell, index) in sellsWithDepth"
        :key="`order-book-sell-${index}`"
        :type="DerivativeOrderSide.Sell"
        :user-orders="sellUserOrderPrices"
        :record="sell"
      ></v-record>
    </ul>
    <div
      v-if="market"
      class="
        h-14
        flex flex-col
        items-center
        justify-center
      "
    >
      <div class="w-full flex justify-between px-2">
        <span class=" font-sora text-white font-bold text-base text-light-green w-2/3 text-right pr-2">
          <div class="inline-block mr-1">
            <v-ui-icon
              v-if="
                [Change.Increase, Change.Decrease].includes(
                  lastTradedPriceChange
                )
              "
              xs
              :rotate="lastTradedPriceChange === Change.Decrease"
              :aqua="lastTradedPriceChange === Change.Increase"
              :red="lastTradedPriceChange === Change.Decrease"
              :icon="Icon.Arrow"
            />
          </div>
          <div class="inline-block">
            <v-ui-format-order-price
              v-bind="{
                value: lastTradedPrice,
                type:
                  lastTradedPriceChange !== Change.Decrease
                    ? TradeDirection.Buy
                    : TradeDirection.Sell
              }"
              class="flex justify-end"
            />
          </div>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
        </span>
      </div>
    </div>
    <ul
      ref="buyOrders"
      class="list-order-book overflow-y-scroll w-full orderbook-half-h"
      @mouseenter="autoScrollBuysLocked = true"
      @mouseleave="autoScrollBuysLocked = false"
    >
      <v-record
        v-for="(buy, index) in buysWithDepth"
        :key="`order-book-buy-${index}`"
        :type="DerivativeOrderSide.Buy"
        :user-orders="buyUserOrderPrices"
        :record="buy"
      ></v-record>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BigNumberInBase, BigNumberInWei } from '@injectivelabs/utils'
import Record from './record.vue'
import {
  UI_DEFAULT_PRICE_DISPLAY_DECIMALS,
  ZERO_IN_BASE
} from '~/app/utils/constants'
import {
  UiDerivativeTrade,
  UiDerivativeMarket,
  UiDerivativeLimitOrder,
  UiPriceLevel,
  UiDerivativeOrderbook,
  TradeDirection,
  DerivativeOrderSide,
  UiOrderbookPriceLevel,
  Icon,
  Change
} from '~/types'

export default Vue.extend({
  components: {
    'v-record': Record
  },

  data() {
    return {
      Icon,
      Change,
      TradeDirection,
      DerivativeOrderSide,
      autoScrollSellsLocked: false,
      autoScrollBuysLocked: false
    }
  },

  computed: {
    trades(): UiDerivativeTrade[] {
      return this.$accessor.derivatives.trades
    },

    subaccountOrders(): UiDerivativeLimitOrder[] {
      return this.$accessor.derivatives.subaccountOrders
    },

    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    orderbook(): UiDerivativeOrderbook | undefined {
      return this.$accessor.derivatives.orderbook
    },

    lastTradedPrice(): BigNumberInBase {
      return this.$accessor.derivatives.lastTradedPrice
    },

    lastTradedPriceChange(): Change {
      return this.$accessor.derivatives.lastTradedPriceChange
    },

    lastTradedPriceToFormat(): string {
      const { market, lastTradedPrice } = this

      if (!market) {
        return lastTradedPrice.toFormat(UI_DEFAULT_PRICE_DISPLAY_DECIMALS)
      }

      return lastTradedPrice.toFormat(market.priceDecimals)
    },

    buys(): UiPriceLevel[] {
      const { orderbook } = this

      if (!orderbook) {
        return []
      }

      return orderbook.buys
    },

    sells(): UiPriceLevel[] {
      const { orderbook } = this

      if (!orderbook) {
        return []
      }

      return orderbook.sells
    },

    buyUserOrderPrices(): string[] {
      const { subaccountOrders } = this

      return subaccountOrders.reduce((records, { orderSide, price }) => {
        return orderSide === DerivativeOrderSide.Buy
          ? [...records, price]
          : records
      }, [] as string[])
    },

    sellUserOrderPrices(): string[] {
      const { subaccountOrders } = this

      return subaccountOrders.reduce((records, { orderSide, price }) => {
        return orderSide === DerivativeOrderSide.Sell
          ? [...records, price]
          : records
      }, [] as string[])
    },

    buysTotalNotional(): BigNumberInBase {
      const { buys, market } = this

      if (!market) {
        return ZERO_IN_BASE
      }

      return buys.reduce((total, buy) => {
        return total.plus(
          new BigNumberInWei(buy.quantity)
            .times(buy.price)
            .toBase(market.quoteToken.decimals)
        )
      }, ZERO_IN_BASE)
    },

    sellsTotalNotional(): BigNumberInBase {
      const { sells, market } = this

      if (!market) {
        return ZERO_IN_BASE
      }

      return sells.reduce((total, sell) => {
        return total.plus(
          new BigNumberInWei(sell.quantity)
            .times(sell.price)
            .toBase(market.quoteToken.decimals)
        )
      }, ZERO_IN_BASE)
    },

    buysWithDepth(): UiOrderbookPriceLevel[] {
      const { buys, buysTotalNotional, market } = this

      if (!market) {
        return []
      }

      let accumulator = ZERO_IN_BASE
      return buys.map((record: UiPriceLevel, index: number) => {
        const notional = new BigNumberInWei(record.quantity)
          .times(record.price)
          .toBase(market.quoteToken.decimals)

        accumulator = index === 0 ? notional : accumulator.plus(notional)

        return {
          ...record,
          total: accumulator.toFixed(),
          depth: accumulator.dividedBy(buysTotalNotional).times(100).toNumber()
        }
      })
    },

    sellsWithDepth(): UiOrderbookPriceLevel[] {
      const { sells, sellsTotalNotional, market } = this

      if (!market) {
        return []
      }

      let accumulator = ZERO_IN_BASE
      return [...sells]
        .map((record: UiPriceLevel, index: number) => {
          const notional = new BigNumberInWei(record.quantity)
            .times(record.price)
            .toBase(market.quoteToken.decimals)

          accumulator = index === 0 ? notional : accumulator.plus(notional)

          return {
            ...record,
            total: accumulator.toFixed(),
            depth: accumulator
              .dividedBy(sellsTotalNotional)
              .times(100)
              .toNumber()
          }
        })
        .reverse()
    }
  },

  watch: {
    sells() {
      this.$nextTick(this.onScrollSells)
    },

    buys() {
      this.$nextTick(this.onScrollBuys)
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.onScrollSells()
      this.onScrollBuys()
    })
  },

  methods: {
    onScrollSells() {
      const el = this.$refs.sellOrders as any

      if (el && !this.autoScrollSellsLocked) {
        el.scrollTop = el.scrollHeight
      }
    },

    onScrollBuys() {
      const el = this.$refs.buyOrders as any

      if (el && !this.autoScrollBuysLocked) {
        el.scrollTop = 0
      }
    }
  }
})
</script>
