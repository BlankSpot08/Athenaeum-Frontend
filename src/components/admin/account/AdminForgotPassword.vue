<template>
  <v-app>
    <v-main id="upper">
      <v-container fluid class="">
        <v-row>
          <v-col class="">
            <div
              class="red--text text--accent-4 ml-16 text-h4 font-weight-bold"
            >
              ATHENAEUM
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-16 pt-16" v-if="!status">
          <v-container fluid>
            <v-row justify="center" class="">
              <v-col class="px-10 py-8" lg="4" id="loginBody">
                <div class="mb-6">
                  <div class="text-h6">Forgot Password</div>
                  <div class="text-body-2">
                    We will send you an email with instructions on how to reset
                    your password.
                  </div>
                </div>

                <v-form ref="form" class="py-4">
                  <div class="pb-2">
                    <v-text-field
                      dark
                      class="py-1 my-1"
                      label="Email"
                      v-model="email"
                    ></v-text-field>

                    <v-btn dark color="#D50000" @click="forgetPassword()" block
                      >Email Me</v-btn
                    >
                  </div>
                </v-form>
              </v-col>
            </v-row>
            <v-row class="">
              <v-col class="text-center">
                <a class="white--text" @click="goToRouterLink('adminLogin', '')"
                  >Cancel</a
                >
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row class="mt-16 pt-16" v-else>
          <v-container fluid class="">
            <v-row class="" justify="center">
              <v-col class="px-10 py-8" lg="4" id="loginBody">
                <div class="text-h4">Email has been sent</div>
                <div>
                  We have sent you an e-mail. Please contact us if you do not
                  receive it within a few minutes.
                </div>

                <div class="mt-5">
                  <a
                    class="white--text"
                    @click="goToRouterLink('adminLogin', '')"
                  >
                    <v-icon dark>mdi-arrow-left</v-icon>
                    Go Back</a
                  >
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminForgotPassword",
  data() {
    return {
      email: "",
      status: this.$route.params.status || "",
    };
  },
  watch: {
    $route(to, from) {
      if (to.params.status) {
        this.status = to.params.status;
      } else if (from.params.status) {
        this.goToRouterLink("adminLogin");
      } else {
        this.status = "";
      }
    },
  },
  methods: {
    goToRouterLink(name, status) {
      this.$router.push({ name: name, params: { status: status } });
    },
    async forgetPassword() {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.post(
        "forgotPassword/admin",
        { email: this.email },
        { headers: { authorization: `Bearer ${token}` } }
      );

      this.goToRouterLink("adminForgotPassword", "done");
    },
  },
  mounted() {
    console.log(this.status);
  },
};
</script>

<style>
</style>