<template>
    <div id='body'>
      <div id='upper'>
        <h1 class='red--text text--accent-4 ml-16'>ATHENAEUM</h1>
        <v-row class='py-16 my-10'></v-row>
        <v-row align-content='center' jusify='center'>
          <v-col cols='12' align-self='center'>
               
                <v-card dark class="mx-auto pa-4" min-height='450px' max-width="500px" color='rgb(0,0,0,0.75)' >
                   <v-form  ref='form'>
                    <v-card-title class='text-h5 ma-n3  font-weight-bold'>
                      Login
                    </v-card-title>
                    <v-card-text class='mx-n3'>
                      Please enter your ID Number and Password to access your Athenaeum account.
                    </v-card-text>

                    <v-text-field  dark label='ID Number' :rules='inputRules' v-model='id' class='py-4'></v-text-field >
                    
                    <v-text-field  dark label='Password' :rules='inputRules' v-model='password' class='py-4' type='password'></v-text-field>
                    <v-card-actions>
                      <v-btn block large elevation='2' class='mx-n2 mt-13' color='#D50000' @click='submit' >
                        Login
                      </v-btn>
                    </v-card-actions>
                    <v-card-actions class='my-n4'>
                          <v-btn plain >Don't have an account yet?</v-btn>
                          <v-btn plain>Forgot Password?</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
                
                
                <div class='text-center ma-1'>
                  <v-btn plain dark to='/'>Cancel</v-btn>
                </div>
                
          </v-col>
        </v-row>
        

      </div>
    </div>
</template>
<script>

  export default {
    name: 'AdminLogin',
    data(){
      return {
        id: '',
        password: '',
        inputRules: [
          v => v.length>0 || 'This field required'
        ]
      }
    },
  
    methods: {
      submit() {
        if(this.$refs.form.validate()){
          console.log(this.id, this.password)
        }
         
      }
    },

    
  }
</script>
<style scoped>
  h1, div, v-card{
    position: relative;
  }
  h1{
    font-size: 60px;
  }
  #body{
    position: relative;
    background-color: black;
    color: white;  
    min-height: 970px  ;
  }
  #upper{
    position: relative;
    min-height: 970px;
  }
  #upper::before{
        content: '';
        position: absolute;
        top:0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-image: url('./assets/homepagebg.jpeg');
        background-size: 100% 100%;
        background-position: top center;
        
        opacity: 0.4; 
   }
</style>
