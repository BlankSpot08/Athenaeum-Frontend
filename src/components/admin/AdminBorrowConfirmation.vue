<template>
  <v-container v-if="borrow_requests" fluid>
    <v-row align-content="start">
      <v-icon dark> mdi-book-open </v-icon>
      <div class="pa-5 font-weight-bold text-h6">Borrow Confirmation</div>
    </v-row>
    <v-row class="mb-7" justify="left">
      <v-card class="ma-0" color="#262626" id="cards" dark width="1500">
        <v-card-actions class="mt-8">
          <v-text-field
            class="mx-3 mt-n5"
            label="Search ID number"
            background-color="white"
            light
            filled
            v-model="search_data.id"
            height="50"
          ></v-text-field>
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
        </v-card-actions>
        <v-card-actions class="mt-0">
          <v-col>
            <v-menu
              :close-on-content-click="false"
              :nudge-bottom="55"
              min-width="auto"
              transition="scale-transition"
            >
              <template class="" v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="mt-n10"
                  clearable
                  v-model="search_data.date_requested"
                  background-color="white"
                  light
                  v-bind="attrs"
                  v-on="on"
                  label="Date Requested"
                  append-icon="mdi-calendar-range"
                  filled
                  readonly
                  height="50"
                ></v-text-field>
              </template>
              <v-date-picker v-model="search_data.date_requested">
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col></v-col>
          <v-col class="text-right">
            <v-btn
              class="mt-n16"
              width="200"
              large
              color="#D50000"
              @click="search()"
              >Search</v-btn
            >
          </v-col>
        </v-card-actions>
        <v-card-subtitle class="ml-1 mt-n10 mb-n8 text-subtitle-1">
          Requested Books
        </v-card-subtitle>

        <v-simple-table
          fixed-header
          light
          height="360"
          class="ma-5 text-body-2"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-subtitle-1 text-left">ID Number</th>
                <th class="text-subtitle-1 text-left">ISBN</th>
                <th class="text-subtitle-1 text-left">Title of the book</th>
                <th class="text-subtitle-1 text-left">Date Requested</th>
                <th class="text-subtitle-1 text-left">Balance</th>
                <th class="text-subtitle-1 text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in borrow_requests.data" :key="index">
                <td>
                  {{ value.student_id }}
                </td>

                <td>
                  {{ value.book_entered.book.isbn }}
                </td>

                <td>
                  {{ value.book_entered.book.title }}
                </td>

                <td>
                  {{ value.date_requested }}
                </td>

                <td>
                  {{ value.student.balance }}
                </td>
                <td class="text-right">
                  <v-dialog
                    max-width="500"
                    v-model="value[`reject_current[${index}]`]"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        color="#D50000"
                        dark
                        class="mr-3"
                      >
                        Reject
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title>
                        Are you sure you want to reject this book borrow
                        request?
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              Book Title: {{ value.book_entered.book.title }}
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-container fluid>
                          <v-row>
                            <v-col class="text-right">
                              <v-btn
                                @click="
                                  value[`reject_current[${index}]`] = false
                                "
                                color="#D50000"
                                dark
                              >
                                Cancel
                              </v-btn>
                            </v-col>
                            <v-col>
                              <v-btn
                                @click="rejectBookRequest(value, index)"
                                color="#D50000"
                                dark
                              >
                                Confirm
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog
                    max-width="500"
                    v-model="value[`accept_current[${index}]`]"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" color="#D50000" dark>
                        Accept
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title>
                        Are you sure you want to accept this book borrow
                        request?
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              Book Title: {{ value.book_entered.book.title }}
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-container fluid>
                          <v-row>
                            <v-col class="text-right">
                              <v-btn
                                @click="
                                  value[`accept_current[${index}]`] = false
                                "
                                color="#D50000"
                                dark
                              >
                                Cancel
                              </v-btn>
                            </v-col>
                            <v-col>
                              <v-btn
                                @click="acceptBookRequest(value, index)"
                                color="#D50000"
                                dark
                              >
                                Confirm
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminBorrowConfirmation",
  methods: {
    remove(index) {
      this.borrow_requests.data.splice(index, 1);
    },
    async search() {
      const token = JSON.parse(localStorage.getItem("token"));

      const search = await axios.post(
        "admin/borrowRequestSearch",
        this.search_data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      this.borrow_requests = search;
    },
    async acceptBookRequest(book_request, index) {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.post(
        "admin/acceptBorrowRequest",
        {
          student_id: book_request.student_id,
          book_entered_id: book_request.book_entered_id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      book_request[`accept_current[${index}]`] = false;

      this.remove(index);
    },
    async rejectBookRequest(book_request, index) {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.delete("admin/rejectBorrowRequest", {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          student_id: book_request.student_id,
          book_entered_id: book_request.book_entered_id,
        },
      });

      book_request[`reject_current[${index}]`] = false;

      this.remove(index);
    },
    async getAllBorrowRequests() {
      const token = JSON.parse(localStorage.getItem("token"));

      const borrow_requests = await axios.get("admin/getAllBorrowRequests", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return borrow_requests;
    },
  },
  data() {
    return {
      borrow_requests: {},
      search_data: {
        id: "",
        isbn: "",
        title: "",
        date_requested: "",
      },
    };
  },
  async mounted() {
    this.borrow_requests = await this.getAllBorrowRequests();

    let i = 0;
    for (i = 0; i < this.borrow_requests.data.length; i++) {
      this.$set(this.borrow_requests.data[i], `reject_current[${i}]`, false);
      this.$set(this.borrow_requests.data[i], `accept_current[${i}]`, false);
    }

    console.log(this.borrow_requests);
  },
};
</script>

<style scoped>
.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
  font-size: 15px;
}
</style>