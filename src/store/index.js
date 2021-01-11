import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth';
import router from '../router';



Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		idToken: null,
		displayName: 'あなた',
		photoURL: 0,
		changeDefault: true,
		changeNew:false,
		salesChange:false,
		techChange:false
	}, 
	getters: {
		idToken: state => state.idToken,
		displayName: state => state.displayName,
		photoURL: state => state.photoURL
	},
	mutations: {
		updateIdToken(state, idToken) {
			state.idToken = idToken;
		},
		getName(state, displayName) {
			state.displayName = displayName;
		},
		changePart(state, photoURL) {
			state.photoURL = photoURL;
		},
		changeDefault(state, changeDefault) {
			state.changeDefault = changeDefault;
		},
		changeNew(state, changeNew) {
			state.changeNew = changeNew;
		},
		salesChange(state, salesChange) {
			state.salesChange = salesChange;
		},
		techChange(state, techChange) {
			state.techChange = techChange;
		},

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
				localStorage.setItem('idToken', response.data.idToken);
				router.push('/user')
			});
		},
		logout({ commit } ) {
			commit('updateIdToken', null);
			commit('getName', 'あなた');
			commit('changePart', '0');
			localStorage.removeItem('idToken');
			router.replace('/');
		},
		defaultChange({ commit } ) {
			commit('changeDefault', true);
			commit('changeNew', false);
			commit('salesChange', false);
			commit('techChange', false);
		},
		newChange({ commit } ) {
			commit('changeDefault', false);
			commit('changeNew', true);
		},
		salesChange({ commit } ) {
			commit('changeDefault', false);
			commit('salesChange', true);
		},
		techChange({ commit } ) {
			commit('changeDefault', false);
			commit('techChange', true);
		},
	}
})