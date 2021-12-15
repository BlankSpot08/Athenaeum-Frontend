<template>
  <v-container fluid v-if="book.data">
    <v-row align-content="start">
      <v-icon dark> mdi-book-edit </v-icon>
      <div class="pa-5 font-weight-bold text-h6">Book Update</div>
    </v-row>

    <v-form @submit.prevent="updateBook">
      <v-row class="mb-7">
        <v-card class="ma-0" color="#262626" id="cards" dark width="1500">
          <v-card-actions>
            <v-col class="pb-9 ma-n2">
              <v-img
                v-if="!bookCover.new_path"
                :src="baseline + 'image/get/' + book.data.image_path"
                height="395"
                width="285"
                max-height="550"
                max-width="311"
              >
              </v-img>
              <v-img
                v-else
                :src="bookCover.url"
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
                v-model="bookCover.new_path"
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
                height="50"
              >
              </v-file-input>
            </v-col>
            <v-col class="ma-n3">
              <v-combobox
                class="mx-1"
                v-model="book.data.category.name"
                :items="categories"
                name="category_name"
                light
                background-color="white"
                label="Category"
                filled
                height="50"
              >
              </v-combobox>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-col class="ma-n3">
              <v-text-field
                v-model="book.data.isbn"
                name="new_isbn_number"
                class="mx-1"
                background-color="white"
                height="50"
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
                height="50"
                max-height="550"
                max-width="311"
                background-color="white"
                light
                v-model="book.data.tags"
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
                v-model="book.data.edition"
                class="mx-1"
                background-color="white"
                light
                label="Edition"
                placeholder="Type the book's edition"
                filled
                height="50"
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
                    :value="book.data.publication_year"
                    name="publication_year"
                    background-color="white"
                    light
                    v-bind="attrs"
                    v-on="on"
                    label="Publication Year"
                    append-icon="mdi-calendar-range"
                    filled
                    readonly
                    height="50"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="book.data.publication_year" />
              </v-menu>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-col class="ma-n3">
              <v-text-field
                name="title"
                v-model="book.data.title"
                class="mx-1"
                background-color="white"
                light
                label="Title"
                placeholder="Type the book's title"
                filled
                height="50"
              ></v-text-field>
            </v-col>

            <v-col class="ma-n3">
              <v-text-field
                name="price"
                v-model="book.data.price"
                class="mx-1"
                background-color="white"
                light
                label="Price"
                placeholder="Type the book's price"
                filled
                height="50"
              ></v-text-field>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-textarea
              name="synopsis"
              v-model="book.data.synopsis"
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
                name="new_publisher_name"
                v-model="book.data.publisher.name"
                class="mx-1"
                background-color="white"
                light
                label="Publisher"
                placeholder="Type the publisher's name"
                filled
                height="50"
              >
              </v-text-field>
            </v-col>

            <v-col class="ma-n3">
              <v-text-field
                name="publisher_email"
                v-model="book.data.publisher.email"
                class="mx-1"
                background-color="white"
                light
                label="Email"
                placeholder="Type the publisher's email"
                filled
                height="50"
              ></v-text-field>
            </v-col>
          </v-card-actions>

          <v-card-actions class="my-n8">
            <v-text-field
              name="publisher_address"
              v-model="book.data.publisher.address"
              class="mx-1"
              background-color="white"
              light
              label="Address"
              placeholder="Type the publisher's address"
              filled
              height="50"
            />
            <v-text-field
              name="publisher_contactno"
              v-model="book.data.publisher.contactno"
              class="mx-1"
              background-color="white"
              light
              label="Contact Number"
              placeholder="Type the publisher's contact number"
              filled
              height="50"
            />
          </v-card-actions>

          <!-- divider -->
          <v-card-subtitle class="mb-n3">
            Author's Information
          </v-card-subtitle>

          <v-simple-table fixed-header light height="200" class="ma-3">
            <v-text-field name="yamete"> asdas </v-text-field>
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
                <tr v-for="(value, index) in book.data.authors" :key="index">
                  <td>
                    <v-text-field
                      :name="`authors[${index}][name]`"
                      v-model="value.name"
                    />
                  </td>
                  <td>
                    <v-text-field
                      :name="`authors[${index}][email]`"
                      v-model="value.email"
                    />
                  </td>
                  <td>
                    <v-text-field
                      :name="`authors[${index}][address]`"
                      v-model="value.address"
                    />
                  </td>
                  <td>
                    <v-text-field
                      :name="`authors[${index}][contactno]`"
                      v-model="value.contactno"
                    />
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
            <v-btn
              width="285"
              color="#D50000"
              @click="goToRouterLink('adminBookList')"
            >
              Cancel
            </v-btn>
            <v-btn width="285" color="#D50000" type="submit"> Confirm </v-btn>
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
  name: "AdminBookUpdate",
  methods: {
    async updateBook(event) {
      const token = JSON.parse(localStorage.getItem("token"));

      const formData = new FormData(event.target);

      formData.append("old_isbn_number", this.ref_book.data.isbn);
      formData.append("old_publisher_name", this.ref_book.data.publisher.name);

      let i = 0;
      for (i = 0; i < this.ref_book.data.authors.length; i++) {
        formData.append(
          `old_authors[${i}][name]`,
          this.ref_book.data.authors[i].name
        );

        formData.append(
          `old_authors[${i}][address]`,
          this.ref_book.data.authors[i].address
        );

        formData.append(
          `old_authors[${i}][email]`,
          this.ref_book.data.authors[i].email
        );

        formData.append(
          `old_authors[${i}][contactno]`,
          this.ref_book.data.authors[i].contactno
        );
      }

      await axios.put("admin/bookUpdate", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      this.goToRouterLink("adminBookList");
    },
    async getBook() {
      const token = JSON.parse(localStorage.getItem("token"));

      const book = await axios.post(
        "admin/getBook",
        {
          isbn_number: this.$route.params.isbn,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return book;
    },
    remove(item) {
      this.book.data.tags.splice(this.book.data.tags.indexOf(item), 1);
      this.book.data.tags = [...this.book.data.tags];
    },
    addNewBookCover(event) {
      this.bookCover.url = URL.createObjectURL(this.bookCover.new_path);

      this.bookCover.image = event;

      console.log(this.bookCover.url);
      console.log(this.bookCover.new_path);
    },
    addNewAuthor() {
      this.$set(this.book.data.authors, this.book.data.authors.length, {
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
      this.book.data.authors.splice(index, 1);
    },
    editAuthor(author) {
      this.closeAuthor(author);
    },
    closeAuthor(author) {
      author.dialog = false;
    },
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
  },
  async mounted() {
    this.book = await this.getBook();
    this.ref_book = JSON.parse(JSON.stringify(this.book));

    const tags = [];

    let i = 0;
    for (i = 0; i < this.book.data.tags.length; i++) {
      this.$set(tags, tags.length, this.book.data.tags[i].name);
    }

    this.$set(this.book.data, "tags", tags);

    console.log(this.book);
    console.log("this is the book ref");
    console.log(this.ref_book);
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
      book: {},
      ref_book: {},
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      baseline: axios.defaults.baseURL,
      bookCover: {
        url: null,
        image: null,
        new_path: null,
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