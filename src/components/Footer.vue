<template>
  <v-container>
    <v-card color="black mb-n1">
      <v-card-actions>
        <div>
          <a
            class="grey--text ml-2"
            @click="scrollToTop(), goToRouterLink('contactUs')"
            >Questions? Contact us.</a
          >
        </div>
      </v-card-actions>
      <v-card-actions>
        <v-col align-self="start">
          <div class="mb-3">
            <a class="grey--text" @click="scrollToTop(), goToRouterLink('FAQs')"
              >FAQs</a
            >
          </div>
          <div class="mb-3">
            <a
              class="grey--text"
              @click="scrollToTop(), goToRouterLink('studentRegister')"
              >Account</a
            >
          </div>
        </v-col>
        <v-col align-self="start">
          <div class="mb-3 text-center">
            <a class="grey--text">Developer Center</a>
          </div>
          <div class="mb-3 text-center">
            <a
              class="grey--text"
              @click="scrollToTop(), goToRouterLink('contactUs')"
              >Contact Us</a
            >
          </div>
        </v-col>
        <v-col>
          <div class="mb-3 text-right">
            <a
              class="grey--text"
              @click="scrollToTop(), goToRouterLink('TermsOfService')"
              >Terms of Service</a
            >
          </div>
          <div class="mb-3 text-right">
            <a
              class="grey--text"
              @click="scrollToTop(), goToRouterLink('legalNotices')"
              >Legal Notices</a
            >
          </div>
          <div class="text-right">
            <a
              class="grey--text"
              @click="scrollToTop(), goToRouterLink('privacy')"
              >Privacy</a
            >
          </div>
        </v-col>
      </v-card-actions>
      <v-card-subtitle class="grey--text mt-5">
        Athenaeum Philippines
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>
<script>
export default {
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
