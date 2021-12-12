<template>
  <v-app>
    <v-main>
      <v-container class="">
        <a class="black--text" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
          Back
        </a>

        <div class="text-h4 font-weight-bold mt-10">What is Athenaeum</div>
        <div v-for="winItem in winItems" :key="winItem.win" class="mt-5">
          <p>{{ winItem.win }}</p>
        </div>

        <v-divider></v-divider>
        <div class="text-h4 font-weight-bold mt-10">Books</div>
        <div v-for="bItem in bItems" :key="bItem.b" class="mt-5">
          <p>{{ bItem.b }}</p>
        </div>

        <v-divider></v-divider>
        <div class="text-h4 font-weight-bold mt-10">Supported Devices</div>
        <div v-for="spItem in spItems" :key="spItem.sp" class="mt-5">
          <p>{{ spItem.sp }}</p>
        </div>

        <v-divider></v-divider>
        <div class="text-h4 font-weight-bold mt-10">Getting Started!</div>
        <div v-for="gsItem in gsItems" :key="gsItem.gs" class="mt-5">
          <p>{{ gsItem.gs }}</p>
        </div>
        <p class="mt-10">That's it. Enjoy Athenaeum!</p>
      </v-container>

      <v-row class="grey lighten-2 py-3">
        <v-container>
          <v-row>
            <v-col>
              <div class="text-h5 font-weight-bold">Want to contact us?</div>
            </v-col>
            <v-col class="text-right">
              <v-btn
                outlined
                tile
                @click="scrollUpTo(), goToRouterLink('contactUs')"
                >Call us</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "FAQs",
  data() {
    return {
      winItems: [
        {
          win: "Athenaeum is an online library service that allow students to borrow books through online rather doing it physically.",
        },
        {
          win: "It is a service that gives convenience to students and also to librarians in way that they don't need to actually wait in a queue line just to borrow books.",
        },
        {
          win: "You can also save your favorite books here so you won't forget the information about those books just incase that you would want to read it again.",
        },
      ],
      bItems: [
        {
          b: "Athenaeum contains a variety of categories, and each categories consists of multiple books so you will never run out of books to read.",
        },
        {
          b: "The more you read, the better knowledge and entertainment that you will gain.",
        },
      ],
      spItems: [
        {
          sp: "You can use Athenaeum through desktop computers and laptop. Accessing it will require your internet browser.",
        },
      ],
      gsItems: [
        { gs: "Follow these easy steps to start using Athenaeum:" },
        { gs: "1. Visit http://localhost:8080/#/student/register." },
        { gs: "2. Create an account by entering your ID number and password." },
        { gs: "3. And then you may login to Athenaeum." },
      ],
    };
  },
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