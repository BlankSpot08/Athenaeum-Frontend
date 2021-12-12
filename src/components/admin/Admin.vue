<template>
  <v-app id="body" v-if="admin.data">
    <!-- navigation -->
    <v-navigation-drawer fixed app permanent left dark color="black">
      <template class="">
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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content @click="logout()">
              <v-list-item-title class="text-body-2">
                Logout
              </v-list-item-title>
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