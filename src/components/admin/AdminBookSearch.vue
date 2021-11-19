<template>
    <v-container fluid>
      <v-row align-content='start'>
        <v-icon dark>
          mdi-magnify
        </v-icon>
        <div class='pa-5 font-weight-bold text-h6'>
          Book Search  
        </div>
      </v-row>
      <v-row class='mb-7'>
        <v-card class='ma-0' color='#262626' id='cards' dark width='1500'>
          <v-card-subtitle class='text-subtitle-1 font-weight-bold'>
            Search ISBN or book title
          </v-card-subtitle>

          <v-card-actions>
            <v-text-field class='mx-3 mt-n5 mb-n4' background-color='white' light filled ></v-text-field>
            <v-btn class='mx-3 mt-n8' width='200' color='#D50000' x-large>Search</v-btn>
          </v-card-actions>
     
            <v-simple-table fixed-header light height='360' class='ma-5' >
              <template v-slot:default >
                <thead >
                  <tr>
                    <th class='text-subtitle-1 text-left'>
                      ISBN
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Book Title
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Author
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Publisher
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Category
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Price
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      
                    </th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          <v-card-actions>

          </v-card-actions>

        </v-card>

      </v-row>
    </v-container>
</template>
<script>
  // import axios from 'axios'

  export default {
    name: 'AdminBookSearch',
    method: {
      async getAllBooks() {
        // const books = axios.get('admin/getAllBooks')
      }
    },
    data() {
      return {
        book: {}
      }
    }
  }
</script>