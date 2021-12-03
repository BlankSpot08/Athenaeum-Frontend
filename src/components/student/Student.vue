<template>
  <v-app class="" id="body" v-if="student.data">
    <v-app-bar id="navbar" class="px-9" elevation="0" app>
      <v-app-bar-title class="mr-10">
        <div class="">
          <a class="red--text text-h6" @click="goToSearchLink('studentHome')"
            >ATHENAEUM</a
          >
        </div>
      </v-app-bar-title>

      <div class="mx-5">
        <a
          class="white--text text-body-2"
          @click="goToSearchLink('studentHome')"
          >Home</a
        >
      </div>

      <div class="mr-5">
        <a
          class="white--text text-body-2"
          @click="goToSearchLink('studentReadAgain')"
          >Read Again</a
        >
      </div>

      <div class="mr-5">
        <a
          class="white--text text-body-2"
          @click="goToSearchLink('studentCategories')"
          >Categories</a
        >
      </div>

      <div class="mr-5">
        <a
          class="white--text text-body-2"
          @click="goToSearchLink('studentMyList')"
          >My List</a
        >
      </div>

      <v-spacer></v-spacer>

      <div class="mr-5">
        <v-btn icon dark small v-on:click="openSearch()" v-if="!searchHidden">
          <v-icon dark> mdi-magnify </v-icon>
        </v-btn>

        <v-text-field
          v-show="searchHidden"
          @input="search()"
          @blur="goBack()"
          v-model="searchValue"
          ref="searchInput"
          prepend-inner-icon="mdi-magnify"
          class="pt-5"
          dark
        />
      </div>

      <v-menu class="pa-0 ma-0" open-on-hover bottom offset-y>
        <template class="" v-slot:activator="{ on, attrs }">
          <div class="" v-bind="attrs" v-on="on">
            <a class="white--text text-subtitle-1">
              {{ student.data.lastname }}, {{ student.data.firstname }}
            </a>
            <v-icon dark> mdi-menu-down </v-icon>
          </div>
        </template>

        <v-container class="text-left mr-16 mt-5" fluid>
          <v-row>
            <v-col id="dropdownProfile">
              <div class="">
                <a
                  class="white--text text-subtitle-2"
                  @click="goToSearchLink('studentProfile')"
                  >Account</a
                >
              </div>
              <div class="">
                <a class="white--text text-subtitle-2" @click="logout()"
                  >Logout</a
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container class="white--text px-0 mx-0 py-0 my-0" fluid>
        <router-view :student="student" class="px-10 py-10 px-16" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentRegister",
  methods: {
    search() {
      if (this.searchValue.length == 1) {
        const routerName = this.$route.name;

        if (routerName.localeCompare("studentSearch") !== 0) {
          this.$set(this.originalRoute, "name", routerName);

          if (Object.keys(this.$route.params).length > 0) {
            this.$set(this.originalRoute, "params", this.$route.params);
          }

          if (Object.keys(this.$route.query).length > 0) {
            this.$set(this.originalRoute, "q", this.$route.query);
          }
        }
      }

      console.log("yes");
      console.log(this.originalRoute);

      if (this.searchValue.length != 0) {
        this.goToSearchLink("studentSearch", this.searchValue);
      } else {
        this.$router.push({
          name: this.originalRoute.name,
          params: this.originalRoute.params,
          query: this.originalRoute.query,
        });
      }
    },
    openSearch() {
      this.searchHidden = true;

      setTimeout(() => this.$refs.searchInput.focus(), 0);
    },
    goBack() {
      if (this.searchValue.length == 0) {
        this.searchHidden = false;
      }
    },
    goToSearchLink(name, query) {
      this.$router.push({ name: name, query: { query } });
    },
    logout() {
      localStorage.removeItem("token");

      this.goToSearchLink("homepage");
    },
    async getUser() {
      const token = JSON.parse(localStorage.getItem("token"));

      return await axios.get("student/get", {
        headers: { authorization: `Bearer ${token}` },
      });
    },
  },
  data() {
    return {
      student: {},
      searchHidden: this.$route.query.query || false,
      searchValue: this.$route.query.query || "",
      originalRoute: {},
    };
  },
  async mounted() {
    this.student = await this.getUser();
  },
};
</script>

<style scoped>
#navbar {
  background-color: #101010;
}

#dropdownProfile {
  border-style: solid;
  border: 1;
  border-width: 1px;
  border-color: #222222;
  background-color: rgba(0, 0, 0, 0.8);
}

#body {
  position: relative;
  background-color: #101010;
}
</style>