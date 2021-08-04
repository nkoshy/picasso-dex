<template>
  <modal :is-open="isModalOpen" @closed="closeModal">
    <div v-if="market" class="w-full md:w-3xl flex flex-col shadow bg-model bg-no-repeat bg-cover  rounded-md
        border border-light-pink">
      <HOCLoading :status="status">
        <div
          v-if="baseTokenWithBalance && quoteTokenWithBalance"
          class="my-6 flex flex-wrap"
        >
          <div class="w-full mb-6 px-4">
            <h3 class="text-center text-2xl font-semibold font-sora pt-14 mb-4">
              {{ $t('transfer_modal_title') }}
            </h3>
            <p class="text-sm text-center opacity-60 mt-4 font-sora font-normal text-white pl-8 mb-16 pr-12">
              {{ $t('transfer_modal_note') }}
            </p>
          </div>
          <div class="w-full mb-2 lg:w-1/2 px-4">
            <h3 class="text-center text-sm font-sora text-white font-noraml mb-6">
              {{ $t('transfer_asset', { asset: market.baseToken.symbol }) }}
            </h3>
            <v-base :token="baseTokenWithBalance" />
          </div>
          <div class="w-full lg:w-1/2 lg:border-l border-solid border-light-grey px-4">
            <h3 class="text-center text-sm font-sora text-white font-noraml pr-8 mb-6">
              {{ $t('transfer_asset', { asset: market.quoteToken.symbol }) }}
            </h3>
            <v-quote :token="quoteTokenWithBalance" />
          </div>
        </div>
      </HOCLoading>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { Status, StatusType } from '@injectivelabs/utils'
import VBase from './transfer/base.vue'
import VQuote from './transfer/quote.vue'
import ModalElement from '~/components/elements/modal.vue'
import { UiSpotMarket, Modal, TokenWithBalance } from '~/types'
import HOCLoading from '~/components/elements/with-loading.vue'

export default Vue.extend({
  components: {
    modal: ModalElement,
    HOCLoading,
    VBase,
    VQuote
  },

  data() {
    return {
      status: new Status(StatusType.Loading)
    }
  },

  computed: {
    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    baseTokenWithBalance(): TokenWithBalance | undefined {
      return this.$accessor.token.baseTokenWithBalance
    },

    quoteTokenWithBalance(): TokenWithBalance | undefined {
      return this.$accessor.token.quoteTokenWithBalance
    },

    isModalOpen(): boolean {
      return this.$accessor.modal.modals[Modal.Transfer]
    }
  },

  mounted() {
    this.getTokenBalanceAndAllowanceForMarket()
  },

  methods: {
    getTokenBalanceAndAllowanceForMarket() {
      this.$accessor.token
        .getTokenBalanceAndAllowanceForMarket()
        .then(() => {
          //
        })
        .catch(this.$onRejected)
        .finally(() => {
          this.status.setIdle()
        })
    },

    closeModal() {
      this.$accessor.modal.closeModal(Modal.Transfer)
    }
  }
})
</script>
