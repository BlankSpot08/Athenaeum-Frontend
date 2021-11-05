<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-0">
        <div class="text-h5">
          Read-Again
        </div>
      </v-col>
    </v-row>

    <v-row v-for="i in rows" :key="i" class="mb-10 ">
      <v-col v-for="j in maxCount" :key="j" class="px-0 ">
        <a>
          <v-img :src="baseline + 'image/get/' + 
            books.data[j - 1].book.image_path"
            height="225" width="150" max-width="161" max-height="225"/>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'StudentReadAgain',
    data() {
      return {
        books: {},
        maxCount: 8,
        rows: null,
        baseline: axios.defaults.baseURL,
      }
    },
    methods: {
      async getReadAgainBooksOfStudent() {
        const token = JSON.parse(localStorage.getItem('token'))
        
        return await axios.get('student/getReadAgain', {headers: { authorization: `Bearer ${token}` }})
      },
      
    },
    async mounted() {
      this.books = await this.getReadAgainBooksOfStudent()

      console.log(this.books)

      this.rows = Math.ceil(this.books.data.length / this.maxCount)
      console.log(this.rows)
    }

  }
</script>
