<template>
  <div class="h-full w-full flex flex-wrap bg-home-pattern bg-dark-hero bg-blend-overlay">
    <div class="flex relative flex-col w-full overflow-hidden">
      <!-- <egg-component position='absolute' top='0px' left='428px' height='101px' zIndex='15' background='#79e9f1' opacity='0.3' filter='blur(56px)' icon="/images/Vector26.svg"></egg-component>
      <egg-component position='absolute' bottom='0px' right='0px' height='80.5px'  zIndex='15' icon="/images/Vector13.png"></egg-component>
      <egg-component position='absolute' top='10rem' right='0px' height='25rem'  zIndex='15' icon="/images/environment.svg"></egg-component>
      <egg-component position='absolute' top='7rem' left='0px' height='28rem' background='#2811af' zIndex='15' filter='blur(13rem)' icon="/images/Vector1.svg"></egg-component>
      <egg-component position='absolute' top='-6rem' right='-16rem' background='#43f2ff' height='34rem' zIndex='15' transform='rotate(-74.77deg)' filter='blur(13rem)' icon="/images/Vector2.svg"></egg-component>
      <egg-component position='absolute' top='-27px' right='152px' width='19rem' opacity='0.1' border='2px solid' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='34rem' zIndex='10' transform='rotate(40deg)' icon="/images/vector31.svg"></egg-component>
      <egg-component position='absolute' top='-197px' right='14px' width='19rem' opacity='0.1' border='2px solid' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='23rem' zIndex='10' transform='rotate(40deg)' icon="/images/vector30.svg"></egg-component>
      <egg-component position='absolute' top='135px' left='-1133px' width='27rem' opacity='0.1' border='2px solid' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='204rem' zIndex='10' transform='rotate(37deg)' icon="/images/vector30.svg"></egg-component>
      <egg-component position='absolute' top='298px' left='-1150px' width='27rem' opacity='0.1' border='2px solid' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='204rem' zIndex='10' transform='rotate(37deg)' icon="/images/vector31.svg"></egg-component> -->
      <app-header />
      <div class="flex w-full z-19">
        <div class="flex flex-col z-30 mx-auto tracking-loose xl:ml-32 xl:mt-24 xl:mb-48 xl:w-xl mb-40">
          <div class="flex items-center justify-center xl:justify-start">
            <p class="opacity-50 font-poppins text-base uppercase">Powered By</p> 
            <img
              src="powered-by-icon.svg"
              alt="Injective Protocol"
              class="h-6 ml-3 w-auto"
            /> 
          </div>
          <h1 class="text-white text-3xl xl:text-5xl font-bold font-sora text-center pt-3 px-6 xl:p-0 xl:text-left">Trading is an Art</h1>
          <p class="opacity-70 text-base xl:text-xl xl:mt-8 mt-9 font-poppins px-6 text-center xl:text-left xl:p-0">Picasso is a decentralized exchange to access high volume derivative markets with zero gas fee and high capital efficiency. The exchange is powered by Injective Protocol and governed by the community!</p>
          <p class="opacity-70 text-base xl:text-xl mt-8 font-poppins text-center px-6 xl:text-left xl:p-0">Connect your wallet and trade 20+ cryptocurrency markets in minutes.</p>
          <div class="flex xl:mt-8 mt-14 flex-col xl:flex-row xl:justify-start justify-center items-center">
            <v-ui-button home full hero-primary>Trade</v-ui-button>
            <v-ui-button home full hero-secondary>Read More</v-ui-button>
          </div>
        </div>        
      </div>
    </div>
      <div class="relative flex w-full xl:pl-32 xl:pt-48 xl:pb-48 xl:flex-row flex-col-reverse overflow-hidden xl:bg-curve-pattern bg-cover bg-white">
        <!-- <div class="relative flex w-full xl:pl-32 xl:pt-48 xl:pb-48 xl:flex-row flex-col-reverse overflow-hidden bg-white"> -->
        <!-- <egg-component position='absolute' top='-334px' background='#9CF8FF' filter='blur(214px)' transform='rotate(62.87deg)' left='-72px' height='545.76px' icon="/images/vector28.svg"></egg-component>
        <egg-component position='absolute' top='921px' background='#527ffa' filter='blur(492px)' transform='rotate(48.87deg)' right='-206px' height='25rem' icon="/images/vector27.svg"></egg-component>
        <egg-component position='absolute'  left='0px' top='564px' height='33rem' icon="/images/Group.svg"></egg-component>
        <egg-component position='absolute' top='-44px' right='-206px' width='28rem' opacity='0.1' border='2px solid #717171' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='20rem' zIndex='24' transform='rotate(226deg)' icon="/images/vector30.svg"></egg-component>
        <egg-component position='absolute' top='61px' right='-230px' width='24rem' opacity='0.1' border='2px solid #717171' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='25rem' zIndex='24' transform='rotate(224deg)' icon="/images/vector31.svg"></egg-component> -->
        <div class="flex z-30 flex-col xl:flex-row justify-center items-center">
          <div class="flex flex-col font-sora">
            <home-card icon="/home/self-custody-new.svg">Self-custody of your assets for full control</home-card>
            <home-card top icon="/home/new-market-new.svg">New market listing by community governance</home-card>
          </div>
          <div class="flex flex-col xl:mt-24 xl:ml-9 mt-9 mb-20 xl:mb-0 font-sora">
            <home-card icon="/home/efficient-new.svg">Efficient on-chain order book trading with 20X leverage</home-card>
            <home-card top icon="/home/zero-fee-new.svg">Zero gas fees and no front running</home-card>
          </div>
        </div>
        <div class="flex flex-col xl:mt-48 xl:ml-16 mt-20">
          <h1 class="text-home xl:text-5xl font-semibold xl:w-96 font-sora px-16 xl:px-0 text-center xl:text-left text-3xl">Why Picasso Exchange?</h1>
          <p class="text-home opacity-70 text-xl mt-8 xl:w-md font-poppins px-4 xl:px-0 text-center xl:text-left text-small leading-5">Picasso exchange enables users to trade spot and derivatives on Injective Chain. Injective Protocol is a decentralized, censorship-resistant order book built on top of Tendermint using the Cosmos-SDK framework.</p>
          <div class="flex xl:mt-8 mb-9 mt-9 justify-evenly xl:justify-start">
            <v-ui-button homeSection full hero-primary>Trade</v-ui-button>
            <v-ui-button homeSection full hero-tertiary>Read More</v-ui-button>
          </div>
        </div>
      </div>
    
      <div class="conatiner relative w-full md:pt-16 pt-4 bg-dark-hero overflow-hidden">
        <div class=" text-white text-center md:pt-16 pt-4 md:text-2xl text-base font-sora font-bold">Our Supporters</div>
        <div class=" flex flex-col items-center md:flex-row justify-center mt-10 opacity-60">
            <div class="md:h-24 md:mr-32 h-12">
                <img src="/images/injective.svg" alt="" class="h-full"/>
            </div>
            <div class="md:h-24 md:mt-4 h-12 mt-6">
                <img src="/images/polygon.svg" alt="" class="h-full" />
            </div>
        </div>
        <div class="flex justify-center md:pb-24 md:mt-24 pb-12 mt-16">
            <div class="md:mr-16 md:h-8 h-6 mr-8">
                <img src="/images/twitter.svg" alt="" class="h-full cursor-pointer"/>
            </div>
            <div class="md:mr-16 md:h-8 h-6 mr-8">
                <img src="/images/medium.svg" alt="" class="h-full cursor-pointer">
            </div>
            <div class="md:mr-16 md:h-8 h-6 mr-8">
                <img src="/images/github.svg" alt="" class="h-full cursor-pointer">
            </div>
            <div class="md:mr-16 md:h-8 h-6 mr-0">
                <img src="/images/discord.svg" alt="" class="h-full cursor-pointer">
            </div>
        </div>
        <!-- <egg-component position='absolute' top='-34px' right='93px' height='26rem' icon="/images/Group3532.svg"></egg-component>
        <egg-component position='absolute' top='-73px' right='0px' height='21rem' icon="/images/Group3531.svg"></egg-component>
        <egg-component position='absolute' bottom='0' left='50px' height='226px' icon="/images/Group3533.svg"></egg-component>
        <egg-component position='absolute' bottom='0' height='119px' zIndex='25' icon="/images/Group3534.svg"></egg-component>
        <egg-component position='absolute' top='52px' right='78px' width='43rem' opacity='0.1' border='2px solid #f5f5f5' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='29rem' zIndex='30' transform='rotate(49deg)' icon="/images/vector31.svg"></egg-component>
        <egg-component position='absolute' top='-66px' right='98px' width='19rem' opacity='0.1' border='2px solid #f5f5f5' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='40rem' zIndex='24' transform='rotate(47deg)' icon="/images/vector30.svg"></egg-component>
        <egg-component position='absolute' top='-331px' left='-1125px' width='27rem' opacity='0.1' border='2px solid #f5f5f5' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='194rem' zIndex='133' transform='rotate(37deg)' icon="/images/vector31.svg"></egg-component>
         <egg-component position='absolute' top='-510px' left='-1133px' width='27rem' opacity='0.1' border='2px solid #f5f5f5' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='204rem' zIndex='133' transform='rotate(37deg)' icon="/images/vector30.svg"></egg-component>
        <egg-component position='absolute'  filter='blur(226px)' width='11rem' bottom='-417px' right='-65px' background='#43F2FF' border='2px solid' borderLeft='0px' borderBottom='0px' borderRadius='40px' height='50rem' transform='rotate(89deg)' icon="/images/vector25.svg"></egg-component> -->
       </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import HomeCard from '~/components/ui/elements/home-card.vue'
import EggComponent from '~/components/ui/elements/egg-component.vue'
import Header from '~/components/layouts/desktop/header.vue'
export default Vue.extend({
  components: {
    HomeCard,
    EggComponent,
    'app-header': Header
  }
})
</script>
