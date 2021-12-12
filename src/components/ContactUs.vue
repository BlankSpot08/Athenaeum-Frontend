<template>
  <v-app>
    <v-app-bar app dark color="black" height="58">
      <div class="red--text text--accent-4 ml-16 text-h4 font-weight-bold">
        ATHENAEUM
      </div>
      <v-spacer></v-spacer>
      <v-btn outlined @click="goToRouterLink('studentRegister')"
        >Join Athenaeum</v-btn
      >
      <v-btn
        color="#D50000"
        class="ml-5"
        @click="goToRouterLink('studentLogin')"
        >Sign In</v-btn
      >
    </v-app-bar>
    <v-main>
      <v-container class="mt-8">
        <a class="black--text" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
          Back
        </a>
        <div class="text-h4 font-weight-bold mt-10">
          Contact Customer Service
        </div>
        <div class="text-h5 font-weight-bold mt-10 mb-5">
          Call us from any phone
        </div>
        <div v-for="item in items" :key="item.phone" class="text-h6">
          <p>{{ item.phone }}</p>
        </div>
        <p>{{ items[2].moreInfo }}</p>

        <v-divider></v-divider>
      </v-container>
      <v-footer bottom padless absolute class="grey darken-4">
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
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      items: [
        { phone: "-09673327890" },
        { phone: "-09923787289" },
        {
          moreInfo:
            "You can only use Philippine number on order to reach these contacts.",
        },
      ],
    };
  },
  methods: {
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<style scoped>
</style>
