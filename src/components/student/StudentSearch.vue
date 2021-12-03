<template>
  <v-container fluid>
    <v-row>
      <v-col> </v-col>
    </v-row>

    <v-row justify="center" class="pt-16"
      ><v-col class="text-body-2" lg="6">
        <div class="pl-6">
          <div class="pb-2">
            Your search for "{{ $route.query.query }}" did not have any matches.
          </div>

          <div class="pb-1">Suggestions:</div>
          <div class="pl-5">
            <div>• Try different keywords</div>
            <div>• Try using a title, author, or publisher</div>
            <div>
              • Try a category, like horror, fantasy, psychology, or
              adventure/action
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StudentSearch",
  methods: {},
  data() {
    return {
      books: {},
    };
  },
  async mounted() {},
};
</script>

<style scoped>
</style>