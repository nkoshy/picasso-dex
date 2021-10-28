<template>
<<<<<<< HEAD
  <div v-if="market" class="w-full">
    <div class="flex items-center justify-center">
      <v-button
        :class="{
          'text-gray-500': tradingType === TradeExecutionType.LimitFill
        }"
        text-xs
        @click.stop="onTradingTypeToggle"
      >
        {{ $t('market') }}
      </v-button>
      <div class="mx-2 w-px h-4 bg-gray-500"></div>
      <v-button
        sm
        :class="{
          'text-gray-500': tradingType === TradeExecutionType.Market
        }"
        text-xs
        @click.stop="onTradingTypeToggle"
      >
        {{ $t('limit') }}
      </v-button>
    </div>
    <div class="mt-4">
      <div class="bg-gray-900 rounded-2xl flex">
        <v-button-select
          v-model="orderType"
          :option="SpotOrderSide.Buy"
          aqua
          class="w-1/2"
        >
          {{ $t('buy_asset', { asset: market.baseToken.symbol }) }}
        </v-button-select>
        <v-button-select
          v-model="orderType"
          :option="SpotOrderSide.Sell"
          red
          class="w-1/2"
        >
          {{ $t('sell_asset', { asset: market.baseToken.symbol }) }}
        </v-button-select>
      </div>
    </div>
    <div class="mt-8">
      <div>
        <v-input
          ref="input-amount"
          :value="form.amount"
          :label="$t('amount')"
=======
  <div v-if="market" class="p-3 w-full bg-light-purple">

    <div class="w-full flex ">
      <v-ui-button-select
        v-model="tradingType"
        :option="TradeExecutionType.LimitFill"
        class="font-sora" 
        primarylimit
        nonprimarylimit
      >
        {{ $t('limit') }}
      </v-ui-button-select>
      <v-ui-button-select
        v-model="tradingType"
        :option="TradeExecutionType.Market"
        class="text-xs font-sora"
        primarylimit
        nonprimarylimit
      >
        {{ $t('market') }}
      </v-ui-button-select>
      
    </div>

    <div class="w-full flex font-sora mt-3.5">
      <v-ui-button-select
        v-model="orderType"
        :option="SpotOrderSide.Buy"
        half
        primary
        case
        nonprimary  
        class="font-sora"            
      >
        {{ $t('buy', { asset: market.baseToken.symbol }) }}
      </v-ui-button-select>
      <v-ui-button-select
        v-model="orderType"
        :option="SpotOrderSide.Sell"
        half
        accent
        case
        primary
        nonprimary
        class="font-sora" 
      >
        {{ $t('sell', { asset: market.baseToken.symbol }) }}
      </v-ui-button-select>
    </div>
    <p slot="header" class="text-sm font-normal font-sora pb-3.5 pt-4">
        <v-ui-text muted-md>
        {{ $t(orderTypeBuy ? 'Buy' : 'Sell') }}
        {{market.baseToken.symbol}}
        </v-ui-text>
        </p>
    
    <div class="mt-2">
       <div
        v-if="true"
        slot="context"
        class="text-xs text-gray-400 flex pb-5 justify-between"
      >
        <div class="pt-2">
          <span class="font-sora text-xs opacity-40 text-white">Available</span>
        </div>
        <div class="pt-2 text-xs">
          <v-ui-format-amount v-if="quoteBalance !== undefined"
        v-bind="{
          value: quoteBalance.availableBalance.toBase(quoteBalance.token.decimals)
        }"
      />
          <!-- <span class="cursor-pointer text-xs font-normal text-white font-sora">
            {{ baseBalance.availableBalance.toBase(baseBalance.token.decimals) }}
          </span> -->
          <span class="cursor-pointer text-xs font-bold text-white font-sora">
            {{market.ticker.split('/')[1]}}
          </span>
        </div>
      </div>
      <v-slider @onValueChange="onSliderValueChange" :sliderValue="sliderValue" />

      <div v-if="!tradingTypeMarket" class="mb-4 ">
        <v-input
          ref="input-price"
          :custom-handler="true"
          :max-selector="true"
          :value="form.price"
          :placeholder="$t('price')"
          type="number"
          :step="priceStep"
          min="0"
          @blur="onPriceBlur"
          @input="onPriceChange"
          @input-max="() => onMaxInput(100)"
        >
          <span slot="addon">{{ market.quoteToken.symbol.toUpperCase() }}</span>
          
          <!-- <div
            v-if="true"
            slot="context"
            class="text-xs text-gray-400 flex items-center"
          >
            <span class="cursor-pointer text-xs font-normal text-white font-sora"
              >0.000005</span
            >
            <span class="cursor-pointer text-xs font-bold text-white font-sora"
              >USDT</span
            >
          </div> -->
        </v-input>
        <v-ui-text v-if="priceError" semibold accent v-bind="{ '2xs': true }">
          {{ priceError }}
        </v-ui-text>
      </div>

      <div class="mb-4">
        <v-input
          ref="input-amount"
          :value="form.amount"
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
          :custom-handler="true"
          :max-selector="true"
          :placeholder="$t('amount')"
          type="number"
          :step="amountStep"
          min="0"
          @blur="onAmountBlur"
          @input="onAmountChange"
          @input-max="() => onMaxInput(100)"
        >
        <span class="px-22 py-1 bg-dark-700 border border-dark-600 rounded text-xs">
        Max
      </span>
          <span slot="addon">{{ market.baseToken.symbol.toUpperCase() }}</span>
