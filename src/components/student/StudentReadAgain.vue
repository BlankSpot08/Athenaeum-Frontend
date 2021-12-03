<template>
  <v-container fluid v-if="books.data">
    <v-row>
      <v-col class="pa-0">
        <div class="text-h5">Read-Again</div>
      </v-col>
    </v-row>

    <v-row v-for="i in rows" :key="i" class="mb-10">
      <v-col v-for="j in maxCount" :key="j" class="px-0">
        <a
          v-if="j + maxCount * (i - 1) - 1 < books.data.length"
          @click="
            goToBookLink(
              'studentBook',
              books.data[j + maxCount * (i - 1) - 1].book.isbn
            )
          "
        >
          <v-img
            :src="
              baseline +
              'image/get/' +
              books.data[j + maxCount * (i - 1) - 1].book.image_path
            "
            height="225"
            width="150"
            max-width="161"
            max-height="225"
          />
        </a>
      </v-col>
    </v-row>

    <v-row class="pt-16 mt-16" v-if="books.data.length === 0">
      <v-col class="pt-16 mt-16">
        <div class="text-center text-body-1">
          You haven't added any books to your list yet.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "StudentReadAgain",
  data() {
    return {
      books: {},
      maxCount: 8,
      rows: null,
      baseline: axios.defaults.baseURL,
    };
  },
  methods: {
    goToBookLink(name, isbn) {
      this.$router.push({ name: name, params: { isbn: isbn } });
    },
    async getReadAgainBooksOfStudent() {
      const token = JSON.parse(localStorage.getItem("token"));

      return await axios.get("student/getReadAgain", {
        headers: { authorization: `Bearer ${token}` },
      });
    },
  },
  async mounted() {
    this.books = await this.getReadAgainBooksOfStudent();

    console.log(this.books);

    this.rows = Math.ceil(this.books.data.length / this.maxCount);
  },
};
</script>
