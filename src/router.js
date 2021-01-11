import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top.vue';
import New from '@/components/New.vue';
import Login from '@/components/Login.vue';
import Registration from '@/components/Registration.vue';
import Old from '@/components/Old.vue';
import OldInterview from '@/components/OldInterview.vue';





Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: '/',
			component:Top,
		},
		{
			path: '/new',
			component:New,
		},
		{
			path: '/login',
			component:Login,
		},
		{
			path: '/registration',
			component:Registration,
		},
		{
			path: '/user',
			component:Old,
		},
		{
			path: '/user-interview',
			component:OldInterview
		}

	]
})
