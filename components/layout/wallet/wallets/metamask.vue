<template>
  <li>
    <div
      class="block hover:bg-gray-800 border-gray-600 rounded-lg cursor-pointer"
      @click="handleClickOnMetamaskConnect"
    >
      <div class="flex items-center px-4 py-4 sm:px-6">
        <div class="min-w-0 flex-1 flex items-center">
          <div class="flex-shrink-0 mr-4">
            <v-icon-metamask class="w-8 h-8" />
          </div>
          <div
            class="min-w-0 flex-1 px-4 md:grid md:grid-cols-1 md:gap-4 text-left"
          >
            <div>
              <p class="text-xl font-semibold text-gray-200 truncate">
                {{ $t('metamask') }}
                <v-button
                  v-if="!metamaskInstalled"
                  text
                  sm
                  class="inline-flex items-center"
                  @click.stop="() => {}"
                >
                  <a
                    href="https://metamask.io/download"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {{ $t('download') }}
                  </a>
                  <v-icon-arrow class="transform rotate-180 w-3 h-3 ml-1" />
                </v-button>
              </p>
              <p class="flex items-center text-sm text-gray-200">
                <span class="truncate">{{
                  $t('Connect using browser wallet')
                }}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <v-icon-caret-down
            class="transform -rotate-90 h-5 w-5 text-gray-200"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { Wallet } from '@injectivelabs/web3-strategy'
import { WalletConnectStatus } from '~/types'

export default Vue.extend({
  computed: {
    metamaskInstalled(): boolean {
      return this.$accessor.wallet.metamaskInstalled
    }
  },

  methods: {
    handleClickOnMetamaskConnect() {
      this.$accessor.wallet
        .connectAndConfirm(Wallet.Metamask)
        .then(() => {
          this.$emit('wallet-connected')
        })
        .catch((e) => {
          this.$accessor.wallet.setWalletConnectStatus(
            WalletConnectStatus.disconnected
          )
          this.$onError(e)
        })
    }
  }
})
</script>
