<template>
  <div
    id="tv_chart_container"
    ref="tradingView"
    class="tv_chart_container bg-dark-blue h-full"
  ></div>
</template>

<script lang="ts">
import Vue from 'vue'
import config from './config'
import { widget as TradingWidget } from '~/static/chart/charting_library/charting_library.min'

export default Vue.extend({
  props: {
    symbol: {
      required: true,
      type: String
    },

    interval: {
      required: true,
      type: String
    },

    datafeedEndpoint: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      tradingView: null as any
    }
  },

  computed: {
    //
  },

  mounted() {
    const widgetOptions = config({
      symbol: this.symbol,
      interval: this.interval,
      datafeedEndpoint: this.datafeedEndpoint
    })
    // eslint-disable-next-line no-console
    // @ts-ignore
    this.tradingView = new TradingWidget(widgetOptions)
    this.tradingView.onChartReady(() => {
      this.$emit('ready')
    })
  },

  methods: {
    async setIndexPriceStudy() {
      /* TODO
      const { market, tradingView } = this

      if (!market || market.type === MarketType.StockFutures) {
        return
      }

      try {
        // @ts-ignore
        await tradingView
          // @ts-ignore
          .chart()
          .createStudy(
            'Compare',
            false,
            false,
            ['close', `.${market.ticker}`],
            {
              'Plot.linewidth': 1,
              'Plot.color': '#c7d5da'
            },
            {
              priceScale: 'as-series'
            }
          )
        // @ts-ignore
        tradingView.chart().getPanes()[0].getRightPriceScales()[0].setMode(0)
      } catch (err) {} */
    }
  }
})
</script>
