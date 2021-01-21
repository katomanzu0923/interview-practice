<template>
	<div class="ly_log">
		<Old v-if="Up" @logout="out" :name="name"></Old>
			<div class="bl_log_int">
				<input class="el_log_int el_log_int_clr" type="email" v-model="email" placeholder="email">
				<input class="el_log_int el_log_int_clr" type="password" v-model="password" placeholder="password">
			</div>
			<div class="bl_log_btn">
				<router-link to="/user" tag="button" class="el_log_btn el_log_btn_clr" @click.native="login()">ログインする</router-link>
				<router-link to="/" tag="button" class="el_log_btn el_log_btn_clr" @click="back()">戻る</router-link>
			</div>
	</div>
</template>

<script>
import Old from "@/components/Old.vue";



export default {
	components: {
		Old,

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

.bl_log_int {
	margin: 5px auto;
	display: flex;
	justify-content: center;
	text-align: center;
}
.el_log_int {
	display: block;
	outline: none;
	margin: 0 5px;
}
.el_log_int_clr {
	background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
}

.bl_log_btn {
	display: flex;
	justify-content: center;
}
.el_log_btn {
	display: block;
	text-align: center;
	text-decoration: none;
  outline: none;
	margin: 5px 5px;
	padding: 3px 0;
	width: 100px;
}
.el_log_btn:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.el_log_btn_clr {
	color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
</style>