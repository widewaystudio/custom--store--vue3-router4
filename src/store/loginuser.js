import {readonly,reactive,computed } from 'vue';
import * as userSev from '../Api/user';
const state = reactive({user:null,loading:false});

export const store = readonly(state);
state.status = computed(()=>state.loading ? "loading" : state.user ? 'login' : 'unLogin');
 window.store = store;
export async function login(u,password){
    state.loading = true;
    const user = await userSev.login(u,password);
     state.user = user;
     state.loading = false;
}

export async function whoAmI(){
    state.loading = true;
    const user = await userSev.whoAmI();
    state.user = user;
    state.loading = false;
}

export async function loginOut(){
    state.loading = true;
    await userSev.loginOut();
    state.user = null;
    state.loading = false;
}