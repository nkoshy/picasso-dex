
<template>
  <div class="range-wrap flex items-center relative select-none mt-12 left-1">
    <input
      id="input"
      ref='input'
      v-model="sliderValue"
      class="range"
      type="range"
      min=0
      max=100
      @input="handleChange"
    />
    <div id="input1" for="distance" :value="sliderValue" class="range-slider-tooltip">
      <span class="font-sora text-white font-bold text-xs">
      {{ sliderValue}}%
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { BigNumber } from '@injectivelabs/utils'
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'input'
  },

  props: {
    value: {
      required: false,
      type: String,
      default: ''
    }
  },

  data() {
    return {
      sliderValue: 25
    };
  },

  mounted() {
        const width = document.getElementById('input')?.clientWidth ?? 0;
        const toolTipElement =  document.getElementById('input1');
        const actualPixels = (width / 4) - 10;
        if (toolTipElement !== undefined && toolTipElement !== null) {
          // console.log(actualPixels);
          toolTipElement.style.left = `${actualPixels}}px`;
          // console.log(toolTipElement);
      }
    },

  methods: {
    handleChange(e: Event) {
      const target = (e.target as HTMLFormElement)
      const value = new BigNumber((target).value)
      const progress = target.value;
      const width = document.getElementById('input')?.clientWidth ?? 0;
      const toolTipElement =  document.getElementById('input1');
      let actualPixels = ((progress / 100) * width) - ((toolTipElement?.clientWidth ?? 2 ) / 2);
      if (progress > 96) {
        actualPixels = actualPixels - 15
      }

      if (progress < 5) {
        actualPixels = actualPixels + 5
      }

      if (toolTipElement !== undefined && toolTipElement !== null) {
          toolTipElement.style.left = `${actualPixels}px`;
      }
    
      const style=(this.$refs.input as HTMLInputElement)
      style.style.background='linear-gradient(to right, #3617E2 0%, #FC69FB  ' + value + '%, #242257 ' + value + '%, #242257 100%)'
      // style.style.background='linear-gradient(102.23deg, #3617E2 '+(+value-45.68)+'%, #FC69FB '+(+value-147.51)+'% , white 100%)';
      this.$emit('input', style)
      this.$emit('input', value.dp(2, BigNumber.ROUND_HALF_CEIL).toFixed())
      this.$emit('onValueChange', progress);
    }
  }
})
</script>
