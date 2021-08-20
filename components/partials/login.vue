<template>
  <div class="w-full mb-2 lg:w-1/2 pl-11 pr-6">
    <h3 class="text-center text-sm font-sora text-white font-noraml">
      {{ $t('login') }}
    </h3>
      <v-input
      v-model="form.email"
      :placeholder="$t('email_id')"
      class="mt-4"
      type="text"
      />
       <div v-if="invaildEmail" class="flex justify-center text-sm text-red-500 mt-2" >
          <p>Invalid email address</p>
        </div>
      <v-input
      v-model="form.password"
      :placeholder="$t('password')"
      class="mt-4"
      type="password"
      />
    <div class="w-full mx-auto mt-4">
      <v-ui-button
        :status="status"
        full
        primary
        @click.stop="onSubmit"
      >
        {{ $t('login') }}
      </v-ui-button>
       <div v-if="(invaildData ==='invalid')" class="flex justify-center text-sm text-red-500 mt-2" >
          <p>Invalid email address Or Password</p>
        </div>
    </div>
  </div>
</template>

<script>
import { Modal } from '~/types/enums';
import {fetchPassword} from '~/app/services/authenticate'

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      invaildData: "",
      invaildEmail:false
    };
  },
  methods: {
   async onSubmit() {
     if(this.form.email){
       this.invaildEmail = true
     }
        if (this.form.email && this.form.password) {
        // const userData = JSON.parse(localStorage.getItem('userData'));
        if(this.validateEmail(this.form.email)){
        const password = await fetchPassword(this.form.email)
          if (password) {
            if (password === this.form.password) {
            localStorage.setItem('register', true);
            this.invaildData = "valid";
            this.$accessor.modal.closeModal(Modal.Login)
          }
           else{
          console.log("Invalid Data");
          this.invaildEmail = false;
          this.invaildData = "invalid";
        }
        }
        }
      }
    },

    validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
    }
  }
};
</script>
