<template>
<div class="old-body">
	<div v-if="Up">
		<OldInterview :part="part" :select="select" @isOff="off" 
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
	<div class="select">
		{{b}}
		<p>ログインありがとうございます！</p>
		下記から練習する種類を選んでください
		<div class="select-career">
			<button @click="customs00()"  class="NewButton"><span class="newspan">新卒</span>として<br>面接練習</button>
			<button @click="custom01()" class="OldButton" @mouseover="salesback()" @mouseleave="defaultback()"><span class="middlespan">営業</span>として<br>面接練習</button>
			<button @click="custom02()" class="OldButton" @mouseover="techback()" @mouseleave="defaultback()"><span class="middlespan">エンジニア</span>として<br>面接練習</button>
			<button @click="logout()" class="BackButton">ログアウト</button>
		</div>
	</div>
	<div class="memo-area" v-if="upmemo">
		<button @click="back(),open()">{{AgoText}}</button>
		<div class="memo-text" v-if="textarea">
			<div class="memo-texts" v-if="memotexts00">
				<h1>{{displayName}}様の自己紹介をしてくださいといった質問に対するメモ</h1>
				<h2>{{memocontent00}}</h2>
			</div>
			<div class="memo-texts" v-if="memotexts01">
				<h1>{{displayName}}{{memotitle01}}といった質問に対するメモ</h1>
				<h2>{{memocontent01}}</h2>
			</div>
			<div class="memo-texts" v-if="memotexts02">
				<h1>{{memotitle02}}といった質問に対して</h1>
				<h2>{{memocontent02}}</h2>
			</div>
			<div class="memo-texts" v-if="memotexts03">
				<h1>{{memotitle03}}といった質問に対して</h1>
				<h2>{{memocontent03}}</h2>
			</div>
			<div class="memo-texts" v-if="memotexts04">
				<h1>{{memotitle04}}といった質問に対して</h1>
				<h2>{{memocontent04}}</h2>
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
			AgoText:'前回の振り返りをみる',
			upmemo: false,
			uppop:false,
			b:''
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
			this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 0
		},
		custom01() {
			this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 1
		},
		custom02() {
			if(this.upmemo === true){
				this.uppop = true
				this.poppart = 1
			}else{
				this.Up = true;
				this.ContentUp = false;
				let number = 1 + Math.floor( Math.random() * 4 )
				this.select = number
				this.part = 2
			}
		},
		popcustom02() {
			this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 2
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
			if (this.ago === false && this.AgoText === '前回の振り返りを非表示') {
				this.ago = true;
				this.area = false;
				this.CustomText = 'カスタムする'
				this.AgoText = '前回の振り返りを表示';
			}else{
				this.ago = false;
				this.AgoText = '前回の振り返りを非表示'
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
h1 {
	font-size: 1rem;
	font-weight: bold;
	text-align: center;
	margin: 0 10px;
	padding: 0 2px 0;
}
h2 {
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
	width: 150px;
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
.select {
	text-align: center;
}
.select-career {
	display: flex;
	justify-content: center;
}
.logout-button {
	display: flex;
	justify-content: center;
}
.NewButton button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.OldButton button:active {
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
.NewButton {
  display: inline;
  margin: 20px;
  font-size: 1rem;
}
.button01 {
	width: 50%;
}
.NewButton {
  color: rgb(255, 0, 0);
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}

.OldButton {
  display: inline;
  margin: 20px;
}
.OldButton  {
  color: rgb(0, 0, 255);
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
.BackButton {
  display: inline;
  margin: 20px;
}
.BackButton {
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
.memo-text {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap:wrap;
}
.memo-text::after{
  content:"";
  display: block;
  width:40%;
}
.memo-texts {
	margin: 1px;
	padding: 2px 0;
	width: 40%;
	border-bottom:  1px dotted black;
	border: 1px solid rgba(0, 0, 0, 0.575);
	border-radius: 10px;
	background:rgb(230, 227, 227);
}
.memo-area {
	width: 100%;
	text-align: center;
}
.newspan {
	font-weight: bold;
}
.middlespan {
	font-weight: bold;
}
</style>