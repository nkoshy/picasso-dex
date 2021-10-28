<template>
<<<<<<< HEAD
  <v-card>
=======
  <v-panel class="h-full bg-light-purple text-sm" :title="$t('trading')">
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    <v-trade />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Trade from './trade.vue'

export default Vue.extend({
  components: {
    'v-trade': Trade
  }
})
</script>
