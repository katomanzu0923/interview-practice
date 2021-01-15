<template>
	<div>
		<div class="contents" >
			<div class="contents" v-if="part=== 0">
				<div class="NewTitle">
					<p v-if="number=== 0">あなたの自己紹介を教えてください</p>
					<p v-else-if="number === 1">{{displayName}}{{question01}}</p>
					<p v-else-if="number === 2">{{question02}}</p>
					<p v-else-if="number === 3">{{question03}}</p>
					<p v-else-if="number === 4">{{question04}}</p>
					<p v-else-if="number === 5">ありがとうございました。それでは何か質問はありませんか？</p>
				</div>
				<div class="flex">
					<textarea name="" id="" cols="30" rows="10" v-model="memo" placeholder="気になったことをメモ" class="NewText">memo</textarea>
				<img src="@/assets/face01.png" alt="" v-if="face===1"><img src="@/assets/face02.png" alt="" v-if="face===2"><img src="@/assets/face03.png" alt="" v-if="face===3"><img src="@/assets/face04.png" alt="" v-if="face===4">
				</div>
				<button @click="keep()" class="NewButton">保存</button>
				<button v-if="number=== 0" @click="next(),newrandom01()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 1" @click="next(),newrandom02()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 2" @click="next(),newrandom03()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 3" @click="next(),newrandom04()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 4" @click="next()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 5" @click="next()"  class="NewButton">{{down}}</button>
			</div>
			<div class="contents" v-if="part=== 1">
				<div class="NewTitle">
					<p v-if="number=== 0">あなたの自己紹介を教えてください</p>
					<p v-else-if="number === 1">{{question01}}</p>
					<p v-else-if="number === 2">{{question02}}</p>
					<p v-else-if="number === 3">{{question03}}</p>
					<p v-else-if="number === 4">{{question04}}</p>
					<p v-else-if="number === 5">ありがとうございました。それでは何か質問はありませんか？</p>
				</div>
				<div class="flex">
					<textarea name="" id="" cols="30" rows="10" v-model="memo" placeholder="気になったことをメモ" class="NewText">memo</textarea>
				<img src="@/assets/face01.png" alt="">
				</div>
				<button @click="keep()" class="NewButton">保存</button>
				<button v-if="number=== 0" @click="next(),salerandom01()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 1" @click="next(),salerandom02()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 2" @click="next(),salerandom03()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 3" @click="next(),salerandom04()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 4" @click="next()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 5" @click="next()"  class="NewButton">{{down}}</button>
			</div>
				<button @click="keep()" class="NewButton">保存</button>
				<button v-if="number=== 0" @click="next(),random01()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 1" @click="next(),random02()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 2" @click="next(),random03()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 3" @click="next(),random04()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 4" @click="next()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 5" @click="next()"  class="NewButton">{{down}}</button>
			</div>
			<div class="contents" v-if="part=== 2">
				<transition name="fade">
					<Popup :popmemo00="popmemo00" :poppart="poppart" v-on:downpop="changepop" v-if="uppop"></Popup>
				</transition>
				<div class="NewTitle">
					<p v-if="number=== 0">{{displayName}}様の自己紹介をしてください</p>
					<p v-else-if="number === 1">{{displayName}}{{question01}}</p>
					<p v-else-if="number === 2">{{question02}}</p>
					<p v-else-if="number === 3">{{question03}}</p>
					<p v-else-if="number === 4">{{question04}}</p>
					<p v-else-if="number === 5">{{question05}}</p> 
					<p v-else-if="number === 6">ありがとうございました。それでは何か質問はありませんか？</p>
				</div>
				<div class="flex">
				<img src="@/assets/face01.png" alt="">
				</div>
				<div class="button-area" v-if="number=== 0">
					<textarea name="" id="" cols="30" rows="10" v-model="memo00" placeholder="気になったことをメモ" class="NewText">memo</textarea>
					<div>
						<button @click="save00()" class="NewButton">保存</button>
						<button @click="next(),techrandom01()"  class="NewButton">{{down}}</button>
					</div>
				</div>
				<div class="button-area" v-if="number=== 1">
					<textarea name="" id="" cols="30" rows="10" v-model="memo01" placeholder="気になったことをメモ" class="NewText">memo</textarea>
					<div>
						<button @click="save01()" class="NewButton">保存</button>
						<button @click="next(),techrandom02()"  class="NewButton">{{down}}</button>
					</div>
				</div>
				<div class="button-area" v-if="number=== 2">
					<textarea name="" id="" cols="30" rows="10" v-model="memo02" placeholder="気になったことをメモ" class="NewText">memo</textarea>
					<div>
						<button @click="save02()" class="NewButton">保存</button>
						<button @click="next(),techrandom03()"  class="NewButton">{{down}}</button>
					</div>
				</div>
				<div class="button-area" v-if="number=== 3">
					<textarea name="" id="" cols="30" rows="10" v-model="memo03" placeholder="気になったことをメモ" class="NewText">memo</textarea>
					<div>
						<button @click="save03()" class="NewButton">保存</button>
						<button @click="next(),techrandom04()"  class="NewButton">{{down}}</button>
					</div>
				</div>
				<div class="button-area" v-if="number=== 4">
					<textarea name="" id="" cols="30" rows="10" v-model="memo04" placeholder="気になったことをメモ" class="NewText">memo</textarea>
					<div>
						<button @click="save04()" class="NewButton">保存</button>
						<button @click="next(),techrandom05()"  class="NewButton">{{down}}</button>
					</div>
				</div>
				<div class="button-area" v-if="number=== 5">
					<textarea name="" id="" cols="30" rows="10" v-model="memo05" placeholder="気になったことをメモ" class="NewText">memo</textarea>
					<div>
						<button @click="save05()" class="NewButton">保存</button>
						<button @click="next()"  class="NewButton">{{down}}</button>
					</div>
				</div> 
				<div class="button-area" v-if="number=== 6">
					<button  class="NewButton">保存</button>
					<button @click="next()"  class="NewButton">{{down}}</button>
				</div>
			</div>
	</div>
