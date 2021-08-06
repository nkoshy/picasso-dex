<template>
  <div
    class="min-h-screen h-full w-full flex flex-col py-0 bg-market-pattern bg-blend-overlay bg-dark-light"
  >
    <!-- <div class="w-full">
      <div class="container">
        <div class="text-center w-full lg:w-2/3 mx-auto pt-10 lg:pt-16">
          <h1 class="font-black text-white text-3xl uppercase tracking-wide">
            <img
              src="logo.svg"
              alt="Injective Protocol"
              class="h-40 mx-auto w-auto"
            />
          </h1>
          <h3
            class="text-primary-500 uppercase tracking-wider font-black mt-12"
          >
            {{ $t('welcome_to_ip') }}
          </h3>
          <h4 class="text-gray-300 text-lg mt-2">
            {{ $t('welcome_to_ip_sub') }}
          </h4>
        </div>
      </div>
    </div> -->
    <app-header />
    <h1 class="text-white text-3xl xl:text-5xl font-bold font-sora my-14 ml-32">
      Markets
    </h1>
    <div class="container px-14 pb-4">
      <v-panel>
        <div
          slot="context"
          class="rounded-t-md bg-secondary-gradient-market pt-3 px-3"
        >
          <div class="flex items-center justify-between">
            <div class="tabsPink">
              <ul role="tablist" class="tablist">
                <li
                  role="tab"
                  :aria-selected="component === components.spot"
                  class="tab"
                  @click.stop.prevent="onSelect(components.spot)"
                >
                  <span>{{ $t('Spot Markets') }}</span>
                </li>
                <li
                  role="tab"
                  :aria-selected="component === components.derviatives"
                  class="tab"
                  @click.stop.prevent="onSelect(components.derviatives)"
                >
                  <span>{{ $t('Derviatives') }}</span>
                </li>
              </ul>
            </div>
            <ul>
              <div class="w-xl relative">
                <v-input
                  v-model="filterMarkets"
                  :placeholder="$t('filter_markets')"
                  class="input-xs w-full bg-light-purple"
                >
                </v-input>
                <span class="absolute mr-2 right-2 top-1 mt-1"
                  ><v-ui-icon
                    :icon="Icon.SpotSearch"
                    xs
                    class="text-gray-400"
                  ></v-ui-icon
                ></span>
              </div>
            </ul>
          </div>
        </div>

        <component :is="component" v-if="component"></component>
      </v-panel>
    </div>

    <!-- <div class="container">
      <div class="mt-12 w-full mx-auto lg:w-3/4">
        <v-panel :title="$t('spot_markets')">
          <div class="table-compact table-select px-4 pb-4">
            <v-spot />
          </div>
        </v-panel>
        <v-panel :title="$t('derivatives')" class="mt-6">
          <div class="table-compact table-select px-4 pb-4 mt-6">
            <v-derivatives />
          </div>
        </v-panel>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VSpot from '~/components/partials/spot/markets/index-market.vue'
import VDerivatives from '~/components/partials/derivatives/markets/index.vue'
import Header from '~/components/layouts/desktop/header.vue'
import { Icon } from '~/types'

const components = {
  spot: 'v-spot',
  derviatives: 'v-derviatives'
}
export default Vue.extend({
  components: {
    'v-spot': VSpot,
    'v-derviatives': VDerivatives,
    'app-header': Header
  },
  data() {
    return {
      components,
      filterMarkets: '',
      component: components.spot,
      Icon
    }
  },
  methods: {
    onSelect(component: string) {
      this.component = component
    }
  }
})
</script>
