export default [
  {
    path: "/company",
    component: () => import("../pages/Company.vue"),
    children: [
      {
        path: "users",
        component: () => import("../pages/Users.vue"),
      },
      {
        path: "structure",
        component: () => import("../pages/Structure.vue"),
      },
    ],
  },
  {},
];