</template>

<script>
import Popup from "@/components/Popup.vue";
//import axios from "axios";
export default {
  components: {
		Popup,
	},
	data() {
		return {
			down:'次へ',
			memo00:'',
			memo01:'',
			memo02:'',
			memo03:'',
			memo04:'',
			memo05:'',
			number:0,
			question00:'',
			question01:'',
			question02:'',
			question03:'',
			question04:'',
			question05:'',
			math:'',
			newdata1:['あなたの自己PRを教えてください','あなたの成功体験を教えてください','学生時代に力を入れてきたこと'],
			newdata2:['その中で我が社に行かせそうなところを教えてください','なぜそのことに取り組もうと考えたのですか'],
			newdata3:['なぜこの業界を希望されたのですか','今回のあなたの就活軸を教えてください','大学では主にどんな事を学習しているのですか'],
			newdata4:['あなたの失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','大学の授業を学んでみた感想',],
			saledata1:['あなたの自己PRを教えてください','あなたの成功体験を教えてください','あなたが業務で成し遂げた事を教えてください'],
			saledata2:['その中で我が社に行かせそうなところを教えてください','なぜそのことに取り組もうと考えたのですか'],
			saledata3:['なぜこの職種を希望されたのですか','今回のあなたの就活軸を教えてください','課題が発生した時にどのようにして解決しましたか？'],
			saledata4:['あなたの失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','その手法をどのように弊社で活かしていきたいと考えていますか',],
			techdata1:['の自己PRを教えてください','の成功体験を教えてください','が業務で成し遂げた事を教えてください'],
			techdata2:['その中で我が社に行かせそうなところを教えてください','なぜそのことに取り組もうと考えたのですか'],
			techdata3:['なぜこの職種を希望されたのですか','今回の就活軸を教えてください'],
			techdata4:['業務での失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','あなたのお気に入りの言語に関して教えてください',],
			techdata5:['あなたが作成したもの中からお気に入りの言語に関して説明してください','あなたがこの言語を使用している理由を話してください','エラーに対してどのように対処していますか'],
			randomnumber:'',
			uppop:false,
			popmemo00:'',
			poppart:2
		}
	},
	props: {
		select: {
			type: Number,
			default: 1
		},
		part: {
			type: Number,
			default: 0
		}
	},
	computed: {
		displayName() {
      return this.$store.state.displayName
    },
	},
	methods: {
		next() {
			if (this.number >= 5) {
				if (this.number == 5) {
					this.down = "終了"
					this.number = this.number +1 
				}else if (this.number == 6) {
					this.number = 0
					this.$emit('isOff')
				}
			}else{
				this.$emit('protect', this.memo)
				this.number = this.number +1
				this.down = "次へ"
			}
		},
		changememo() {
			if(this.memo !== null) {
				this.$emit('upmemo')
			}
		},
		newrandom01() {
			this.randomnumber = Math.floor(Math.random() * 3);
			this.question01 = this.newdata1[this.randomnumber]
		},
		newrandom02() {
			if (this.randomnumber === 0){
				this.question02 = this.newdata2[0]
			}else{
				this.question02 = this.newdata2[1]
			}
		},
		newrandom03(){
			this.randomnumber = Math.floor(Math.random() * 3);
			this.question03 = this.newdata3[this.randomnumber]
		},
		newrandom04(){
			if (this.randomnumber === 1) {
				this.question04 = this.newdata4[2]
			}else if (this.randomnumber === 2){
				this.question04 = this.newdata4[3]
			}else{
				this.randomnumber = 1 + Math.floor(Math.random() * 2);
				this.question04 = this.newdata4[this.randomnumber]
			}
		},
		salerandom01() {
			this.randomnumber = Math.floor(Math.random() * 3);
			this.question01 = this.saledata1[this.randomnumber]
		},
		salerandom02() {
			if (this.randomnumber === 0){
				this.question02 = this.saledata2[0]
			}else{
				this.question02 = this.saledata2[1]
			}
		},
		salerandom03(){
			this.randomnumber = Math.floor(Math.random() * 3);
			this.question03 = this.saledata3[this.randomnumber]
		},
		salerandom04(){
			if (this.randomnumber === 1) {
				this.question04 = this.saledata4[2]
			}else if (this.randomnumber === 2){
				this.question04 = this.saledata4[3]
			}else{
				this.randomnumber = 1 + Math.floor(Math.random() * 2);
				this.question04 = this.saledata4[this.randomnumber]
			}
		},
			techrandom01() {
			this.randomnumber = Math.floor(Math.random() * 3);
			this.question01 = this.techdata1[this.randomnumber]
		},
		techrandom02() {
			if (this.randomnumber === 0){
				this.question02 = this.techdata2[0]
			}else{
				this.question02 = this.techdata2[1]
			}
		},
		techrandom03(){
			this.randomnumber = Math.floor(Math.random() * 1);
			this.question03 = this.techdata3[this.randomnumber]
		},
		techrandom04(){
			if (this.randomnumber === 1) {
				this.question04 = this.techdata4[2]
			}else if (this.randomnumber === 2){
				this.question04 = this.techdata4[3]
			}else{
				this.randomnumber = 1 + Math.floor(Math.random() * 2);
				this.question04 = this.techdata4[this.randomnumber]
			}
		},
		techrandom05(){
			this.randomnumber = Math.floor(Math.random() * 2);
			this.question05 = this.techdata5[this.randomnumber]
		},
		save00() {
			this.popmemo00 = this.memo00
			this.uppop = true
			this.poppart = 0
			this.$emit("save00", this.memo00)
			this.$emit("upsave")
			this.$emit("uptext00")
		},
		save01() {
			this.popmemo00 = this.memo01
			this.uppop = true
			this.poppart = 0
			this.$emit("save1", this.memo01)
			this.$emit("save01", this.question01)
			this.$emit("upsave")
			this.$emit("uptext01")
		},
		save02() {
			this.popmemo00 = this.memo02
			this.uppop = true
			this.poppart = 0
			this.$emit("save2", this.memo02)
			this.$emit("save02", this.question02)
			this.$emit("upsave")
			this.$emit("uptext02")
		},
		save03() {
			this.popmemo00 = this.memo03
			this.uppop = true
			this.poppart = 0
			this.$emit("save3", this.memo03)
			this.$emit("save03", this.question03)
			this.$emit("upsave")
			this.$emit("uptext03")
		},
		save04() {
			this.popmemo00 = this.memo04
			this.uppop = true
			this.poppart = 0
			this.$emit("save4", this.memo04)
			this.$emit("save04", this.question04)
			this.$emit("upsave")
			this.$emit("uptext04")
		},
		save05() {
			this.popmemo00 = this.memo05
			this.uppop = true
			this.poppart = 0
			this.$emit("save5", this.memo05)
			this.$emit("save05", this.question05)
			this.$emit("upsave")
			this.$emit("uptext05")
		},
		changepop(){
			this.uppop = false
		}
	}
}
</script>

