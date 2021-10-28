<template>
  <li v-if="market" class="flex h-6 items-center last:mb-0 first:mt-0 relative">
<<<<<<< HEAD
    <span
      class="w-1/3 text-xs px-2 cursor-pointer text-right font-mono"
      :class="{
        'text-aqua-500': trade.tradeDirection === TradeDirection.Buy,
        'text-red-500': trade.tradeDirection === TradeDirection.Sell
      }"
    >
      {{ priceToFormat }}
    </span>
    <span class="w-1/3 text-xs px-2 text-right font-mono">
      {{ quantityToFormat }}
    </span>
    <span class="w-1/3 text-xs px-2 text-gray-500 text-right font-mono">
      {{ time }}
=======
    <span class="size-col" :class="newTradeClass"></span>
    <span class="w-1/3 text-xs px-2 cursor-pointer">
      <v-ui-format-order-price
        v-bind="{
          value: price,
          decimals: market.priceDecimals,
          type: trade.tradeDirection
        }"
        class="block text-left font-sora text-dark-red text-xs"
      />
    </span>
    <span class="w-1/3 text-xs px-2">
      <v-ui-format-amount
        v-bind="{
          value: quantity,
          decimals: market.quantityDecimals
        }"
        class="block text-right font-sora text-xs text-white"
      />
    </span>
    <span class="w-1/3 text-xs px-2">
      <v-ui-text muted class="font-sora block text-center text-xs text-white opacity-40">
        {{ time }}
      </v-ui-text>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    </span>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { BigNumberInWei, BigNumberInBase } from '@injectivelabs/utils'
import { format } from 'date-fns'
import { UiDerivativeMarket, TradeDirection, UiDerivativeTrade } from '~/types'
import {
  UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS,
  UI_DEFAULT_PRICE_DISPLAY_DECIMALS,
  ZERO_IN_BASE
} from '~/app/utils/constants'

export default Vue.extend({
  props: {
    trade: {
      required: true,
      type: Object as PropType<UiDerivativeTrade>
    }
  },

  data() {
    return {
      TradeDirection
    }
  },

  computed: {
    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    price(): BigNumberInBase {
      const { market, trade } = this

      if (!market || !trade.executionPrice) {
        return ZERO_IN_BASE
      }

      return new BigNumberInWei(trade.executionPrice).toBase(
        market.quoteToken.decimals
      )
    },

    priceToFormat(): string {
      const { market, price } = this

      if (!market) {
        return price.toFormat(UI_DEFAULT_PRICE_DISPLAY_DECIMALS)
      }

      return price.toFormat(market.priceDecimals)
    },

    quantity(): BigNumberInBase {
      const { market, trade } = this

      if (!market || !trade.executionQuantity) {
        return ZERO_IN_BASE
      }

      return new BigNumberInBase(trade.executionQuantity)
    },

    quantityToFormat(): string {
      const { market, quantity } = this

      if (!market) {
        return quantity.toFormat(UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS)
      }

      return quantity.toFormat(market.quantityDecimals)
    },

    total(): BigNumberInBase {
      const { quantity, price } = this

      return price.times(quantity)
    },

    time(): string {
      const { market, trade } = this

      if (!market || !trade.executedAt) {
        return ''
      }

      return format(trade.executedAt, 'HH:mm:ss')
    },

    newTradeClass(): string {
      /*
      const { change, type } = this.trade

      if (change !== Change.New) {
        return ''
      }

      return type === DerivativeOrderSide.Buy ? 'up' : 'down' */
      return ''
    }
  }
})
</script>
