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
        <v-row class="mt-5 pt-16" justify="center" v-if="process == 1">
          <v-col dark class="px-10 py-8" lg="4" id="loginBody">
            <div class="mb-6">
              <div class="text-h6">Step 1 of 3</div>
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
                  v-model="id"
                  :rules="inputRules"
                ></v-text-field>
                <v-text-field
                  dark
                  class="py-1 my-1"
                  label="Email"
                  v-model="emailaddress"
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
                <v-btn dark color="#D50000" @click="next()" block>Next</v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
        <!-- second part -->
        <v-row class="mt-16 pt-16" justify="center" v-if="process == 2">
          <v-col dark class="px-10 py-8" lg="4" id="loginBody">
            <div class="mb-6">
              <div class="text-h6">Step 2 of 3</div>
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
                  label="First Name"
                  :rules="inputRules"
                  v-model="firstname"
                ></v-text-field>
                <v-text-field
                  dark
                  class="py-1 my-1"
                  label="Middle Name"
                  :rules="inputRules"
                  v-model="middlename"
                ></v-text-field>
                <v-text-field
                  dark
                  class="py-1 my-1"
                  label="Last Name"
                  :rules="inputRules"
                  v-model="lastname"
                ></v-text-field>
                <v-btn dark color="#D50000" @click="next()" block>Next</v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
        <!-- third part -->
        <v-row class="mt-16 pt-16" justify="center" v-if="process == 3">
          <v-col dark class="px-10 py-8" lg="4" id="loginBody">
            <div class="mb-6">
              <div class="text-h6">Step 3 of 3</div>
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
                  label="Contact No."
                  :rules="inputRules"
                  v-model="contact"
                ></v-text-field>
                <v-btn dark color="#D50000" @click="register()" block
                  >Submit</v-btn
                >
              </div>
            </v-form>
          </v-col>
        </v-row>

        <v-row v-if="process > 1">
          <v-col class="text-right">
            <a class="white--text mr-5" @click="back">Back</a>
          </v-col>
          <v-col class="text-left">
            <a class="white--text ml-5" @click="goToRouterLink('adminLogin')"
              >Cancel</a
            >
          </v-col>
        </v-row>
        <v-row v-if="process == 1">
          <v-col class="text-center">
            <a class="white--text" @click="goToRouterLink('adminLogin')"
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
  name: "AdminRegister",
  data() {
    return {
      id: "",
      emailaddress: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      middlename: "",
      lastname: "",
      contact: "",
      inputRules: [(v) => v.length > 0 || "This field required"],
      passwordRules: [
        (v) => v.length > 5 || "Must contain atleast 6 characters",
      ],
      confirmPasswordRules: [
        (v) => (v == this.password && v.length > 0) || "Password mismatch",
      ],

      process: 1,
    };
  },
  methods: {
    async register() {
      await axios.post("registration/adminRegister", {
        id: this.id,
        password: this.password,
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        emailaddress: this.emailaddress,
        contactno: this.contactno,
        guardiancontactno: this.guardiancontactno,
      });

      this.$router.push({ name: "homepage" });
    },
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
    next() {
      if (this.$refs.form.validate()) {
        this.process++;
      }
    },
    back() {
      this.process--;
    },
  },
};
</script>

<style>
</style>