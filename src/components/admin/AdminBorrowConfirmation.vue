<template>
  <v-container v-if="borrow_requests" fluid>
    <v-row align-content='start'>
      <v-icon dark>
        mdi-book-open
      </v-icon>
      <div class='pa-5 font-weight-bold text-h6'>
        Borrow Confirmation  
      </div>
    </v-row>
    <v-row class='mb-7' justify='left'>
      <v-card class='ma-0' color='#262626' id='cards' dark width='1500'>
        <v-card-subtitle class='text-subtitle-1 font-weight-bold'>
          Search student's name or ID number
        </v-card-subtitle>

        <v-card-actions>
          <v-text-field class='mx-3 mt-n5' background-color='white' light filled ></v-text-field>
          <v-btn class='mx-3 mt-n13' width='200' color='#D50000' x-large>Search</v-btn>
        </v-card-actions>
        <v-card-subtitle class='mt-n10 mb-n8 text-subtitle-1'>
          Requested Books
        </v-card-subtitle>

          <v-simple-table fixed-header light height='360' class='ma-5' >
            <template v-slot:default >
              <thead >
                <tr>
                  <th class='text-subtitle-1 text-left'>
                    ID Number
                  </th>
                  <th class='text-subtitle-1 text-left'>
                    Student's Name
                  </th>
                  <th class='text-subtitle-1 text-left'>
                    ISBN
                  </th>
                  <th class='text-subtitle-1 text-left'>
                    Title of the book
                  </th>
                  <th class='text-subtitle-1 text-left'>
                    Balance
                  </th>
                  <th class='text-subtitle-1 text-left'>
                  
                  </th>
                  <th class='text-subtitle-1 text-left'>
                  
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr v-for="(value, index) in borrow_requests.data" :key="index">
                  <td>
                    {{ value.student_id }}
                  </td>
                  <td>
                    {{ value.student.lastname }}, {{ value.student.firstname }} {{ value.student.middlename }}.
                  </td>
                  <td>
                    {{ value.book_entered.book.isbn_number }}
                  </td>
                  <td>
                    {{ value.book_entered.book.title }}
                  </td>
                  <td>
                    {{ value.student.balance }}
                  </td>
                  <td class="text-right">
                    <v-dialog max-width="500" v-model="value.current  ">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" small color="#D50000" dark>
                          Reject
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title>
                          Are you sure you want to reject this book borrow request?
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
                                <v-btn @click="value.current = false" color="#D50000" dark>
                                  Cancel
                                </v-btn>
                              </v-col>
                              <v-col>
                                <v-btn @click="rejectBookRequest(value)" color="#D50000" dark>
                                  Confirm
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </td>
                  <td class="">
                    <v-dialog max-width="500" v-model="value.current">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" small color="#D50000" dark>
                          Accept
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title>
                          Are you sure you want to accept this book borrow request?
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
                                <v-btn @click="value.current = false" color="#D50000" dark>
                                  Cancel
                                </v-btn>
                              </v-col>
                              <v-col>
                                <v-btn @click="acceptBookRequest(value)" color="#D50000" dark>
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
        <v-card-actions>

        </v-card-actions>

      </v-card>

    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'AdminBorrowConfirmation',
    methods: {
      async acceptBookRequest(book_request) {
        const token = JSON.parse(localStorage.getItem('token'))

        await axios.post('admin/acceptBorrowRequest', 
          {
            student_id: book_request.student_id,
            book_entered_id: book_request.book_entered_id
          },
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
        )

        book_request.current = false
      },
      async rejectBookRequest(book_request) {
        const token = JSON.parse(localStorage.getItem('token'))

        await axios.post('admin/rejectBorrowRequest', 
          {
            student_id: book_request.student_id,
            book_entered_id: book_request.book_entered_id
          },
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
        )

        book_request.current = false
      },
      async getBorrowRequest() {
        const token = JSON.parse(localStorage.getItem('token'))
        
        const borrow_requests = await axios.get('admin/getAllBorrowRequest', 
          { 
            headers: {
              authorization: `Bearer ${token}`
            } 
          }
        )

        return borrow_requests
      }
    },
    data() {
      return {
        borrow_requests: {}
      }
    },
    async mounted() {
      this.borrow_requests = await this.getBorrowRequest()

      let i = 0
      for (i = 0; i < this.borrow_requests.data.length; i++) {
        this.$set(this.borrow_requests.data[i], 'current', false)
      }

      console.log(this.borrow_requests)
    }
  }
</script>