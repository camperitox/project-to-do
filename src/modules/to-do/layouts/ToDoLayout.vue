<template>
  <Navbar></Navbar>
  <div class="d-flex">
    <div class="col-4">
      <project-list />
    </div>
    <div class="col">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import ProjectList from '@/modules/to-do/components/ProjectList.vue';

export default {
    components:{
        Navbar: defineAsyncComponent(() => import('@/modules/to-do/components/Navbar.vue')),
        ProjectList: defineAsyncComponent(() => import('@/modules/to-do/components/ProjectList.vue'))
    }
}
</script>


<style>

</style>