<template>
  <v-container fluid class="">
    <v-row align-content="start">
      <v-icon dark> mdi-view-dashboard </v-icon>
      <div class="pa-5 font-weight-bold text-h5">Overview</div>
    </v-row>
    <v-row justify="center" class="ma-1">
      <!-- column 1 -->

      <v-col class="mx-n10" col="3">
        <v-list color="#101010" class="ma-0">
          <v-list-item-group v-model="selectedItem">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              router
              :to="item.route"
              class="my-n1"
            >
              <v-card
                class="ma-2 pa-1"
                id="cards"
                dark
                width="370"
                height="250"
              >
                <div class="text-center">
                  <v-list-item-icon class="ml-8">
                    <v-icon size="100">{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title class="text-h6">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content>
                    <v-list-item-title class="text-body-2 text-wrap">{{
                      item.description
                    }}</v-list-item-title>
                  </v-list-item-content>
                </div>
              </v-card>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <!-- column 2 -->
      <v-col class="mx-n10" col="3">
        <v-list color="#101010" class="ma-0">
          <v-list-item-group v-model="selectedItem">
            <v-list-item
              v-for="item in items2"
              :key="item.title"
              link
              router
              :to="item.route"
              class="my-n1"
            >
              <v-card
                class="ma-2 pa-1"
                id="cards"
                dark
                width="370"
                height="250"
              >
                <div class="text-center">
                  <v-list-item-icon class="ml-8">
                    <v-icon size="100">{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title class="text-h6">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content>
                    <v-list-item-title class="text-subtitle-1 text-wrap">{{
                      item.description
                    }}</v-list-item-title>
                  </v-list-item-content>
                </div>
              </v-card>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <!-- column 3 -->
      <v-col class="mx-n10" col="3">
        <v-list color="#101010" class="ma-0">
          <v-list-item-group v-model="selectedItem">
            <v-list-item
              v-for="item in items3"
              :key="item.title"
              link
              router
              :to="item.route"
              class="my-n1"
            >
              <v-card
                class="ma-2 pa-1"
                id="cards"
                dark
                width="370"
                height="250"
              >
                <div class="text-center">
                  <v-list-item-icon class="ml-8">
                    <v-icon size="100">{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title class="text-h6">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content>
                    <v-list-item-title class="text-subtitle-1 text-wrap">{{
                      item.description
                    }}</v-list-item-title>
                  </v-list-item-content>
                </div>
              </v-card>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "AdminOverview",
  data() {
    return {
      selectedItem: 1,
      items: [
        {
          title: "Book Entry",
          icon: "mdi-book",
          description: "Add books in the library.",
          route: "/admin/book-entry",
        },
        {
          title: "Book List",
          icon: "mdi-book-edit",
          description: "Update book information, and quantity.",
          route: "/admin/book-list",
        },
      ],
      items2: [
        {
          title: "Borrow Confirmation",
          icon: "mdi-book-open",
          description: "Confirmation of student's borrow request.",
          route: "/admin/borrow-confirmation",
        },
        {
          title: "Student List",
          icon: "mdi-school",
          description:
            "Showing the list of students registered in the library.",
          route: "/admin/student-list",
        },
      ],
      items3: [
        {
          title: "Return Confirmation",
          icon: "mdi-hand-coin",
          description: "Confirmation of books returned to library.",
          route: "/admin/return-confirmation",
        },
        {
          title: "Admin Confirmation",
          icon: "mdi-account-cog",
          description:
            "Confirm other admin's registration, to add them as admins too.",
          route: "/admin/admin-confirmation",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
#cards {
  background-color: #262626;
}
</style>