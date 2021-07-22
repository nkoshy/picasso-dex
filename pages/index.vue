<template>
  <div class="h-full w-full flex flex-wrap bg-home">
      <div class="flex w-full bg-dark-hero">
        <div class="flex flex-col tracking-loose ml-32 mt-48 mb-48 w-xl">
          <div class="flex items-center">
            <p class="opacity-50 text-powered uppercase">Powered By</p> 
            <img
              src="powered-by-icon.svg"
              alt="Injective Protocol"
              class="h-5 ml-2 w-auto"
            /> 
          </div>
          <h1 class="text-white text-5xl font-bold">Trading is an Art</h1>
          <p class="opacity-70 text-xl mt-8">Picasso is a decentralized exchange to access high volume derivative markets with zero gas fee and high capital efficiency. The exchange is powered by Injective Protocol and governed by the community!</p> 
          <p class="opacity-70 text-xl mt-8">Connect your wallet and trade 20+ cryptocurrency markets in minutes.</p>
          <div class="flex mt-8">
            <v-ui-button home full hero-primary>Trade</v-ui-button>
            <v-ui-button home full hero-secondary>Read More</v-ui-button>
          </div>
        </div>
      </div>
      <div class="flex w-full pl-32 pt-48 pb-48">
        <div class="flex">
          <div class="flex flex-col">
            <home-card icon="/home/self-custody.svg">Self-custody of your assets for full control</home-card>
            <home-card top icon="/home/new-market.svg">New market listing by community governance</home-card>
          </div>
          <div class="flex flex-col mt-24 ml-9">
            <home-card icon="/home/efficient.svg">Efficient on-chain order book trading with 20X leverage</home-card>
            <home-card top icon="/home/zero-fee.svg">Zero gas fees and no front running</home-card>
          </div>
        </div>
        <div class="flex flex-col mt-48 ml-12">
          <h1 class="text-home text-5xl font-bold w-96">Why Picasso Exchange?</h1>
          <p class="text-home opacity-70 text-xl mt-8 w-md">Picasso exchange enables users to trade spot and derivatives on Injective Chain. Injective Protocol is a decentralized, censorship-resistant order book built on top of Tendermint using the Cosmos-SDK framework.</p>
          <div class="flex mt-8">
            <v-ui-button home full hero-primary>Trade</v-ui-button>
            <v-ui-button home full hero-tertiary>Read More</v-ui-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeCard from '~/components/ui/elements/home-card.vue'

export default Vue.extend({
  components: {
    HomeCard
  }
})
</script>
