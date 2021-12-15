<template>
  <v-app class="">
    <v-app-bar dark color="black" height="58" class="">
      <a
        class="red--text text--accent-4 ml-16 text-h4 font-weight-bold"
        @click="goToRouterLink('homepage')"
      >
        ATHENAEUM
      </a>
      <div class="mx-3 text-h5">|</div>
      <div class="text-body-1">Developer Center</div>

      <v-spacer></v-spacer>

      <v-btn outlined @click="goToRouterLink('studentRegister')">
        Join Athenaeum
      </v-btn>

      <v-btn
        color="#D50000"
        class="ml-5"
        @click="goToRouterLink('studentLogin')"
        >Sign In</v-btn
      >
    </v-app-bar>

    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="black"
      @click="toTop"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>

    <v-main class="">
      <v-container class="">
        <v-row justify="center">
          <v-col class="text-center">
            <div class="text-h1">Meet the Team!!!!</div>
            <div>
              Browse our directory of developers who worked hard to make the
              succession of Athenaeum's creation.
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            v-for="(developer, index) in developers"
            :key="index"
            link
            router
          >
            <v-card
              width="270px"
              height="375"
              class="text-center pa-5"
              elevation="5"
            >
              <v-card-text>
                <v-img
                  :src="require(`@/assets/${developer.profile}`)"
                  :lazy-src="require(`@/assets/${developer.profile}`)"
                  id="rounded-card"
                  height="100"
                  width="100"
                  class="mx-auto"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card-text>
              <v-card-text class="text-h6 mb-n8">
                {{ developer.name }}
              </v-card-text>
              <v-card-subtitle>
                {{ developer.address }}
              </v-card-subtitle>
              <v-card-text class="font-weight-bold mb-n8">
                Position:
              </v-card-text>
              <v-card-subtitle>
                {{ developer.positions.join(" • ") }}
              </v-card-subtitle>

              <a
                id="viewProfile"
                class="mb-3 ml-n10"
                @click="
                  scrollDownTo(developer.coordinates.x, developer.coordinates.y)
                "
                >View Profile</a
              >
            </v-card>
          </v-col>
        </v-row>

        <v-divider class="my-5"></v-divider>

        <v-row
          v-for="(developer, index) in developers"
          :key="index"
          justify="center"
          class=""
        >
          <v-container>
            <v-row class="pb-5">
              <v-col class="text-center" cols="3">
                <v-img
                  id="rounded-card"
                  class="mx-auto"
                  :lazy-src="require(`@/assets/${developer.profile}`)"
                  :src="require(`@/assets/${developer.profile}`)"
                  width="200"
                  height="200"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <div class="mt-5">
                  <div class="text-h6">{{ developer.name }}</div>
                  <div class="text-body-2">{{ developer.address }}</div>
                </div>

                <div class="text-left">
                  <div class="text-body-1 mt-5 mb-3">Social Links</div>

                  <div class="my-1 ml-7">
                    <div
                      v-for="(link, index) in developer.link"
                      :key="index"
                      class="mb-3 text-body-2"
                    >
                      <a target="_blank" :href="link.go">
                        <v-icon :color="link.icon.color" class="mr-2">{{
                          link.icon.name
                        }}</v-icon>
                        {{ link.title }}
                      </a>
                    </div>
                  </div>

                  <div class="text-body-1 mt-5 mb-3">Contact Number</div>

                  <div class="my-1 ml-7">
                    <div class="text-body-2">• {{ developer.contactno }}</div>
                  </div>
                </div>
              </v-col>

              <v-col>
                <v-row>
                  <v-col>
                    <div class="text-h4">
                      {{ developer.motto }}
                    </div>
                    <div class="text-right text-body-2">
                      - {{ developer.name }}, 2021
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div class="text-body-1">Position</div>
                    <div class="text-body-2">
                      • {{ developer.positions.join(" • ") }}
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <div class="text-body-1 text-weight-bold">Biography</div>
                    <div class="text-body-2">{{ developer.biography }}</div>
                  </v-col>
                </v-row>

                <v-row v-if="developer.video">
                  <v-col>
                    <vue-player
                      :src="require(`@/assets/${developer.video.name}`)"
                      :poster="require(`@/assets/${developer.video.poster}`)"
                    ></vue-player>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row class="py-5">
              <v-container>
                <v-row v-for="(photos, index) in developer.photos" :key="index">
                  <v-col v-for="(photo, index) in photos" :key="index" cols="3">
                    <v-img
                      class="mx-auto"
                      max-height="300"
                      max-width="200"
                      height="300"
                      width="200"
                      :lazy-src="require(`@/assets/${photo}`)"
                      :src="require(`@/assets/${photo}`)"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          >
                          </v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-row>
            <v-divider class="my-10" />
          </v-container>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import vuePlayer from "@algoz098/vue-player";

