<template>
  <v-app>
    <v-main id="upper">
      <v-container fluid>
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
        <!-- first part -->
        <v-row class="mt-5 pt-16" justify="center">
          <v-col dark class="px-10 py-8" lg="4" id="loginBody">
            <div class="mb-6">
              <div class="text-h6">Sign up</div>
              <div class="text-body-2">
                Complete the form below to create a new account. Each field is
                required.
              </div>
            </div>

            <v-form ref="form" class="py-4">
              <div class="pb-2">
                <v-text-field
                  dark
                  class="py-1 my-1"
                  label="ID Number"
                  v-model="idNumber"
                  :rules="inputRules"
                ></v-text-field>
                <v-text-field
                  dark
                  class="py-1 my-1"
                  label="Password"
                  v-model="password"
                  :rules="passwordRules"
                  type="password"
                ></v-text-field>
                <v-text-field
                  dark
                  class="py-1 my-1"
                  label="Confirm Password"
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                  type="password"
                ></v-text-field>
                <v-btn dark color="#D50000" @click="register()" block
                  >Register</v-btn
                >
              </div>
            </v-form>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-center">
            <a class="white--text" @click="goToRouterLink('studentLogin')"
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
  name: "StudentRegister",
  components: {},
  data() {
    return {
      idNumber: "",
      password: "",
      confirmPassword: "",

      inputRules: [(v) => v.length > 0 || "This field required"],
      passwordRules: [
        (v) => v.length > 5 || "Must contain atleast 6 characters",
      ],
      confirmPasswordRules: [
        (v) => (v == this.password && v.length > 0) || "Password mismatch",
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    async register() {
      await axios.post("registration/studentRegister", {
        id: this.idNumber,
        password: this.password,
      });

      this.$router.push({ name: "homepage" });
    },
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<style>
</style>