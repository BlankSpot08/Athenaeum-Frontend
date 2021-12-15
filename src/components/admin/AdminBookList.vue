<template>
  <v-container fluid>
    <v-row align-content="start">
      <v-icon dark> mdi-book-edit </v-icon>
      <div class="pa-5 font-weight-bold text-h6">Book List</div>
    </v-row>
    <v-row class="mb-7">
      <v-card class="ma-0" color="#262626" id="cards" dark width="1500">
        <v-card-actions class="mt-8">
          <v-text-field
            class="mx-3 mt-n5"
            label="Search ISBN"
            background-color="white"
            light
            filled
            v-model="search_data.isbn"
            height="50"
          ></v-text-field>
          <v-text-field
            class="mx-3 mt-n5"
            label="Search title"
            background-color="white"
            light
            filled
            v-model="search_data.title"
            height="50"
          ></v-text-field>
          <v-text-field
            class="mx-3 mt-n5"
            label="Search category"
            background-color="white"
            light
            filled
            v-model="search_data.category"
            height="50"
          ></v-text-field>
        </v-card-actions>
        <v-card-actions class="mt-0">
          <v-col>
            <v-text-field
              class="mt-n10"
              label="Search author"
              background-color="white"
              light
              filled
              v-model="search_data.author_name"
              height="50"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              class="mt-n10"
              label=" Publisher"
              background-color="white"
              light
              filled
              v-model="search_data.publisher_name"
              height="50"
            ></v-text-field>
          </v-col>
          <v-col class="text-right">
            <v-btn
              class="mt-n15"
              width="200"
              color="#D50000"
              large
              @click="search()"
              height="50"
              >Search</v-btn
            >
          </v-col>
        </v-card-actions>

        <v-card-subtitle class="ml-1 mt-n10 mb-n8 text-subtitle-1">
          Book List
        </v-card-subtitle>
        <v-simple-table fixed-header light height="360" class="ma-5">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-subtitle-1 text-left">ISBN</th>
                <th class="text-subtitle-1 text-left">Book Title</th>
                <th class="text-subtitle-1 text-left">Publisher</th>
                <th class="text-subtitle-1 text-left">Category</th>
                <th class="text-subtitle-1 text-left">Price</th>
                <th class="text-subtitle-1 text-left" />
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in books.data" :key="index">
                <td>
                  {{ value.isbn }}
                </td>
                <td>
                  {{ value.title }}
                </td>
                <td>
                  {{ value.publisher.name }}
                </td>
                <td>
                  {{ value.category.name }}
                </td>
                <td>₱ {{ value.price }}</td>
                <td class="text-right">
                  <v-btn
                    @click="goToBookUpdateLink('adminBookUpdate', value.isbn)"
                    color="#D50000"
                    dark
                  >
                    Edit
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-card-actions> </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "AdminBookList",
  data() {
    return {
      start: "",
      dateOfRegister: null,
      publicationYear: null,
      dialog: false,
      items: ["Programming", "Design", "Vue", "Vuetify"],
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      books: {},
      search_data: {
        isbn: "",
        title: "",
        author_name: "",
        publisher_name: "",
        category: "",
      },
    };
  },
  methods: {
    async search() {
      const token = JSON.parse(localStorage.getItem("token"));

      const search = await axios.post("admin/bookSearch", this.search_data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      this.books = search;
    },
    async getAllBooks() {
      const token = JSON.parse(localStorage.getItem("token"));

      const books = axios.get("admin/getAllBooks", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return books;
    },
    goToBookUpdateLink(name, isbn) {
      this.$router.push({ name: name, params: { isbn: isbn } });
    },
  },
  async mounted() {
    this.books = await this.getAllBooks();

    console.log(this.books);
  },
};
</script>
<style scope>
.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
  font-size: 15px;
}
</style>