<template>
  <modal :is-open="isModalOpen" @closed="closeModal">
    <div v-if="market" class="w-full md:w-xl flex flex-col shadow bg-model bg-no-repeat bg-cover border-solid rounded-md
        border border-light-pink">
      <div class="my-6 flex flex-wrap">
        <div class="w-full mb-6 px-4 pt-14">
          <h3 class="text-center text-xl font-semibold font-sora mb-4">
            {{ $t('take_out_modal_title') }}
          </h3>
          <p class="text-sm text-center opacity-60 font-sora font-normal text-white">
            {{ $t('take_out_modal_note') }}
          </p>
        </div>
        <div class="w-full px-4">
          <h3 class="text-center text-sm font-sora text-white font-normal">
            {{ $t('take_out_asset', { asset: market.quoteToken.symbol }) }}
          </h3>
          <v-quote :balance="quoteTokenBalance" />
        </div>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { BigNumberInBase, BigNumberInWei } from '@injectivelabs/utils'
import VQuote from './take-out/quote.vue'
import ModalElement from '~/components/elements/modal.vue'
import { Modal } from '~/types/enums'
import { BankBalances, UiDerivativeMarket } from '~/types'
import { ZERO_IN_BASE } from '~/app/utils/constants'

export default Vue.extend({
  components: {
    modal: ModalElement,
    VQuote
  },

  computed: {
    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    balances(): BankBalances {
      return this.$accessor.bank.balances
    },

    quoteTokenBalance(): BigNumberInBase {
      const { balances, market } = this

      if (!market) {
        return ZERO_IN_BASE
      }

      if (!balances[market.quoteDenom]) {
        return ZERO_IN_BASE
      }

      return new BigNumberInWei(balances[market.quoteDenom] || 0).toBase(
        market.quoteToken.decimals
      )
    },

    isModalOpen(): boolean {
      return this.$accessor.modal.modals[Modal.TakeOut]
    }
  },

  methods: {
    closeModal() {
      this.$accessor.modal.closeModal(Modal.TakeOut)
    }
  }
})
</script>
