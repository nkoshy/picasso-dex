<template>
<<<<<<< HEAD
  <div v-if="market" class="table-responsive table-orders">
    <table class="table">
      <position-table-header />
      <tbody v-if="isUserWalletConnected">
        <tr is="v-position" v-if="position" :position="position"></tr>
      </tbody>
    </table>
    <v-user-wallet-connect-warning v-if="!isUserWalletConnected" />
  </div>
=======
  <v-panel :title="$t('positions')" class="h-full relative font-sora text-white">
    <div v-if="market" class="flex flex-col">
      <div class="table-responsive table-compact h-36">
        <table class="table">
          <thead class="border-b">
            <tr class="bg-light-purple">
              <!-- <th is="v-ui-table-th" center>&nbsp;</th> -->
              <th is="v-ui-table-th" center xs>
                <span>{{ $t('type') }}</span>
              </th>
              <th is="v-ui-table-th" center xs>
                <span>{{ $t('side') }}</span>
              </th>
              <th is="v-ui-table-th" center xs>
                <span>{{ $t('amount') }}</span>
              </th>
              <th is="v-ui-table-th" center xs> 
                <span>{{ $t('entry_price') }}</span>
              </th>
              <th is="v-ui-table-th" center xs>
                <span>{{ $t('liquidation_price') }}</span>
              </th>
              <th is="v-ui-table-th" center xs>
                <!-- <div class="items-center relative"> -->
                  <span>{{ $t('unrealized_pnl') }}</span>
                  <!-- <v-ui-icon
                    :icon="Icon.Info"
                    class="text-gray-500 hover:text-gray-300"
                    :tooltip="$t('unrealized_pnl_tooltip')"
                    2xs
                  /> -->
                
              </th>
              <th is="v-ui-table-th" center xs>
                <span>{{ $t('notional_size') }}</span>
              </th>
              <th is="v-ui-table-th" center xs>
                <span>{{ $t('margin') }}</span>
              </th>
              <th is="v-ui-table-th" center xs>
                <span>{{ $t('leverage') }}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr is="v-position" v-if="position" :position="position"></tr>
            <tr is="v-position-empty" v-else></tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-panel>
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
</template>

<script lang="ts">
import Vue from 'vue'
import { Status } from '@injectivelabs/utils'
import Position from '~/components/partials/common/derivatives/position.vue'
import { UiDerivativeMarket, UiPosition, Icon } from '~/types'
import PositionTableHeader from '~/components/partials/common/derivatives/position-table.header.vue'

export default Vue.extend({
  components: {
    'v-position': Position,
    PositionTableHeader
  },

  data() {
    return {
      Icon,
      status: new Status()
    }
  },

  computed: {
    isUserWalletConnected(): boolean {
      return this.$accessor.wallet.isUserWalletConnected
    },

    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    position(): UiPosition | undefined {
      return this.$accessor.derivatives.subaccountPosition
    }
  }
})
</script>
