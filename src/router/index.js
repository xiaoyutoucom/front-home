import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import About from '../components/About'
import Fashion from '../components/Fashion'
import Com from '../components/Com'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/fashion',
            name: 'Fashion',
            component: Fashion
        }
		,
        {
            path: '/com',
            name: 'Com',
            component: Com
        }
    ]
})
