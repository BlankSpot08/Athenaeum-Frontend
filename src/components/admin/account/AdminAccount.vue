<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="black">
      <Footer class="" />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "../../Footer.vue";

export default {
  name: "AdminAccount",
  components: {
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#loginBody {
  background-color: rgba(0, 0, 0, 0.5);
}

#upper {
  position: relative;
  background-color: black;
  color: white;
}

#upper::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url("../../../assets/homepagebg.jpeg");
  background-size: 100% 100%;

  opacity: 0.4;
}
</style>