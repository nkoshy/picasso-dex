<template>
    <div :class="
        !SpotPage
          ? '2xl:mx-auto xl:mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl pb-4 pl-8 xl:py-6'
          : 'mb-8 mt-20 xl:my-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl xl:mx-auto 2xl:mx-auto'
      ">
        <div class="flex items-center flex-wrap xl:flex-nowrap">
          <div  class="flex order-1  w-1/2 xl:pl-1 pl-4 xl:w-full">
            <span :class="!SpotPage?'xl:mr-10 2xl:mr-20 whitespace-nowrap':'xl:mr-10whitespace-nowrap'">Copyright © 2021 Picasso Exchange</span>
          </div>
            <div :class="!SpotPage?'flex items-center order-1 xl:mx-28 2xl:mr-72':'flex justify-evenly items-center xl:mx-32 2xl:mx-32 order-2 mx-auto w-full pt-20 xl:pt-1 xl:order-1'">
                <div class=" h-8 w-6 md:mr-16 md:ml-0 mx-4">
                    <img src="/images/twitter.svg" alt="" class="h-full cursor-pointer" @click.stop = "gotwitter"/>
                </div>
                <div class="h-8 w-6 md:mr-16 md:ml-0 mx-4">
                    <img src="/images/medium.svg" alt="" class="h-full cursor-pointer" @click.stop = "gomedium">
                </div>
                <div class="h-8 w-6 md:mr-16 md:ml-0 mx-4">
                    <img src="/images/github.svg" alt="" class="h-full cursor-pointer" @click.stop = "gogithub">
                </div>
                <div class="h-8 w-6 md:mr-16 md:ml-0 mx-4">
                    <img src="/images/discord.svg" alt="" class="h-full cursor-pointer" @click.stop = "godiscord">
                </div>
            </div>
            <div class="flex flex-col order-1 w-1/2 pr-4 xl:px-1 xl:w-full xl:flex-row">
              <span :class="!SpotPage?'xl:mx-5 whitespace-nowrap':'ml-7 xl:mr-5 cursor-pointer text-right xl:text-left whitespace-nowrap'"  @click.stop="goPrivacy">Privacy Policy</span> 
              <span class="cursor-pointer text-right xl:text-left whitespace-nowrap" @click.stop="goDisclaimer">Terms and Conditions</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
    SpotPage: {
      required: false,
      default: false,
      type: Boolean
    }
  },
    methods: {
      gotwitter(){
      window.open('https://twitter.com/PicassoExchange','_blank');
    },
    gomedium(){
       window.open('https://medium.com/@picasso.exchange','_blank');
    },
    godiscord(){
      window.open('https://discord.gg/kbqfUxaAwn','_blank');
    },
    gogithub(){
      window.open('https://github.com/PicassoExchange','_blank');
    },
    goPrivacy() {
      this.$router.push({ name: 'privacy_policy' })
    },
    goTerms() {
      this.$router.push({ name: 'terms' })
    }
   }
})
</script>