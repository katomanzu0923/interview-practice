import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth';
import router from '../router';



Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		idToken: null,
		displayName: 'あなた',
	}, 
	getters: {
		idToken: state => state.idToken,
		displayName: state => state.displayName
	},
	mutations: {
		updateIdToken(state, idToken) {
			state.idToken = idToken;
		},
		getName(state, displayName) {
			state.displayName = displayName;
		}
	},
	actions: {
		login({ commit }, authData) {
			axios.post('/accounts:signInWithPassword?key=AIzaSyD8bAjgQJ_vXIeBT843QCStQVJsyQCfsmU'
			, {
				displayName: authData.displayName,
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			}
			).then(response => {
				commit('updateIdToken', response.data.idToken);
				commit('getName' , response.data.displayName);
				localStorage.setItem('idToken', response.data.idToken)
				router.push('/user')
			});
		},
		register({ commit }, authData) {
			axios.post('/accounts:signUp?key=AIzaSyD8bAjgQJ_vXIeBT843QCStQVJsyQCfsmU'
			, {
				displayName: authData.displayName,
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			}
			).then(response => {
				commit('updateIdToken', response.data.idToken);
				commit('getName' , response.data.displayName);
				localStorage.setItem('idToken', response.data.idToken)
				router.push('/user')
			});
		},
		logout({ commit } ) {
			commit('updateIdToken', null);
			commit('getName', 'あなた');
			localStorage.removeItem('idToken');
			router.replace('/');
		},
	}
})