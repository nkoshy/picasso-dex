<template>
<<<<<<< HEAD
  <div v-if="market" class="mt-6 py-6 border-t relative">
=======
  <div v-if="market" class="mt-4 py-4 relative">
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    <v-drawer
      :custom-handler="true"
      :custom-is-open="detailsDrawerOpen"
      @drawer-toggle="onDrawerToggle"
    >
<<<<<<< HEAD
      <p slot="header" class="flex justify-between text-sm">
        <v-text-info :title="$t('total')" lg>
          <span class="font-mono flex items-center">
            <span class="mr-1">≈</span>
            {{ totalWithFeesToFormat }}
            <span class="text-gray-500 ml-1">
              {{ market.quoteToken.symbol }}
            </span>
          </span>
        </v-text-info>
      </p>

      <div class="mt-4">
        <v-text-info :title="$t('amount')">
          <span v-if="!amount.isNaN()" class="font-mono flex items-center">
            {{ amountToFormat }}
            <span class="text-gray-500 ml-1">
              {{ market.baseToken.symbol }}
            </span>
          </span>
          <span v-else class="text-gray-500 ml-1"> &mdash; </span>
        </v-text-info>

        <v-text-info :title="$t('price')" class="mt-2">
          <span v-if="price.gt(0)" class="font-mono flex items-center">
            {{ priceToFormat }}
            <span class="text-gray-500 ml-1">
              {{ market.quoteToken.symbol }}
            </span>
          </span>
          <span v-else class="text-gray-500 ml-1"> &mdash; </span>
        </v-text-info>

        <v-text-info
=======
      <p slot="header" class="flex justify-between text-base font-normal font-sora">
        <v-ui-text muted-md>{{ $t('total') }}</v-ui-text>
        <v-ui-text class="flex items-center text-base font-normal font-sora">
          <span class="mr-1">≈</span>
          <v-ui-format-price
            v-bind="{
              value: totalWithFees,
              decimals: market.priceDecimals
            }"
          />
          <small class="font-normal font-sora text-base ml-1 pt-px">{{
            market.quoteToken.symbol
          }}</small>
        </v-ui-text>
      </p>
      <div class="text-xs mt-2">
        <p class="flex justify-between group leading-6">
          <v-ui-text muted-sm class="group-hover:text-white opacity-40">
            {{ $t('amount') }}
          </v-ui-text>
          <v-ui-text v-if="!amount.isNaN()" muted class="flex items-center">
            <v-ui-format-amount
              v-bind="{
                value: amount,
                decimals: market.quantityDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.baseToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white opacity-40">
            &mdash;
          </v-ui-text>
        </p>
        <p class="flex justify-between group leading-6">
          <v-ui-text muted-sm class="group-hover:text-white opacity-40">
            {{ $t('price') }}
          </v-ui-text>
          <v-ui-text v-if="price.gt(0)" muted class="flex items-center">
            <v-ui-format-price
              v-bind="{
                value: price,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white opacity-40">
            &mdash;
          </v-ui-text>
        </p>
       <!-- <p
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
          v-if="!orderTypeReduceOnly"
          :title="$t('liquidation_price')"
          class="mt-2"
        >
<<<<<<< HEAD
          <v-icon-info-tooltip
            slot="context"
            class="ml-2"
            :tooltip="$t('liquidation_price_tooltip')"
          />
          <span
=======
          <v-ui-text muted-sm class="group-hover:text-white opacity-40">
            {{ $t('liquidation_price') }}
          </v-ui-text>
          <v-ui-text
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
            v-if="liquidationPrice.gt(0)"
            class="font-mono flex items-center"
          >
<<<<<<< HEAD
            {{ liquidationPriceToFormat }}
            <span class="text-gray-500 ml-1">
              {{ market.quoteToken.symbol }}
            </span>
          </span>
          <span v-else class="text-gray-500 ml-1"> &mdash; </span>
        </v-text-info>

        <v-text-info
=======
            <v-ui-format-price
              v-bind="{
                value: liquidationPrice,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white opacity-40">
            &mdash;
          </v-ui-text>
        </p>
        <p
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
          v-if="!orderTypeReduceOnly"
          :title="$t('margin')"
          class="mt-2"
        >
<<<<<<< HEAD
          <v-icon-info-tooltip
            slot="context"
            class="ml-2"
            :tooltip="$t('margin_tooltip')"
          />
          <span v-if="margin.gt(0)" class="font-mono flex items-center">
            {{ marginToFormat }}
            <span class="text-gray-500 ml-1">
              {{ market.quoteToken.symbol }}
            </span>
          </span>
          <span v-else class="text-gray-500 ml-1"> &mdash; </span>
        </v-text-info>

        <v-text-info :title="$t('notional_value')" class="mt-2">
          <v-icon-info-tooltip
            slot="context"
            class="ml-2"
            :tooltip="$t('notional_value_tooltip')"
          />
          <span v-if="notionalValue.gt(0)" class="font-mono flex items-center">
            {{ notionalValueToFormat }}
            <span class="text-gray-500 ml-1">
              {{ market.quoteToken.symbol }}
            </span>
          </span>
          <span v-else class="text-gray-500 ml-1"> &mdash; </span>
        </v-text-info>

        <v-text-info :title="$t('fee')" class="mt-2">
          <v-icon-info-tooltip
            slot="context"
            class="ml-2"
            :tooltip="
              $t('fee_order_details_note', {
                feeReturned: feeReturned.toFixed()
              })
            "
          />
          <span v-if="fees.gt(0)" class="font-mono flex items-center">
            {{ feesToFormat }}
            <span class="text-gray-500 ml-1">
              {{ market.quoteToken.symbol }}
            </span>
          </span>
          <span v-else class="text-gray-500 ml-1"> &mdash; </span>
        </v-text-info>
