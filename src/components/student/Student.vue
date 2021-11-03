<template>
  <v-app id="body">
    <v-app-bar id="navbar" class="px-9" elevation="0" app>
      <v-app-bar-title class="mr-10">
        <div class="">
          <a class="red--text text-h5" @click="goToRouterLink('studentHome')">ATHENAEUM</a>
        </div>
      </v-app-bar-title>

      <div class="mx-5">
        <a class="white--text text-subtitle-1" @click="goToRouterLink('studentHome')">Home</a>
      </div>

      <div class=" mr-5">
        <a class="white--text text-subtitle-1" @click="goToRouterLink('studentReadAgain')">Read Again</a>
      </div>
      
      <div class=" mr-5">
        <a class="white--text text-subtitle-1" @click="goToRouterLink('studentCategories')">Categories</a>
      </div>
      
      <div class=" mr-5">
        <a class="white--text text-subtitle-1" @click="goToRouterLink('studentMyList')">My List</a>
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
            <a class="white--text text-subtitle-1">Profile</a>
            <v-icon dark>
              mdi-menu-down
            </v-icon>
          </div>
        </template>
        
        <v-container class="text-left mr-16 mt-5" fluid>
          <v-row>
            <v-col id="dropdownProfile">
              <div class="">
                <a class="white--text text-subtitle-2">Account</a>
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
      <v-container fluid>
        <router-view class="px-10"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'StudentRegister',
    methods: {
      goToRouterLink(name) {
        this.$router.push({name: name})
      },
      logout() {
        localStorage.removeItem("token")

        this.goToRouterLink("homepage")
      }
    }
  }
</script>

<style scoped>
  #navbar {
    background-color: rgba(0, 0, 0, 1);
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
    background-color: black;
    color: white;  
  }
</style>