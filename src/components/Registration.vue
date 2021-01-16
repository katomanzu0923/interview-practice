<template>
<div>
		<div class="registration-content" v-if="RegistrationUp">
			<input type="text" v-model="name" placeholder="name">
			<input type="email" v-model="email" placeholder="email">
			<input type="password" v-model="password" placeholder="password">
		</div>
		<div class="flex">
			<router-link to="/user" tag="button" class="registration-button" @click.native="registration(), plus()">登録する</router-link>
			<router-link to="/" tag="button" class="registration-button" @click="back()">戻る</router-link>
		</div>
</div>
</template>

<script>


export default {
	components: {
	},
	data(){
		return {
			Up:false,
			RegistrationUp:true,
			name:'',
			part:'',
			email:'',
			password:'',
			kari:'',
			selected: 0,
			options: [
      { text: '新卒', value: 1 },
      { text: '中途(営業)', value: 2},
      { text: '中途(エンジニア)', value: 3}
    ]
		};
	},
	methods: {
		registration(){
			this.$store.dispatch('register', {
				displayName: this.name,
				photoURL: this.kari,
				email: this.email,
				password: this.password,
			});
			this.Up = true;
			this.RegistrationUp = false
			this.$emit('isOff')
			this.password = '';
		},
		back(){
			this.$emit('isOff')
		}
	},
	plus() {
			this.$store.state.name = this.name
		},
};
</script>
<style lang="scss" scoped>
$breakpoints: (
	m: "only screen and (max-width: 980px)",
	pc: "only screen and (max-width: 1199px)",
);
@mixin media($breakpoint) {
	@media #{map-get($breakpoints, $breakpoint)} {
		@content;
	}
}
h2 {
	width: 100%;
  text-align: center;
  color:rgba(247, 205, 90, 0.548);
  width: 15%;
  margin: 50px auto;
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
}
input {
	display: inline-block;
	color: rgb(0, 0, 0);
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
	margin: 0 5px;
	outline: none;
	width: 10%;
	padding: 5px;
	@include media(m) {
		width: 20%;
		padding: 0;
	}
}
select {
	display: block;
	color: rgb(0, 0, 0);
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
	margin: 0 5px;
	outline: none;
}
.registration-content {
	display: flex;
	justify-content: center;
	width: 100%;
}
.select {
	display: block;
	color: rgb(0, 0, 0);
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
	margin: 0 5px;
	outline: none;
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
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.flex {
	display: flex;
	justify-content: center;
}
.registration-button {
	color: rgb(255, 0, 0);
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}
</style>