<<<<<<< HEAD
          <div
            slot="context"
            class="text-xs text-gray-400 flex items-center font-mono"
          >
            <span class="mr-1 cursor-pointer" @click.stop="onMaxInput(25)">
              25%
            </span>
            <span class="mr-1 cursor-pointer" @click.stop="onMaxInput(50)">
              50%
            </span>
            <span class="mr-1 cursor-pointer" @click.stop="onMaxInput(75)">
              75%
            </span>
            <span class="cursor-pointer" @click.stop="onMaxInput(100)">
              100%
            </span>
          </div>
=======
          <!-- <div slot="context" class="text-xs text-gray-400 flex items-center">
            <span class="mr-1 cursor-pointer" @click.stop="onMaxInput(25)"
              >25%</span
            >
            <span class="mr-1 cursor-pointer" @click.stop="onMaxInput(50)"
              >50%</span
            >
            <span class="mr-1 cursor-pointer" @click.stop="onMaxInput(75)"
              >75%</span
            >
            <span class="cursor-pointer" @click.stop="onMaxInput(100)"
              >100%</span
            >
          </div> -->
          
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
        </v-input>
        <span v-if="amountError" class="text-2xs font-semibold text-red-500">
          {{ amountError }}
        </span>
        <span
          v-if="priceError && tradingTypeMarket"
          class="text-2xs font-semibold text-red-500"
        >
          {{ priceError }}
        </span>
      </div>
<<<<<<< HEAD
      <div v-if="!tradingTypeMarket" class="mt-6">
=======
     </div>
      <!-- <v-slider @input="onSliderValueChange"/> -->
      
    <!-- <div v-if="!tradingTypeMarket" class="mb-4">
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
        <v-input
          ref="input-price"
          :value="form.price"
          :placeholder="$t('price')"
          :label="$t('price')"
          :disabled="tradingTypeMarket"
          type="number"
          :step="priceStep"
          min="0"
          @blur="onPriceBlur"
          @input="onPriceChange"
        >
          <span slot="addon">{{ market.quoteToken.symbol.toUpperCase() }}</span>
        </v-input>
        <span v-if="priceError" class="text-red-500 font-semibold text-2xs">
          {{ priceError }}
        </span>
      </div>
    </div> -->
    <component
      :is="tradingTypeMarket ? `v-order-details-market` : 'v-order-details'"
      v-bind="{
        price: executionPrice,
        orderType,
        orderTypeBuy,
        fees,
        total,
        totalWithFees,
        totalWithoutFees,
        feeReturned,
        amount,
        detailsDrawerOpen
      }"
      @drawer-toggle="onDetailsDrawerToggle"
    />
    <div class="mt-4">
      <v-button
        lg
        :status="status"
        :disabled="hasErrors || !isUserWalletConnected"
        :ghost="hasErrors"
        :aqua="!hasErrors && orderType === SpotOrderSide.Buy"
        :red="!hasErrors && orderType === SpotOrderSide.Sell"