<style lang="scss" scoped>
img {
	width: 60%;
	left: 25%;
	height: 450px;
}
p {
	font-size: 2rem;
	text-align: center;
	margin-bottom: 5%;
	width: 100%;
	}
button {
	outline: none;
	margin: 5px;
}
button:active {

  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
textarea {
	outline: none;
	color: black;
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
.NewTitle p{
  width: 100%;
  text-align: center;
  color:rgba(247, 205, 90, 0.548);
  margin: 50px auto;
  -webkit-text-stroke: 1px red;
  text-stroke: 1px red;
}
.OldTitle p{
  width: 100%;
  text-align: center;
  color:rgba(90, 247, 247, 0.548);
  margin: 50px auto;
  -webkit-text-stroke: 1px blue;
  text-stroke: 1px blue;
}
.TechTitle p{
  width: 100%;
  text-align: center;
  color:rgba(148, 247, 90, 0.548);
  margin: 50px auto;
  -webkit-text-stroke: 1px green;
  text-stroke: 1px green;
}
.NewButton  {
  color: red;
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
	width: 10%;
	font-size: 1.5rem;
	padding: 5px;
	margin: 10px;
}
.OldButton {
  color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
	width: 10%;
	font-size: 1.5rem;
	padding: 5px;
	margin: 10px auto;
}
.TechButton {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
	width: 10%;
	font-size: 1.5rem;
	padding: 5px;
	margin: 10px auto;
}
.NewText {
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
	width: 30%;
	font-size: 1rem;
	padding: 5px;
	margin: 0 5px;
}
.OldText {
  color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
	width: 30%;
	font-size: 1rem;
	padding: 5px;
	margin: 0 5px;
}
.TechText {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
	width: 30%;
	font-size: 1rem;
	padding: 5px;
	margin: 0 5px;
}
#button {
	display: block;
	text-align: center;
	width: 20%;
	margin-left: 40%;
	margin-top: 5%;
}
.contents {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	bottom: 10%;
	text-align: center;
	background: white;
}
.flex {
	
	display: flex;
	justify-content: space-around;
}
</style>