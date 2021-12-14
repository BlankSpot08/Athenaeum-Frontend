<template>
  <v-app>
    <v-main id="upper">
      <v-container fluid class="">
        <v-row>
          <v-col class="">
            <div class="">
              <a
                @click="goToRouterLink('homepage')"
                class="red--text text--accent-4 ml-16 text-h4 font-weight-bold"
              >
                ATHENAEUM
              </a>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-16 pt-16">
          <v-container fluid v-if="status === 'done'">
            <v-row justify="center" class="">
              <v-col class="px-10 py-8" lg="4" id="loginBody">
                <div class="mb-6">
                  <div class="text-h6">Reset Password</div>

                  <div>Your password is now changed.</div>

                  <div class="mt-5">
                    <a
                      class="white--text"
                      @click="goToRouterLink('adminLogin', '')"
                    >
                      <v-icon dark>mdi-arrow-left</v-icon>
                      Go Back</a
                    >
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-container fluid v-else-if="status.localeCompare('active') === 0">
            <v-row justify="center" class="">
              <v-col class="px-10 py-8" lg="4" id="loginBody">
                <div class="mb-6">
                  <div class="text-h6">Reset Password</div>
                </div>

                <v-form ref="form">
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
                  <v-btn dark color="#D50000" @click="resetPassword()" block
                    >Reset Password</v-btn
                  >
                </v-form>
              </v-col>
            </v-row>
            <v-row class="">
              <v-col class="text-center">
                <a class="white--text" @click="goToRouterLink('adminLogin')"
                  >Cancel</a
                >
              </v-col>
            </v-row>
          </v-container>

          <v-container fluid v-else>
            <v-row justify="center" class="">
              <v-col class="px-10 py-8" lg="4" id="loginBody">
                <div class="mb-6">
                  <div class="text-h6">Bad Token</div>

                  <div v-if="status.localeCompare('expired') === 0">
                    The password reset link was invalid, because the token has
                    already expired. Please request a
                    <router-link :to="{ name: 'adminForgotPassword' }"
                      >new password reset</router-link
                    >.
                  </div>

                  <div v-else-if="status.localeCompare('missing') === 0">
                    The password reset link was invalid, because the token is
                    missing. Please request a
                    <router-link :to="{ name: 'adminForgotPassword' }"
                      >new password reset</router-link
                    >.
                  </div>

                  <div v-else-if="status.localeCompare('failed') === 0">
                    The password reset link was invalid, because the token is
                    unauthorized. Please request a
                    <router-link :to="{ name: 'adminForgotPassword' }"
                      >new password reset</router-link
                    >.
                  </div>
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
      password: "",
      confirmPassword: "",
      status: this.$route.params.status || "",
      passwordRules: [
        (v) => v.length > 5 || "Must contain atleast 6 characters",
      ],
      confirmPasswordRules: [
        (v) => (v == this.password && v.length > 0) || "Password mismatch",
      ],
    };
  },
  watch: {
    async $route(to) {
      const status = to.params.status;

      if (status.localeCompare("done") === 0) {
        this.status = "done";
      } else {
        const tokenStatus = await this.checkToken();

        this.status = tokenStatus;
      }
    },
  },
  async mounted() {
    const status = this.$route.params.status;

    if (status.localeCompare("done") === 0) {
      this.status = "done";
    } else {
      const tokenStatus = await this.checkToken();

      this.status = tokenStatus;
    }
  },
  methods: {
    async resetPassword() {
      if (this.$refs.form.validate()) {
        await axios.post("resetPassword/admin", {
          token: this.$route.params.status,
          newPassword: this.password,
        });

        this.password = "";
        this.confirmPassword = "";
        this.goToRouterLink("adminResetPassword", "done");
      }
    },
    async checkToken() {
      try {
        const temp = await axios.post("authorization/adminResetToken", {
          token: this.$route.params.status,
        });

        return temp.data.status;
      } catch (err) {
        return err.response.data.status;
      }
    },
    goToRouterLink(name, params) {
      this.$router.push({ name: name, params: { status: params } });
    },
  },
};
</script>

<style>
</style>