<<<<<<< HEAD
        class="w-full"
        @click.stop="onSubmit"
      >
        {{ $t(orderTypeBuy ? 'buy' : 'sell') }}
      </v-button>
=======
        class="uppercase"
        wide
        
        @click.stop="onSubmit"
      >
        {{ $t(orderTypeBuy ? 'buy now' : 'sell now') }}
      </v-ui-button>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    </div>

    <v-modal-order-confirm
      @confirmed="submitLimitOrder"
      @disabled="handleDisableAcceptHighPriceDeviations"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TradeError } from 'types/errors'
import { BigNumberInWei, Status, BigNumberInBase } from '@injectivelabs/utils'
import OrderDetails from './order-details.vue'
import OrderDetailsMarket from './order-details-market.vue'
import Slider from '~/components/inputs/slider.vue'
import {
  DEFAULT_MAX_SLIPPAGE,
  ZERO_IN_BASE,
  NUMBER_REGEX,
<<<<<<< HEAD
  DEFAULT_PRICE_WARNING_DEVIATION
=======
  UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS,
  UI_DEFAULT_PRICE_DISPLAY_DECIMALS
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
} from '~/app/utils/constants'
import ButtonCheckbox from '~/components/inputs/button-checkbox.vue'
import VModalOrderConfirm from '~/components/partials/modals/order-confirm.vue'
import {
  SpotOrderSide,
  TradeExecutionType,
  UiSpotOrderbook,
  UiPriceLevel,
  UiSpotMarket,
  UiSubaccount,
<<<<<<< HEAD
  Modal
=======
  UiSubaccountBalanceWithToken
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
} from '~/types'
import {
  calculateWorstExecutionPriceFromOrderbook,
  getApproxAmountForMarketOrder
} from '~/app/services/spot'

interface TradeForm {
  amount: string
  price: string
}

const initialForm = (): TradeForm => ({
  amount: '',
  price: ''
})

