import { createMemoryHistory, createRouter } from "vue-router";
import CrmPage from "../modules/Crm/pages/CrmPage.vue";

import Company from "../modules/Company/routes/company.js";

const routes = [{ path: "/", component: CrmPage }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [...Company],
});

