<template>
    <!-- <v-app> -->
      <!-- <v-main> -->
        <v-container fluid>
          <v-row align-content='start'>
            <v-icon dark>
              mdi-view-dashboard
            </v-icon>
            <div class='pa-5 font-weight-bold text-h6'>
              Overview  
            </div>
          </v-row>
          <v-row justify='space-between' class='ma-3'>
            <!-- column 1 -->
          
            
            <v-list color='#101010' class='ma-0'>
              <v-list-item-group v-model='selectedItem'>
                <v-list-item v-for="item in items" :key="item.title" link router :to='item.route' class='my-n1'>
                  <v-card class='ma-2' id='cards' dark width='500' height='250'>
                    <div class='text-center'>
                      <v-list-item-icon class='ml-8 '>
                        <v-icon size='100'>{{ item.icon }}</v-icon>
                      </v-list-item-icon>   
  
                      <v-list-item-content>
                        <v-list-item-title class='text-h6'>{{ item.title }}</v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content>
                        <v-list-item-title class='text-subtitle-1 text-wrap '>{{ item.description }}</v-list-item-title>
                      </v-list-item-content>
                    </div>            
                        
                       
                  </v-card>  
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <!-- column 2 -->
            <v-list color='#101010' class='ma-0'>
              <v-list-item-group v-model='selectedItem'>
                <v-list-item v-for="item  in items2" :key="item.title" link router :to='item.route' class='my-n1'>
                  <v-card class='ma-2' id='cards' dark width='500' height='250'>
                    <div class='text-center'>
                      <v-list-item-icon class='ml-8 '>
                        <v-icon size='100'>{{ item.icon }}</v-icon>
                      </v-list-item-icon>   
  
                      <v-list-item-content>
                        <v-list-item-title class='text-h6'>{{ item.title }}</v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content>
                        <v-list-item-title class='text-subtitle-1 text-wrap'>{{ item.description }}</v-list-item-title>
                      </v-list-item-content>
                    </div>            
                         
                  </v-card>  
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-row>
        </v-container>
      <!-- </v-main> -->
    <!-- </v-app> -->
</template>
<script>
  export default {
    name: 'AdminOverview',
    data () {
      return {
        selectedItem: 1,
        items: [
          { title: 'Book Entry', icon: 'mdi-book', description: 'Add books in the library.', route: '/admin/book-entry'},
          { title: 'Return Confirmation', icon: 'mdi-hand-coin', description: 'Confirmation of books returned to library.', route: '/admin/return-confirmation'},
          { title: 'Book Search', icon: 'mdi-magnify', description: 'Search books that you want to find.', route: '/admin/book-search'},
          { title: 'Admin Confirmation', icon: 'mdi-account-cog', description: "Confirm other admin's registration, to add them as admins too.", route: '/admin/admin-confirmation'},
        ],
        items2: [
          { title: 'Borrow Confirmation', icon: 'mdi-book-open', description: "Confirmation of student's borrow request.", route: '/admin/borrow-confirmation'},
          { title: 'Book Update', icon: 'mdi-book-edit', description: 'Update book information, and quantity.', route: '/admin/book-update'},
          { title: 'Student List', icon: 'mdi-school', description: 'Showing the list of students registered in the library.', route: '/admin/student-list'},
        ],
      }
    },
    method: {

    }
  }
</script>
<style scoped>
#cards {
  background-color: #262626;
}
</style>