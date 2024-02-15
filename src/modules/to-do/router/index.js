export default{
    path: '/to-do',
    name: 'to-do',
    component: () => import(/* webpackChunkName: "to-do" */ '../layouts/ToDoLayout.vue'),
}