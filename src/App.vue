<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- /.app bar -->

    <v-main class="bg-grey1">
      <Board v-if="viewType == 'board' || viewType == '' " 
        :sections="sections" 
        @addSection="addSection" 
        @addTask="addTask"
        @changeName="changeName"
       />
       <!-- /.board view -->
       <Tile v-if="viewType == 'tile' " 
        :sections="sections" 
        @addSection="addSection" 
        @addTask="addTask"
        @changeName="changeName"
       />
       <!-- /.tile view -->
    </v-main>
    <!-- /.main -->
  </v-app>
  <!-- /.app -->
</template>

<script>
import Board from '@/views/pages/Board.vue'
import Tile from '@/views/pages/Tile.vue'

export default {
  name: 'App',
  components:{
    Board,
    Tile
  },

  data(){
    return{
       sections:[
                {
                  'id':0,
                  'name':'todo',
                  'task':[
                    {'taskName':'create web'},{'taskName':'create mobile'},{'taskName':'check homepage error'}
                  ],
                },
                {
                  'id':1,
                  'name':'ongoing',
                  'task':[
                    {'taskName':'create web mock up'},{'taskName':'create mobile mock up'}
                  ],
                },
                {
                  'id':2,
                  'name':'done',
                  'task':[
                    {'taskName':'Meeting with team'},{'taskName':'AWS pemkey'},{'taskName':'Client with meeting'}
                  ],
                },
        ],
        viewType:'board',

    }
  },
  mounted(){
        this.viewType = this.$route.query.views != undefined ? this.$route.query.views :'board'
  },
  methods:{
    addSection(){
     const data = { 'id':`${this.sections.length}`, 'name':`new ${this.sections.length}`, 'task':[]}
      this.sections.push(data)
    },
    addTask(id){
      let taskSelected = this.sections.filter(data => data.id  == id);
      const newTask = {'taskName':`new task ${taskSelected[0].task.length}`}
      taskSelected[0].task.push(newTask)
    },
    changeName(newName, index){
      this.sections[index].name =newName
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';


</style>