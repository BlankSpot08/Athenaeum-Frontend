<template>
  <v-container fluid class="" v-if="book.data && count.data">
    <v-row class="">
      <v-col class="px-0 pt-0">
        <div class="text-h5">
          {{ book.data.title }}
          <a v-if="isBookFavorite">
            <v-icon color="yellow" dark @click="removeFavorite()">
              mdi-star
            </v-icon>
          </a>
          <a v-else>
            <v-icon color="" dark @click="addFavorite()"> mdi-star </v-icon>
          </a>
        </div>
      </v-col>
    </v-row>

    <v-row class="">
      <v-col class="pa-0" lg="2">
        <v-row>
          <v-col class="pb-0">
            <v-img
              :src="baseline + 'image/get/' + book.data.image_path"
              height="395"
              width="235"
              max-height="550"
              max-width="261"
            >
            </v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-dialog max-width="500" v-model="dialog">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" color="red" dark block>
                  Request Borrow
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Are you sure you want to borrow this book?
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col> Book Title: {{ book.data.title }} </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-container fluid>
                    <v-row>
                      <v-col class="text-center">
                        <v-btn @click="dialog = false" text> Cancel </v-btn>
                        <v-btn @click="requestBook()" text> Confirm </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <div class="pt-2">
              Availability: {{ count.data.borrowed }}/{{ count.data.total }}
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="">
        <v-container class="pt-0" fluid>
          <v-row class="">
            <v-col class="pt-0">
              <div class="text-body-1">
                {{ book.data.synopsis }}
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="text-body-1">
              <div>ISBN Number: {{ book.data.isbn }}</div>

              <div>Title: {{ book.data.title }}</div>

              <div>Edition: {{ book.data.edition }}</div>

              <div>Category: {{ book.data.category.name }}</div>

              <div>Tags: {{ tags(book.data.tags) }}</div>

              <div>Publication Year: {{ book.data.publication_year }}</div>

              <div>Price: ₱ {{ book.data.price }}</div>
            </v-col>
            <v-col class="text-body-1">
              <div class="mb-3 pb-2" id="division">
                <div>Publisher: {{ book.data.publisher.name }}</div>
                <div>
                  Publisher's Email: {{ book.data.publisher.email || "N/A" }}
                </div>
                <div>
                  Publisher's Address:
                  {{ book.data.publisher.address || "N/A" }}
                </div>
                <div>
                  Publisher's Contact No.:
                  {{ book.data.publisher.contactno || "N/A" }}
                </div>
              </div>

              <div
                v-for="(author, index) in book.data.authors"
                :key="index"
                class="mb-3 pb-2"
                id="division"
              >
                <div>Author: {{ author.name }}</div>
                <div>Author's Email: {{ author.email || "N/A" }}</div>
                <div>Author's Address: {{ author.address || "N/A" }}</div>
                <div>Author's Contact No.: {{ author.address || "N/A" }}</div>
              </div>
            </v-col>
          </v-row>
          <v-row class="" justify="bottom">
            <v-col class=""> </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentRegister",
  data() {
    return {
      book: {},
      count: {},
      baseline: axios.defaults.baseURL,
      isBookFavorite: null,
      dialog: false,
    };
  },
  methods: {
    async isFavorite() {
      try {
        const token = JSON.parse(localStorage.getItem("token"));

        const temp = await axios.post(
          "student/isBookFavorite",
          { isbn_number: this.book.data.isbn },
          { headers: { authorization: `Bearer ${token}` } }
        );

        return temp.data;
      } catch (error) {
        console.log(`Error: ${error}`);

        return error.response.data;
      }
    },
    tags(tags) {
      let string = "";

      let i = 0;
      for (i = 0; i < tags.length; i++) {
        string = string + tags[i].name + ", ";
      }

      return string.substring(0, string.length - 2);
    },
    async addFavorite() {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.post(
        "student/addToBookList",
        {
          isbn_number: this.book.data.isbn,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      this.isBookFavorite = true;
    },
    async removeFavorite() {
      const token = JSON.parse(localStorage.getItem("token"));

      console.log(this.book.data.isbn);

      await axios.delete("student/deleteFromBookList", {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          isbn_number: this.book.data.isbn,
        },
      });

      this.isBookFavorite = false;
    },
    async getBook() {
      return await axios.post("book/get", {
        isbn_number: this.$route.params.isbn,
      });
    },
    async getCount() {
      return await axios.post("bookEntered/getTotalAvailable", {
        book_id: this.book.data.id,
      });
    },
    async requestBook() {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.post(
        "student/borrowRequest",
        { isbn_number: this.book.data.isbn },
        { headers: { authorization: `Bearer ${token}` } }
      );

      this.dialog = false;
    },
  },
  async mounted() {
    this.book = await this.getBook();
    this.count = await this.getCount();
    this.isBookFavorite = await this.isFavorite();

    console.log(this.book);
  },
};
</script>

<style scoped>
#division {
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #666666;
}
</style>