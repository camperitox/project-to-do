export default{
    path: '/to-do',
    name: 'to-do',
    component: () => import(/* webpackChunkName: "to-do" */ '../layouts/ToDoLayout.vue'),
    children:[
        {
            path:'',
            name:'no-project',
            component: () => import(/* webpackChunkName: "no-entry" */ '../views/NoProjectView.vue')
        },
        {
            path:':id',
            name:'project',
            component: () => import(/* webpackChunkName: "entry" */ '../views/ProjectView.vue')
        }
    ]
}