<template>
    <v-container fluid>
      <v-row align-content='start'>
        <v-icon dark>
          mdi-account-cog
        </v-icon>
        <div class='pa-5 font-weight-bold text-h6'>
          Admin Confirmation
        </div>
      </v-row>
      <v-row class='mb-7'>
        <v-card class='ma-0' color='#262626' id='cards' dark width='1500'>

            <v-simple-table fixed-header light height='490' class='ma-5' >
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
    name: 'AdminAdminConfirmation',
    method: {

    }
  }
</script>