export default Vue.extend({
  components: {
    'v-button-checkbox': ButtonCheckbox,
    'v-order-details': OrderDetails,
    'v-order-details-market': OrderDetailsMarket,
<<<<<<< HEAD
    VModalOrderConfirm
=======
    'v-slider': Slider
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
  },

  data() {
    return {
      TradeExecutionType,
      SpotOrderSide,
      tradingType: TradeExecutionType.Market,
      orderType: SpotOrderSide.Buy,
      detailsDrawerOpen: true,
      status: new Status(),
      form: initialForm(),
      sliderValue:25
    }
  },

  computed: {
    quoteBalance(): UiSubaccountBalanceWithToken | undefined {
      const { subaccount, market } = this

      if (!subaccount || !market) {
        return undefined
      }

      const quoteBalance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.quoteDenom.toLowerCase()
      )

      return {
        totalBalance: new BigNumberInWei(
          quoteBalance ? quoteBalance.totalBalance : 0
        ),
        availableBalance: new BigNumberInWei(
          quoteBalance ? quoteBalance.availableBalance : 0
        ),
        displayDecimals: UI_DEFAULT_PRICE_DISPLAY_DECIMALS,
        token: market.quoteToken,
        denom: market.quoteDenom
      }
    },

    baseBalance(): UiSubaccountBalanceWithToken | undefined {
      const { subaccount, market } = this

      if (!subaccount || !market) {
        return undefined
      }

      const baseBalance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.baseDenom.toLowerCase()
      )

      return {
        totalBalance: new BigNumberInWei(
          baseBalance ? baseBalance.totalBalance : 0
        ),
        availableBalance: new BigNumberInWei(
          baseBalance ? baseBalance.availableBalance : 0
        ),
        displayDecimals: UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS,
        token: market.baseToken,
        denom: market.baseDenom
      }
    },
    
    isUserWalletConnected(): boolean {
      return this.$accessor.wallet.isUserWalletConnected
    },

    acceptHighPriceDeviations(): boolean {
      return this.$accessor.app.acceptHighPriceDeviations
    },

    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    orderbook(): UiSpotOrderbook | undefined {
      return this.$accessor.spot.orderbook
    },

    subaccount(): UiSubaccount | undefined {
      return this.$accessor.account.subaccount
    },

    lastTradedPrice(): BigNumberInBase {
      return this.$accessor.spot.lastTradedPrice
    },

    baseAvailableBalance(): BigNumberInBase {
      const { subaccount, market } = this

      if (!subaccount || !market) {
        return ZERO_IN_BASE
      }

      const balance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.baseDenom.toLowerCase()
      )

      if (!balance) {
        return ZERO_IN_BASE
      }

      return new BigNumberInWei(balance.availableBalance || 0).toBase(
        market.baseToken.decimals
      )
    },

    quoteAvailableBalance(): BigNumberInBase {
      const { subaccount, market } = this

      if (!subaccount || !market) {
        return ZERO_IN_BASE
      }

      const balance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.quoteDenom.toLowerCase()
      )

      if (!balance) {
        return ZERO_IN_BASE
      }

      return new BigNumberInWei(balance.availableBalance || 0).toBase(
        market.quoteToken.decimals
      )
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

    amount(): BigNumberInBase {
      return new BigNumberInBase(this.form.amount)
    },

    hasAmount(): boolean {
      const { amount, amountStep } = this

      return !amount.isNaN() && amount.gt(0) && amount.gte(amountStep)
    },

    tradingTypeMarket(): boolean {
      const { tradingType } = this

      return tradingType === TradeExecutionType.Market
    },

    orderTypeBuy(): boolean {
      const { orderType } = this

      return orderType === SpotOrderSide.Buy
    },

    slippage(): BigNumberInBase {
      const { orderTypeBuy } = this

      return new BigNumberInBase(
        orderTypeBuy
          ? DEFAULT_MAX_SLIPPAGE.div(100).plus(1)
          : DEFAULT_MAX_SLIPPAGE.div(100).minus(1).times(-1)
      )
    },

    price(): BigNumberInBase {
      return new BigNumberInBase(this.form.price)
    },

    executionPrice(): BigNumberInBase {
      const {
        tradingTypeMarket,
        orderTypeBuy,
        sells,
        buys,
        slippage,
        hasAmount,
        market,
        amount,
        price
      } = this

      if (!market) {
        return ZERO_IN_BASE
      }

      if (tradingTypeMarket) {
        if (!hasAmount) {
          return ZERO_IN_BASE
        }

        const records = orderTypeBuy ? sells : buys

        const worstPrice = calculateWorstExecutionPriceFromOrderbook({
          records,
          amount,
          market
        })

        return new BigNumberInBase(
          worstPrice.times(slippage).toFixed(market.priceDecimals)
        )
      }

      if (price.isNaN()) {
        return ZERO_IN_BASE
      }

      return new BigNumberInBase(
        new BigNumberInBase(price).toFixed(market.priceDecimals)
      )
    },

    hasPrice(): boolean {
      const { executionPrice, priceStep } = this

      return (
        !executionPrice.isNaN() &&
        executionPrice.gt(0) &&
        executionPrice.gte(priceStep)
      )
    },

    amountStep(): string {
      const { market } = this

      if (!market) {
        return '1'
      }

      const decimalsAllowed = new BigNumberInBase(market.quantityDecimals)

      if (decimalsAllowed.eq(0)) {
        return '1'
      }

      if (decimalsAllowed.eq(1)) {
        return '0.1'
      }

      if (decimalsAllowed.gt(1)) {
        return '0.' + '0'.repeat(decimalsAllowed.toNumber() - 1) + '1'
      }

      return '1'
    },

    priceStep(): string {
      const { market } = this

      if (!market) {
        return '1'
      }

      const decimalsAllowed = new BigNumberInBase(market.priceDecimals)

      if (decimalsAllowed.eq(0)) {
        return '1'
      }

      if (decimalsAllowed.eq(1)) {
        return '0.1'
      }

      if (decimalsAllowed.gt(1)) {
        return '0.' + '0'.repeat(decimalsAllowed.toNumber() - 1) + '1'
      }

      return '1'
    },

    priceHasHighDeviationWarning(): boolean {
      const { price, orderTypeBuy, tradingTypeMarket, lastTradedPrice } = this

      if (tradingTypeMarket) {
        return false
      }

      if (price.lte(0)) {
        return false
      }

      const deviation = new BigNumberInBase(1)
        .minus(
          orderTypeBuy
            ? lastTradedPrice.dividedBy(price)
            : price.dividedBy(lastTradedPrice)
        )
        .times(100)

      return deviation.gt(DEFAULT_PRICE_WARNING_DEVIATION)
    },

    availableBalanceError(): TradeError | undefined {
      const {
        quoteAvailableBalance,
        baseAvailableBalance,
        totalWithFees,
        amount,
        hasAmount,
        orderTypeBuy
      } = this

      if (orderTypeBuy) {
        if (quoteAvailableBalance.lt(totalWithFees)) {
          return {
            price: this.$t('not_enough_balance')
          }
        }

        return undefined
      }

      if (!hasAmount) {
        return undefined
      }

      if (baseAvailableBalance.lt(amount)) {
        return {
          amount: this.$t('not_enough_balance')
        }
      }

      return undefined
    },

    notEnoughOrdersToFillFromError(): TradeError | undefined {
      const {
        tradingTypeMarket,
        orderTypeBuy,
        sells,
        buys,
        amount,
        hasAmount
      } = this

      if (!tradingTypeMarket || !hasAmount) {
        return
      }

      const orders = orderTypeBuy ? sells : buys

      if (orders.length <= 0 && amount.gt(0)) {
        return {
          amount: this.$t('not_enough_fillable_orders')
        }
      }

      return undefined
    },

    amountTooBigToFillError(): TradeError | undefined {
      const {
        tradingTypeMarket,
        hasPrice,
        hasAmount,
        orderTypeBuy,
        sells,
        buys,
        amount,
        market
      } = this

      if (!tradingTypeMarket || !hasPrice || !hasAmount || !market) {
        return
      }

      const orders = orderTypeBuy ? sells : buys
      const totalAmount = orders.reduce((totalAmount, { quantity }) => {
        return totalAmount.plus(
          new BigNumberInWei(quantity).toBase(market.baseToken.decimals)
        )
      }, ZERO_IN_BASE)

      if (totalAmount.lt(amount)) {
        return {
          amount: this.$t('not_enough_fillable_orders')
        }
      }

      return undefined
    },

    priceNotValidError(): TradeError | undefined {
      const { form } = this

      if (!form.price) {
        return undefined
      }

      if (NUMBER_REGEX.test(form.price)) {
        return undefined
      }

      return {
        price: this.$t('not_valid_number')
      }
    },

    amountNotValidNumberError(): TradeError | undefined {
      const { form } = this

      if (!form.amount) {
        return undefined
      }

      if (NUMBER_REGEX.test(form.amount)) {
        return undefined
      }

      return {
        amount: this.$t('not_valid_number')
      }
    },

    priceError(): string | null {
      const { price } = this.errors

      return price || null
    },

    amountError(): string | null {
      const { amount } = this.errors

      return amount || null
    },

    errors(): TradeError {
      if (this.availableBalanceError) {
        return this.availableBalanceError
      }

      if (this.amountTooBigToFillError) {
        return this.amountTooBigToFillError
      }

      if (this.notEnoughOrdersToFillFromError) {
        return this.notEnoughOrdersToFillFromError
      }

      if (this.amountNotValidNumberError) {
        return this.amountNotValidNumberError
      }

      if (this.priceNotValidError) {
        return this.priceNotValidError
      }

      return { price: '', amount: '' }
    },

    hasErrors(): boolean {
      const {
        priceError,
        amountError,
        tradingTypeMarket,
        hasAmount,
        hasPrice,
        price,
        amount
      } = this

      if (priceError) {
        return true
      }

      if (amountError) {
        return true
      }

      if (!hasAmount) {
        return true
      }

      if (amount.lte(0)) {
        return true
      }

      if (!tradingTypeMarket) {
        if (price.lte(0) || !hasPrice) {
          return true
        }
      }

      if (!tradingTypeMarket && hasPrice && price.lte(0)) {
        return true
      }

      return false
    },

    total(): BigNumberInBase {
      const { amount, hasPrice, hasAmount, executionPrice, market } = this

      if (!hasPrice || !hasAmount || !market) {
        return ZERO_IN_BASE
      }

      return executionPrice.times(amount)
    },

    fees(): BigNumberInBase {
      const { total, market } = this

      if (total.isNaN() || !market) {
        return ZERO_IN_BASE
      }

      return total.times(market.takerFeeRate)
    },

    totalWithFees(): BigNumberInBase {
      const { fees, total, market } = this

      if (total.isNaN() || total.lte(0) || !market) {
        return ZERO_IN_BASE
      }

      return fees.plus(total)
    },

    totalWithoutFees(): BigNumberInBase {
      const { fees, total, market } = this

      if (total.isNaN() || total.lte(0) || !market) {
        return ZERO_IN_BASE
      }

      return total.minus(fees)
    },

    feeReturned(): BigNumberInBase {
      const { total, market } = this

      if (total.isNaN() || total.lte(0) || !market) {
        return ZERO_IN_BASE
      }

      return total.times(
        new BigNumberInBase(market.takerFeeRate).minus(market.makerFeeRate)
      )
    }
  },

  watch: {
    orderType() {
      const { tradingType, form, market } = this

      if (tradingType === TradeExecutionType.LimitFill && market) {
        this.onPriceChange(form.price)
      }
    },

    tradingType(newTradingType: TradeExecutionType) {
      const { form, market } = this

      if (newTradingType === TradeExecutionType.LimitFill && market) {
        this.onPriceChange(form.price)
      }
    }
  },

  mounted() {
    this.$root.$on('orderbook-price-click', this.onOrderbookPriceClick)
    this.$root.$on('orderbook-size-click', this.onOrderbookSizeClick)
    this.$root.$on('orderbook-notional-click', this.onOrderbookNotionalClick)
    this.onSliderValueChange()
    
  },

  methods: {
    /**
     * We need to first update the form amount
     * in order to get the new fees that apply to this order
     * and then we update the amount again to acount the fees
     * into consideration
     */
    onMaxInput(percent = 100) {
      this.sliderValue=percent;
      this.onAmountChange(this.getMaxAmountValue(percent))
      this.$nextTick(() => {
        this.onAmountChange(this.getMaxAmountValue(percent))
      })
    },

    onSliderValueChange(sliderValue = 0) {
      this.onAmountChange(this.getMaxAmountValue(sliderValue));
      this.sliderValue=sliderValue;
      this.$nextTick(() => {
        this.onAmountChange(this.getMaxAmountValue(sliderValue))
      })     
    },

    getMaxAmountValue(percentage: number): string {
      const {
        market,
        buys,
        sells,
        tradingTypeMarket,
        orderTypeBuy,
        baseAvailableBalance,
        quoteAvailableBalance,
        executionPrice,
        slippage
      } = this
      const percentageToNumber = new BigNumberInBase(percentage).div(100)
      const balance = orderTypeBuy
        ? quoteAvailableBalance
        : baseAvailableBalance
      if (!market) {
        return ''
      }

      if (!orderTypeBuy) {
        const totalFillableAmount = buys.reduce((totalAmount, { quantity }) => {
          return totalAmount.plus(
            new BigNumberInWei(quantity).toBase(market.baseToken.decimals)
          )
        }, ZERO_IN_BASE)

        const totalBalance = new BigNumberInBase(balance).times(
          percentageToNumber
        )
        const amount = totalFillableAmount.gte(totalBalance)
          ? totalBalance
          : totalFillableAmount

        return amount.toFixed(
          market.quantityDecimals,
          BigNumberInBase.ROUND_FLOOR
        )
      }

      if (tradingTypeMarket) {
        
        return getApproxAmountForMarketOrder({
          market,
          balance,
          slippage: slippage.toNumber(),
          percent: percentageToNumber.toNumber(),
          records: orderTypeBuy ? sells : buys
        }).toFixed(market.quantityDecimals, BigNumberInBase.ROUND_FLOOR)
      }

      if (executionPrice.lte(0)) {
        return ''
      }

      if (balance.lte(0)) {
        return ''
      }

      const fee = new BigNumberInBase(market.takerFeeRate)
      return new BigNumberInBase(balance)
        .dividedBy(executionPrice.times(fee.plus(1)))
        .times(percentageToNumber)
        .toFixed(market.quantityDecimals, BigNumberInBase.ROUND_FLOOR)
    },

    onDetailsDrawerToggle() {
      this.detailsDrawerOpen = !this.detailsDrawerOpen
    },

    onOrderbookSizeClick(size: string) {
      this.onAmountChange(size)
    },

    onOrderbookNotionalClick({
      total,
      price,
      type
    }: {
      total: BigNumberInBase
      price: BigNumberInBase
      type: SpotOrderSide
    }) {
      const { market, slippage } = this

      if (!market) {
        return
      }

      this.tradingType = TradeExecutionType.Market
      this.orderType =
        type === SpotOrderSide.Buy ? SpotOrderSide.Sell : SpotOrderSide.Buy
      const amount = total
        .dividedBy(price.times(slippage).toFixed(market.priceDecimals))
        .toFixed(market.quantityDecimals, BigNumberInBase.ROUND_FLOOR)
      this.$nextTick(() => {
        this.onAmountChange(amount)
      })
    },

    onOrderbookPriceClick(price: string) {
      this.tradingType = TradeExecutionType.LimitFill

      this.$nextTick(() => {
        this.onPriceChange(price)
      })
    },

    onPriceChange(price: string = '') {
      this.form.price = price
    },

    onPriceBlur() {
      const { market, form, hasPrice } = this

      if (!market || !hasPrice) {
        return
      }

      this.form.price = new BigNumberInBase(form.price || 0).toFixed(
        market.priceDecimals
      )
    },

    onAmountBlur() {
      const { market, form } = this

      if (!market) {
        return
      }

      this.form.amount = new BigNumberInBase(form.amount || 0).toFixed(
        market.quantityDecimals
      )
    },

    onAmountChange(amount: string = '') {

      const maxAmount=this.getMaxAmountValue(100);
      this.sliderValue=(Number(amount)/Number(maxAmount))*100;
      this.form.amount = amount;
    },

    onTradingTypeToggle() {
      this.tradingType =
        this.tradingType === TradeExecutionType.LimitFill
          ? TradeExecutionType.Market
          : TradeExecutionType.LimitFill
    },

    handleEnableAcceptHighPriceDeviations() {
      this.$accessor.app.setAcceptHighPriceDeviations(true)
    },

    handleDisableAcceptHighPriceDeviations() {
      this.$accessor.app.setAcceptHighPriceDeviations(false)
    },

    submitLimitOrder() {
      const { orderType, market, price, amount } = this

      if (!market) {
        return
      }

      this.status.setLoading()

      this.$accessor.spot
        .submitLimitOrder({
          price,
          quantity: amount,
          orderType
        })
        .then(() => {
          this.$toast.success(this.$t('order_placed'))
          this.$set(this, 'form', initialForm())
        })
        .catch(this.$onRejected)
        .finally(() => {
          this.status.setIdle()
        })
    },

    submitMarketOrder() {
      const { orderType, market, executionPrice, amount } = this

      if (!market) {
        return
      }

      this.status.setLoading()

      this.$accessor.spot
        .submitMarketOrder({
          quantity: amount,
          price: executionPrice,
          orderType
        })
        .then(() => {
          this.$toast.success(this.$t('trade_placed'))
          this.$set(this, 'form', initialForm())
        })
        .catch(this.$onRejected)
        .finally(() => {
          this.status.setIdle()
        })
    },

    onSubmit() {
      const {
        hasErrors,
        tradingTypeMarket,
        priceHasHighDeviationWarning,
        isUserWalletConnected,
        acceptHighPriceDeviations
      } = this

      if (!isUserWalletConnected) {
        return this.$toast.error(this.$t('please_connect_your_wallet'))
      }

      if (hasErrors) {
        return this.$toast.error(this.$t('error_in_form'))
      }

      if (tradingTypeMarket) {
        return this.submitMarketOrder()
      }

      if (!priceHasHighDeviationWarning) {
        return this.submitLimitOrder()
      }

      // If price has high deviation, we open a confirm modal
      if (acceptHighPriceDeviations) {
        return this.$accessor.modal.openModal(Modal.OrderConfirm)
      } else {
        // If price has high deviation, show a confirm toast that can disable the setting
        return this.$onConfirm(
          this.$t('high_price_deviation_warning', {
            percentage: DEFAULT_PRICE_WARNING_DEVIATION
          }),
          this.handleEnableAcceptHighPriceDeviations
        )
      }
    }
  }
})
</script>
