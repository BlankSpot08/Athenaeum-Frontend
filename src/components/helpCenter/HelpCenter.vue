<template>
  <v-app
    ><v-app-bar app dark color="black" height="58" class="">
      <div class="red--text text--accent-4 ml-16 text-h4 font-weight-bold">
        ATHENAEUM
      </div>
      <v-spacer></v-spacer>
      <v-btn outlined @click="scrollUpTo(), goToRouterLink('studentRegister')"
        >Join Athenaeum</v-btn
      >
      <v-btn
        color="#D50000"
        class="ml-5"
        @click="scrollUpTo(), goToRouterLink('studentLogin')"
        >Sign In</v-btn
      >
    </v-app-bar>

    <v-main>
      <v-container class="white--text" fluid>
        <router-view class="" />
      </v-container>
    </v-main>

    <v-footer class="grey darken-4">
      <v-container class="my-8">
        <v-row>
          <v-col class="text-center">
            <a class="grey--text">Privacy</a>
          </v-col>
          <v-col class="text-center">
            <a class="grey--text">Terms of Service</a>
          </v-col>
          <v-col class="text-center">
            <a class="grey--text">Legal Notices</a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "HelpCenter",
};
</script>

<style scoped>
</style>