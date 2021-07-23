<template>
  <div class="h-full w-full flex flex-wrap bg-home">
      <egg-component position='absolute' top='0px' left='100px' zIndex='25' icon="/images/Vector26.svg"></egg-component>
      <div class="flex w-full bg-dark-hero">
        <div class="flex flex-col z-30 tracking-loose ml-32 mt-24 mb-48 w-xl">
          <div class="flex items-center">
            <p class="opacity-50 font-poppins text-base uppercase">Powered By</p> 
            <img
              src="powered-by-icon.svg"
              alt="Injective Protocol"
              class="h-6 ml-3 w-auto"
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

      <div class="relative flex w-full pl-32 pt-48 pb-48">
        <egg-component position='absolute' top='8px' background='#9CF8FF' filter='blur(214px)' transform='rotate(62.87deg)' left='185px' height='15rem' icon="/images/vector28.svg"></egg-component>
        <egg-component position='absolute' top='968px' background='#527ffa' filter='blur(214px)' transform='rotate(90.87deg)' right='-273px' height='26rem' icon="/images/vector27.svg"></egg-component>
        <egg-component position='absolute' top='1493px' left='30px' height='26rem' icon="/images/Group3538.svg"></egg-component>


        <div class="flex z-30">
          <div class="flex flex-col font-sora">
            <home-card icon="/home/self-custody-new.svg">Self-custody of your assets for full control</home-card>
            <home-card top icon="/home/new-market-new.svg">New market listing by community governance</home-card>
          </div>
          <div class="flex flex-col mt-24 ml-9 font-sora">
            <home-card icon="/home/efficient-new.svg">Efficient on-chain order book trading with 20X leverage</home-card>
            <home-card top icon="/home/zero-fee-new.svg">Zero gas fees and no front running</home-card>
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


        <egg-component position='absolute' top='12 rem' right='0px' height='25rem'  zIndex='25' icon="/images/environment.svg"></egg-component>
        <egg-component position='absolute' top='7 rem' left='0px' height='28rem' background='#2811af' zIndex='25' filter='blur(13rem)' icon="/images/Vector1.svg"></egg-component>
        <egg-component position='absolute' top='-6rem' right='-16rem' background='#43f2ff' height='34rem' zIndex='25' transform='rotate(-74.77deg)' filter='blur(13rem)' icon="/images/Vector2.svg"></egg-component>
        <egg-component position='absolute' top='-27px' right='152px' width='19rem' opacity='0.1' border='2px solid' borderLeft='0px' borderBottom='0px' borderRadius='40px' noneright='152px' height='34rem' zIndex='24' transform='rotate(40deg)' icon="/images/vector31.svg"></egg-component>
        <egg-component position='absolute' top='-197px' right='14px' width='19rem' opacity='0.1' border='2px solid' borderLeft='0px' borderBottom='0px' borderRadius='40px' noneright='152px' height='23rem' zIndex='24' transform='rotate(40deg)' icon="/images/vector30.svg"></egg-component>
        


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
import EggComponent from '~/components/ui/elements/egg-component.vue'
export default Vue.extend({
  components: {
    HomeCard,
    EggComponent

  }
})
</script>
