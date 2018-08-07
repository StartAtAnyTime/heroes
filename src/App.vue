<template>
  <div id="app">
    <!-- 头部 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏部分 -->
      <app-sidebar></app-sidebar>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 列表部分 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/Appsidebar';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    AppHeader,
    AppSidebar
  }
}
</script>

<style>

</style>
