<template>
	<div>
		<Old v-if="Up" @logout="out" :name="name"></Old>
		<div v-if="LoginUp">
			<div class="login-content">
				<input type="email" v-model="email" placeholder="email">
				<input type="password" v-model="password" placeholder="password">
			</div>
			<div class="flex">
				<router-link to="/user" tag="button" class="login-button" @click.native="login()">ログインする</router-link>
				<router-link to="/" tag="button" class="login-button" @click="back()">戻る</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import Old from "@/components/Old.vue";


export default {
	components: {
		Old
	},
	data(){
		return {
			Up:false,
			LoginUp:true,
			name:'',
			email:'',
			password:''
		};
	},
	methods: {
		login(){
			this.$store.dispatch('login', {
				email: this.email,
				password: this.password,
			});
		},
		back(){
			this.$emit('isOff')
		}
	}
};
</script>

<style lang="scss" scoped>
h2 {
	width: 100%;
  text-align: center;
  color:rgba(90, 247, 247, 0.548);
  width: 15%;
  margin: 50px auto;
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
}
input {
	display: block;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
	outline: none;
	margin: 0 5px;
}
button {
	display: block;
	text-align: center;
	text-decoration: none;
  outline: none;
	margin: 5px 5px;
	padding: 3px 0;
	width: 100px;
}
button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
.flex {
	display: flex;
	justify-content: center;
}
.login-content {
	margin: 5px auto;
	display: flex;
	justify-content: center;
	text-align: center;
}
.login-button {
	color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
</style>