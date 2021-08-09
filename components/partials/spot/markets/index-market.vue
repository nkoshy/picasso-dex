<template>
  <div class="table-compact table-select px-4 pb-4">
   <div class="w-full  py-1  px-2">
      <div class="w-xl absolute right-36 top-xs mx-2 my-3 2xl:right:hidden">
        <v-input
          v-model="filterMarkets"
          :placeholder="$t('filter_markets')"
          class="input-xs w-full"
        >
        </v-input>
        <span class="absolute mr-2 right-2 top-1 mt-1 "
          ><v-ui-icon :icon="Icon.SpotSearch" xs class="text-gray-400"></v-ui-icon
        ></span>
      </div>
    </div>
    
    <div class="table-responsive table-compact">
      <div slot="context" class="bg-blue py-2 h-20  flex items-center justify-start">
        <div>
          <!--<div class="tabs"> -->
            <div  class="flex ">
             <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('BNB Markets') }}</span>
              </v-ui-button>
             <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('BTC Markets') }}</span>
              </v-ui-button>
              <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('ALTS Markets') }}</span>
            </v-ui-button>
              <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('FIAT Markets') }}</span>
              </v-ui-button>
              <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('ETF') }}</span>
              </v-ui-button>
            </div>
          <!--</div>-->
        </div>
      </div>
      <table class="table">
        <thead>
          <tr class= "flex w-full justify-between bg-light-blue px-2 ">
            <th is="v-ui-table-th" class="text-left  font-normal text-sm h-16 mx-2" flex>
              {{ $t('market') }}
               <v-ui-icon
        :icon="Icon.upAndDownSort"
        xs
        class="text-gray-500 group-hover:text-gray-300 p-1"
      />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>
                
                {{ $t('last_traded_price') }}
              </v-ui-text>
                <v-ui-icon
        :icon="Icon.upAndDownSort"
        xs
         class="text-gray-500 group-hover:text-gray-300 p-1"
      />
            </th>
            <th is="v-ui-table-th" class="text-left  font-normal text-sm h-16 mx-2 " flex>
              <v-ui-text >
                {{ $t('market_change_24h') }}
              </v-ui-text>
               <v-ui-icon 
        :icon="Icon.upAndDownSort"
        xs
        class="text-gray-500 group-hover:text-gray-300 p-1"
      />
            </th>
            <th is="v-ui-table-th" class="text-left  font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>
                {{ $t('market_volume_24h') }}
              </v-ui-text>
               <v-ui-icon
        :icon="Icon.upAndDownSort"
        xs
        class="text-gray-500 group-hover:text-gray-300 p-1"
      />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr is="v-spot"
            v-for="({ market, summary }, index) in  sortedMarket"
            :key="`spot-markets-${market.ticker}-${index}`"
            class="flex justify-between items-center h-12 px-2 h-16 orders"
            v-bind="{ market, marketSummary: summary }"
            @selected="$emit('selected')"
          ></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Spot from './market-spot.vue'
import {
  UiSpotMarket,
  UiSpotMarketSummary,
  UiSpotMarketAndSummary,
  Icon
} from '~/types'
import { spot } from '~/routes.config'

export default Vue.extend({
  components: {
    'v-spot': Spot
  },

  data() {
    return {
      filterMarkets: '',
      sortColumn:'',
      Icon
    }
  },

  computed: {
    markets(): UiSpotMarket[] {
      return this.$accessor.spot.markets
    },

    marketsSummary(): UiSpotMarketSummary[] {
      return this.$accessor.spot.marketsSummary
    },

    filteredMarkets(): UiSpotMarketAndSummary[] {
      const { filterMarkets, markets, marketsSummary } = this

      const query = filterMarkets.toLowerCase()

      return markets
        .map((market) => {
          return {
            market,
            summary: marketsSummary.find(
              (summary) => summary.marketId === market.marketId
            )
          }
        })
        .filter(({ market, summary }) => {
          const { ticker, baseDenom, quoteDenom } = market
          const satisfiesSearchCondition =
            baseDenom.toLowerCase().startsWith(query) ||
            quoteDenom.toLowerCase().startsWith(query) ||
            ticker.toLowerCase().startsWith(query)

          return satisfiesSearchCondition && summary !== undefined
        }) as UiSpotMarketAndSummary[]
    },
    sortedMarket(): any{
    const filterMarketsSort = [...this.filteredMarkets];
    filterMarketsSort.sort((a,b)=>{
      return -(a.summary.change - b.summary.change)
    });
    return filterMarketsSort
  }
  }
})
</script>
