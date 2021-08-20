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
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        email: ""
      }
    };
  },


  methods: {

     sendEmail(requester) {
      try {
        const templateParams = {
         from_name: requester
        };

        emailjs.send('service_the4htc', 'template_8yxz0xc', templateParams, 'user_kr5qhWp6nbnMB6qqDHwD1')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });

      } catch(error) {
          console.log({error})
      }
      // // Reset form field
      // this.name = ''
      // this.email = ''
      // this.message = ''
    },

    onSubmit() {
        if (this.form.email) {
        // localStorage.setItem('userData', JSON.stringify(this.form));    
        console.log("Sending email.", this.form.email);
        this.sendEmail(this.form.email);
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
