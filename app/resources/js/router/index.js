import { createMemoryHistory, createRouter } from 'vue-router'
import CrmPage from "../modules/Crm/pages/CrmPage.vue";



const routes = [
    { path: '/', component: CrmPage },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes: [...routes]
})