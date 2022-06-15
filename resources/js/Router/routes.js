const routes = [
    {
        path: '',
        component: () => import('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: 'notes',
        component: () => import('../Pages/Notes.vue'),
        name: 'notes'
    },
]

export default routes;