export default {
  name: "DeveloperCenter",
  components: {
    vuePlayer,
  },
  methods: {
    scrollDownTo(x, y) {
      // window.scrollTo(x, y);
      this.$vuetify.goTo(y);
    },
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  data() {
    return {
      fab: false,
      developers: [
        {
          name: "Jemuel Anacio",
          address: "Quezon City, Philippines",
          profile: "jemuel.png",
          contactno: "09673327890",
          coordinates: {
            x: 610,
            y: 610,
          },
          biography:
            "Jemuel Anacio is front-end and leading developer of the project Athenaeum. He is college student in New Era University with a degree of Bachelor of Science in Computer Science. He is a scholar of one of the biggest government scholarship which is the Department of Science and Technology (DOST) scholarship. He is a fast learner student and loves to explore things when he got interested in. When in comes in developing a web, he is more skillful in designing. When he's not on keyboard working he is more into games, not only as an entertainment but also learning. Learning how was it build or how was it developed. Find him on Facebook: Jemuel Anacio.",
          motto: "There's no such thing as best, there always has better.",
          positions: ["Team Leader", "Front-End Developer", "Hackerman"],
          video: {
            name: "jemuel_video.mp4",
            poster: "jemuel_video_preview.png",
          },
          link: [
            {
              title: "LinkedIn",
              go: "https://www.linkedin.com/in/jemuel-anacio-0b58a6227",
              icon: {
                name: "mdi-linkedin",
                color: "blue",
              },
            },
            {
              title: "Facebook",
              go: "https://www.facebook.com/jemuel.anacio.5",
              icon: {
                name: "mdi-facebook",
                color: "blue",
              },
            },
            {
              title: "Github",
              go: "https://github.com/SCUEED",

              icon: {
                name: "mdi-github",
                color: "black",
              },
            },
          ],
          photos: [
            ["jemuel_1.jpg", "jemuel_2.jpg", "jemuel_3.jpg", "jemuel_4.jpg"],
            ["jemuel_5.jpg", "jemuel_6.jpg", "jemuel_7.jpg"],
          ],
        },
        {
          name: "Reuben Dominic Palabasan",
          address: "Quezon City, Philippines",
          profile: "arduts.jpg",
          contactno: "09167090788",
          coordinates: {
            x: 2210,
            y: 2210,
          },
          biography:
            "Reuben Dominic J. Palabasan is a 3rd year student of Bachelor of Science in Computer Science. Always staying proactive, he ventured into a lot of different activities to show his talent.  He had the courage and determination to succeed, no matter how difficult the obstacles he had to overcome. He decided to pursue his degree in computer science because he wanted to increase his job chances and  wanted to work on various projects as well. He enjoys photography, watching movies, listening to music, and playing online games in his part time.",
          motto:
            "As a student, the most important thing to remember is laziness is your worst enemy and hardwork is your bestfriend.",
          positions: ["Data Gatherer"],
          video: {
            name: "arduts_video.mp4",
            poster: "arduts_video_preview.png",
          },
          link: [
            {
              title: "LinkedIn",
              go: "https://www.linkedin.com/in/jemuel-anacio-0b58a6227",
              icon: {
                name: "mdi-linkedin",
                color: "blue",
              },
            },
            {
              title: "Facebook",
              go: "https://www.facebook.com/Hansammmmmm",
              icon: {
                name: "mdi-facebook",
                color: "blue",
              },
            },
            {
              title: "Github",
              go: "https://github.com/Arduts",

              icon: {
                name: "mdi-github",
                color: "black",
              },
            },
          ],
          photos: [
            ["arduts_1.jpg", "arduts_2.jpg", "arduts_3.jpg", "arduts_4.jpg"],
            ["arduts_5.jpg", "arduts_6.jpg", "arduts_7.jpg", "arduts_8.jpg"],
          ],
        },
        {
          name: "Adrian Jacient Igama",
          address: "Quezon City, Philippines",
          profile: "adrian.jpg",
          contactno: "09167090788",
          biography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          motto:
            "I believe that the key to success, is to develop a winning edge.",
          coordinates: {
            x: 3890,
            y: 3890,
          },
          positions: ["Data Gatherer"],
          video: {
            name: "adrian_video.mp4",
            poster: "adrian_video_preview.png",
          },
          link: [
            {
              title: "LinkedIn",
              go: "https://www.linkedin.com/in/adrian-igama-b5603b1b2/",
              icon: {
                name: "mdi-linkedin",
                color: "blue",
              },
            },
            {
              title: "Facebook",
              go: "https://www.facebook.com/adrianjacient",
              icon: {
                name: "mdi-facebook",
                color: "blue",
              },
            },
            {
              title: "Twitter",
              go: "https://twitter.com/JacientIgama",
              icon: {
                name: "mdi-twitter",
                color: "blue",
              },
            },
            {
              title: "Github",
              go: "https://github.com/adrianigama",

              icon: {
                name: "mdi-github",
                color: "black",
              },
            },
          ],
          photos: [
            ["adrian_1.jpg", "adrian_2.jpg", "adrian_3.jpg", "adrian_4.jpg"],
            ["adrian_5.jpg", "adrian_6.jpg", "adrian_7.jpg", "adrian_8.jpg"],
          ],
        },
        {
          name: "Arvin P. Chu",
          address: "Pasig City, Philippines",
          profile: "arvin.jpg",
          contactno: "09958214987",
          biography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          motto: "Chu.",
          coordinates: {
            x: 5510,
            y: 5510,
          },
          positions: ["Full-Stack Developer"],
          link: [
            {
              title: "LinkedIn",
              go: "https://www.linkedin.com/in/arvin-chu-5b6904204/",
              icon: {
                name: "mdi-linkedin",
                color: "blue",
              },
            },
            {
              title: "Facebook",
              go: "https://www.facebook.com/arvin.chu.10",
              icon: {
                name: "mdi-facebook",
                color: "blue",
              },
            },
            {
              title: "Twitter",
              go: "https://twitter.com/Arvin69169278",
              icon: {
                name: "mdi-twitter",
                color: "blue",
              },
            },
            {
              title: "Github",
              go: "https://github.com/BlankSpot08",

              icon: {
                name: "mdi-github",
                color: "black",
              },
            },
          ],
          photos: [[], []],
        },
      ],
    };
  },
};
</script>

<style scoped>
#rounded-card {
  border-radius: 50%;
}

a {
  text-decoration: none;
}

#viewProfile {
  position: absolute;
  bottom: 0;
}
</style>