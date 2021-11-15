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
          <v-col class="px-10 py-8" lg="4" id='loginBody'>
            <div class="mb-6">
              <div class="text-h6">Login</div>
              <div class="text-body-2">Please enter your ID Number and Password to access your Athenaeum account.</div>
            </div>

            <v-form ref='form' class="py-4">
              <div class="pb-2">
                <v-text-field dark class="py-1 my-1" label="ID Number" :rules='inputRules' v-model='idNumber' v-bind:value="idNumber"></v-text-field>
                <v-text-field dark class="py-1 my-1" label="Password" :rules='inputRules' v-model='password' v-bind:value="password" type="password"></v-text-field>
                <!-- <v-btn dark color='#D50000' @click="goToRouterLink('studentHome')" block>Login</v-btn> -->
                <v-btn dark color='#D50000' @click="login()" block>Login</v-btn>
              </div>

              <v-container fluid>
                <v-row class="text-body-2">
                  <v-col class="pa-0 ">
                    <a class="white--text" @click="goToRouterLink('studentRegister')">Don't have an account yet?</a>
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
  import axios from 'axios'

  export default {
    name: 'StudentLogin',
    data() {
      return {
        idNumber: '19-14770-807',
        password: '09194163795',
        inputRules:[
          v => v.length > 0 || 'This field required'
        ]
      }
    },
    methods: {
      goToRouterLink(name) {
        this.$router.push({name: name})
      },
      async login() {
        if (this.$refs.form.validate()) {
          const request = await axios.post('authentication/studentLogin', 
            { id: this.idNumber, password: this.password }
          )

          const status = request.status
          if (status == 200) {
            const token = request.data.accessToken
            localStorage.setItem('token', JSON.stringify(token))

            this.goToRouterLink("studentHome")
          }
        }
      }
    }
  }
</script>

<style>
  #loginBody{
    background-color: rgba(0,0,0,0.5);
  }
  
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