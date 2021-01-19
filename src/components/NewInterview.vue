<template>
	<div class="contentsBody" >
			<div class="contents" v-if="select=== 1">
				<div class="NewTitle">
					<p v-if="number=== 0">あなたの自己紹介を教えてください</p>
					<p v-else-if="number === 1">{{question01}}</p>
					<p v-else-if="number === 2">{{question02}}</p>
					<p v-else-if="number === 3">{{question03}}</p>
					<p v-else-if="number === 4">{{question04}}</p>
					<p v-else-if="number === 5">ありがとうございました。それでは何か質問はありませんか？</p>
				</div>
				<div class="flex">
				<img src="@/assets/face01.png" class="face-image" alt="" v-if="face===1"><img src="@/assets/face02.png" alt="" v-if="face===2"><img src="@/assets/face03.png" alt="" v-if="face===3"><img src="@/assets/face04.png" alt="" v-if="face===4">
				</div>
				<button v-if="number=== 0" @click="next(),newrandom01()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 1" @click="next(),newrandom02()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 2" @click="next(),newrandom03()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 3" @click="next(),newrandom04()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 4" @click="next()"  class="NewButton">{{down}}</button>
				<button v-else-if="number === 5" @click="next()"  class="NewButton">{{down}}</button>
			</div>
			<div>{{finish}}</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			off:false,
			down: "次へ",
			number:0,
			newdata1:['あなたの自己PRを教えてください','あなたの成功体験を教えてください','学生時代に力を入れてきたこと'],
			newdata2:['その中で我が社に行かせそうなところを教えてください','なぜそのことに取り組もうと考えたのですか'],
			newdata3:['なぜこの職種を希望されたのですか','今回のあなたの就活軸を教えてください','現在、プログラミング学習ではどのようなことを学習しているのですか'],
			newdata4:['あなたの失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','プログラミングを学んでみた感想',],
			randomnumber:''
		}
	},
	props: {
		select: {
			type: Number,
			default: 1
		},
		face: {
			type: Number,
			default: 1
		}
	},methods: {
		next() {
			if (this.number >= 4) {
				if (this.number == 4) {
					this.down = "終了"
					this.number = this.number +1 
				}else if (this.number == 5) {
					this.number = 0
					this.$emit('isOff')
				}
			}else{
				this.$emit('protect', this.memo)
				this.number = this.number +1
				this.down = "次へ"
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
.face-image {
	width: 60%;
	height: 450px;
	@include media(m) {
		height: 200px;
	}
}
p {
	font-size: 2rem;
	text-align: center;
	margin-bottom: 5%;
	width: 100%;
	}
button {
	outline: none;
}
button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
.NewTitle p{
  width: 100%;
  text-align: center;
  color:rgba(148, 247, 90, 0.548);
  margin: 20px auto;
  -webkit-text-stroke: 1px green;
  text-stroke: 1px green;
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
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
	width: 10%;
	font-size: 1.5rem;
	padding: 5px;
	margin: 10px auto;
	@include media(m) {
		width: 20%;
		padding: 0;
		font-size: 1rem;
	}
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
  color: red;
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
	left: 0;
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

