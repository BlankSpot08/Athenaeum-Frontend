<template>
  <v-container fluid>
    <v-row>
      <v-container fluid v-if="books.data.length">
        <v-row v-for="i in rows" :key="i" class="mb-10">
          <v-col v-for="j in maxCount" :key="j" class="px-0">
            <a
              v-if="j + maxCount * (i - 1) - 1 < books.data.length"
              @click="
                goToBookLink(
                  'studentBook',
                  books.data[j + maxCount * (i - 1) - 1].isbn
                )
              "
            >
              <v-img
                :src="
                  baseline +
                  'image/get/' +
                  books.data[j + maxCount * (i - 1) - 1].image_path
                "
                height="225"
                width="150"
                max-width="161"
                max-height="225"
              />
            </a>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid v-else>
        <v-row justify="center" class="pt-16"
          ><v-col class="text-body-2" lg="6">
            <div class="pl-6">
              <div class="pb-2">
                Your search for "{{ $route.query.query }}" did not have any
                matches.
              </div>

              <div class="pb-1">Suggestions:</div>
              <div class="pl-5">
                <div>• Try different keywords</div>
                <div>• Try using a title, author, or publisher</div>
                <div>
                  • Try a category, like horror, fantasy, psychology, or
                  adventure/action
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentSearch",
  watch: {
    async search() {
      this.books = await this.searchBooks();
    },

    $route(to) {
      if (to.query.query) {
        this.search = to.query.query;
      }
    },
  },
  methods: {
    goToBookLink(name, isbn) {
      this.$router.push({ name: name, params: { isbn: isbn } });
    },
    async searchBooks() {
      const token = JSON.parse(localStorage.getItem("token"));

      const books = await axios.post(
        "student/bookSearch",
        {
          query: this.$route.query.query,
        },
        { headers: { authorization: `Bearer ${token}` } }
      );

      return books;
    },
  },
  data() {
    return {
      books: {},
      search: this.$route.query.query,
      baseline: axios.defaults.baseURL,
      rows: null,
      maxCount: 8,
    };
  },
  async mounted() {
    this.books = await this.searchBooks();

    if (this.books.data.length) {
      this.rows = Math.ceil(this.books.data.length / this.maxCount);
    }

    console.log(this.books);
  },
};
</script>

<style scoped>
</style>