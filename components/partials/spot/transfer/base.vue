<template>
  <div v-if="market" class="pt-6">
    <div>
      <v-ui-text-info :title="$t('available_balance')">
        <span v-if="hasBalance">{{ balanceToString }}</span>
        <span v-else class="text-gray-400 font-normal text-xs">&mdash;</span>
      </v-ui-text-info>

      <ValidationObserver
        v-if="hasAllowanceSet"
        v-slot="{ invalid }"
        ref="form"
      >
        <ValidationProvider
          v-slot="{ errors, valid }"
          name="form.amount"
          :rules="`required|positiveNumber|between:0.0001,${balanceToString}`"
        >
          <v-input
            v-model="form.amount"
            :errors="status.isLoading() ? [] : errors"
            :valid="valid"
            :max="balanceToString"
            :max-selector="!!hasBalance"
            :placeholder="$t('amount_to_transfer')"
            class="mt-4"
            type="number"
            step="0.0001"
            min="0"
            @blur="onBlur"
          >
            <span slot="addon">{{
              market ? market.baseToken.symbol : ''
            }}</span>
          </v-input>
          <v-ui-text xs muted class="flex items-center mt-2">
            {{ $t('transfer_wait_time_note') }}
          </v-ui-text>
          <div class="w-full mx-auto mt-4">
            <v-ui-button
              :status="status"
              full
              
              :disabled="!form.amount || invalid"
              @click.stop="handleTransferClick"
            >
              {{ $t('transfer') }}
            </v-ui-button>
          </div>
        </ValidationProvider>
      </ValidationObserver>

      <v-allowance v-else :token="token" nonbgcolor></v-allowance>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { BigNumberInBase, Status } from '@injectivelabs/utils'
import VAllowance from './allowance.vue'
import { UiSpotMarket, TokenWithBalance } from '~/types'

export default Vue.extend({
  components: {
    ValidationObserver,
    ValidationProvider,
    VAllowance
  },

  props: {
    token: {
      required: true,
      type: Object as PropType<TokenWithBalance>
    },
    
  },

  data() {
    return {
      status: new Status(),

      form: {
        amount: ''
      }
    }
  },

  computed: {
    
    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    $form(): InstanceType<typeof ValidationObserver> {
      return this.$refs.form as InstanceType<typeof ValidationObserver>
    },

    hasAllowanceSet(): boolean {
      const { token } = this

      return !token.allowance.isNaN() && token.allowance.gt(0)
    },

    hasBalance(): boolean {
      const { token } = this

      return !token.balance.isNaN()
    },

    balanceToString(): string {
      const { market, hasBalance, token } = this

      if (!market || !hasBalance) {
        return ''
      }

      return token.balance
        .toBase(market.baseToken.decimals)
        .toFixed(market.quantityDecimals, BigNumberInBase.ROUND_DOWN)
    },
    
  },

  methods: {
    onBlur() {
      const { market, form } = this

      if (!market) {
        return
      }

      this.form.amount = new BigNumberInBase(form.amount || 0).toFixed(
        market.quantityDecimals
      )
    },

    handleTransferClick() {
      const { form, token } = this

      this.status.setLoading()

      this.$accessor.token
        .transfer({
          amount: new BigNumberInBase(form.amount),
          token
        })
        .then(() => {
          this.$toast.success(this.$t('success_transfer'))
          this.form.amount = ''

          if (this.$form) {
            this.$form.reset()
          }
        })
        .catch(this.$onRejected)
        .finally(() => {
          this.status.setIdle()
        })
    }
  }
})
</script>
