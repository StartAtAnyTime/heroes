<template>
     <div>
        <h2 class="sub-header">修改英雄</h2>
        <form>
            <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" class="form-control" id="name" placeholder="英雄名称" v-model="formdata.name">
            </div>
            <div class="form-group">
            <label for="gender">英雄性别</label>
            <input type="text" class="form-control" id="gender" placeholder="英雄性别" v-model="formdata.gender">
            </div>
            
            <button @click.prevent="handleEdit" type="submit" class="btn btn-success">提交</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props:['id'],
    data(){
        return {
            formdata:{
                name:'',
                gender:''
            }
        }
    },
    methods:{
        renderRequest () {
            axios
                .get(`http://localhost:3000/heroes/${this.id}`)
                .then(res =>{
                    if(res. status ===200){
                        this.formdata=res.data
                    }
                })
                .catch(err => {
                    console.log(err);
                    
                })
        }, 
        handleEdit () {
            axios
                .put(`http://localhost:3000/heroes/${this.id}`,this.formdata)
                .then (res => {
                    if(res.status === 200){
                        this.$router.push('/heroes')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    created() {
        this.renderRequest()
    },
};
</script>

<style>

</style>
