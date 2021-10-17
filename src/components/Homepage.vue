<template>
  <div>
    <v-btn @click = 'goToAdminLogin'>Login</v-btn>
  </div>
</template>

<script>

  export default {
    name: 'Homepage',

    methods: {
      goToAdminLogin() {
        this.$router.push('/Admin/Login')
      }
    }  
  }
</script>