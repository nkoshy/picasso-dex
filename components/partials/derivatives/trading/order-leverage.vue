<template>
  <!-- eslint-disable vue/no-v-html -->
  <!--<div class="pt-1">
    <div>
<<<<<<< HEAD
      <h3
        class="text-xs text-gray-400"
        v-html="$t('max_leverage', { max: maxLeverage })"
      ></h3>
    </div>
=======
      <v-ui-text class="opacity-40 font-sora text-xsm font-normal text-white"
        muted-md
        tag="h3"
        v-bind="{ '2xs': true }"
        v-html="$t('max_leverage', { max: maxLeverage })"
      >
      </v-ui-text>
    </div> -->
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
    <v-input-slider
      min="1"
      :max="maxLeverage.toString()"
      step="0.01"
      :value="leverage.toString()"
      :sliderValue="leverage"
      @input="onLeverageChange"
    >
      <div class="relative">
        <input
          ref="leverage-input"
          :value="leverage"
          type="number"
          min="0"
          step="0.01"
<<<<<<< HEAD
          :max="maxLeverage.toString()"
=======
          max="maxLeverage.toString()"
>>>>>>> 8bcd3ce76d01e7ea647c3d4b28159659310df215
          class="leverage-input pr-4"
          @input="(e) => onLeverageChange(e.target.value)"
        />
        <span class="absolute top-0 right-0 text-xs text-gray-400 mt-1 mr-1">
          x
        </span>
      </div>
    </v-input-slider>
</template>

<script lang="ts">
import Vue from 'vue'
import VInputSlider from '~/components/inputs/slider.vue'

export default Vue.extend({
  components: {
    VInputSlider
  },

  model: {
    prop: 'leverage',
    event: 'change'
  },

  props: {
    maxLeverage: {
      required: true,
      type: String
    },

    leverage: {
      required: true,
      type: String
    }
  },

  methods: {
    onLeverageChange(value: string) {
      if (!Number.isNaN(value)) {
        this.$emit('change', value)
        this.$forceUpdate()
      }
    }
  }
})
</script>
