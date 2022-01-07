<template>
<div class="loading-container">
  <div class="content">数据加载中...</div>
</div>
</template>

<script>
import {onBeforeMount,watchEffect,computed,onBeforeUnmount} from 'vue';
import {useRouter,useRoute} from 'vue-router';
import { store } from '../store/loginuser';
export default {
  name: "Loading",
  setup(){
    let id = 0;
    let status = computed(()=>store.status);
    const route = useRoute();
    const router = useRouter();
    onBeforeMount(function(){
      id = watchEffect(()=>{
         if(status.value === 'login'){
           router.push({name:route.query.url});
         }else if(status.value === 'unLogin'){
           if(route.query.url){
            router.push({to:'/Login'});
           }else{
             router.push({to:'/'});
           }
         }
      });

    });
    onBeforeUnmount(function(){
      id();
    })
    return {
       id,
      status,
    }
  }
}
</script>

<style lang='less' scoped>
.loading-container{
  width:100%;
  height:100%;
  position:fixed;
  display:block;
  left:0;
  top:0;
  background-color:rgba(0,0,0,0.3);

  .content{
    transform:translate(-50%,-50%);
    min-width:100px;
    margin:50% 50%;
    padding:10px 25px;
    color:#fff;
    background-color:#2c3e50;
    border:1px solid #fff;

  }
}
</style>