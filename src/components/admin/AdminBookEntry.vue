<template>
  <v-container fluid>
    <v-row align-content="start">
      <v-icon dark> mdi-book </v-icon>
      <div class="pa-5 font-weight-bold text-h6">Book Entry</div>
    </v-row>

    <v-form @submit.prevent="addBook">
      <v-row class="mb-7">
        <v-card class="ma-0" color="#262626" id="cards" dark width="1500">
          <v-card-title> Add Books </v-card-title>
          <v-card-subtitle>
            Fill up the information needed below to add book(s).
          </v-card-subtitle>

          <v-card-actions>
            <v-col class="pb-9 ma-n2">
              <v-img
                v-if="!book.image_path"
                src="@/assets/adventure.jpg"
                height="395"
                width="285"
                max-height="550"
                max-width="311"
              >
              </v-img>

              <v-img
                v-else
                :src="this.bookCover.url"
                height="395"
                width="285"
                max-height="550"
                max-width="311"
              >
              </v-img>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-col class="ma-n3">
              <v-file-input
                name="image"
                v-model="book.image_path"
                class="mx-1"
                placeholder="Select your files"
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon=""
                prepend-inner-icon="mdi-image"
                label="Upload Book Cover"
                filled
                background-color="white"
                light
                @change="addNewBookCover($event)"
              >
              </v-file-input>
            </v-col>
            <v-col class="ma-n3">
              <v-combobox
                class="mx-1"
                v-model="book.category"
                :items="categories"
                name="category_name"
                light
                background-color="white"
                label="Category"
                filled
              >
              </v-combobox>
            </v-col>
          </v-card-actions>
          <v-card-actions class="my-n8">
            <v-col class="ma-n3">
              <v-text-field
                v-model="book.isbn_number"
                name="isbn_number"
                class="mx-1"
                background-color="white"
                light
                label="ISBN"
                placeholder="Type the ISBN"
                filled
              >
              </v-text-field>
            </v-col>
            <v-col class="ma-n3">
              <v-combobox
                name="tags"
                class="mx-1"
                height="10"
                background-color="white"
                light
                v-model="book.tags"
                chips
                clearable
                label="Tags"
                multiple
                solo
                filled
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item)"
                  >
                    {{ item }}
                  </v-chip>
                </template>
              </v-combobox>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-col class="ma-n3">
              <v-text-field
                name="edition"
                v-model="book.edition"
                class="mx-1"
                background-color="white"
                light
                label="Edition"
                placeholder="Type the book's edition"
                filled
              >
              </v-text-field>
            </v-col>
            <v-col class="ma-n3">
              <v-menu
                :close-on-content-click="false"
                :nudge-bottom="55"
                min-width="auto"
                transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="mx-1"
                    :value="book.publication_year"
                    name="publication_year"
                    background-color="white"
                    light
                    v-bind="attrs"
                    v-on="on"
                    label="Publication Year"
                    append-icon="mdi-calendar-range"
                    filled
                    readonly
                  ></v-text-field>
                </template>
                <v-date-picker v-model="book.publication_year"> </v-date-picker>
              </v-menu>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-col class="ma-n3">
              <v-text-field
                name="title"
                v-model="book.title"
                class="mx-1"
                background-color="white"
                light
                label="Title"
                placeholder="Type the book's title"
                filled
              ></v-text-field>
            </v-col>

            <v-col class="ma-n3">
              <v-text-field
                name="price"
                v-model="book.price"
                class="mx-1"
                background-color="white"
                light
                label="Price"
                placeholder="Type the book's price"
                filled
              ></v-text-field>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-textarea
              name="synopsis"
              v-model="book.synopsis"
              class="mx-1"
              background-color="white"
              light
              label="Synopsis"
              placeholder="Type the synopsis"
              filled
            >
            </v-textarea>
          </v-card-actions>
          <!-- Divider -->
          <v-card-subtitle class="mb-5">
            Publisher's Information
          </v-card-subtitle>

          <v-card-actions class="my-n8">
            <v-col class="ma-n3">
              <v-text-field
                name="publisher_name"
                v-model="book.publisher.name"
                class="mx-1"
                background-color="white"
                light
                label="Publisher"
                placeholder="Type the publisher's name"
                filled
              >
              </v-text-field>
            </v-col>

            <v-col class="ma-n3">
              <v-text-field
                name="publisher_email"
                v-model="book.publisher.email"
                class="mx-1"
                background-color="white"
                light
                label="Email"
                placeholder="Type the publisher's email"
                filled
              ></v-text-field>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-text-field
              name="publisher_address"
              v-model="book.publisher.address"
              class="mx-1"
              background-color="white"
              light
              label="Address"
              placeholder="Type the publisher's address"
              filled
            ></v-text-field>
            <v-text-field
              name="publisher_contactno"
              v-model="book.publisher.contactno"
              class="mx-1"
              background-color="white"
              light
              label="Contact Number"
              placeholder="Type the publisher's contact number"
              filled
            ></v-text-field>
          </v-card-actions>

          <!-- divider -->
          <v-card-subtitle class="mb-n3">
            Author's Information
          </v-card-subtitle>

          <v-simple-table fixed-header light height="200" class="ma-3">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-subtitle-1 text-left">Name</th>
                  <th class="text-subtitle-1 text-left">Email</th>
                  <th class="text-subtitle-1 text-left">Address</th>
                  <th class="text-subtitle-1 text-left">Contact Number</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                <tr v-for="(value, index) in book.authors" :key="index">
                  <td>
                    <v-text-field
                      :name="`authors[${index}][name]`"
                      v-model="value.name"
                    >
                    </v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      :name="`authors[${index}][email]`"
                      v-model="value.email"
                    >
                    </v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      :name="`authors[${index}][address]`"
                      v-model="value.address"
                    >
                    </v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      :name="`authors[${index}][contactno]`"
                      v-model="value.contactno"
                    >
                    </v-text-field>
                  </td>

                  <td class="text-right">
                    <v-btn class="mx-1" @click="deleteAuthor(index)">
                      Remove
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-card-actions>
            <v-row justify="end" class="mt-n1 mr-1">
              <v-dialog max-width="500" v-model="newAuthor.dialog">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    width="110"
                    color="#D50000"
                    class="mx-1"
                    v-bind="attrs"
                    v-on="on"
                  >
                    + Author
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <div>New Author</div>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col>
                          <!-- <v-text-field :name="`author[${index}][name]`" placeholder="Name" v-model="newAuthor.name"> -->
                          <v-text-field
                            placeholder="Name"
                            v-model="newAuthor.name"
                          >
                          </v-text-field>
                          <v-text-field
                            placeholder="Email"
                            v-model="newAuthor.email"
                          >
                          </v-text-field>
                          <v-text-field
                            placeholder="Address"
                            v-model="newAuthor.address"
                          >
                          </v-text-field>
                          <v-text-field
                            placeholder="Contact Number"
                            v-model="newAuthor.contactno"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn class="mr-5" @click="clearNewAuthor()">
                            Close
                          </v-btn>
                          <v-btn @click="addNewAuthor()"> Confirm </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-card-actions>
          <v-card-actions class="mt-8 ma-1">
            <v-btn width="285" color="#D50000" type="submit"> Confirm </v-btn>
            <v-btn width="285" color="#D50000" @click="clear()"> Clear </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
