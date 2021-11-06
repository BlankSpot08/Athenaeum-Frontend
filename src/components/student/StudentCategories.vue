<template>
  <v-container fluid >
    <v-row>
      <v-col class="pa-0">
        <div class="text-h5">
          Categories
        </div>
      </v-col>
    </v-row>

    <v-row v-for="(category, index) in categorySources" :key="index" class="pa-0">
      <v-col class="px-0" v-for="(pic, index) in category" :key=index lg="3" md="2">
        <a class="">
          <v-img :src="require(`@/assets/${pic.link}`)" height="250" width="330" max-height="400" max-width="400">
            <v-container class="fill-height" fluid>
              <v-row>
                <v-col class="text-center white--text text-subtitle-1 py-5" id="categoryTitle">
                  {{ pic.title }}
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </a>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
  export default {
    name: 'StudentCategories',
    method: {

    },
    data() {
      return {
        categorySources: [
          [
            { link: "adventure.jpg", title: 'Adventure/Action' },
            { link: "fantasy.jpg", title: 'Fantasy' },
            { link: "fiction.jpg", title: 'Fiction' },
            { link: "history.jpg", title: 'History' }
          ],
          [
            { link: "horror.jpg", title: 'Horror' },
            { link: "language.jpg", title: 'Language' },
            { link: "literature.jpg", title: 'Literature' },
            { link: "mystery.jpg", title: 'Mystery' }
          ],
          [
            { link: "naturalscience.jpg", title: 'Natural Science' },
            { link: "psychology.jpg", title: 'Psychology' },
            { link: "religion.jpg", title: 'Religion' },
            { link: "romance.jpg", title: 'Romance' }
          ],
          [
            { link: "socialscience.jpg", title: 'Social Science' },
            { link: "technology.jpg", title: 'Technology' },
            { link: "arts.jpg", title: 'Arts' }
          ]
        ]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  #categoryTitle {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
