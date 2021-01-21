<template>
  <div class="ly_top">
		<div class="bl_top">
			<router-link to="/registration" tag="button" @click="ToRegistration(), name()" v-if="CheckNew" class="el_btn el_regBtn_clr">{{Registration}}</router-link>
			<router-link to="/login" tag="button" @click="ToLogin()" v-if="CheckOld" class="el_btn el_logBtn_clr">{{Login}}</router-link>
			<router-link to="/new" tag="button" @click="check03()" v-if="!isAuthenticated" class="el_btn el_nologBtn_clr">{{NoLogin}}</router-link>
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
			isChange:true
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
.el_btn {
	display: block;
	text-decoration: none;
  outline: none;
	margin: 0 5px;
}
.el_btn:active {

  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.el_regBtn_clr {
	color: red;
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}
.el_logBtn_clr {
	color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
.el_nologBtn_clr  {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
}
.bl_top {
	display: flex;
	justify-content: center;
}
</style>