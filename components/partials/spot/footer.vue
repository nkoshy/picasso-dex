<template>
    <div :class="
        !SpotPage
          ? 'mb-8 mt-20 xl:my-4 2xl:mx-auto xl:mx-auto xl:max-w-screen-2xl 2xl:max-w-screen-2xl xl:pb-4 xl:pl-8 xl:py-6 xl:px-8'
          : 'mb-8 mt-20 xl:my-20 xl:max-w-screen-laptop-screen xl:px-32 xl:mx-auto 2xl:max-w-screen-2xl xl:mx-0 2xl:mx-auto'
      ">
        <div class="flex items-center flex-wrap xl:flex-nowrap">
          <div  class="flex order-1  w-1/2 xl:pl-1 pl-4 xl:w-full">
            <span :class="!SpotPage?'xl:mr-10 2xl:mr-20 xl:whitespace-nowrap font-sora text-sm':'xl:mr-10 xl:whitespace-nowrap font-sora text-sm'">Copyright © 2021 Picasso Exchange</span>
          </div>
            <div :class="!SpotPage?'flex justify-evenly mx-auto w-full items-center xl:order-1 xl:mx-32 2xl:mr-72 order-0 pt-2 pb-10 xl:py-1':'flex justify-evenly items-center xl:mx-4 2xl:mx-32 order-0 xl:max-w-screen-laptop-screen w-full pt-2 pb-14 xl:pb-1 xl:pt-1 xl:order-1'">
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
            <div class="flex flex-col order-1 w-1/2 pr-4 xl:px-1 xl:w-full xl:flex-row xl:justify-end">
              <span :class="!SpotPage?'xl:mx-5 whitespace-nowrap ml-7 cursor-pointer text-right font=sora text-sm':'ml-7 xl:mr-5 cursor-pointer text-right xl:text-left whitespace-nowrap font-sora text-sm'"  @click.stop="goPrivacy">Privacy Policy</span> 
              <span class="cursor-pointer text-right xl:text-left whitespace-nowrap font-sora text-sm" @click.stop="goDisclaimer">Terms and Conditions</span>
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