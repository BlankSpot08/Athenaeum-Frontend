<template>
  <v-container class="white pt-8 black--text" id="profile" fluid v-if="student.data">

    <v-row class="" justify="center">
      <a class="pt-6">
        <v-icon class="" color="black" large >
          mdi-arrow-left
        </v-icon>
      </a>
      
      <v-col class="" md="9">
        <v-container fluid>
          <v-row id="division">
            <v-col class="text-h5 font-weight-bold pl-0" >
              Account
            </v-col>
          </v-row>

          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 " lg="3" md="3">
              Account Information
            </v-col>

            <v-col class="text-body-2 pl-0" >
              <v-row>
                <v-col class="" sm="6" mg='6' lg="6">
                  <div>
                    ID Number: {{ student.data.id }}
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Password: ***************
                  </div>
                </v-col>
                <v-col class="text-right">
                  <v-dialog max-width="500" persistent v-model="passwordDialog">
                    <template v-slot:activator="{ on, attrs }">
                      <a 
                        v-bind="attrs"
                        v-on="on">
                        Change password
                      </a>
                    </template>

                    
                    <v-card>
                      <v-card-title>
                        Change Password
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field type="password" label="Current Password" outlined>
                              </v-text-field>

                              <v-text-field type="password" label="New Password" outlined>
                              </v-text-field>
                              
                              <v-text-field type="password" label="Confirm Password" outlined>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="passwordDialog = false" text>
                          Close
                        </v-btn>
                        <v-btn @click="passwordDialog = false" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                    
                  </v-dialog>
                  
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0  "  lg="3" md="3">
              Personal Information
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col class="">
                  <v-img src="@/assets/adventure.jpg" max-height="250" max-width="250" />
                </v-col>

                <v-col class=" text-right">
                  <a>
                    Change profile picture
                  </a>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    First Name: {{student.data.firstname}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <a>
                    Change first name
                  </a>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Middle Name: {{student.data.middlename}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <a>
                    Change middle name
                  </a>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Last Name: {{student.data.lastname}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <a>
                    Change last name
                  </a>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Email Address: {{student.data.emailaddress}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <a>
                    Change email address
                  </a>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Contact No.: {{student.data.contactno}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <a>
                    Change contact number
                  </a>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Guardian Contact No.: {{student.data.guardiancontactno}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <a>
                    Change guardian contact number
                  </a>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 "  lg="3" md="3">
              Borrowed Books
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col> 
                  <v-simple-table v-if="student.data.student_books.length > 0">
                    <template>
                      <thead>
                        <tr>
                          <th v-for="value, index in borrowedBooksColumns" :key="index">
                            {{ value }}
                          </th>
                        </tr>
                      </thead>

                      <tbody class="">
                        <tr v-for="value, index in student.data.student_books" :key="index">
                          <td class="">
                            {{ value.student_id }}
                          </td>
                          <td class="">
                            {{ value.book_entered.book.title }}
                          </td>
                          <td class="" >
                            {{ value.date_requested }}
                          </td>
                          <td class="" colspan="" >
                            {{ value.date_acquired }}
                          </td>
                          <td class="">
                            {{ value.date_return }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>

                  <div v-else class="text-body-2">
                    You don't have any borrowed books.
                  </div>
                </v-col>

              </v-row>
            </v-col>
          </v-row>

          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 "  lg="3" md="3">
              Pending Book Borrow Request
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col> 
                  <v-simple-table v-if="student.data.return_requests.length > 0">
                    <template>
                      <thead>
                        <tr>
                          <th v-for="value, index in pendingColumns" :key="index">
                            {{ value }}
                          </th>
                        </tr>
                      </thead>

                      <tbody class="">
                        <tr v-for="value, index in student.data.borrow_requests" :key="index">
                          <td class="">
                            {{ value.student_id }}
                          </td>
                          <td class="">
                            {{ value.book_entered.book.title }}
                          </td>
                          <td class="" >
                            {{ value.date_requested }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>

                  <div v-else class="text-body-2">
                    You don't have any book borrow request books.
                  </div>
                </v-col>

              </v-row>
            </v-col>
          </v-row>

          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 "  lg="3" md="3">
              Pending Book Return Request
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col> 
                  <v-simple-table v-if="student.data.return_requests.length > 0">
                    <template>
                      <thead>
                        <tr>
                          <th v-for="value, index in pendingColumns" :key="index">
                            {{ value }}
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr v-for="value, index in student.data.return_requests" :key="index">
                          <td class="">
                            {{ value.student_id }}
                          </td>
                          <td class="">
                            {{ value.book_entered.book.title }}
                          </td>
                          <td class="">
                            {{ value.date_requested }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>

                  <div v-else class="text-body-2">
                    You don't have any book return request books.
                  </div>
                </v-col>

              </v-row>
            </v-col>
          </v-row>

          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 "  lg="3" md="3">
              Penalties
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col> 
                  You have a penalty of: 0
                </v-col>

                <v-col class="text-right">
                  <a class="text-body-2">
                    Pay Penalties
                  </a>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

        </v-container>
      </v-col>
    </v-row>    
    
  </v-container>
</template>
<script>
  const axios = require('axios')
  
  export default {
    name: 'StudentProfile',
    methods: {
      changePassword() {

      },
      goToRouterLink(name) {
        this.$router.push({name: name})
      },
      logout() {
        localStorage.removeItem("token")

        this.goToRouterLink("homepage")
      },
      async getUser() {
        const token = JSON.parse(localStorage.getItem('token'))

        return await axios.get('student/get', { headers: { authorization: `Bearer ${token}` } })
      }
    },
    data() {
      return {
        student: {},
        pendingColumns: [ 'Student ID', 'Book', 'Date Requested' ],
        borrowedBooksColumns: [ 'Student ID', 'Book', 'Date Requested', 'Date Acquired', 'Date Of Return' ],
        passwordDialog: false
      }
    },
    async mounted() {
      this.student = await this.getUser()

      console.log(this.student)
    }
  }
</script>

<style scoped>
  #profile {
    color: black;
  }

  #division {
    border-bottom-style: solid;
    border-width: 1px;
    border-color: #222222;
  }
</style>