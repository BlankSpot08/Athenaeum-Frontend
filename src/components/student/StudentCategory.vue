<template>
  <v-container fluid v-if="this.books.data">
    <v-row>
      <v-col class="pa-0">
        <v-container class="" fluid>
          <v-row>
            <v-col class="" lg="3">
              <v-img 
                :src="require(`@/assets/${categorySources[this.$route.query.name]}`)"
                height="250" width="330" max-height="400" max-width="400">
              </v-img>   
            </v-col>
            <v-col>
              <v-row>
                <v-col>
                  {{ category.data.name }}
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  {{ category.data.description }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container> 
      </v-col>
    </v-row>
    
    <v-row v-for="i in rows" :key="i">
      <v-col v-for="j in maxCount" :key="j">
        <a 
          v-if="((j + (maxCount * (i - 1))) - 1) < books.data.length" 
          @click="goToBookLink('studentBook', books.data[(j + (maxCount * (i - 1))) - 1].isbn_number)">
          <v-img
            :src="baseline + 'image/get/' + books.data[(j + (maxCount * (i - 1))) - 1].image_path"
            height="225" 
            width="150" 
            max-width="161" 
            max-height="225">
          </v-img>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'StudentCategories',
    methods: {
      async getBooks(category) {
        const books = await axios.post('book/getAllByCategory', { category: category })

        return books
      },
      async getCategory(name) {
        const category = await axios.post('category/get', {name: name})

        return category
      },
      goToBookLink(name, id) {
        this.$router.push({name: name, query: { id: id }})
      },
    },
    data() {
      return {
        categorySources: {
          'Adventure/Action': 'adventure.jpg',
          'Fantasy': 'fantasy.jpg',
          'Fiction': 'fiction.jpg',
          'History': 'history.jpg',
          'Horror': 'horror.jpg',
          'Language': 'language.jpg',
          'Literature': 'literature.jpg',
          'Mystery': 'mystery.jpg',
          'Natural Science': 'naturalscience.jpg',
          'Psychology': 'psychology.jpg',
          'Religion': 'religion.jpg',
          'Romance': 'romance.jpg',
          'Social Science': 'socialscience.jpg',
          'Technology': 'technology.jpg',
          'The Arts': 'arts.jpg'
        },
        category: {},
        books: [],
        rows: null,
        maxCount: 8,
        baseline: axios.defaults.baseURL,
      }
    },
    async mounted() {
      this.category = await this.getCategory(this.$route.query.name)
      this.books = await this.getBooks(this.$route.query.name)
      
      this.rows = Math.ceil(this.books.data.length / this.maxCount)

      console.log(this.books)
    }
  }
</script>

<style scoped>
  #categoryTitle {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