=======
          <v-ui-text muted-sm class="group-hover:text-white opacity-40">
            {{ $t('margin') }}
          </v-ui-text>
          <v-ui-text v-if="margin.gt(0)" muted class="flex items-center">
            <v-ui-format-price
              v-bind="{
                value: margin,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white opacity-40">
            &mdash;
          </v-ui-text>
        </p> -->
        <p class="flex justify-between group leading-6">
          <v-ui-text muted-sm class="group-hover:text-white opacity-40">{{
            $t('notional_value')
          }}</v-ui-text>
          <v-ui-text v-if="notionalValue.gt(0)" muted class="flex items-center">
            <v-ui-format-price
              v-bind="{
                value: notionalValue,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white opacity-40">
            &mdash;
          </v-ui-text>
        </p>
        <p class="flex justify-between group leading-6">
          <v-ui-text muted-sm class="group-hover:text-white flex items-center opacity-40"
            ><span class="mr-2">{{ $t('fee') }}</span
            ><v-ui-icon
              v-if="feeReturned.gt(0)"
              :icon="Icon.Info"
              class="text-gray-500 hover:text-gray-300"
              :tooltip="
                $t('fee_order_details_note', {
                  feeReturned: feeReturned.toFixed()
                })
              "
              2xs
          /></v-ui-text>
          <v-ui-text v-if="fees.gt(0)" muted class="flex items-center">
            <v-ui-format-price
              v-bind="{
                value: fees,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white opacity-40">
            &mdash;
          </v-ui-text>
        </p>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
      </div>
    </v-drawer>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { BigNumberInBase } from '@injectivelabs/utils'
import Drawer from '~/components/elements/drawer.vue'
import { DerivativeOrderSide, UiDerivativeMarket, Icon } from '~/types'
import {
  UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS,
  UI_DEFAULT_PRICE_DISPLAY_DECIMALS,
  ZERO_IN_BASE
} from '~/app/utils/constants'

export default Vue.extend({
  components: {
    'v-drawer': Drawer
  },

  props: {
    orderType: {
      required: true,
      type: String as PropType<DerivativeOrderSide>
    },

    totalWithFees: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    total: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    liquidationPrice: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    margin: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    fees: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    feeReturned: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    notionalValue: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    price: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    amount: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    orderTypeReduceOnly: {
      required: true,
      type: Boolean
    },

    detailsDrawerOpen: {
      required: true,
      type: Boolean
    }
  },

  data() {
    return {
      Icon
    }
  },

  computed: {
    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    totalWithFeesToFormat(): string {
      const { totalWithFees, market } = this

      if (!market) {
        return totalWithFees.toFormat(UI_DEFAULT_PRICE_DISPLAY_DECIMALS)
      }

      return totalWithFees.toFormat(market.priceDecimals)
    },

    priceToFormat(): string {
      const { price, market } = this

      if (!market) {
        return price.toFormat(UI_DEFAULT_PRICE_DISPLAY_DECIMALS)
      }

      return price.toFormat(market.priceDecimals)
    },

    notionalValueToFormat(): string {
      const { notionalValue, market } = this

      if (!market) {
        return notionalValue.toFormat(UI_DEFAULT_PRICE_DISPLAY_DECIMALS)
      }

      return notionalValue.toFormat(market.priceDecimals)
    },

    liquidationPriceToFormat(): string {
      const { liquidationPrice, market } = this

      if (!market) {
        return liquidationPrice.toFormat(UI_DEFAULT_PRICE_DISPLAY_DECIMALS)
      }

      return liquidationPrice.toFormat(market.priceDecimals)
    },

    marginToFormat(): string {
      const { margin, market } = this

      if (!market) {
        return margin.toFormat(UI_DEFAULT_PRICE_DISPLAY_DECIMALS)
      }

      return margin.toFormat(market.priceDecimals)
    },

    feesToFormat(): string {
      const { fees, market } = this

      if (!market) {
        return fees.toFormat(UI_DEFAULT_PRICE_DISPLAY_DECIMALS)
      }

      return fees.toFormat(market.priceDecimals)
    },

    amountToFormat(): string {
      const { amount, market } = this

      if (amount.isNaN()) {
        return ZERO_IN_BASE.toFormat(UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS)
      }

      if (!market) {
        return amount.toFormat(UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS)
      }

      return amount.toFormat(market.quantityDecimals)
    }
  },

  methods: {
    onDrawerToggle() {
      this.$emit('drawer-toggle')
    }
  }
})
</script>
