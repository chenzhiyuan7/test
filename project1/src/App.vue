<template>
  <div id="app">
    <component-header></component-header>
    <div class="container" >
       <!-- {{$store.state.title}} -->
        {{$store.state.color}} 
    </div>
    <component-footer></component-footer>
  </div>
</template>

<script>
import ComponentHeader from'./components/ComponentHeader'
import ComponentFooter from'./components/ComponentFooter'
export default {
  components:{
    ComponentHeader,
    ComponentFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  font-size:12px;
}

.container{
 
  margin-top:1rem;
  margin-bottom: 1rem;
}


</style>
