<template>
  <v-app>
    <v-main>
      <v-container>
        <a class="black--text" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
          Back
        </a>
        <div class="text-h4 font-weight-bold mt-10">
          Contact Customer Service
        </div>
        <div class="text-h5 font-weight-bold mt-10 mb-5">
          Call us from any phone
        </div>
        <div v-for="item in items" :key="item.phone" class="text-h6">
          <p class="mb-n1">{{ item.phone }}</p>
        </div>
        <p class="mt-5">{{ items[2].moreInfo }}</p>

        <v-divider></v-divider>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      items: [
        { phone: "- 09673327890" },
        { phone: "- 09923787289" },
        {
          moreInfo:
            "You can only use Philippine number on order to reach these contacts.",
        },
      ],
    };
  },
  methods: {
    goToRouterLink(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<style scoped>
</style>
