<template>
  <header
    class="
      w-full
      flex
      z-20
      relative
      pt-4
      pl-32
      pr-8
      pb-4
      bg-dark-hero
    "
  >
    <div class="pt-12 pr-20">
        <img :src="`/home/header-logo.svg`" />
    </div>
    <div class="hidden xl:flex">
      <div class="header-nav relative px-6 py-2.5 flex">
      <span
        class="
          mr-2
          tracking-wider
          text-md
          flex
          items-center
          select-none
        "
      >
        <span class="text-white group-hover:text-gray-200 font-sora">
          {{ $t('market') }}
        </span>
      </span>
      </div>
    </div>
    <div class="hidden xl:flex">
      <v-spot />
    </div>
    <div class="hidden xl:flex">
      <v-derivatives />
    </div>
    <mobile-menu />
    <div class="hidden xl:flex ml-auto">
      <v-about />
    </div>
    <div class="hidden xl:flex">
      <v-community />
    </div>
    <div class="flex sm:ml-auto xl:ml-0">
      <wallet-connect />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import VSpot from './spot.vue'
import VDerivatives from './derivatives.vue'
import VAbout from './about.vue'
import VCommunity from './community.vue'
// import Logo from '~/components/layouts/logo.vue'
import MobileMenu from '~/components/layouts/mobile/menu.vue'
import WalletConnect from '~/components/wallets/index.vue'

export default Vue.extend({
  components: {
    // Logo,
    VSpot,
    VDerivatives,
    MobileMenu,
    WalletConnect,
    VAbout,
    VCommunity
  },

  computed: {
    //
  },

  methods: {
    goHome() {
      this.$router.push({ name: 'index' })
    }
  }
})
</script>
