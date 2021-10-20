<template>
  <div id='body'>
    <div id='upper'>
        <h1 class='red--text text--accent-4 ml-16'>ATHENAEUM</h1>
        <v-container class='py-15'><v-row class='py-16 my-1'></v-row></v-container>

        <h1  class='text-center'>Unlimited Books for education,<br> entertainment, and more.</h1><br>
        <v-container class='py-10'>
          <v-row align-content='center' justify='center'>
            <v-col cols='12' md='4' class='px-2'>
              <div class='text-center'>             
                  <v-btn dark class='ma-3' elevation='1' height='150px' width='170px' color='red accent-4'>
                    <v-icon size='220px'>
                      mdi-account-cog
                    </v-icon>
                  </v-btn>                            
              </div>   
              <div class='text-center'>
                Admin
              </div>          
            </v-col>
            <v-col cols='12'  md='4' class='px-2'>
              <div class='text-center'>
                  <v-btn dark class='ma-3' elevation='1' height='150px' width='170px' color='red accent-4'>
                    <v-icon size='220px'>  
                      mdi-account-edit
                    </v-icon>
                  </v-btn> 
              </div>
              <div class='text-center '>
                Student
              </div>
            </v-col>
                       
          </v-row>
        </v-container>     
    </div>
    <v-row id='dividercolor' class='my-0 py-2'></v-row>

    <div >
        <v-row  align-content='center' align='center' justify='space-around' class='my-16 py-10' >
          <v-col cols='12' sm='8' md='4' >
            <h1 id='titles'>Read Free Library Books.</h1>
            <p id='description' >We have a lot of books that are available to borrow here.</p>
          </v-col >
          <v-col cols='12'  sm='8' md='4'>
              <v-img src='./assets/homepagebg.jpeg'></v-img>
          </v-col>
        </v-row>
      <v-row id='dividercolor' class='my-0 py-2'></v-row>
        <v-row align='center' justify='space-around' class='my-16 py-10'>
          <v-col  xs='12' sm='8' md='4'>
              <v-img src='./assets/homepagebg.jpeg'></v-img>  
          </v-col>
          <v-col  xs='12' sm='8' md='4'>
            <h1 id='titles'>Keep Track of your Favorite Books.</h1> 
            <p id='description'>Organized books using lists and reading logs.  </p>
          </v-col>
        </v-row>
        <v-row id='dividercolor' class='my-0 py-2'></v-row>
        <v-row align='center' justify='space-around' class='my-16 py-10'>
          <v-col xs='12' sm='8' md='4'>
            <h1 id='titles'>Explore New Books!</h1>
            <p id='description' >You might find something new that you might interested in.</p>
          </v-col >
          <v-col xs='12' sm='8' md='4'>
              <v-img src='./assets/homepagebg.jpeg' position='center'></v-img>
          </v-col>
        </v-row>
      
    </div>
    <v-row id='dividercolor' class='my-0 py-2'></v-row>
    <div>
      <h1 class='mt-16 text-center' style='font-size:40px'>Frequently Asked Questions</h1>
      <v-row justify='center' class='mb-16 pt-5' >
        <v-card width='900px' justify='center'>
          <v-expansion-panels dark style='background-color:black;' >
            <v-expansion-panel v-for="(item,i) in 5" :key="i" class='mb-2'  >
              <v-expansion-panel-header style='font-size:30px;'>
                Title
              </v-expansion-panel-header>
              <v-expansion-panel-content >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-card>
      </v-row>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'Homepage',
  }
</script>

<style scoped>
  #dividercolor{
    background-color: #212121;
  }
  h1{
    font-size: 60px;
  }
  #titles{
    font-size: 50px;
    float: left;
  }
  #description{
    font-size: 40px;
    float: left;
  }

  h1,h2, div{
    position: relative;
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