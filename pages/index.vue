<template>
  <div class="h-full w-full flex flex-wrap">
      <div class="flex w-full bg-dark-hero">
        <div class="flex flex-col hero-section">
          <div class="flex">
            <p class="opacity-50 uppercase">Powered By</p> 
            <img
              src="powered-by-icon.svg"
              alt="Injective Protocol"
              class="h-5 ml-2 w-auto"
            /> 
          </div>
          <h1 class="text-white text-4xl font-bold">Trading is an art</h1>
          <p class="opacity-70 text-xl mt-3">Picasso is a decentralized exchange to access high volume derivative markets with zero gas fee and high capital efficiency. The exchange is powered by Injective Protocol and governed by the community!</p> 
          <p class="opacity-70 text-xl mt-1">Connect your wallet and trade 20+ cryptocurrency markets in minutes.</p>
          <div class="flex mt-8">
            <v-ui-button full hero-primary>Use App</v-ui-button>
            <v-ui-button full hero-secondary>Read More</v-ui-button>
          </div>
        </div>
      </div>
      <div class="flex w-full">
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {}
})
</script>
