<template>
  <v-container class="white pt-8 black--text" id="profile" fluid>

    <v-row class="fill-height" justify="center">
        <a class="pt-6" @click="goToRouterLink('studentProfile')">
        <v-icon class="" color="black" large >
          mdi-arrow-left
        </v-icon>
      </a>
      
      <v-col class="" md="9">
        <v-container fluid class="">
            <v-row class="" id="division">
                <v-col class="text-h5 font-weight-bold pl-0" >
                    Pay Penalties
                </v-col>
            </v-row>

            <v-row class="pb-8" id="division">
                <v-col class="text-body-2 pl-0 " lg="3" md="3">
                    Your Penalty:
                </v-col>

                <v-col class="text-body-2 pl-0 " sm="6" mg='6' lg="6">
                    P 20.00
                </v-col>
            </v-row>

            <v-row class="pb-8" id="division">
                <v-col class="text-body-2 pl-0 " lg="3" md="3">
                    How to pay
                </v-col>

                <v-col class="text-body-2 pl-0 " sm="6" mg='6' lg="6">
                    <v-row>
                        <v-col>
                          Go to the finance department to pay cash.
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            Give the official receipt to one of the admin in the library.
                        </v-col>
                    </v-row>
                        
                </v-col>
            </v-row>
        </v-container>
      </v-col>
    </v-row>    
    
  </v-container>
</template>

<script>

  export default {
    name: 'StudentHomepage',
    methods: {
        goToRouterLink(name) {
            this.$router.push({name: name})
        }
    },
    data() {
      return {
      } 
    },
    async mounted() {
    },
  }
</script>

<style scoped>
  #profile {
    color: black;
  }

  #division {
    border-bottom-style: solid;
    border-width: 1px;
    border-color: #222222;
  }

</style>