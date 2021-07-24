<template>
  <div class="header-nav relative">
    <div
      :class="isDropdownOpen ? 'is-active' : ''"
      class="w-full h-full py-2 flex px-3 items-center cursor-pointer group"
      @click="toggleDropdown"
    >
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
          {{ $t('community') }}
        </span>
      </span>
      <v-ui-icon
        :icon="Icon.Dropdown"
        xs
        class="text-gray-500 group-hover:text-gray-300"
      />
    </div>
    <transition name="fade">
      <div
        v-if="isDropdownOpen"
        v-on-clickaway="closeDropdown"
        class="
          absolute
          -mx-px
          flex
          justify-center
          flex-wrap
          top-12
          left-0
          mt-12
          bg-border-pattern
          bg-no-repeat
          bg-contain
        "
      >
        <div class="pt-8 pr-4 pb-4 p-3.5 w-48 flex flex-col">
          <div class="flex mb-3">
            <div>
              <img :src="'/home/twitter-community.svg'" />
            </div>
            <div class="ml-3">
              <p class="font-sora text-sm text-white">Twitter</p>
              <p class="font-sora text-xsm mt-1 text-white opacity-40">Stay in the pulse</p>
            </div>
          </div>
          <hr class="border border-solid border-commuity" />
          <div class="flex mt-4">
            <div>
              <img :src="'/home/discord-community.svg'" />
            </div>
            <div class="ml-3">
              <p class="font-sora text-sm text-white">Discord</p>
              <p class="font-sora text-xsm mt-1 text-white opacity-40">Meet the community</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { directive as onClickaway } from 'vue-clickaway'
import { Icon } from '~/types'

export default Vue.extend({
  directives: {
    onClickaway
  },

  data() {
    return {
      Icon,
      isDropdownOpen: false
    }
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },

    closeDropdown() {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false
      }
    }
  }
})
</script>
