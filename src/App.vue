<template>
  <div id="nav">

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <Meun></Meun>
  </div>
  <router-view/>
</template>

<script >
import Meun from './components/Meun';
export default{
  components:{
      Meun,
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a,span {
    font-weight: bold;
    color: #2c3e50;
    margin:0 5px;
    text-decoration:none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
