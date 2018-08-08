<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
          <!-- <a class="btn btn-success" href="add.html">添加</a> -->
          <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="item.id">
                  <td> {{index+1}} </td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  <td>
                    <!-- <a href="edit.html">edit</a> -->
                    <router-link :to="'/heroes/edit/' +item.id ">编辑</router-link>
                    &nbsp;&nbsp;
                    <a @click.prevent="handleDel(item.id)" href="javascript:void(0)">删除</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
// 导包
import axios from "axios";

export default {
    data(){
      return {
        list:[]
      }
    },
    methods:{
      renderRequest(){
        axios
          .get('http://localhost:3000/heroes')
          .then(res => {
            if(res.status===200){
              this.list=res.data
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      handleDel(id){
        if(!confirm('确认删除此数据')){
          return
        }
        axios
          .delete(`http://localhost:3000/heroes/${id}`)
          .then(res => {
            if(res.status===200){
              this.renderRequest()
            }
          })
          .catch(err => {
            console.log(err);
            
          })
      }
    },
    created() {
      this.renderRequest()
    },
}
</script>
<style>

</style>
