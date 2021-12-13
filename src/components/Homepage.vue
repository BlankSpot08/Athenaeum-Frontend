<template>
  <v-app>
    <v-main id="body">
      <v-container class="pb-13" id="upper" fluid>
        <v-row class="pb-16 mb-16">
          <v-col>
            <div
              class="red--text text--accent-4 ml-16 text-h4 font-weight-bold"
            >
              ATHENAEUM
            </div>
          </v-col>
        </v-row>

        <v-row class="pt-16">
          <v-col>
            <div class="text-center text-h2">
              Unlimited Books for education, <br />
              entertainment, and more.
            </div>
          </v-col>
        </v-row>

        <v-row class="pb-16 mb-16">
          <v-col class="text-right">
            <div class="">
              <v-btn
                dark
                @click="goToRouterLink('adminLogin')"
                width="150px"
                height="60px"
                x-large
                class="ma-3"
                elevation="1"
                color="red accent-4"
              >
                <v-icon x-large> mdi-account-cog </v-icon>
              </v-btn>
            </div>
            <div class="text-h5 mr-12">Admin</div>
          </v-col>

          <v-col class="">
            <div class="">
              <v-btn
                dark
                @click="goToRouterLink('studentLogin')"
                width="150px"
                height="60px"
                x-large
                class="ma-3"
                elevation="1"
                color="red accent-4"
              >
                <v-icon x-large> mdi-account-edit </v-icon>
              </v-btn>
            </div>
            <div class="text-h5 ml-12">Student</div>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="" fluid>
        <v-row>
          <v-col class="pa-0 ma-0">
            <v-divider id="dividercolor" class="py-1" />
          </v-col>
        </v-row>

        <v-row class="px-16 py-16">
          <v-col class="pl-16">
            <div class="text-h4 pt-10">Read Free Library Books.<br /></div>
            <div class="text-subtitle-1">
              We have a lot of books that are available to borrow here.
            </div>
          </v-col>

          <v-col class="text-right">
            <v-img
              src="../assets/books.jpg"
              height="250"
              width="400"
              max-height="400"
              max-width="400"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pa-0 ma-0">
            <v-divider id="dividercolor" class="py-1" />
          </v-col>
        </v-row>

        <v-row class="px-16 py-16" justify="right">
          <v-col class="justify-end">
            <div class="pl-16">
              <v-img
                class="ml-auto"
                src="../assets/favorite_book.jpg"
                height="250"
                width="400"
                max-height="400"
                max-width="400"
              />
            </div>
          </v-col>

          <v-col class="text-right pr-16">
            <div class="text-h4 pt-10">
              Keep Track of your Favorite Books.<br />
            </div>
            <div class="text-subtitle-1">
              Organized books using lists and reading logs.
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pa-0 ma-0">
            <v-divider id="dividercolor" class="py-1" />
          </v-col>
        </v-row>

        <v-row class="px-16 py-16">
          <v-col class="pl-16">
            <div class="text-h4 pt-10">Explore New Books!<br /></div>
            <div class="text-subtitle-1">
              You might find something new that you might be interested in.
            </div>
          </v-col>

          <v-col class="">
            <v-img
              src="../assets/explore_book.jpg"
              max-height="400"
              max-width="400"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pa-0 ma-0">
            <v-divider id="dividercolor" class="py-1" />
          </v-col>
        </v-row>

        <v-row class="px-16 py-16" justify="center">
          <v-row class="text-center" justify="center">
            <v-col>
              <div class="text-h3 font-weight-bold mb-3">
                Frequently Asked Questions
              </div>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="text-center" lg="5">
              <v-expansion-panels dark>
                <v-expansion-panel
                  v-for="(item, i) in faqs"
                  :key="i"
                  class="mb-3"
                >
                  <v-expansion-panel-header class="text-body-1">
                    {{ item.title }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="text-body-1">
                    {{ item.description }}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col></v-row
          >
        </v-row>

        <v-row>
          <v-col class="pa-0 ma-0">
            <v-divider id="dividercolor" class="py-1" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="black" dark>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "Homepage",
  components: {
    Footer,
  },
  data() {
    return {
      faqs: [
        {
          title: "What is Athenaeum",
          description: "",
        },
        {
          title: "How can I borrow books?",
          description: "",
        },
        {
          title: "How can I track my favorite books?",
          description: "",
        },
        {
          title: "How can I cancel borrow request?",
          description: "",
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
#dividercolor {
  background-color: #212121;
}

h1 {
  font-size: 60px;
}

#titles {
  font-size: 50px;
  float: left;
}

#description {
  font-size: 40px;
  float: left;
}

h1,
h2,
div {
  position: relative;
}

#body {
  position: relative;
  background-color: black;
  color: white;
}

#upper {
  position: relative;
}

#upper::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url("../assets/homepagebg.jpeg");
  background-size: 100% 100%;

  opacity: 0.4;
}
</style>