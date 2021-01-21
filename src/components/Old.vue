<template>
<div class="ly_old">
	<div v-if="Up">
		<OldInterview :part="part" :select="select" :FaceNumber="FaceNumber" @isOff="off" 
		v-on:save00="memocontent00= $event" 
		v-on:save01="memotitle01= $event" v-on:save1="memocontent01= $event" 
		v-on:save02="memotitle02= $event" v-on:save2="memocontent02= $event"
		v-on:save03="memotitle03= $event" v-on:save3="memocontent03= $event"
		v-on:save04="memotitle04= $event" v-on:save4="memocontent04= $event"
		v-on:upsave="changememo" 
		v-on:uptext00="isuptext00"
		v-on:uptext01="isuptext01"
		v-on:uptext02="isuptext02"
		v-on:uptext03="isuptext03"
		v-on:uptext04="isuptext04">
		</OldInterview>
	</div>
	<transition name="fade">
		<Popup :poppart="poppart" v-on:downpop="changepop" v-on:ispopinterview="popcustom02" v-if="uppop"></Popup>
	</transition>
	<div class="bl_old_ttl">
		{{b}}
		<p>ログインありがとうございます！</p>
		下記から練習する種類を選んでください
		<div class="bl_oldBtn_career">
			<button @click="customs00()"  class="el_btn el_newBtn_clr"><span class="newspan">新卒</span>として<br>面接練習</button>
			<button @click="custom01()" class="el_btn el_oldBtn_clr" @mouseover="salesback()" @mouseleave="defaultback()"><span class="el_btn_txt">営業</span>として<br>面接練習</button>
			<button @click="custom02()" class="el_btn el_oldBtn_clr" @mouseover="techback()" @mouseleave="defaultback()"><span class="el_btn_txt">エンジニア</span>として<br>面接練習</button>
			<button @click="logout()" class="el_btn el_bckBtn_clr">ログアウト</button>
		</div>
	</div>
	<div class="bl_oldMemo" v-if="upmemo">
		<button @click="back(),open()" class="el_memoBtn">前回の振り返りを{{AgoText}}</button>
		<div class="bl_memoTxts" v-if="textarea">
			<div class="bl_memoTxt" v-if="memotexts00">
				<h1 class="el_memoTxt_ttl" >{{displayName}}様の自己紹介をしてください<br>といった質問に対するメモ</h1>
				<h2 class="el_memoTxt_cont">{{memocontent00}}</h2>
			</div>
			<div class="bl_memoTxt" v-if="memotexts01">
				<h1 class="el_memoTxt_ttl">{{displayName}}{{memotitle01}}<br>といった質問に対するメモ</h1>
				<h2 class="el_memoTxt_cont">{{memocontent01}}</h2>
			</div>
			<div class="bl_memoTxt" v-if="memotexts02">
				<h1 class="el_memoTxt_ttl">{{memotitle02}}<br>といった質問に対して</h1>
				<h2 class="el_memoTxt_cont">{{memocontent02}}</h2>
			</div>
			<div class="bl_memoTxt" v-if="memotexts03">
				<h1 class="el_memoTxt_ttl">{{memotitle03}}<br>といった質問に対して</h1>
				<h2 class="el_memoTxt_cont">{{memocontent03}}</h2>
			</div>
			<div class="bl_memoTxt" v-if="memotexts04">
				<h1 class="el_memoTxt_ttl">{{memotitle04}}<br>といった質問に対して</h1>
				<h2 class="el_memoTxt_cont">{{memocontent04}}</h2>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from "axios";
import OldInterview from "@/components/OldInterview.vue";
import Popup from "@/components/Popup.vue";

