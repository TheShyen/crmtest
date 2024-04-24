export default [
  {
    path: "/company",
    component: () => import("../pages/Company.vue"),
    children: [
      {
        path: "structure",
        component: () => import("../pages/Structure.vue"),
      },
      {
        path: "users",
        component: () => import("../pages/Users.vue"),
      },
    ],
  },
];
