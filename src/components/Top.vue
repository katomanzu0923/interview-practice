<template>
  <div class="appBody">
		<div class="top-buttons">
			<router-link to="/registration" tag="button" @click="ToRegistration(), name()" v-if="CheckNew" :class="[uu === true ? 'AButton' : 'classB']">{{Registration}}</router-link>
			<router-link to="/login" tag="button" @click="ToLogin()" v-if="CheckOld" :class="[uu === true ? 'BButton' : 'classB']">{{Login}}</router-link>
			<router-link to="/new" tag="button" @click="check03()" v-if="!isAuthenticated" :class="[uu === true ? 'NoButton' : 'classB']">{{NoLogin}}</router-link>
			<Registration v-if="check === '01'" @isOff="off"></Registration>
			<Login v-if="check === '02'" @isOff="off"></Login>
			<New v-if="check === '03'"></New>
		</div>
  </div>
</template>

<script>
import Registration from "@//components/Registration";
import Login from "@/components/Login.vue";
import New from "@/components/New.vue";

export default {
	components: {
		Registration,
		Login,
		New,
	},
	data() {
    return {
      NewNone:true,
			OldNone:true,
			check:'',
			CheckNew:true,
			CheckOld:true,
			CheckNo:true,
			Registration: '登録する',
			Login:'ログイン',
			NoLogin:'ログインしないで練習',
			uu:true
    }
	},
	computed: {
		isAuthenticated() {
			return this.$store.getters.idToken !== null;
		}
	},
	methods: {
		ToRegistration() {
			this.check = '01'
			if (this.Registration === '登録する'){
				this.CheckNew = false
				this.CheckOld = false
				this.CheckNo = false
			}else {
				this.CheckOld = true
				this.CheckNo = true
				this.check = ''
				this.uu = true
				this.Registration = '登録する'
			}
		},
		ToLogin() {
			this.check = '02'
			if (this.Login === 'ログイン'){
				this.CheckNew = false
				this.CheckOld = false
				this.CheckNo = false
				console.log(this.check)
			}else {
				this.CheckNew = true
				this.CheckNo = true
				this.check = ''
				this.uu = true
				this.Login = 'ログイン'
			}
		},
		check03() {
			this.check = '03'
			if (this.NoLogin === 'ログインしないで練習'){
				this.CheckNew = false
				this.CheckOld = false
				this.NoLogin = '戻る'
				this.uu = false
			}else {
				this.NoLogin = 'ログインしないで練習'
				this.check = ''
				this.CheckNew = true
				this.CheckOld = true
				this.uu = true
			}
		},
		off() {
			this.check = ''
			this.CheckNew = true
			this.CheckOld = true
			this.CheckNo = true
			this.uu = true
    },
	}
}
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
  width: 30%;
  text-align: center;
  color:white;
  border-bottom: 1px solid black;
  margin: 50px auto;
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
}
button {
	display: block;
	text-decoration: none;
  outline: none;
	margin: 0 5px;
}
button:active {

  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.AButton {
	color: red;
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}
.BButton {
	color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
.NoButton  {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
}
.defaultTitle {
  width: 100%;
  text-align: center;
  color:white;
  border-bottom: 1px solid black;
  width: 15%;
  margin: 50px auto;
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
}
.top-buttons {
	display: flex;
	justify-content: center;
}
</style>