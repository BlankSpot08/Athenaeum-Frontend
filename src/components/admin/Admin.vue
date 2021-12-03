<template>
  <v-app id="body" v-if="admin.data">
    <v-app-bar app dark color="#262626" height="58">
      <v-spacer></v-spacer>
      <v-menu class="pa-0 ma-0" open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color="#101010" fab small>
            <v-icon dark> mdi-account-tie </v-icon>
          </v-btn>
        </template>

        <v-container class="text-left mr-16 mt-5" fluid>
          <v-row>
            <v-col id="dropdownProfile">
              <div class="">
                <a
                  class="white--text text-subtitle-2"
                  @click="goToProfileLink()"
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

    <!-- navigation -->
    <v-navigation-drawer
      fixed
      app
      permanent
      left
      dark
      color="black"
      v-if="navDrawer == 0"
    >
      <template>
        <div
          class="
            pa-3
            red--text
            text--accent-4 text-h5 text-center
            font-weight-bold
          "
          id="border"
        >
          ATHENAEUM
        </div>
      </template>
      <div class="text-center">
        <v-avatar class="profile ma-3" color="grey" size="164" tile>
          <v-img
            v-if="admin.data.image_path"
            :src="baseline + 'image/get/' + admin.data.image_path"
            width="250"
            height="250"
            max-height="250"
            max-width="250"
          />

          <v-img
            v-else
            src="..//../assets/blank_profile.png"
            width="250"
            height="250"
            max-height="250"
            max-width="250"
          />
        </v-avatar>
      </div>
      <p class="text-center">
        {{ admin.data.lastname }}, {{ admin.data.firstname }}
        {{ admin.data.middlename }}
      </p>

      <v-divider />

      <v-list class="">
        <v-list-item-group v-model="selectedItem" color="white">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router
            :to="item.route"
            class=""
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-body-2">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view class="px-10" />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
      navDrawer: 0,
      selectedItem: 1,
      items: [
        {
          title: "Overview",
          icon: "mdi-view-dashboard",
          route: "/admin/overview",
        },
        { title: "Book Entry", icon: "mdi-book", route: "/admin/book-entry" },
        {
          title: "Borrow Confirmation",
          icon: "mdi-book-open",
          route: "/admin/borrow-confirmation",
        },
        {
          title: "Return Confirmation",
          icon: "mdi-hand-coin",
          route: "/admin/return-confirmation",
        },
        {
          title: "Book List",
          icon: "mdi-book-edit",
          route: "/admin/book-list",
        },
        {
          title: "Student List",
          icon: "mdi-school",
          route: "/admin/student-list",
        },
        {
          title: "Admin Confirmation",
          icon: "mdi-account-cog",
          route: "/admin/admin-confirmation",
        },
      ],
      admin: {},
      baseline: axios.defaults.baseURL,
    };
  },
  methods: {
    async getAdmin() {
      const token = JSON.parse(localStorage.getItem("token"));

      const admin = await axios.get("admin/get", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return admin;
    },
    goToProfileLink() {
      this.goToRouterLink("adminProfile");
      this.navDrawer++;
    },
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
    logout() {
      localStorage.removeItem("token");

      this.goToRouterLink("homepage");
    },
  },
  async mounted() {
    this.admin = await this.getAdmin();

    console.log(this.admin);
  },
};
</script>

<style scoped>
#body {
  position: relative;
  background-color: #101010;
  color: white;
}

#border {
  border-style: solid;
  border-width: 1px;
  border-color: #d50000;
}

#dropdownProfile {
  border-style: solid;
  border: 1;
  border-width: 1px;
  border-color: #222222;
  background-color: black;
}
</style>