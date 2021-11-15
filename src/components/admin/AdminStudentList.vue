<template>
    <v-container fluid>
      <v-row align-content='start'>
        <v-icon dark>
          mdi-school
        </v-icon>
        <div class='pa-5 font-weight-bold text-h6'>
          Student List  
        </div>
      </v-row>
      <v-row class='mb-7'>
        <v-card class='ma-0' color='#262626' id='cards' dark width='1500'>
          <v-card-subtitle class='text-subtitle-1 font-weight-bold'>
            Search student name or ID number
          </v-card-subtitle>

          <v-card-actions>
            <v-text-field class='mx-3 mt-n5 mb-n4' background-color='white' light filled ></v-text-field>
            <v-btn class='mx-3 mt-n8' width='200' color='#D50000' x-large>Search</v-btn>
          </v-card-actions>
     

            <v-simple-table fixed-header light height='360' class='ma-5 
            ' >
              <template v-slot:default >
                <thead >
                  <tr>
                    <th class='text-subtitle-1 text-left'>
                      ID Number
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Name
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Email Address
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Contact No.
                    </th>
                    <th class='text-subtitle-1 text-left'>
                      Guardian Contact No.
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
  export default {
    name: 'AdminStudentList',
    method: {

    }
  }
</script>