<template>
  <v-app class="">
    <v-main class="">
      <v-container class="">
        <v-row></v-row>
        <v-row></v-row>

        <v-row justify="center">
          <v-col class="text-center" cols="3">
            <v-img
              id="rounded-card"
              class="mx-auto black"
              src="@/assets/jemuel.png"
              width="200"
              height="200"
            />
            <div class="mt-5">
              <div>Jemuel Anacio</div>
              <div>Quezon City, Philippines</div>
            </div>

            <div class="text-left">
              <div class="mt-5 mb-3">Social Links</div>

              <div class="my-1 ml-7">
                <div
                  v-for="(value, index) in jemuel.link"
                  :key="index"
                  class="mb-3"
                >
                  <a target="_blank" :href="value.go">
                    <v-icon :color="value.icon.color" class="mr-2">{{
                      value.icon.name
                    }}</v-icon>
                    {{ value.title }}
                  </a>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="">
            <row>
              <v-col>
                <div>Position</div>
                <div>Team Leader • Front-End Developer</div>
              </v-col>
            </row>

            <row>
              <v-col>
                <div>Biography</div>
                <div>{{ jemuel.biography }}</div>
              </v-col>
            </row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DeveloperCenter",
  data() {
    return {
      jemuel: {
        link: [
          {
            title: "Github",
            go: "https://github.com/SCUEED",

            icon: {
              name: "mdi-github",
              color: "black",
            },
          },
          {
            title: "Twitter",
            go: "https://github.com/SCUEED",
            icon: {
              name: "mdi-twitter",
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
        ],
        biography:
          "Jemuel Anacio is front-end and leading developer of the project Athenaeum. He is college student in New Era University with a degree of Bachelor of Science in Computer Science. He is a scholar of one of the biggest government scholarship which is the Department of Science and Technology (DOST) scholarship. He is a fast learner student and loves to explore things when he got interested in. When in comes in developing a web, he is more skillful in designing. When he's not on keyboard working he is more into games, not only as an entertainment but also learning. Learning how was it build or how was it developed. Find him on Facebook: Jemuel Anacio.",
      },
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
</style>