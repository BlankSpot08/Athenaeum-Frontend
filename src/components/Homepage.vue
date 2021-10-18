<template>
  <div id='body'>
    <div id='upper'>
        <h1 class='red--text text--accent-4 ml-16'>ATHENAEUM</h1>
        <v-row class='py-16 my-16'></v-row>

        <h2  class='text-center'>Unlimited Books for education,<br> entertainment, and more.</h2><br>
        <v-container>
          <v-row align-content='center' justify='center'>
            <v-flex xs12 sm6 md3 class='px-2'>
              <div class='text-right'>             
                  <v-btn dark class='ma-3' elevation='1' height='150px' width='170px' color='red accent-4'>
                    <v-icon size='220px'>
                      mdi-account-cog
                    </v-icon>
                  </v-btn>                            
              </div>   
              <div class='text-right pr-13'>
                Admin
              </div>          
            </v-flex>
            <v-flex xs12 sm6 md3 class='px-2'>
              <div class='text-left'>
                
                  <v-btn dark class='ma-3' elevation='1' height='150px' width='170px' color='red accent-4'>
                    <v-icon size='220px'>  
                      mdi-account-edit
                    </v-icon>
                  </v-btn> 
              </div>
              <div class='text-left pl-13'>
                Student
              </div>
            </v-flex>
                       
          </v-row>
        </v-container>     
    </div>
    <div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Homepage',
  }
</script>

<style scoped>
  h1,h2, div{
    position: relative;
  }
  #body{
    position: relative;
    background-color: black;
    color: white;
    font-size: 30px;
    min-height: 970px;
  }
  #upper{
    position: relative;
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
        min-height: 970px;
        opacity: 0.4; 
   }
</style>