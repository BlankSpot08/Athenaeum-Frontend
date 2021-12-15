<template>
  <v-app>
    <v-main id="upper">
      <v-container fluid class="">
        <v-row>
          <v-col class="">
            <a
              class="red--text text--accent-4 ml-16 text-h4 font-weight-bold"
              @click="scrollToTop(), goToRouterLink('homepage')"
            >
              ATHENAEUM
            </a>
          </v-col>
        </v-row>

        <v-row class="mt-16 pt-16" justify="center">
          <v-col class="px-10 py-8" lg="4" id="loginBody">
            <div class="mb-6">
              <div class="text-h6">Login</div>
              <div class="text-body-2">
                Please enter your ID Number and Password to access your
                Athenaeum account.
              </div>
            </div>

            <v-form ref="form" class="py-4">
              <div class="pb-2">
                <v-text-field
                  dark
                  class="py-1 my-1"
                  label="ID Number"
                  :rules="inputRules"
                  v-model="idNumber"
                  v-bind:value="idNumber"
                ></v-text-field>
                <v-text-field
                  dark
                  class="py-1 my-1"
                  label="Password"
                  :rules="inputRules"
                  v-model="password"
                  v-bind:value="password"
                  type="password"
                ></v-text-field>

                <v-btn dark color="#D50000" @click="login()" block>Login</v-btn>
              </div>

              <v-container fluid>
                <v-row class="text-body-2">
                  <v-col class="pa-0">
                    <a
                      class="white--text"
                      @click="goToRouterLink('studentRegister')"
                      >Don't have an account yet?</a
                    >
                  </v-col>
                  <v-col class="pa-0 text-right">
                    <a
                      class="white--text"
                      @click="goToRouterLink('studentForgotPassword')"
                      >Forgot password?</a
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
        <v-row class="">
          <v-col class="text-center">
            <a class="white--text" @click="goToRouterLink('homepage')"
              >Cancel</a
            >
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentLogin",
  components: {},
  data() {
    return {
      idNumber: "19-14770-807",
      password: "09194163795",
      inputRules: [(v) => v.length > 0 || "This field required"],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
    async login() {
      if (this.$refs.form.validate()) {
        const request = await axios.post("authentication/studentLogin", {
          id: this.idNumber,
          password: this.password,
        });

        console.log(request);

        const status = request.status;
        if (status == 200) {
          const token = request.data.accessToken;
          localStorage.setItem("token", JSON.stringify(token));

          this.goToRouterLink("studentHome");
        }
      }
    },
  },
};
</script>

<style>
</style>