<template>
  <v-app>
    <v-app-bar app dark color="black" height="58" class="">
      <div
        class="red--text text--accent-4 ml-16 text-h4 font-weight-bold"
        @click="scrollToTop(), goToRouterLink('homepage')"
      >
        ATHENAEUM
      </div>
      <div class="mx-3 text-h5">|</div>
      <div class="text-body-1">Help Center</div>
      <v-spacer></v-spacer>
      <v-btn outlined @click="scrollToTop(), goToRouterLink('studentRegister')"
        >Join Athenaeum</v-btn
      >
      <v-btn
        color="#D50000"
        class="ml-5"
        @click="scrollToTop(), goToRouterLink('studentLogin')"
        >Sign In</v-btn
      >
    </v-app-bar>

    <v-main class="">
      <router-view class="mt-n10" />
    </v-main>

    <v-footer class="grey darken-4">
      <v-container class="my-8">
        <v-row>
          <v-col class="text-center">
            <a
              class="grey--text"
              @click="scrollToTop(), goToRouterLink('TermsOfService')"
              >Terms of Service</a
            >
          </v-col>
          <v-col class="text-center">
            <a
              class="grey--text"
              @click="scrollToTop(), goToRouterLink('legalNotices')"
              >Legal Notices</a
            >
          </v-col>
          <v-col class="text-center">
            <a
              class="grey--text"
              @click="scrollToTop(), goToRouterLink('privacy')"
              >Privacy</a
            >
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "HelpCenter",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<style scoped>
</style>