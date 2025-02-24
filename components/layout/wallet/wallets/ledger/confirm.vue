<template>
  <div class="mt-4">
    <ValidationObserver v-slot="{ invalid }" ref="form">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <ValidationProvider
            v-slot="{ errors, valid }"
            name="form.address"
            :rules="`required`"
          >
            <v-select-custom
              v-model="form.address"
              :errors="status.isLoading() ? [] : errors"
              :options="
                addresses.map((a) => ({
                  code: a,
                  label: a
                }))
              "
              :valid="valid"
              :label="$t('address')"
              :placeholder="$t('Select address to connect')"
            >
            </v-select-custom>
          </ValidationProvider>
        </div>
        <div class="w-full px-4 mt-6">
          <v-button
            md
            :status="status"
            class="w-full"
            :primary="!invalid"
            :disabled="!form.address || invalid"
            @click.stop="onConnect"
          >
            {{ $t('connect') }}
          </v-button>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Status } from '@injectivelabs/utils'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { AccountAddress } from '@injectivelabs/ts-types'
import VSelectCustom from '~/components/inputs/select-custom.vue'
import { WalletConnectStatus } from '~/types'

export default Vue.extend({
  components: {
    ValidationObserver,
    ValidationProvider,
    VSelectCustom
  },

  data() {
    return {
      status: new Status(),

      form: {
        address: ''
      }
    }
  },

  computed: {
    addresses(): AccountAddress[] {
      return this.$accessor.wallet.addresses
    },

    $form(): InstanceType<typeof ValidationObserver> {
      return this.$refs.form as InstanceType<typeof ValidationObserver>
    }
  },

  methods: {
    onConnect() {
      this.status.setLoading()

      this.$accessor.wallet
        .confirm([this.form.address])
        .then(() => {
          //
        })
        .catch((e) => {
          this.$accessor.wallet.setWalletConnectStatus(
            WalletConnectStatus.disconnected
          )
          this.$onError(e)
        })
        .finally(() => {
          this.status.setIdle()
          this.$emit('connected')
        })
    }
  }
})
</script>
