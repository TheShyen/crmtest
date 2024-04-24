import { createMemoryHistory, createRouter } from "vue-router";
import CrmPage from "../modules/Crm/pages/CrmPage.vue";
import Company from "../modules/Company/routes/Company.js";

const routes = [{ path: "/", component: CrmPage }, [...Company]];

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [...Company],
});
