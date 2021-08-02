
<template>
  <div class="range-wrap flex items-center relative select-none">
    <input
      
      ref="input"
      class="range"
      type="range"
      v-model="sliderValue"
      v-on:change="handleChange"
      min=0
      max=100
    />
    <output ref="input1" for="distance" :value="sliderValue" class="range-slider-tooltip"><span class="range-slider-span">{{ sliderValue}}%</span></output>
  </div>
  
    
</template>

<script lang="ts">
import { BigNumber } from '@injectivelabs/utils'
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  data() {
    return {
      sliderValue: 0
    };
  },
  watch: {
      'sliderValue': function() {
        let percentage = 100 / 15 * this.sliderValue;
        
         let sliderWidth =this.$refs.input.clientWidth;
         let tooltipWidth = this.$refs.input1.clientWidth;
        let calc = sliderWidth - tooltipWidth - 32;
        let positionCalc = (percentage / 100) * calc;
        console.log(positionCalc);
         //$('.range-slider-tooltip').css('left', positionCalc);
        }
  },

  model: {
    prop: 'value',
    event: 'input'
  },

  props: {
    value: {
      required: false,
      type: String
    }
  },

  methods: {
    handleChange(e: Event) {
      const value = new BigNumber((e.target as HTMLFormElement).value)
      //console.log(this.$refs.input as HTMLInputElement)
    
      const style=(this.$refs.input as HTMLInputElement)
      style.style.background='linear-gradient(to right, #3617E2 0%, #FC69FB  ' + value + '%, #242257 ' + value + '%, #242257 100%)'
      //style.style.background='linear-gradient(102.23deg, #3617E2 '+(+value-45.68)+'%, #FC69FB '+(+value-147.51)+'% , white 100%)';
      this.$emit('change', style)
      this.$emit('change', value.dp(2, BigNumber.ROUND_HALF_CEIL).toFixed())
    }
  }
})
</script>
