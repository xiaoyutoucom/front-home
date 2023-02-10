import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import About from '../components/About'
import Fashion from '../components/Fashion'
import FashionList from '../components/FashionList'
import Com from '../components/Com'
import ComList from '../components/ComList'
import VideoList from '../components/VideoList'
import NewsList from '../components/NewsList'
import News from '../components/News'
Vue.use(Router)

export default new Router({
	mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Index',
            // component: Index,
			 component: require('@/components/Index').default
        },
        {
            path: '/About',
            name: 'About',
				 component: require('@/components/About').default

        },
        {
            path: '/videoList',
            name: 'VideoList',
			component: require('@/components/VideoList').default,
        },
        {
            path: '/newsList',
            name: 'NewsList',

			component: require('@/components/NewsList').default,
        }
		,
		{
		    path: '/news',
		    name: 'News',

			component: require('@/components/News').default,
		}
		,
		{
		    path: '/com',
		    name: 'Com',

				component: require('@/components/Com').default,
		}
		,
        {
            path: '/comList',
            name: 'ComList',

				component: require('@/components/ComList').default,
        },
		{
		    path: '/fashionList',
		    name: 'FashionList',
			component: require('@/components/FashionList').default,
		},
		{
		    path: '/fashion',
		    name: 'Fashion',
			component: require('@/components/Fashion').default,
		},
		
		
    ]
})
