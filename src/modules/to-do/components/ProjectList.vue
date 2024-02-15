<template>
  <div class="entry-list-container">
    <div class="entry-scrollarea">
        <Project
            v-for="item in 10"
            :key="item">
            Entry
        </Project>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components:{
        Project: defineAsyncComponent(() => import('@/modules/to-do/components/Project.vue'))
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