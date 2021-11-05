<template>
  <v-app id='body'>
    <v-app-bar app dark color='#262626'>
      <v-spacer></v-spacer>
      <v-menu class="pa-0 ma-0" open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color='#101010' fab small >
            <v-icon dark >
              mdi-account-tie
            </v-icon>
          </v-btn>
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

  <!-- navigation -->
    <v-navigation-drawer absolute app permanent left dark color='black' id='border'>
      <template>
        <div class='pa-3 red--text text--accent-4 text-h5 text-center font-weight-bold' id='border'>
          ATHENAEUM
        </div>
      </template>
      <div class='text-center'>
        <v-avatar class="profile ma-3" color="grey" size="164" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
      </div>
      <p class='text-center'>Arvin chu</p>
      

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link class='my-n1'>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>   
    <v-main>
      <router-view class="px-10"/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'Admin',
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Book Entry', icon: 'mdi-book' },
          { title: 'Borrow Confirmation', icon: 'mdi-book-open' },
          { title: 'Return Confirmation', icon: 'mdi-hand-coin' },
          { title: 'Book Update', icon: 'mdi-book-edit' },
          { title: 'Book Search', icon: 'mdi-magnify' },
          { title: 'Student List', icon: 'mdi-school' },
          { title: 'Admin Confirmation', icon: 'mdi-account-cog' },
        ],
      }
    },
    method: {

    }
  }
</script>
<style scoped>
  #body {
    position: relative;
    background-color: #101010;
    color: white;  
  }
  #border {
    border-style: solid;
    border-width: 1px;
    border-color: #D50000;
  }
  #dropdownProfile {
    border-style: solid;
    border: 1;
    border-width: 1px;
    border-color: #222222;
    background-color: black;
  }
</style>