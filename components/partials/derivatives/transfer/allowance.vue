<template>
  <div class="w-full mx-auto mt-6">
    <v-ui-button
      :status="status"
      full
      primary
      @click.stop="handleClickSetAllowance"
    >
      {{ $t('set_allowance') }}
    </v-ui-button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Status } from '@injectivelabs/utils'
import { TokenWithBalance } from '~/types'

export default Vue.extend({
  props: {
    token: {
      required: true,
      type: Object as PropType<TokenWithBalance>
    }
  },

  data() {
    return {
      status: new Status()
    }
  },

  methods: {
    handleClickSetAllowance() {
      this.status.setLoading()

      this.$accessor.token
        .setTokenAllowance(this.token)
        .then(() => {
          this.$emit('allowance-set')
          this.$toast.success(this.$t('allowance_set'))
        })
        .catch(this.$onRejected)
        .finally(() => {
          this.status.setIdle()
        })
    }
  }
})
</script>