import FormData from "form-data";

export default {
  name: "AdminBookEntry",
  methods: {
    async addBook(event) {
      const token = JSON.parse(localStorage.getItem("token"));

      const formData = new FormData(event.target);

      await axios.post("admin/bookRegister", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("here");

      console.log("book registartion was successful");
    },
    getCurrentDate() {
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
    },
    remove(item) {
      this.book.tags.splice(this.book.tags.indexOf(item), 1);
      this.book.tags = [...this.book.tags];
    },
    addNewBookCover(event) {
      this.bookCover.url = URL.createObjectURL(this.book.image_path);

      this.bookCover.image = event;

      console.log(this.bookCover.url);
      console.log(this.book.image_path);
    },
    addNewAuthor() {
      this.$set(this.book.authors, this.book.authors.length, {
        name: this.newAuthor.name,
        address: this.newAuthor.address,
        email: this.newAuthor.email,
        contactno: this.newAuthor.contactno,
        dialog: false,
      });

      this.clearNewAuthor();
    },
    closeNewAuthor() {
      this.clearNewAuthor();
    },
    clearNewAuthor() {
      this.newAuthor.dialog = false;

      this.newAuthor.name = "";
      this.newAuthor.email = "";
      this.newAuthor.address = "";
      this.newAuthor.contactno = "";
    },
    deleteAuthor(index) {
      this.book.authors.splice(index, 1);
    },
    editAuthor(author) {
      this.closeAuthor(author);
    },
    closeAuthor(author) {
      author.dialog = false;
    },
    clear() {
      this.book = {
        isbn_number: "",
        edition: "",
        title: "",
        synopsis: "",
        category: "",
        publication_year: Date(),
        tags: [],
        image_path: "",
        authors: [],
        publisher: {
          name: "",
          email: "",
          address: "",
          contactno: "",
        },
      };
    },
  },
  data() {
    return {
      categories: [
        "Adventure/Action",
        "Fantasy",
        "Fiction",
        "History",
        "Horror",
        "Language",
        "Literature",
        "Mystery",
        "Natural Science",
        "Psychology",
        "Religion",
        "Romance",
        "Social Science",
        "Technology",
        "The Arts",
      ],
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      book: {
        isbn_number: "Original ISBN",
        edition: "True Edition",
        title: "Edith Action",
        synopsis: "So godo synopsis",
        category: "Mystery",
        price: "chu no priced",
        publication_year: this.getCurrentDate(),
        tags: ["scary", "horror"],
        image_path: "",
        authors: [
          {
            name: "chuchu",
            email: "testing email",
            address: "of course it is",
          },
        ],
        publisher: {
          name: "publishing chu",
          email: "chu email",
          address: "hey address chu",
          contactno: "contact me",
        },
      },
      bookCover: {
        url: null,
        image: null,
      },
      newAuthor: {
        name: "",
        address: "",
        email: "",
        contactno: "",
        dialog: false,
      },
    };
  },
};
</script>