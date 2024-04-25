import { createWebHistory, createRouter } from "vue-router";
import CrmPage from "../modules/Crm/pages/CrmPage.vue";

import Company from "../modules/Company/routes/Company.js";

const routes = [{ path: "/", component: CrmPage }];

export const router = createRouter({
  history: createWebHistory(),
  routes: [...Company],
});
