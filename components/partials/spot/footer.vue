<template>
    <div :class="
        !SpotPage
          ? 'pt-6 xl:mr-12'
          : 'mt-20 ml-32 relative w-full'
      ">
        <div class="flex flex-col items-center md:flex-row  ">
            <div class="mr-80">Copyright © 2021 Picasso Exchange</div>
            <div class="flex items-center mr-64">
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
            <div class="mr-10 cursor-pointer"  @click.stop="goPrivacy">Privacy Policy</div> 
            <div class="cursor-pointer" @click.stop="goDisclaimer">Disclaimer</div>   
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
    goPrivacy() {
      this.$router.push({ name: 'privacy_policy' })
    },
    goDisclaimer() {
      this.$router.push({ name: 'disclaimer' })
    }
   }
})
</script>