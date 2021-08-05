<template>
  <modal :is-open="isModalOpen" @closed="closeModal">
    <div v-if="market" class="w-full md:w-3xl flex flex-col shadow bg-trade bg-no-repeat bg-cover border-solid rounded-md
        border border-light-pink">
      <div class="my-6 flex flex-wrap">
        <div class="w-full mb-6 px-4">
          <h3 class="text-xl font-semibold font-sora pt-12 pl-8 mb-4">
            {{ $t('acknowledge_title') }}
          </h3>
          <p class="text-xs text-center opacity-60 font-sora font-normal text-white pl-8 mb-4 pr-16">
            {{ $t('acknowledge_note') }}
          </p>
        </div>
        <div class="w-full mb-2 lg:w-1/2 px-4 bg-dark-blue-main">
          <p class="text-sm text-center opacity-60 mt-4 font-sora font-normal text-white pl-24 mb-14 pr-28">
            {{ $t('acknowledge_note_long') }}
          </p>
        </div>
        <div class="w-full lg:w-1/2 lg:border-l border-solid border-light-grey px-4">
          <h3 class="text-center text-sm font-sora text-white font-noraml">
          </h3>
          <v-base :balance="baseTokenBalance" />
          <v-quote :balance="quoteTokenBalance" />
        </div>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { BigNumberInWei } from '@injectivelabs/utils'
import ModalElement from '~/components/elements/modal.vue'
import { Modal } from '~/types/enums'
import { UiSpotMarket, UiSubaccount } from '~/types'
import { ZERO_IN_WEI } from '~/app/utils/constants'

export default Vue.extend({
  components: {
    modal: ModalElement,
    
  },

  computed: {
    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    subaccount(): UiSubaccount | undefined {
      return this.$accessor.account.subaccount
    },

    baseTokenBalance(): BigNumberInWei {
      const { subaccount, market } = this

      if (!market) {
        return ZERO_IN_WEI
      }

      if (!subaccount) {
        return ZERO_IN_WEI
      }

      const balance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.baseToken.denom.toLowerCase()
      )

      if (!balance) {
        return ZERO_IN_WEI
      }

      return new BigNumberInWei(balance.availableBalance || 0)
    },

    quoteTokenBalance(): BigNumberInWei {
      const { subaccount, market } = this

      if (!market) {
        return ZERO_IN_WEI
      }

      if (!subaccount) {
        return ZERO_IN_WEI
      }

      const balance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.quoteToken.denom.toLowerCase()
      )

      if (!balance) {
        return ZERO_IN_WEI
      }

      return new BigNumberInWei(balance.availableBalance || 0)
    },

    isModalOpen(): boolean {
      return this.$accessor.modal.modals[Modal.Acknowledge]
    }
  },

  methods: {
    closeModal() {
      this.$accessor.modal.closeModal(Modal.Acknowledge)
    }
  }
})
</script>
