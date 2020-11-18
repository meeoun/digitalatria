<template>
  <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />

</template>
<script>
import APIService from "@/services/APIService";
export default {
  props: {
    passed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onError(error){
      this.$emit('recaptcha-status',true);
      this.$swal('Error Occurred with Recaptcha',
        error,
        'warning');
    },
    async onSuccess(token){
      let response = await APIService.checkRecaptcha({"g-recaptcha-response": token});
      this.$emit('recaptcha-status',false);
    },
    onExpired(){
      this.$emit('recaptcha-status',true);
      this.$swal('Recaptcha Expired',
        'Recaptcha Expired, please re-complete',
        'warning');
    }
    }

}

</script>
