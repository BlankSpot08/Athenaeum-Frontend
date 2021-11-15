<template>
    <v-container fluid>
      <v-row align-content='start'>
        <v-icon dark>
          mdi-book
        </v-icon>
        <div class='pa-5 font-weight-bold text-h6'>
          Book Entry  
        </div>
      </v-row>

      <v-row class='mb-7'>
        <v-card class='ma-0' color='#262626' id='cards' dark width='1500'>
          <v-card-title>
            Add Books
          </v-card-title>
          <v-card-subtitle>
            Fill up the information needed below to add book(s).
          </v-card-subtitle>

          <v-card-actions>
            <v-file-input 
              class='mx-1' 
              placeholder="Select your files" 
              :rules="rules" 
              accept="image/png, image/jpeg, image/bmp" 
              prepend-icon="mdi-image" 
              label="Upload Book Cover">
            </v-file-input>
          </v-card-actions>
          <v-card-actions class='my-n5'>
            <v-textarea 
              class='mx-1' 
              background-color='white' 
              light label='Synopsis' 
              placeholder="Type the synopsis" 
              filled>
            </v-textarea>
          </v-card-actions>
          <v-card-actions class='my-n8'>
            <v-text-field 
              class='mx-1' 
              background-color='white' 
              light 
              label='ISBN' 
              placeholder='Type the ISBN'
              filled>
            </v-text-field>
            <v-text-field 
              class='mx-1' 
              background-color='white' 
              light label='Publisher' 
              placeholder="Type the publisher's name" 
              filled>
            </v-text-field>
          </v-card-actions>
          <v-card-actions class='my-n8'>
            <v-text-field 
              class='mx-1' 
              background-color='white' 
              light 
              label='Edition' 
              placeholder="Type the book's edition" 
              filled>
            </v-text-field>
            <v-text-field 
              class='mx-1' background-color='white' light label='Publisher - Email' placeholder="Type the publisher's email" filled></v-text-field>
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
            <v-text-field class='mx-1 mb-4' background-color='white' light label='Author - Contact Number' placeholder="Type the author's contact number" outlined></v-text-field>
          </v-card-actions>
          <v-card-actions class='ma-2'>
            <v-btn block color='#D50000' >
              Confirm
            </v-btn>
          </v-card-actions>

           
        </v-card>
      </v-row>

    </v-container>
</template>

<script>
  export default {
    name: 'AdminBookEntry',
    data() {
      return {
        start: '',
        dateOfRegister: null,
        publicationYear: null,
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