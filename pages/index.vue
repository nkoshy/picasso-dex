<template>
  <div class="h-full w-full flex flex-wrap bg-home">
      <div class="flex w-full bg-dark-hero">
        <div class="flex flex-col tracking-loose ml-32 mt-24 mb-48 w-xl">
          <div class="flex items-center">
            <p class="opacity-50 text-powered uppercase">Powered By</p> 
            <img
              src="powered-by-icon.svg"
              alt="Injective Protocol"
              class="h-5 ml-2 w-auto"
            /> 
          </div>
          <h1 class="text-white text-5xl font-bold font-sora">Trading is an Art</h1>
          <p class="opacity-70 text-xl mt-8 font-poppins">Picasso is a decentralized exchange to access high volume derivative markets with zero gas fee and high capital efficiency. The exchange is powered by Injective Protocol and governed by the community!</p>
          <p class="opacity-70 text-xl mt-8 font-poppins">Connect your wallet and trade 20+ cryptocurrency markets in minutes.</p>
          <div class="flex mt-8">
            <v-ui-button home full hero-primary>Trade</v-ui-button>
            <v-ui-button home full hero-secondary>Read More</v-ui-button>
          </div>
        </div>
      </div>
      <div class="flex w-full pl-32 pt-48 pb-48">
        <div class="flex">
          <div class="flex flex-col font-sora">
            <home-card icon="/home/self-custody.svg">Self-custody of your assets for full control</home-card>
            <home-card top icon="/home/new-market.svg">New market listing by community governance</home-card>
          </div>
          <div class="flex flex-col mt-24 ml-9 font-sora">
            <home-card icon="/home/efficient.svg">Efficient on-chain order book trading with 20X leverage</home-card>
            <home-card top icon="/home/zero-fee.svg">Zero gas fees and no front running</home-card>
          </div>
        </div>
        <div class="flex flex-col mt-48 ml-16">
          <h1 class="text-home text-5xl font-bold w-96 font-sora">Why Picasso Exchange?</h1>
          <p class="text-home opacity-70 text-xl mt-8 w-md font-poppins">Picasso exchange enables users to trade spot and derivatives on Injective Chain. Injective Protocol is a decentralized, censorship-resistant order book built on top of Tendermint using the Cosmos-SDK framework.</p>
          <div class="flex mt-8">
            <v-ui-button home full hero-primary>Trade</v-ui-button>
            <v-ui-button home full hero-tertiary>Read More</v-ui-button>
          </div>
        </div>
      </div>

      <div class="conatiner w-full bg-dark-hero">
        <div class=" text-white text-center pt-16 text-2xl font-sora font-bold">Our Supporters</div>
        <div class=" flex justify-center mt-10 opacity-60">
            <div class="h-24 mr-32">
                <img src="/images/injective.svg" alt="" class="h-full"/>
            </div>
            <div class="h-24 mt-4">
                <img src="/images/polygon.svg" alt="" class="h-full" />
            </div>
        </div>
        <div class="flex justify-center pb-24 mt-24 ">
            <div class="mr-16 h-8">
                <img src="/images/twitter.svg" alt="" class="h-full cursor-pointer"/>
            </div>
            <div class="mr-16 h-8 ">
                <img src="/images/medium.svg" alt="" class="h-full cursor-pointer">
            </div>
            <div class="mr-16 h-8">
                <img src="/images/github.svg" alt="" class="h-full cursor-pointer">
            </div>
            <div class="mr-16 h-8">
                <img src="/images/discord.svg" alt="" class="h-full cursor-pointer">
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

















































































