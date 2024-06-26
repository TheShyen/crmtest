export default [
    {
        path: "/crm",
        component: () => import("../pages/CrmPage.vue"),
        children: [
            {
                path: 'lead',
                component: () => import("../pages/Lead.vue")
            },
            {
                path: 'deals',
                component: () => import("../pages/Deals.vue")
            },
        ]
    },
];