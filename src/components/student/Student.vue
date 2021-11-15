<template>
  <v-app class="" id="body" v-if="student.data">
    <v-app-bar id="navbar" class="px-9" elevation="0" app>
      <v-app-bar-title class="mr-10">
        <div class="">
          <a class="red--text text-h6" @click="goToRouterLink('studentHome')">ATHENAEUM</a>
        </div>
      </v-app-bar-title>

      <div class="mx-5">
        <a class="white--text text-body-2" @click="goToRouterLink('studentHome')">Home</a>
      </div>

      <div class=" mr-5">
        <a class="white--text text-body-2" @click="goToRouterLink('studentReadAgain')">Read Again</a>
      </div>
      
      <div class=" mr-5">
        <a class="white--text text-body-2" @click="goToRouterLink('studentCategories')">Categories</a>
      </div>
      
      <div class=" mr-5">
        <a class="white--text text-body-2" @click="goToRouterLink('studentMyList')">My List</a>
      </div>

      <v-spacer></v-spacer>
      <div class=" mr-5">
        <v-btn icon dark tile>
          <v-icon dark>
            mdi-magnify
          </v-icon>
        </v-btn> 
      </div>
      
      <v-menu class="pa-0 ma-0" open-on-hover bottom offset-y>
        <template class="" v-slot:activator="{ on, attrs }">
          <div class="" v-bind="attrs" v-on="on">
            <a class="white--text text-subtitle-1">
              {{student.data.lastname}}, {{student.data.firstname}}
            </a>
            <v-icon dark>
              mdi-menu-down
            </v-icon>
          </div>
        </template>
        
        <v-container class="text-left mr-16 mt-5" fluid>
          <v-row>
            <v-col id="dropdownProfile">
              <div class="">
                <a class="white--text text-subtitle-2" @click="goToRouterLink('studentProfile')">Account</a>
              </div>
              <div class="">
                <a class="white--text text-subtitle-2" @click="logout()">Logout</a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container class="white--text px-0 mx-0 py-0 my-0" fluid>
        <router-view class=" px-10 py-10 px-16"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'StudentRegister',
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
  #navbar {
    background-color:#101010;
  }

  #dropdownProfile {
    border-style: solid;
    border: 1;
    border-width: 1px;
    border-color: #222222;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #body {
    position: relative;
    background-color: #101010;
  }
</style>