export default {
	components: {
		OldInterview,
		Popup
	},
	data() {
    return {
			NewNone: true,
			select: 0,
			part: '',
			Up: false,
			ContentUp: true,
			ago: false,
			area: false,
			text:'',
			textarea: false,
			memotexts00:false,
			memotexts01:false,
			memotexts02:false,
			memotexts03:false,
			memotexts04:false,
			memotitle01:'',
			memotitle02:'',
			memotitle03:'',
			memotitle04:'',
			memocontent01:'特になし',
			memocontent02:'特になし',
			memocontent03:'特になし',
			memocontent04:'特になし',
			CustomText:'カスタムする',
			AgoText:'表示',
			upmemo: false,
			uppop:false,
			FaceNumber:''
    }
	},
	computed: {
		idToken() {
			return this.$store.getters.idToken
		},
		photoURL() {
      return this.$store.state.photoURL
		},
		displayName() {
      return this.$store.state.displayName
    },
	},
	methods: {
		off() {
			this.Up = false
			this.ContentUp = true
		},
		defaultback() {
			this.$store.dispatch("defaultChange");
		},
		newback() {
			this.$store.dispatch("newChange");
		},
		salesback() {
			this.$store.dispatch("salesChange");
		},
		techback() {
			this.$store.dispatch("techChange");
		},
		customs00() {
			if(this.upmemo === true){
				this.uppop = true
				this.poppart = 1
				this.part = 0
			}else{
				this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 0
			let facenumber = Math.floor( Math.random() * 3 )
			this.FaceNumber = facenumber
			}
		},
		custom01() {
			if(this.upmemo === true){
				this.uppop = true
				this.poppart = 1
				this.part = 1
			}else{
				this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 1
			let facenumber = Math.floor( Math.random() * 3 )
			this.FaceNumber = facenumber
			}
		},
		custom02() {
			if(this.upmemo === true){
				this.uppop = true
				this.poppart = 1
				this.part = 2
			}else{
				this.Up = true;
				this.ContentUp = false;
				let number = 1 + Math.floor( Math.random() * 4 )
				this.select = number
				this.part = 2
				let facenumber = Math.floor( Math.random() * 3 )
				this.FaceNumber = facenumber
			}
		},
		popcustom02() {
			if(this.part === 0) {
			this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 0
			this.upmemo = false
			this.memotexts00 = false
			this.memotexts01 = false
			this.memotexts02 = false
			this.memotexts03 = false
			this.memotexts04 = false
			this.memotitle01 = ''
			this.memotitle02 = ''
			this.memotitle03 = ''
			this.memotitle04 = ''
			this.memocontent00 = ''
			this.memocontent01 = ''
			this.memocontent02 = ''
			this.memocontent03 = ''
			this.memocontent04 = ''
			}else if(this.part ===1) {
				this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 1
			this.upmemo = false
			this.memotexts00 = false
			this.memotexts01 = false
			this.memotexts02 = false
			this.memotexts03 = false
			this.memotexts04 = false
			this.memotitle01 = ''
			this.memotitle02 = ''
			this.memotitle03 = ''
			this.memotitle04 = ''
			this.memocontent00 = ''
			this.memocontent01 = ''
			this.memocontent02 = ''
			this.memocontent03 = ''
			this.memocontent04 = ''
			}else{
				this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 2
			this.upmemo = false
			this.memotexts00 = false
			this.memotexts01 = false
			this.memotexts02 = false
			this.memotexts03 = false
			this.memotexts04 = false
			this.memotitle01 = ''
			this.memotitle02 = ''
			this.memotitle03 = ''
			this.memotitle04 = ''
			this.memocontent00 = ''
			this.memocontent01 = ''
			this.memocontent02 = ''
			this.memocontent03 = ''
			this.memocontent04 = ''
			}
		},
		custom() {
			if (this.area === false && this.CustomText === 'カスタムする') {
				this.area = true;
				this.ago = false;
				this.AgoText = '前回の振り返りをみる'
				this.CustomText = 'カスタムしない';
			}else{
				this.area = false;
				this.CustomText = 'カスタムする'
			}
		},
		back() {
			if (this.ago === false && this.AgoText === '非表示') {
				this.ago = true;
				this.area = false;
				this.CustomText = 'カスタムする'
				this.AgoText = '表示';
			}else{
				this.ago = false;
				this.AgoText = '非表示'
			}
		},
		register() {
			axios.post(
				'https://firestore.googleapis.com/v1/projects/interview-practice-f4b1c/databases/(default)/documents/text',
				{
					fields: {
						text: {
							stringValue:this.text
						}
					}
				}
			);
			this.text = ''
			alert('登録完了しました')
		},
		open() {
			if (this.textarea === false) {
				this.textarea = true
			}else {
				this.textarea = false
			}
		},
		changememo() {
			this.upmemo = true
		},
		logout() {
			this.$store.dispatch("logout");
		},
		logout2() {
			this.$store.dispatch("logout");
		},
		upMemo() {
			this.upmemo = true
		},
		isuptext00() {
			this.memotexts00 = true
		},
		isuptext01() {
			this.memotexts01 = true
		},
		isuptext02() {
			this.memotexts02 = true
		},
		isuptext03() {
			this.memotexts03 = true
		},
		isuptext04() {
			this.memotexts04 = true
		},
		changepop(){
			this.uppop = false
		}

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
.el_memoTxt_ttl {
	font-size: 1rem;
	font-weight: bold;
	text-align: center;
	margin: 0 10px;
	padding: 0 2px 0;
}
.el_memoTxt_cont {
	font-size: 1rem;
	font-weight: normal;
	margin: 1px 5px;
	word-break: 40%;
	text-align: start;
}
button {
	cursor:pointer;
  padding: 5px;
  text-decoration: none;
  outline: none;
	margin: 5px;
}
input {
	outline: none;
}
.fade-enter-active {
  transition: all 0.75s ease;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-to {
	opacity: 1;
}
.fade-leave-active {
  transition: all 1s ease;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-to {
	opacity: 0;
}
.bl_old_ttl {
	text-align: center;
}
.bl_oldBtn_career {
	display: flex;
	justify-content: center;
	@include media(m) {
		flex-wrap:wrap;
	}
}
.logout-button {
	display: flex;
	justify-content: center;
}
.el_newBtn button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.el_oldBtn button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.BackButton button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.PartButton {
  display: flex;
  justify-content: center;
}
.el_Btn {
  display: inline;
  margin: 1%;
  font-size: 1rem;
}

.el_newBtn_clr {
  color: rgb(255, 0, 0);
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}

.el_oldBtn_clr  {
  color: rgb(0, 0, 255);
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}

.el_bckBtn_clr {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
}
.custam-area {
	width: 100%;
	text-align: center;
}
.bl_memoTxts {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap:wrap;
	@include media(m) {
		flex-direction: wrap;
	}
}
.bl_memoTxts::after{
  content:"";
  display: block;
  width:40%;
	@include media(m) {
		width: 80%;
	}
}
.bl_memoTxt {
	margin: 1px;
	padding: 2px 0;
	width: 40%;
	border-bottom:  1px dotted black;
	border: 1px solid rgba(0, 0, 0, 0.575);
	border-radius: 10px;
	background:rgb(230, 227, 227);
	@include media(m) {
		width: 90%;
	}
}
.bl_oldMemo {
	width: 100%;
	text-align: center;
}
.newspan {
	font-weight: bold;
}
.el_btn_txt {
	font-weight: bold;
}
.el_memoBtn {
	@include media (m) {
		width: 80%;
	}
}
</style>