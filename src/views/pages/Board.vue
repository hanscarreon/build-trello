<template>
<div>
    <v-container class="spacing-playground pa-6 bg-grey1" fluid>
    <v-row>
        <v-col class="d-flex align-center " cols="12" sm="12" >
            <div class="overflow-auto bg-grey1">
                <v-card class="d-flex justify-start  py-2 px-1  bg-grey1" flat tile >
                <div  v-for="(data, index ) in sections" :key="index" class="text-nowrap tile-section me-3">
                   <div class="row g-0">
                       <div class="col-9">
                           <input class=" mb-2 px-1" :value="data.name" @change="nameChange($event.target.value,index)" >
                       </div>
                       <!-- /.col -->
                       <div class="col-3 d-flex">
                           <v-icon right dark color="black"  class="float-end" @click="addNewTask(data.id)">mdi-plus</v-icon>
                                <v-menu bottom left >
                                <template v-slot:activator="{ on, attrs }">
                                <v-btn dark icon v-bind="attrs" v-on="on">
                                    <v-icon color="black" >mdi-dots-horizontal</v-icon>
                                </v-btn>
                                </template>
                                <v-list>
                                <v-list-item v-for="(item, i) in items" :key="i" >
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                                </v-list>
                            </v-menu>
                       </div>
                       <!-- /.col -->
                   </div>
                   <!-- /.row -->
                    <draggable class="list-group pointer" :list="data.task" group="people" @change="log" v-if="data.task.length >= 1">
                        <v-card class="pa-2 me-2 mb-2" v-for="taskData in data.task" :key="taskData.taskName">
                        {{taskData.taskName}} 
                        </v-card>
                    </draggable>
                    <!-- /. draggable -->
                    <div class="pa-2 me-2 mb-2 text-center"  v-if="data.task.length <= 0">
                        add  new task
                    </div>
                    <!-- /.no task msg -->
                </div>
                <!-- /.for -->
                <v-btn elevation="2" rounded @click="addNewSection" ><v-icon right dark>mdi-plus</v-icon> Add Section</v-btn>
                </v-card>
                <!-- /.card -->
            </div>
        </v-col>
        <!-- /.col -->
    </v-row>
    <!-- /.row -->
    </v-container>
    <!-- /.container -->
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

<style lang="scss" scoped>
@import '@/styles/styles.scss';

// fold devices (200px and up)
@media (min-width: 200px) { 
    .tile-section{
        width: 20rem;
    }

}
// xs devices (320px and up)
@media (min-width: 320px) { 
    
}
// sm devices (360px and up)
@media (min-width: 360px) { 
    
}

// Medium devices (411px and up)
@media (min-width: 411px) { 
    
}

// lg devices (tablets, 480px and up)
@media (min-width: 480px) { 

}

// sm web devices (tablets, 576px and up)
@media (min-width: 576px) { 

}

// Medium devices (tablets, 768px and up)200%
@media (min-width: 768px) { 

}

// Large devices (desktops/laptops, 992px and up) 175%
@media (min-width: 992px) {  
    
}

// X-Large devices (large desktops, 1200px and up)150%
@media (min-width: 1200px) {  
   
}

// XX-Large devices (xlarger desktops, 1500px and up)125%
@media (min-width: 1500px) {  

    .tile-section{
        width: 20rem;
    }
   
}
// XX-Large devices (xxlarger desktops, 1600px and up) 110%-1100
@media (min-width: 1600px) {  
   
}
// XX-Large devices (xxlarger desktops, 1800px and up) 90%
@media (min-width: 1750px) {  
   
}

</style>