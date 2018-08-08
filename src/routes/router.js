import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)
// 导入组件
import HeroesList from '../views/heroes/list.vue';
import EquipsList from '../views/equips/list.vue';
import weaponsList from '../views/weapons/list.vue';
// 添加英雄组件
import HeroesAdd from '../views/heroes/add.vue';
// 修改英雄组件
import HeroesEdit from '../views/heroes/edit.vue';






var router = new VueRouter({
    linkActiveClass:'active',
    routes:[
        { path:'/', redirect:'/heroes'},
        {name:'heroes', path:'/heroes', component:HeroesList},
        {name:'heroesAdd', path:'/heroes/add', component:HeroesAdd},
        {name:'heroesEdit', path:'/heroes/edit/:id', component:HeroesEdit,props:true},
        {name:'equips', path:'/equips', component:EquipsList},
        {name:'weapons', path:'/weapons', component:weaponsList}
    ]
})

export default router;