export default [
  {
    path: "/company/structure",
    name: "structure",
    component: () => import("../pages/Structure.vue"),
  },
  {
    path: "/company/users",
    name: "users",
    component: () => import("../pages/Users.vue"),
  },
];
