<template>
  <v-container class="text--black" fluid v-if="temp.length == 5">
    <v-row v-for="i in temp.length" :key="i" class="">
      <v-col class="pa-0 mb-0" cols="12">
        <div class="text-h5">
          {{ categories[i - 1] }}
        </div>
      </v-col>

      <v-col
        v-for="j in maxCount"
        :key="j"
        class="mx-0 pb-16"
        v-show="temp[i - 1].books.data.length > 0"
      >
        <a
          @click="
            goToBookLink(
              'studentBook',
              temp[i - 1].books.data[
                j -
                  1 +
                  maxCount * (temp[i - 1].current - 1) -
                  (maxCount * (temp[i - 1].current - 1) + maxCount >
                    temp[i - 1].books.data.length && temp[i - 1].current != 1
                    ? maxCount * (temp[i - 1].current - 1) +
                      maxCount -
                      temp[i - 1].books.data.length
                    : 0)
              ].isbn
            )
          "
          v-if="j - 1 < temp[i - 1].books.data.length"
        >
          <v-img
            :src="
              baseline +
              'image/get/' +
              temp[i - 1].books.data[
                j -
                  1 +
                  maxCount * (temp[i - 1].current - 1) -
                  (maxCount * (temp[i - 1].current - 1) + maxCount >
                    temp[i - 1].books.data.length && temp[i - 1].current != 1
                    ? maxCount * (temp[i - 1].current - 1) +
                      maxCount -
                      temp[i - 1].books.data.length
                    : 0)
              ].image_path
            "
            height="225"
            width="150"
            max-width="161"
            max-height="225"
          />
        </a>

        <v-row class="pt-1 pb-0" v-if="j == 1 && temp[i - 1].current > 1">
          <v-col class="gray">
            <a>
              <v-btn class="" @click="back(temp[i - 1])" icon tile dark>
                <v-icon color="#999999" x-large dark>
                  mdi-arrow-left-thick
                </v-icon>
              </v-btn>
            </a>
          </v-col>
        </v-row>

        <v-row
          class="pt-1"
          v-if="
            j == maxCount &&
            temp[i - 1].current * 8 < temp[i - 1].books.data.length
          "
        >
          <v-col class="text-right">
            <a class="pr-6">
              <v-btn icon tile dark @click="next(temp[i - 1])">
                <v-icon color="#999999" x-large dark>
                  mdi-arrow-right-thick
                </v-icon>
              </v-btn>
            </a>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="py-16" v-show="temp[i - 1].books.data.length == 0">
        <div class="text-center text-body-1 my-16">
          No books with this category.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentHomepage",
  methods: {
    goToBookLink(name, isbn) {
      this.$router.push({ name: name, params: { isbn: isbn } });
    },
    async getBooksByCategory(category) {
      return await axios.post("book/getTwentyBookByCategory", {
        category: category,
      });
    },

    next(data) {
      data.current++;
    },

    back(data) {
      data.current--;
    },
  },
  data() {
    return {
      temp: [],
      baseline: axios.defaults.baseURL,
      maxCount: 8,
      categories: [
        "Mystery",
        "Religion",
        "Adventure/Action",
        "Adventure/Action",
        "Adventure/Action",
      ],
    };
  },
  async mounted() {
    let i = 0;
    for (i = 0; i < 5; i++) {
      this.temp.push({
        current: 1,
        books: await this.getBooksByCategory(this.categories[i]),
      });
    }
  },
};
</script>

<style scoped>
</style>