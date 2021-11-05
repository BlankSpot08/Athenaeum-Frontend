<template>
  <v-container class="white pt-8 black--text" id="profile" fluid>

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
                  <a>
                    Change password
                  </a>
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
                    Change firstname
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
                    Change middlename
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
                    Change lastname
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
        student: {}
      }
    },
    async mounted() {
      this.student = await this.getUser()

      console.log(this.student.data.image_path)
      console.log(this.student.data.lastname)
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