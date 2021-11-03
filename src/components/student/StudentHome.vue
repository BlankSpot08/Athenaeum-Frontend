<template>
  <v-container class="white text--black" fluid>
    <v-row class="green">
      <v-btn @click="test()"> 
        test
      </v-btn>
      
    </v-row>
    <v-row class="green">
      <v-col>
        sadge
      </v-col>      
    </v-row>
  </v-container>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'StudentHomepage',
    methods: {
      async test() {
        const test = await axios.post('book/getTwentyBookByCategory', {category: 'Adventure/Action'})
        console.log(test)
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
  #back {

  }
</style>