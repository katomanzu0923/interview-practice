<template>
	<div class="ly_newint" >
			<div class="bl_newint" v-if="select=== 1">
				<div class="bl_newint_ttl">
					<p v-if="number=== 0">あなたの自己紹介を教えてください</p>
					<p v-else-if="number === 1">{{question01}}</p>
					<p v-else-if="number === 2">{{question02}}</p>
					<p v-else-if="number === 3">{{question03}}</p>
					<p v-else-if="number === 4">{{question04}}</p>
					<p v-else-if="number === 5">ありがとうございました。それでは何か質問はありませんか？</p>
				</div>
				<div class="bl_newimg">
				<img src="@/assets/face01.png" class="bl_newimg_img" alt="" v-if="face===1"><img class="bl_newimg_img" src="@/assets/face02.png" alt="" v-if="face===2"><img class="bl_newimg_img" src="@/assets/face03.png" alt="" v-if="face===3"><img class="bl_newimg_img" src="@/assets/face04.png" alt="" v-if="face===4">
				</div>
				<button v-if="number=== 0" @click="next(),newrandom01()"  class="el_btn el_btn_clr">{{down}}</button>
				<button v-else-if="number === 1" @click="next(),newrandom02()"  class="el_btn el_btn_clr">{{down}}</button>
				<button v-else-if="number === 2" @click="next(),newrandom03()"  class="el_btn el_btn_clr">{{down}}</button>
				<button v-else-if="number === 3" @click="next(),newrandom04()"  class="el_btn el_btn_clr">{{down}}</button>
				<button v-else-if="number === 4" @click="next()"  class="el_btn el_btn_clr">{{down}}</button>
				<button v-else-if="number === 5" @click="next()"  class="el_btn el_btn_clr">{{down}}</button>
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

  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.bl_newint {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	bottom: 10%;
	text-align: center;
	background: white;
}
.bl_newimg {
	display: bl_newimg;
	justify-content: space-around;
}
.bl_newimg_img {
	width: 60%;
	height: 450px;
	@include media(m) {
		height: 200px;
	}
}
.bl_newint_ttl p{
  width: 100%;
  text-align: center;
  color:rgba(148, 247, 90, 0.548);
  margin: 20px auto;
  -webkit-text-stroke: 1px green;
  text-stroke: 1px green;
}

.el_btn  {
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
.el_btn_clr {
	color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
}

</style>

