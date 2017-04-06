<template>
  <div id="app">
    <transition name="fade"  mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
    data(){
      return {
      }
    },
    
    
  }

</script>
<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
    //transform: translateX(0px);
  }
  .fade-enter, .fade-leave-active {
    //transform: translateX(-100%);
    opacity: 0;
  }

</style>