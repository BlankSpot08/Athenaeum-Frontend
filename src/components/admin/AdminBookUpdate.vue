<template>
    <v-container fluid>
      <v-row align-content='start'>
        <v-icon dark>
          mdi-book-edit
        </v-icon>
        <div class='pa-5 font-weight-bold text-h6'>
          Book Update  
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
     

            <v-simple-table fixed-header light height='360' class='ma-5 
            ' >
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
                  <tr >
                    <td>12345</td>
                    <td>Harry Potter</td>
                    <td>J.K. Rowling</td>
                    <td>Bloomsburry Publishing</td>
                    <td>Fantasy</td>
                    <td>Php 500.00</td>
                    <td class='text-right'>
                      <v-dialog v-model='dialog' width='1000' persistent>
                        <template v-slot:activator='{on, attrs}'>
                          <v-btn color='#D50000' dark v-bind='attrs' v-on='on'>
                            Edit
                          </v-btn>
                        </template>
                        <v-card class='ma-0' color='#262626' id='cards' dark width='1500'>
                          <v-card-title>
                            Add Books
                          </v-card-title>
                          <v-card-subtitle>
                            Fill up the information needed below to add book(s).
                          </v-card-subtitle>
                          <v-card-actions>
                            <v-file-input class='mx-1' placeholder="Select your files" :rules="rules" accept="image/png, image/jpeg, image/bmp" prepend-icon="mdi-image" label="Upload Book Cover"></v-file-input>
                          </v-card-actions>
                          <v-card-actions class='my-n5'>
                            <v-textarea class='mx-1' background-color='white' light label='Synopsis' placeholder="Type the synopsis" filled></v-textarea>
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-text-field class='mx-1' background-color='white' light label='ISBN' placeholder='Type the ISBN' filled></v-text-field>
                            <v-text-field class='mx-1' background-color='white' light label='Publisher' placeholder="Type the publisher's name" filled></v-text-field>
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-text-field class='mx-1' background-color='white' light label='Edition' placeholder="Type the book's edition" filled></v-text-field>
                            <v-text-field class='mx-1' background-color='white' light label='Publisher - Email' placeholder="Type the publisher's email" filled></v-text-field>
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-text-field class='mx-1' background-color='white' light label='Title' placeholder="Type the book's title" filled></v-text-field>
                            <v-text-field class='mx-1' background-color='white' light label='Publisher - Address' placeholder="Type the publisher's address" filled></v-text-field>
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-col class='ma-n3'>
                              <v-combobox class='mx-1'  v-model='start' :items="items" light background-color='white' label='Category'  filled> 
                              </v-combobox>
                            </v-col>
                            <v-col class='ma-n3'>
                              <v-text-field  class='mx-1' background-color='white' light label='Publisher - Contact Number' placeholder="Type the publisher's contact number" filled></v-text-field>
                            </v-col> 
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-col class='ma-n3'>
                              <v-combobox class='mx-1' height='10' background-color='white' light v-model="chips" chips clearable label="Tags" multiple filled>
                                <template v-slot:selection="{ attrs, item, select, selected }">
                                  <v-chip v-bind="attrs" :input-value="selected" close @click="select" @click:close="remove(item)">
                                    <strong>{{ item }}</strong>&nbsp;
                                  </v-chip>
                                </template>
                              </v-combobox>
                            </v-col>
                            <v-col class='ma-n3'>
                              <v-menu >
                                <template v-slot:activator="{on}">
                                  <v-text-field class='mx-1' :value='publicationYear' background-color='white' light v-on='on' label='Publication Year' append-icon='mdi-calendar-range' filled></v-text-field>
                                </template>
                                <v-date-picker v-model='publicationYear'></v-date-picker>
                              </v-menu>
                            </v-col>
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-text-field class='mx-1' background-color='white' light label='Call Number' placeholder="Type the book's call number" filled></v-text-field>
                            <!-- temporary(Author) -->
                            <v-text-field class='mx-1' background-color='white' light label='Author' placeholder="Type the author's name" filled></v-text-field>   
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-col class='ma-n3'>
                              <v-menu >
                                <template v-slot:activator="{on}">
                                  <v-text-field class='mx-1' :value='dateOfRegister' background-color='white' light v-on='on' label='Date of Register' append-icon='mdi-calendar-range' filled></v-text-field>
                                </template>
                                <v-date-picker v-model='dateOfRegister'></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col class='ma-n3'>
                              <v-text-field class='mx-1' background-color='white' light label='Author - Email' placeholder="Type the author's email" filled></v-text-field> 
                            </v-col>
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-text-field class='mx-1' background-color='white' light label='Registered By' placeholder="Type your name" filled></v-text-field> 
                            <v-text-field class='mx-1' background-color='white' light label='Author - Address' placeholder="Type the author's address" filled></v-text-field>
                          </v-card-actions>
                          <v-card-actions class='my-n8'>
                            <v-text-field class='mx-1 mb-4' background-color='white' light label='Price' placeholder="Type the book's price" filled></v-text-field> 
                            <v-text-field class='mx-1 mb-4' background-color='white' light label='Author - Contact Number' placeholder="Type the author's contact number" filled></v-text-field>
                          </v-card-actions>
                          <v-card-actions class='ma-2'>
                            <v-col class='ma-n2'>
                              <v-row>
                                <v-col class='my-n5'>
                                  <v-btn block color='#D50000' >
                                    Clear
                                  </v-btn>  
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col >
                                  <v-btn block color='#D50000' @click='dialog=false'>
                                    Cancel
                                  </v-btn>
                                </v-col>      
                              </v-row>
                            </v-col>
                            <v-col class='mx-n2 mt-5'> 
                              <v-btn block color='#D50000' >
                                Confirm
                              </v-btn>
                            </v-col>
                            
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </td>
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
    name: 'AdminBookUpdate',
    data() {
      return {
        start: '',
        dateOfRegister: null,
        publicationYear: null,
        dialog: false,
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
        rules: [
          value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!'
        ],
      }  
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
    }
  }
</script>