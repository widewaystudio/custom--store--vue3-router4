<template>
 <div class="login-container">
   <h1>登录界面</h1>
   <span>用户名</span><input type="text" v-model="usr" class="text">
   <span class="ps">密码</span><input type="text" v-model="pw" class="text" @keyup.enter="handle">

     <button class="submit">登录{{store.loading ? "..." : ''}}</button>

 </div>
</template>

<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {store,login} from '../store/loginuser';
export default {
  name: "Login",
  setup(){
    const usr = ref(null);
    const pw = ref(null);
    const r = useRouter();
    const handle = async ()=>{
      const resp = await login(usr.value,pw.value);
      if(store.user){
        r.push({name:'Home'});
      }else{
        console.log("Error!")
      }
    }
    return {
      store,
      usr,
      pw,
      handle
    }
  }

}
</script>

<style lang='less' scoped>
.login-container{
  width:400px;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin:0 auto;
  h1{
    width:100%;
    text-align:left;
    padding-left:20px;
  }
  span{
    display:block;
    width:94px;
    flex:0 0 auto;
    text-align:right;
    height:30px;
    line-height:30px;
    margin:10px 0;
    padding-right:5px;
  }
  input{
    box-sizing:border-box;
    display:block;
    width:300px;
    height:30px;
    line-height:30px;
    border:1px solid #333;
    padding:2px;
    outline:none;
    margin:10px 0;
  }
  .submit{
    padding:10px 25px;
    background-color:green;
    color:#fff;
    display:block;
    margin:10px;
    border:0;
    border-radius:3px;


  }
}

</style>