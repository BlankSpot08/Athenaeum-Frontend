<template>
  <v-app>
    <v-main id='upper'>
      <v-container fluid>
        <v-row>
          <v-col class="">
            <div class='red--text text--accent-4 ml-16 text-h4 font-weight-bold'>ATHENAEUM</div>
          </v-col>
        </v-row>
        
        <v-row class="mt-16 pt-16"  justify="center">
          <v-col class="black px-10 py-8" lg="4">
            <div class="mb-6">
              <div class="text-subtitle-1">Login</div>
              <div class="text-body-2">Please enter your ID Number and Password to access your Athenaeum account.</div>
            </div>

            <v-form class="py-4">
              <div class="pb-2">
                <v-text-field class="py-0 my-0" label="ID Number"></v-text-field>
                <v-text-field class="py-0 my-0" label="Password" type="password"></v-text-field>
                <v-btn class="red" block>Login</v-btn>
              </div>

              <v-container fluid>
                <v-row class="text-body-2">
                  <v-col class="pa-0 ">
                    <a class="white--text">Don't have an account yet?</a>
                  </v-col>
                  <v-col class="pa-0 text-right">
                    <a class="white--text">Forgot password?</a>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
        <v-row class="">
          <v-col class="text-center">
            <a class="white--text" @click="goToRouterLink('homepage')">Cancel</a>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'StudentLogin',
    data() {
      return {
        idNumber: '',
        password: ''
      }
    },
    methods: {
      goToRouterLink(name) {
        this.$router.push({name: name})
      },
      login() {
        axios.get()
      }
    }
  }
</script>

<style>
  #upper {
    position: relative;
    background-color: black;
    color: white;  
  }

  #upper::before {
        content: '';
        position: absolute;
        top:0px;
        right: 0px; 
        bottom: 0px;
        left: 0px;
        background-image: url('../../assets/homepagebg.jpeg');
        background-size: 100% 100%;
        
        opacity: 0.4; 
   }
</style>