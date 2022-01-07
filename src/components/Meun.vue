<template>

  <span v-if="store.loading">登录中...</span>
  <div v-else-if="store.user"><span>{{ store.user.u }}</span><span @click="handle">退出</span></div>
  <router-link v-else to='/Login'>登录</router-link>

</template>

<script>
import {useRouter} from 'vue-router';
import {store,loginOut} from "../store/loginuser.js";
export default {
  name: "Meun",
  setup(){
    const router = useRouter();
    const handle =async function(){
       await loginOut();
       router.push({name:'Login'})

    }

    return {
      store,
      handle
    }
  }
}
</script>

<style scoped>

</style>