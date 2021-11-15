<template>
  <v-container class="white pt-8 black--text" id="profile" fluid v-if="student.data">
    <v-row class="" justify="center">
      <a class="pt-6" @click="goToRouterLink('studentHome')">
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

          <!-- Account Information -->
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
                  <v-dialog max-width="500" persistent v-model="changePasswordData.dialog">
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
                              <v-text-field 
                                type="password" 
                                label="Current Password" 
                                v-model="changePasswordData.current" outlined>
                              </v-text-field>

                              <v-text-field 
                                type="password" 
                                label="New Password"
                                v-model="changePasswordData.new"
                                outlined>
                              </v-text-field>
                              
                              <v-text-field 
                                type="password" 
                                label="Confirm Password" 
                                v-model="changePasswordData.confirm"
                                outlined>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="changePasswordData.close()" text>
                          Close
                        </v-btn>
                        <v-btn @click="changePassword()" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Personal Information -->
          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0  "  lg="3" md="3">
              Personal Information
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col class="">
                  <div >
                    <v-img 
                      v-if="student.data.image_path"
                      :src="baseline + 'image/get/' + student.data.image_path"
                      width="250"
                      height="250"
                      max-height="250" 
                      max-width="250" />

                    <v-img 
                      v-else
                      src="..//../assets/blank_profile.png"
                      width="250"
                      height="250"
                      max-height="250" 
                      max-width="250" />
                  </div>
                </v-col>

                <v-col class=" text-right text-bottom">
                  <v-dialog max-width="500" persistent v-model="changeProfilePictureData.dialog">
                    <template v-slot:activator="{ on, attrs }">
                      <a 
                        v-bind="attrs"
                        v-on="on">
                        Change profile picture
                      </a>
                    </template>

                    
                    <v-card>
                      <v-card-title>
                        Change Profile Picture
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col class="">
                              <v-img 
                                v-if="changeProfilePictureData.new !== null"
                                :src="changeProfilePictureData.url"
                                class="ml-center"
                                width="250"
                                height="250"
                                max-height="250" 
                                max-width="250" />

                              <v-img 
                                v-else
                                :src="baseline + 'image/get/' + student.data.image_path"
                                class="ml-center"
                                width="250"
                                height="250"
                                max-height="250" 
                                max-width="250" />

                              <v-file-input
                                class="pt-5"
                                truncate-length="20"
                                accept="/png, /jpeg"
                                prepend-icon="mdi-camera"
                                label="Profile Picture"
                                @change="addNewProfilePicture($event)"
                                v-model="changeProfilePictureData.new"
                              >
                              </v-file-input>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="changeProfilePictureData.close()" text>
                          Close
                        </v-btn>
                        <v-btn @click="changeProfilePicture()" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="">
                  <div>
                    First Name: {{student.data.firstname}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <v-dialog max-width="500" persistent v-model="changeFirstnameData.dialog">
                    <template v-slot:activator="{ on, attrs }">
                      <a 
                        v-bind="attrs"
                        v-on="on">
                        Change first name
                      </a>
                    </template>

                    
                    <v-card>
                      <v-card-title>
                        Change First Name
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field 
                                label="Firstname" 
                                v-model="changeFirstnameData.current" outlined>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="changeFirstnameData.close()" text>
                          Close
                        </v-btn>
                        <v-btn @click="changeFirstname()" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Middle Name: {{student.data.middlename}}
                  </div>
                </v-col>

                <v-col class="text-right">
                  <v-dialog max-width="500" persistent v-model="changeMiddlenameData.dialog">
                    <template v-slot:activator="{ on, attrs }">
                      <a 
                        v-bind="attrs"
                        v-on="on">
                        Change middle name
                      </a>
                    </template>

                    
                    <v-card>
                      <v-card-title>
                        Change Middle Name
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field 
                                label="Middlename" 
                                v-model="changeMiddlenameData.current" outlined>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="changeMiddlenameData.close()" text>
                          Close
                        </v-btn>
                        <v-btn @click="changeMiddlename()" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Last Name: {{student.data.lastname}}
                  </div>
                </v-col>

                <v-col class="text-right">
                  <v-dialog max-width="500" persistent v-model="changeLastnameData.dialog">
                    <template v-slot:activator="{ on, attrs }">
                      <a 
                        v-bind="attrs"
                        v-on="on">
                        Change last name
                      </a>
                    </template>

                    
                    <v-card>
                      <v-card-title>
                        Change Last Name
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field 
                                label="Lastname" 
                                v-model="changeLastnameData.current" 
                                outlined>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="changeLastnameData.close()" text>
                          Close
                        </v-btn>
                        <v-btn @click="changeLastname()" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div>
                    Email Address: {{student.data.emailaddress}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <v-dialog max-width="500" persistent v-model="changeEmailaddressData.dialog">
                    <template v-slot:activator="{ on, attrs }">
                      <a 
                        v-bind="attrs"
                        v-on="on">
                        Change email address
                      </a>
                    </template>

                    
                    <v-card>
                      <v-card-title>
                        Change Email Address
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field 
                                label="Email Address" 
                                v-model="changeEmailaddressData.current" 
                                outlined>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="changeEmailaddressData.close()" text>
                          Close
                        </v-btn>
                        <v-btn @click="changeEmailaddress()" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div class="">
                    Contact No.: {{student.data.contactno}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <v-dialog max-width="500" persistent v-model="changeContactNoData.dialog">
                    <template v-slot:activator="{ on, attrs }">
                      <a 
                        v-bind="attrs"
                        v-on="on">
                        Change contact no.
                      </a>
                    </template>

                    <v-card>
                      <v-card-title>
                        Change Contact No.
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field 
                                label="Contact No." 
                                v-model="changeContactNoData.current" 
                                outlined>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="changeContactNoData.close()" text>
                          Close
                        </v-btn>
                        <v-btn @click="changeContactNo()" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div class="text-body-2 ">
                    Guardian Contact No.: {{student.data.guardiancontactno}}
                  </div>
                </v-col>
                <v-col class="text-right">
                  <v-dialog max-width="500" persistent v-model="changeGuardianContactNoData.dialog">
                    <template v-slot:activator="{ on, attrs }">
                      <a 
                        v-bind="attrs"
                        v-on="on">
                        Change guardian contact no.
                      </a>
                    </template>

                    <v-card>
                      <v-card-title>
                        Change Guardian Contact No.
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field 
                                label="Guardian Contact No." 
                                v-model="changeGuardianContactNoData.current" 
                                outlined>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="changeGuardianContactNoData.close()" text>
                          Close
                        </v-btn>
                        <v-btn @click="changeGuardianContactNo()" text>
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Borrowed Books Information -->
          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 " lg="3" md="3">
              Borrowed Books
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col> 
                  <v-simple-table v-if="student.data.student_books.length > 0">
                    <template>
                      <thead>
                        <tr>
                          <th>
                            Book                            
                          </th>
                          <v-spacer />
                          <th class="text-right" v-for="value, index in borrowedBooksColumns" :key="index">
                            {{ value }}
                          </th>
                          <th>
                          </th>
                        </tr>
                      </thead>
                      
                      <tbody class="">
                        <tr v-for="value, index in student.data.student_books" :key="index">
                          <td class="">
                            {{ value.book_entered.book.title }}
                          </td>
                          <v-spacer />
                          <td class="text-right" >
                            {{ value.date_requested }}
                          </td>
                          <td class="text-right" colspan="" >
                            {{ value.date_acquired }}
                          </td>
                          <td class="text-right">
                            {{ value.date_return }}
                          </td>
                          <td class="text-right">
                            <v-dialog max-width="500" v-model="value.current">
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" small>
                                  Return
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title>
                                  Are you sure you want to return this book?
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
                                        <v-btn @click="value.current = false" >
                                          Cancel
                                        </v-btn>
                                      </v-col>
                                      <v-col>
                                        <v-btn @click="returnBook(value)" >
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

                  <div v-else class="text-body-2">
                    You don't have any borrowed books.
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Pending Book Borrow Request Informaion -->
          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 "  lg="3" md="3">
              Pending Book Borrow Request
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col> 
                  <v-simple-table v-if="student.data.borrow_requests.length > 0">
                    <template>
                      <thead>
                        <tr>
                          <th>
                            Book
                          </th>
                          <th class="text-right" colspan="2">
                            Date Requested
                          </th>
                          <th>
                          </th>
                        </tr>
                      </thead>

                      <tbody class="">
                        <tr v-for="value, index in student.data.borrow_requests" :key="index">
                          <td class="">
                            {{ value.book_entered.book.title }}
                          </td>
                          <v-spacer />
                          <td class="text-right " colspan="">
                            {{ value.date_requested }}
                          </td>
                          <td class="text-right" >
                            <v-dialog max-width="500" v-model="value.current">
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" small>
                                  Cancel
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title>
                                  Are you sure you want to cancel borrowing this book?
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
                                        <v-btn @click="value.current = false" >
                                          Cancel
                                        </v-btn>
                                      </v-col>
                                      <v-col>
                                        <v-btn @click="cancelBorrow(value)" >
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

                  <div v-else class="text-body-2">
                    You don't have any borrow book request books.
                  </div>
                </v-col>

              </v-row>
            </v-col>
          </v-row>

          <!-- Pending Book Return Request Informaion -->
         <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 " lg="3" md="3">
              Pending Book Return Request
            </v-col>

            <v-col class="text-body-2 pl-0">
              <v-row>
                <v-col> 
                  <v-simple-table v-if="student.data.return_requests.length > 0">
                    <template>
                      <thead>
                        <tr>
                          <th>
                            Book
                          </th>
                          <th class="text-right" colspan="2">
                            Date Requested
                          </th>
                          <th>
                          </th>
                        </tr>
                      </thead>

                      <tbody class="">
                        <tr v-for="value, index in student.data.return_requests" :key="index">
                          <td class="">
                            {{ value.book_entered.book.title }}
                          </td>
                          <v-spacer />
                          <td class="text-right" >
                            {{ value.date_requested }}
                          </td>
                          <td class="text-right" >
                            <v-dialog max-width="500" v-model="value.current">
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" small>
                                  Cancel
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title>
                                  Are you sure you want to cancel returning this book?
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
                                        <v-btn @click="value.current = false" >
                                          Cancel
                                        </v-btn>
                                      </v-col>
                                      <v-col>
                                        <v-btn @click="cancelBorrow(value)" >
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

                  <div v-else class="text-body-2">
                    You don't have any return book request books.
                  </div>
                </v-col>

              </v-row>
            </v-col>
         </v-row>

          <!-- Penalties Information       -->
          <v-row class="pb-8" id="division">
            <v-col class="text-body-2 pl-0 "  lg="3" md="3">
              Penalties
            </v-col>

            <v-col class="text-body-2  pl-0">
              <v-row>
                <v-col> 
                  You have a penalty of: 0
                </v-col>

                <v-col class="text-right">
                  <a class="text-body-2" @click="goToRouterLink('studentPenalty')">
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
  import axios from 'axios'
  import FormData from 'form-data'
  
  export default {
    name: 'StudentProfile',
    methods: {
      async cancelRequest(book) {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.post('student/cancelReturnRequest', 
          {
            book_entered_id: book.book_entered_id 
          },
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
        )

        this.student = await this.getUser()

        book.current = false
      },
      async cancelBorrow(book) {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.post('student/cancelBorrowRequest', 
          {
            book_entered_id: book.book_entered_id
          },
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
        )

        this.student = await this.getUser()

        book.current = false
      },
      async returnBook(book) {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.post('student/returnRequest', 
          {
            book_entered_id: book.book_entered_id
          }, 
          { 
            headers: {
              authorization: `Bearer ${token}`
            } 
          }
        )
        
        this.student = await this.getUser()
        
        book.current = false
      },
      async changeGuardianContactNo() {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.put('student/updateGuardianContactNo', 
          {
            guardiancontactno: this.changeGuardianContactNoData.current
          }, 
          {
            headers: {
              authorization: `Bearer ${token}`
            },
          }
        )
        
        this.student = await this.getUser()
        this.changeGuardianContactNoData.close()
      },
      async changeContactNo() {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.put('student/updateContactNo', 
          {
            contactno: this.changeContactNoData.current
          }, 
          {
            headers: {
              authorization: `Bearer ${token}`
            },
          }
        )
        
        this.student = await this.getUser()
        this.changeContactNoData.close()
      },
      async changeEmailaddress() {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.put('student/updateEmailaddress', 
          {
            emailaddress: this.changeEmailaddressData.current
          }, 
          {
            headers: {
              authorization: `Bearer ${token}`
            },
          }
        )
        
        this.student = await this.getUser()
        this.changeEmailaddressData.close()
      },
      async changeLastname() {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.put('student/updateLastname', 
          {
            lastname: this.changeLastnameData.current
          }, 
          {
            headers: {
              authorization: `Bearer ${token}`
            },
          }
        )
        
        this.student = await this.getUser()
        this.changeLastnameData.close()
      },
      async changeMiddlename() {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.put('student/updateMiddlename', 
          {
            middlename: this.changeMiddlenameData.current
          }, 
          {
            headers: {
              authorization: `Bearer ${token}`
            },
          }
        )
        
        this.student = await this.getUser()
        this.changeMiddlenameData.close()
      },
      async changeFirstname() {
        const token = JSON.parse(localStorage.getItem('token'))

        axios.put('student/updateFirstname', 
          {
            firstname: this.changeFirstnameData.current
          }, 
          {
            headers: {
              authorization: `Bearer ${token}`
            },
          }
        )
        
        this.student = await this.getUser()
        this.changeFirstnameData.close()
      },
      async changeProfilePicture() {
        if (this.changeProfilePictureData.url.localeCompare('') !== '') {
          const token = JSON.parse(localStorage.getItem('token'))
          const formData = new FormData()

          formData.append('image', this.changeProfilePictureData.image)

          await axios.put('student/updateProfilePicture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: `Bearer ${token}`
            },
          })

          this.student = await this.getUser()
          this.changeProfilePictureData.close()
        }
      },
      addNewProfilePicture(event) {
        this.changeProfilePictureData.url = URL.createObjectURL(this.changeProfilePictureData.new)

        this.changeProfilePictureData.image = event
      },
      async changePassword() {
        const token = JSON.parse(localStorage.getItem('token'))

        try {
          await axios.put('student/updatePassword',
         {
           currentPassword: this.changePasswordData.current,
           password: this.changePasswordData.new
         }, 
         { headers: { authorization: `Bearer ${token}` } })
        } catch(error) {
          console.log(error.response.data)
        }

        this.changePasswordData.close()
      },
      async getUser() {
        const token = JSON.parse(localStorage.getItem('token'))

        return await axios.get('student/get', { headers: { authorization: `Bearer ${token}` } })
      },
      logout() {
        localStorage.removeItem("token")

        this.goToRouterLink("homepage")
      },
      goToRouterLink(name) {
        this.$router.push({name: name})
      },
    },
    data() {
      return {
        changeGuardianContactNoData: {
          current: '',

          dialog: false,
          close() {
            this.dialog = false
          }
        },
        changeContactNoData: {
          current: '',

          dialog: false,
          close() {
            this.dialog = false
          }
        },
        changeEmailaddressData: {
          current: '',

          dialog: false,
          close() {
            this.dialog = false
          }
        },
        changeLastnameData: {
          current: '',

          dialog: false,
          close() {
            this.dialog = false
          }
        },
        changeMiddlenameData: {
          current: '',

          dialog: false,
          close() {
            this.dialog = false
          }
        },changeFirstnameData: {
          current: '',

          dialog: false,
          close() {
            this.dialog = false
          }
        },
        changeProfilePictureData: {
          new: null,
          url: '',

          dialog: false,
          image: '',
          close() {
            this.new = null
            this.url = ''

            this.dialog = false
          },
        },
        changePasswordData: {
          current: '',
          new: '',
          confirm: '',

          dialog: false,
          close() {
            this.current = ''
            this.new = ''
            this.confirm = ''

            this.dialog = false
          },
        },
        
        student: {},
        borrowedBooksColumns: [ 'Date Requested', 'Date Acquired', 'Date Of Return' ],
        pendingColumns: [ 'Book', 'Date Requested' ],
        baseline: axios.defaults.baseURL,
      }
    },
    async mounted() {
      this.student = await this.getUser()

      let i = 0
      for (i = 0; i < this.student.data.student_books.length; i++) {
        this.$set(this.student.data.student_books[i], 'current', false)
      }

      for (i = 0; i < this.student.data.borrow_requests.length; i++) {
        this.$set(this.student.data.borrow_requests[i], 'current', false)
      }
      
      for (i = 0; i < this.student.data.return_requests.length; i++) {
        this.$set(this.student.data.return_requests[i], 'current', false)
      }

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