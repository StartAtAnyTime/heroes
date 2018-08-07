import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)
// 导入组件
import HeroesList from '../views/heroes/list.vue';
import EquipsList from '../views/equips/list.vue';
import weaponsList from '../views/weapons/list.vue';






var router = new VueRouter({
    routes:[
        { path:'/', redirect:'/heroes'},
        {name:'heroes', path:'/heroes', component:HeroesList},
        {name:'equips', path:'/equips', component:EquipsList},
        {name:'weapons', path:'/weapons', component:weaponsList}
    ]
})

export default router;