<template>
  <div class="w-full lg:w-1/2 border-l border-solid border-light-grey pl-6 pr-11">
      <h3 class="text-center text-sm font-sora text-white font-noraml">
        {{ $t('request_access') }}
      </h3>
        <v-input
        v-model="form.email"
        :placeholder="$t('email_id')"
        class="mt-4"
        type="text"
        />
        <!-- <v-input
        v-model="form.password"
        :placeholder="$t('password')"
        class="mt-4"
        type="password"
        /> -->
        <div class="text-sm font-sora text-white font-noraml mt-4">
          By clicking submit, you agree to our <span class="underline cursor-pointer" @click.stop="goPrivacy">Privacy Policy</span> and <span class="underline cursor-pointer" @click.stop="goTerms">Terms and Conditions</span>
        </div>
      <div class="w-full mx-auto mt-4">
        <v-ui-button
          :status="status"
          full
          primary
          @click.stop="onSubmit"
        >
          {{ $t('submit') }}
        </v-ui-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: ""
      }
    };
  },
  methods: {
    onSubmit() {
        if (this.form.email) {
        localStorage.setItem('userData', JSON.stringify(this.form));
        this.form = "";
      }
    },
    goPrivacy() {
      this.$router.push({ name: 'privacy_policy' })
    },
    goTerms() {
      this.$router.push({ name: 'terms' })
    }
  }
};
</script>
