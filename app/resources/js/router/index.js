import {createRouter, createWebHistory} from "vue-router";
import Company from "../modules/Company/routes/company.js";
import Crm from "../modules/Crm/routes/crm.js"


export const router = createRouter({
    history: createWebHistory(),
    routes: [...Company, ...Crm],
});
