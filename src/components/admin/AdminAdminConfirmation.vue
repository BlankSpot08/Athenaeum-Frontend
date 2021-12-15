<template>
  <v-container fluid>
    <v-row align-content="start">
      <v-icon dark> mdi-account-cog </v-icon>
      <div class="pa-5 font-weight-bold text-h6">Admin Confirmation</div>
    </v-row>
    <v-row class="mb-7">
      <v-card class="ma-0" color="#262626" id="cards" dark width="1500">
        <v-simple-table fixed-header light height="490" class="ma-5">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-subtitle-1 text-left">ID Number</th>
                <th class="text-subtitle-1 text-left">Name</th>
                <th class="text-subtitle-1 text-left">Email Address</th>
                <th class="text-subtitle-1 text-left">Contact No.</th>
                <th class="text-subtitle-1 text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in admin_requests.data" :key="index">
                <td>{{ value.id }}</td>
                <td>
                  {{ value.lastname }}, {{ value.firstname }}
                  {{ value.middlename }}
                </td>
                <td>{{ value.emailaddress }}</td>
                <td>{{ value.contactno }}</td>

                <td class="text-right">
                  <v-dialog max-width="500" v-model="value.current">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        color="#D50000"
                        dark
                        class="mr-5"
                      >
                        Reject
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title>
                        Are you sure you want to reject this admin registration
                        request?
                      </v-card-title>

                      <v-card-actions>
                        <v-container fluid>
                          <v-row>
                            <v-col class="text-right">
                              <v-btn
                                @click="value.current = false"
                                color="#D50000"
                                dark
                              >
                                Cancel
                              </v-btn>
                            </v-col>
                            <v-col>
                              <v-btn
                                @click="rejectAdminRequest(value)"
                                color="#D50000"
                                dark
                              >
                                Confirm
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-dialog max-width="500" v-model="value.current">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        color="#D50000"
                        dark
                        class="mr-5"
                      >
                        Accept
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title>
                        Are you sure you want to accpet this admin registration
                        request?
                      </v-card-title>

                      <v-card-actions>
                        <v-container fluid>
                          <v-row>
                            <v-col class="text-right">
                              <v-btn
                                @click="value.current = false"
                                color="#D50000"
                                dark
                              >
                                Cancel
                              </v-btn>
                            </v-col>
                            <v-col>
                              <v-btn
                                @click="acceptAdminRequest(value)"
                                color="#D50000"
                                dark
                              >
                                Confirm
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-card-actions> </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "AdminAdminConfirmation",
  methods: {
    async acceptAdminRequest(admin_request) {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.post(
        "admin/acceptAdminRequest",
        {
          id: admin_request.id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      admin_request.current = false;
    },
    async rejectAdminRequest(admin_request) {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.delete("admin/rejectAdminRequest", {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          id: admin_request.id,
        },
      });

      admin_request.current = false;
    },
    async getAllAdminRequests() {
      const token = JSON.parse(localStorage.getItem("token"));

      const adminRequests = await axios.get("admin/getAllAdminRequests", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return adminRequests;
    },
  },
  data() {
    return {
      admin_requests: {},
    };
  },
  async mounted() {
    this.admin_requests = await this.getAllAdminRequests();

    let i = 0;
    for (i = 0; i < this.admin_requests.data.length; i++) {
      this.$set(this.admin_requests.data[i], "current", false);
    }

    console.log(this.admin_requests);
  },
};
</script>