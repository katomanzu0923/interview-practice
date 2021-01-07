<template>
<div class="old-body">
	<div v-if="Up">
		<OldInterview :select="select" @isOff="off" v-on:protect="memo= $event"></OldInterview>
	</div>
	<div class="PartButton" v-if="ContentUp">
      <div class="NewButton">
        <button @click="customs()">面接練習する</button>
      </div>
      <div class="OldButton">
        <button @click="custom()">{{CustomText}}</button>
      </div>
      <div class="TechButton">
        <button @click="back()">{{AgoText}}</button>
      </div>
			<div class="TechButton">
				<button @click="logout()">ログアウト</button>
      </div>
  </div>
	<div class="custam-area" v-if="area">
		<input v-model="text">
		<button @click="register()">登録する</button>
	</div>
	<div class="memo-area" v-if="ago">
		{{memo}}
	</div>
</div>
</template>

<script>
import axios from "axios";
import OldInterview from "@/components/OldInterview.vue";

export default {
	components: {
		OldInterview
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
			memo:'',
			CustomText:'カスタムする',
			AgoText:'過去の振り返りをみる',
    }
	},
	computed: {
		idToken() {
			return this.$store.getters.idToken
		}
	},
	created() {
		axios
		.get('/comments', {
			headers: {
				Authorization: `Bearer ${this.idToken}`
			}
		})
	},
	methods: {
		off() {
			this.Up = false
			this.ContentUp = true
		},
		customs() {
			this.Up = true;
			this.ContentUp = false;
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
		},
		custom() {
			if (this.area === false && this.CustomText === 'カスタムする') {
				this.area = true;
				this.ago = false;
				this.AgoText = '過去の振り返りをみる'
				this.CustomText = 'カスタムしない';
			}else{
				this.area = false;
				this.CustomText = 'カスタムする'
			}
		},
		back() {
			if (this.ago === false && this.AgoText === '過去の振り返りをみる') {
				this.ago = true;
				this.area = false;
				this.CustomText = 'カスタムする'
				this.AgoText = '過去の振り返りを削除';
			}else{
				this.ago = false;
				this.AgoText = '過去の振り返りをみる'
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
		logout() {
			this.$store.dispatch("logout");
		},
		logout2() {
			this.$store.dispatch("logout");
		}
	}
}
</script>

<style lang="scss" scoped>
h1 {
	width: 100%;
	text-align: center;
}
button {
  padding: 5px;
  text-decoration: none;
  outline: none;
	width: 150px;
}
input {
	outline: none;
}
.logout-button {
	display: flex;
	justify-content: center;
}
.NewButton button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
.OldButton button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
.TechButton button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
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
.NewButton button {
  color: red;
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}

.OldButton {
  display: inline;
  margin: 20px;
}
.OldButton button {
  color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
.TechButton {
  display: inline;
  margin: 20px;
}
.TechButton button {
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
.memo-area {
	width: 100%;
	text-align: center;
}
</style>