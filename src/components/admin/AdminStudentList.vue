<template>
  <v-container fluid>
    <v-row align-content="start">
      <v-icon dark> mdi-school </v-icon>
      <div class="pa-5 font-weight-bold text-h6">Student List</div>
    </v-row>
    <v-row class="mb-7">
      <v-card class="ma-0" color="#262626" id="cards" dark width="1500">
        <v-card-actions class="mt-8">
          <v-text-field
            class="mx-3 mt-n5"
            label="Search ID number"
            background-color="white"
            light
            filled
            v-model="search_data.id"
            height="50"
          ></v-text-field>
          <v-text-field
            class="mx-3 mt-n5"
            label="Search Student's Name"
            background-color="white"
            light
            filled
            v-model="search_data.name"
            height="50"
          ></v-text-field>
          <v-text-field
            class="mx-3 mt-n5"
            label="Search Email Address"
            background-color="white"
            light
            filled
            v-model="search_data.address"
            height="50"
          ></v-text-field>
        </v-card-actions>
        <v-card-actions class="mt-0">
          <v-col>
            <v-text-field
              class="mt-n10"
              label="Search Contact No."
              background-color="white"
              light
              filled
              v-model="search_data.contactno"
              height="50"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              class="mt-n10"
              label="Search Guardian Contact No."
              background-color="white"
              light
              filled
              v-model="search_data.guardiancontactno"
              height="50"
            ></v-text-field>
          </v-col>
          <v-col class="text-right">
            <v-btn
              class="mt-n15"
              width="200"
              color="#D50000"
              large
              @click="search()"
              height="50"
              >Search</v-btn
            >
          </v-col>
        </v-card-actions>
        <v-card-subtitle class="ml-1 mt-n10 mb-n8 text-subtitle-1">
          Student List
        </v-card-subtitle>

        <v-simple-table fixed-header light height="360" class="ma-5">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-subtitle-1 text-left">ID Number</th>
                <th class="text-subtitle-1 text-left">Name</th>
                <th class="text-subtitle-1 text-left">Email</th>
                <th class="text-subtitle-1 text-left">Contact No.</th>
                <th class="text-subtitle-1 text-left">Guardian Contact No.</th>
                <th class="text-subtitle-1 text-left">Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in students.data" :key="index">
                <td>
                  {{ value.id }}
                </td>
                <td>
                  {{ value.lastname }}, {{ value.firstname }}
                  {{ value.middlename }}
                </td>
                <td>
                  {{ value.emailaddress }}
                </td>
                <td>
                  {{ value.contactno }}
                </td>
                <td>
                  {{ value.guardiancontactno }}
                </td>
                <td>₱ {{ value.balance }}</td>
                <td>
                  <v-dialog
                    max-width="500"
                    v-model="value[`current[${index}]`]"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" color="#D50000" dark>
                        Pay
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title>
                        {{ value.id }} - {{ value.lastname }},
                        {{ value.firstname }} {{ value.middlename }}
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <div>Balance: ₱ {{ value.balance }}</div>
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col>
                              <v-text-field
                                placeholder="Amount"
                                prefix="₱"
                                label="Amount"
                                v-model="value.amount"
                                outlined
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-container fluid>
                          <v-row>
                            <v-col class="text-right">
                              <v-btn
                                @click="value[`current[${index}]`] = false"
                                color="#D50000"
                                dark
                              >
                                Cancel
                              </v-btn>
                            </v-col>
                            <v-col>
                              <v-btn
                                @click="pay(value, index)"
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
  name: "AdminStudentList",
  methods: {
    async search() {
      const token = JSON.parse(localStorage.getItem("token"));

      const search = await axios.post("admin/studentSearch", this.search_data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      this.students = search;
      console.log(this.students);
    },
    async pay(value, index) {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.put(
        "admin/studentPay",
        {
          amount: value.amount,
          studentId: value.id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      value[`current[${index}]`] = false;
    },
    async getAllStudents() {
      const token = JSON.parse(localStorage.getItem("token"));

      const students = await axios.get("admin/getAllStudents", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return students;
    },
  },
  data() {
    return {
      students: {},
      search_data: {
        id: "",
        name: "",
        email: "",
        contactno: "",
        guardiancontactno: "",
      },
    };
  },
  async mounted() {
    this.students = await this.getAllStudents();

    let i = 0;
    for (i = 0; i < this.students.data.length; i++) {
      this.$set(this.students.data[i], `current[${i}]`, false);
      this.$set(this.students.data[i], "amount", "");
    }

    console.log(this.students);
  },
};
</script>
<style scoped>
.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
  font-size: 15px;
}
</style>