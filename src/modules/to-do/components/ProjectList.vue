<template>
  <div class="entry-list-container">
    <div class="entry-scrollarea">
        <Project
            v-for="item in projects"
            :key="item.id"
            :id="item.id"
            :nombre="item.name"
            :descripcion="item.description"
            >
            
        </Project>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import services from '@/services';
export default {
    components:{
        Project: defineAsyncComponent(() => import('@/modules/to-do/components/Project.vue'))
    },
    data(){
        return {
            projects: []
        }
    },
    methods:{
        async verDetalle() {
            // Lógica para ver el detalle de un proceso...
            const {data} = await services.project.getProjects();
            this.projects = data;
        },
    },
    created(){
        this.verDetalle();
    }
}
</script>

<style scoped>
.entry-list-container{

  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);

}

.entry-scrollarea{

  height: calc(100vh - 110px);
  overflow: scroll;

}

</style>