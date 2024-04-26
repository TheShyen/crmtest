import { createStore } from 'vuex'
import crmStore from "../modules/Crm/store/CrmStore.js";


export const store = createStore({
    modules: {
        crm: crmStore
    }
})