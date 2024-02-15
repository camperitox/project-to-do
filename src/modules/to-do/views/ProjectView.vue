<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <h1 class="align-center">{{project.name}}</h1>
        </div>
        <div>
            <button class="btn btn-danger mx-2 align-center" @click="deleteProject">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-2">
        <div class="card">
            <div class="card-body">
                {{ project.description }}
            </div>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-2">
        <h3>Tareas</h3>

    </div>
    <Fab icon="fa-save"></Fab>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import services from '@/services';

export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    data() {
        return {
            project: [],
            tasks: []
        }
    },
    methods: {
        async verDetalle() {
            const projectId = this.$route.params.id;
            // Lógica para ver el detalle de un proceso...
            const { data } = await services.project.getProject(projectId);
            this.project = data;
        },
        async listTasks() {
            const projectId = this.$route.params.id;
            // Lógica para ver el detalle de un proceso...
            const { data } = await services.project.getTasksProject(projectId);
            this.tasks = data;
            console.log(this.tasks);
        },
        async deleteProject() {
            const projectId = this.$route.params.id;
            // Lógica para ver el detalle de un proceso...
            const { data } = await services.project.deleteProject(projectId);
            this.$router.push({ name: 'no-project' })
        },
    },
    watch: {
        '$route.params.id': 'verDetalle, listTasks',
    },
    created() {
        this.verDetalle();
        this.listTasks();
    }
}
</script>

<style></style>