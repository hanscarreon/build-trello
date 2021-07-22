<template>
<div>
  <div class="mt-5 px-2">
    <v-expansion-panels>
      <v-expansion-panel  v-for="(data, index ) in sections" :key="index">
        <v-expansion-panel-header>
          <input class=" mb-2 px-1" :value="data.name" @change="nameChange($event.target.value,index)" >
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-divider inset ></v-divider>
          <v-list-item-group
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in data.task"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <!-- /.list icon -->
              <v-list-item-content>
                <v-list-item-title v-text="item.taskName"></v-list-item-title>
              </v-list-item-content>
              <!-- /.list content -->
            </v-list-item>
            <!-- /.list item -->
          </v-list-item-group>
          <!-- /.group -->
        </v-expansion-panel-content>
        <!-- /.panel content -->
      </v-expansion-panel>
      <!-- /.expansion -->
    </v-expansion-panels>
  </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  
  props:['sections'],
    components: {
        draggable,
    },
    data(){
        return{
             items: [
                { title: 'View' },
                { title: 'Edit' },
                { title: 'Delete' },
            ],
        }
    },
    
    methods:{
        addNewSection(){
            this.$emit('addSection')
        },
        addNewTask(id){
            this.$emit('addTask',id)
        },
        nameChange(event,index){
            this.$emit('changeName',event,index)
        },
        log: function(evt) {
            window.console.log(evt);
        }
    }

}
</script>

<style>

</style>