<template>
  <div v-if="market" class="pt-6">
    <div>
      <v-ui-text-info :title="$t('available_balance')">
        <span v-if="balanceToString">{{ balanceToString }}</span>
        <span v-else class="text-gray-400 font-normal text-xs">&mdash;</span>
      </v-ui-text-info>

      <ValidationObserver v-slot="{ invalid }" ref="form">
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
            :max-selector="!!balanceToString"
            :placeholder="$t('amount_to_transfer')"
            class="mt-4"
            type="number"
            step="0.0001"
            min="0"
            @blur="onBlur"
          >
            <span slot="addon">{{
              market ? market.quoteToken.symbol : ''
            }}</span>
          </v-input>
          <div class="w-full mx-auto mt-4">
            <v-ui-button
              :status="status"
              full
              primary
              :disabled="!form.amount || invalid"
              @click.stop="handleWithdrawClick"
            >
              {{ $t('withdraw') }}
            </v-ui-button>
          </div>
        </ValidationProvider>
      </ValidationObserver>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { BigNumberInBase, Status } from '@injectivelabs/utils'
import { UiSpotMarket } from '~/types'
import { UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS } from '~/app/utils/constants'

export default Vue.extend({
  components: {
    ValidationObserver,
    ValidationProvider
  },

  props: {
    balance: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    }
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

    balanceToString(): string {
      const { market, balance } = this

      if (!market) {
        return ''
      }

      return balance.toFixed(
        UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS,
        BigNumberInBase.ROUND_FLOOR
      )
    }
  },

  methods: {
    onBlur() {
      const { market, form } = this

      if (!market) {
        return
      }

      this.form.amount = new BigNumberInBase(form.amount || 0).toFixed(
        UI_DEFAULT_AMOUNT_DISPLAY_DECIMALS
      )
    },

    handleWithdrawClick() {
      const { form, market } = this

      if (!market) {
        return
      }

      this.status.setLoading()

      this.$accessor.account
        .withdraw({
          amount: new BigNumberInBase(form.amount),
          token: market.quoteToken
        })
        .then(() => {
          this.$toast.success(this.$t('success_withdraw'))
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
