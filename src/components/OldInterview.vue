<template>
	<div>
		<div class="ly_oldMain" >
			<div class="ly_oldMain" v-if="part=== 0">
				<transition name="fade">
					<Popup :popmemo00="popmemo00" :poppart="poppart" v-on:downpop="changepop" v-if="uppop"></Popup>
				</transition>
				<div class="bl_ttl">
					<p class="el_ttl el_ttl_newClr" v-if="number=== 0">{{displayName}}様の自己紹介をしてください</p>
					<p class="el_ttl el_ttl_newClr" v-else-if="number === 1">{{displayName}}様{{question01}}</p>
					<p class="el_ttl el_ttl_newClr" v-else-if="number === 2">{{question02}}</p>
					<p class="el_ttl el_ttl_newClr" v-else-if="number === 3">{{question03}}</p>
					<p class="el_ttl el_ttl_newClr" v-else-if="number === 4">{{question04}}</p>
					<p class="el_ttl el_ttl_newClr" v-else-if="number === 5">{{question05}}</p>
					<p class="el_ttl el_ttl_newClr" v-else-if="number === 6">ありがとうございました。それでは何か質問はありませんか？</p>
				</div>
				<div class="bl_img">
				<img src="@/assets/face04.png" class="el_img" alt="" v-if="FaceNumber===0"><img src="@/assets/face01.png" class="el_img" alt="" v-if="FaceNumber===1"><img src="@/assets/face02.png" class="el_img" alt="" v-if="FaceNumber===2"><img src="@/assets/face03.png" class="el_img" alt="" v-if="FaceNumber===3">
				</div>
				<div class="bl_cont" v-if="number=== 0">
					<textarea name="" id="" cols="30" rows="10" v-model="memo00" placeholder="気になったことをメモしてください" class="el_txt el_txt_newClr" v-on:input="checkbutton()">memo</textarea>
					<div class="bl_btn">
						<button @click="save00()" :class="[ buttoncheck=== false? 'js_newBtn': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),newrandom01()"  class="js_newBtn">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 1">
					<textarea name="" id="" cols="30" rows="10" v-model="memo01" placeholder="気になったことをメモしてください" class="el_txt el_txt_newClr" v-on:input="checkbutton01()">memo</textarea>
					<div class="bl_btn">
						<button @click="save01()" :class="[ buttoncheck=== false? 'js_newBtn': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),newrandom02()"  class="js_newBtn">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 2">
					<textarea name="" id="" cols="30" rows="10" v-model="memo02" placeholder="気になったことをメモしてください" class="el_txt el_txt_newClr" v-on:input="checkbutton02()">memo</textarea>
					<div>
						<button @click="save02()" :class="[ buttoncheck=== false? 'js_newBtn': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),newrandom03()"  class="js_newBtn">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 3">
					<textarea name="" id="" cols="30" rows="10" v-model="memo03" placeholder="気になったことをメモしてください" class="el_txt el_txt_newClr" v-on:input="checkbutton02()">memo</textarea>
					<div>
						<button @click="save03()" :class="[ buttoncheck=== false? 'js_newBtn': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),newrandom04()"  class="js_newBtn">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 4">
					<textarea name="" id="" cols="30" rows="10" v-model="memo04" placeholder="気になったことをメモしてください" class="el_txt el_txt_newClr" v-on:input="checkbutton03()">memo</textarea>
					<div>
						<button @click="save04()" :class="[ buttoncheck=== false? 'js_newBtn': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),newrandom05()"  class="js_newBtn">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 5">
					<textarea name="" id="" cols="30" rows="10" v-model="memo05" placeholder="気になったことをメモしてください" class="el_txt el_txt_newClr" v-on:input="checkbutton04()">memo</textarea>
					<div>
						<button @click="save05()" :class="[ buttoncheck=== false? 'js_newBtn': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next()"  class="js_newBtn">{{down}}</button>
					</div>
				</div> 
				<div class="bl_cont" v-if="number=== 6">
					<button @click="next()"  class="js_newBtn">{{down}}</button>
				</div>
			</div>
			<div class="ly_oldMain" v-if="part=== 1">
				<transition name="fade">
					<Popup :popmemo00="popmemo00" :poppart="poppart" v-on:downpop="changepop" v-if="uppop"></Popup>
				</transition>
				<div class="OldTitle">
					<p class="el_ttl el_ttl_oldClr" v-if="number=== 0">{{displayName}}様の自己紹介をしてください</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 1">{{displayName}}様{{question01}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 2">{{question02}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 3">{{question03}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 4">{{question04}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 5">{{question05}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 6">ありがとうございました。それでは何か質問はありませんか？</p>
				</div>
				<div class="bl_img">
				<img src="@/assets/face04.png" class="el_img" alt="" v-if="FaceNumber===0"><img src="@/assets/face01.png" class="el_img" alt="" v-if="FaceNumber===1"><img src="@/assets/face02.png" class="el_img" alt="" v-if="FaceNumber===2"><img src="@/assets/face03.png" class="el_img" alt="" v-if="FaceNumber===3">
				</div>
				<div class="bl_cont" v-if="number=== 0">
					<textarea name="" id="" cols="30" rows="10" v-model="memo00" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton()">memo</textarea>
					<div>
						<button @click="save00()" :class="[ buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),salerandom01()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 1">
					<textarea name="" id="" cols="30" rows="10" v-model="memo01" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton01()">memo</textarea>
					<div>
						<button @click="save01()" :class="[ buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),salerandom02()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 2">
					<textarea name="" id="" cols="30" rows="10" v-model="memo02" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton02()">memo</textarea>
					<div>
						<button @click="save02()" :class="[ buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),salerandom03()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 3">
					<textarea name="" id="" cols="30" rows="10" v-model="memo03" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton03()">memo</textarea>
					<div>
						<button @click="save03()" :class="[ buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),salerandom04()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 4">
					<textarea name="" id="" cols="30" rows="10" v-model="memo04" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton04()">memo</textarea>
					<div>
						<button @click="save04()" :class="[ buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),salerandom05()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 5">
					<textarea name="" id="" cols="30" rows="10" v-model="memo05" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton05()">memo</textarea>
					<div>
						<button @click="save05()" :class="[ buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div> 
				<div class="bl_cont" v-if="number=== 6">
					<button @click="next()"  class="js_oldBtb">{{down}}</button>
				</div>
			</div>
			</div>
			<div class="ly_oldMain" v-if="part=== 2">
				<transition name="fade">
					<Popup :popmemo00="popmemo00" :poppart="poppart" v-on:downpop="changepop" v-if="uppop"></Popup>
				</transition>
				<div class="OldTitle">
					<p class="el_ttl el_ttl_oldClr" v-if="number=== 0">{{displayName}}様の自己紹介をしてください</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 1">{{displayName}}様{{question01}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 2">{{question02}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 3">{{question03}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 4">{{question04}}</p>
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 5">{{question05}}</p> 
					<p class="el_ttl el_ttl_oldClr" v-else-if="number === 6">ありがとうございました。それでは何か質問はありませんか？</p>
				</div>
				<div class="bl_img">
				<img src="@/assets/face04.png" class="el_img" alt="" v-if="FaceNumber===0"><img src="@/assets/face01.png" class="el_img" alt="" v-if="FaceNumber===1"><img src="@/assets/face02.png" class="el_img" alt="" v-if="FaceNumber===2"><img src="@/assets/face03.png" class="el_img" alt="" v-if="FaceNumber===3">
				</div>
				<div class="bl_cont" v-if="number=== 0">
					<textarea name="" id="" cols="30" rows="10" v-model="memo00" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton()">memo</textarea>
					<div>
						<button @click="save00()" :class="[ buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck" >保存</button>
						<button @click="next(),techrandom01()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 1">
					<textarea name="" id="" cols="30" rows="10" v-model="memo01" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton01()">memo</textarea>
					<div>
						<button @click="save01()" :class="[buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),techrandom02()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 2">
					<textarea name="" id="" cols="30" rows="10" v-model="memo02" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton02()">memo</textarea>
					<div>
						<button @click="save02()" :class="[buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),techrandom03()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 3">
					<textarea name="" id="" cols="30" rows="10" v-model="memo03" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton03()">memo</textarea>
					<div>
						<button @click="save03()" :class="[buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),techrandom04()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 4">
					<textarea name="" id="" cols="30" rows="10" v-model="memo04" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton04()">memo</textarea>
					<div>
						<button @click="save04()" :class="[buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next(),techrandom05()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div>
				<div class="bl_cont" v-if="number=== 5">
					<textarea name="" id="" cols="30" rows="10" v-model="memo05" placeholder="気になったことをメモしてください" class="el_txt el_txt_oldClr" v-on:input="checkbutton05()">memo</textarea>
					<div>
						<button @click="save05()" :class="[buttoncheck=== false? 'js_oldBtb': 'js_defBtn']" v-bind:disabled="buttoncheck">保存</button>
						<button @click="next()"  class="js_oldBtb">{{down}}</button>
					</div>
				</div> 
				<div class="bl_cont" v-if="number=== 6">
					<button @click="next()"  class="js_oldBtb">{{down}}</button>
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
			newdata1:['の自己PRを教えてください','の成功体験を教えてください','が業務で成し遂げた事を教えてください'],
			newdata2:['その中で我が社に行かせそうなところを教えてください','なぜそのことに取り組もうと考えたのですか'],
			newdata3:['なぜこの業界を希望されたのですか','今回のあなたの就活軸を教えてください','大学では主にどんな事を学習しているのですか'],
			newdata4:['あなたの失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','大学の授業を学んでみた感想',],
			newdata5:['あなたの失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','大学の授業を学んでみた感想',],
			saledata1:['の自己PRを教えてください','の成功体験を教えてください','が業務で成し遂げた事を教えてください'],
			saledata2:['その中で我が社に行かせそうなところを教えてください','なぜそのことに取り組もうと考えたのですか'],
			saledata3:['なぜこの職種を希望されたのですか','今回のあなたの就活軸を教えてください','課題が発生した時にどのようにして解決しましたか？'],
			saledata4:['あなたの失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','その手法をどのように弊社で活かしていきたいと考えていますか',],
			saledata5:['あなたの失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','その手法をどのように弊社で活かしていきたいと考えていますか',],
			techdata1:['の自己PRを教えてください','の成功体験を教えてください','が業務で成し遂げた事を教えてください'],
			techdata2:['その中で我が社に行かせそうなところを教えてください','なぜそのことに取り組もうと考えたのですか'],
			techdata3:['なぜこの職種を希望されたのですか','今回の就活軸を教えてください'],
			techdata4:['業務での失敗談を教えてください','弱みを教えてください','それを踏まえて弊社を志望する理由を教えてください','あなたのお気に入りの言語に関して教えてください',],
			techdata5:['あなたが作成したもの中からお気に入りの言語に関して説明してください','あなたがこの言語を使用している理由を話してください','エラーに対してどのように対処していますか'],
			randomnumber:'',
			uppop:false,
			popmemo00:'',
			poppart:2,
			buttoncheck:true
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
		},
		FaceNumber: {
			type: Number,
			default: 2
		}
	},
	computed: {
		displayName() {
      return this.$store.state.displayName
		},
		
	},
	methods: {
		checkbutton() {
			if(this.memo00 === '') {
				this.buttoncheck = true
			}else{
				this.buttoncheck = false
			}
		},
		checkbutton01() {
			if(this.memo01 === '') {
				this.buttoncheck = true
			}else{
				this.buttoncheck = false
			}
		},checkbutton02() {
			if(this.memo02 === '') {
				this.buttoncheck = true
			}else{
				this.buttoncheck = false
			}
		},
		checkbutton03() {
			if(this.memo03 === '') {
				this.buttoncheck = true
			}else{
				this.buttoncheck = false
			}
		},
		checkbutton04() {
			if(this.memo04 === '') {
				this.buttoncheck = true
			}else{
				this.buttoncheck = false
			}
		},
		checkbutton05() {
			if(this.memo05 === '') {
				this.buttoncheck = true
			}else{
				this.buttoncheck = false
			}
		},
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
				this.buttoncheck = true
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
		newrandom05(){
			this.randomnumber = Math.floor(Math.random() * 2);
			this.question05 = this.newdata5[this.randomnumber]
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
		salerandom05(){
			this.randomnumber = Math.floor(Math.random() * 2);
			this.question05 = this.saledata5[this.randomnumber]
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
		},
		upAlert() {
			alert('f')
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
.el_img {
	width: 60%;
	height: 450px;
	@include media(m) {
		height: 200px;
	}
}
.el_ttl {
	font-size: 2rem;
	text-align: center;
	width: 100%;
	@include media(m) {
		font-size: 1rem;
	}
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
.el_ttl_newClr{
  width: 100%;
  text-align: center;
  color:rgba(247, 205, 90, 0.548);
  margin: 20px auto;
  -webkit-text-stroke: 1px red;
  text-stroke: 1px red;
}
.el_ttl_oldClr{
  width: 100%;
  text-align: center;
  color:rgba(90, 247, 247, 0.548);
  margin: 20px auto;
  -webkit-text-stroke: 1px blue;
  text-stroke: 1px blue;
}
.js_defBtn {
	color: rgb(0, 0, 0);
  background:rgba(219, 219, 219, 0.548);
  border:1px solid rgb(0, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 0, 0, 0.822);
	width: 10%;
	font-size: 1.5rem;
	padding: 5px;
	margin: 10px;
	@include media(m) {
		width: 20%;
		padding: 0;
		font-size: 1rem;
	}
}
.js_newBtn  {
  color: red;
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
	width: 10%;
	font-size: 1.5rem;
	padding: 5px;
	margin: 10px;
	@include media(m) {
		width: 20%;
		padding: 0;
		font-size: 1rem;
	}
}
.js_oldBtb {
  color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
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
.el_txt {
	width: 30%;
	font-size: 1rem;
	padding: 5px;
	margin: 0 5px;
	@include media(m) {
		width: 80%;
		font-size: 1rem;
	}
}
.el_txt_newClr {
	background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
}
.el_txt_oldClr {
	background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
}
#button {
	display: block;
	text-align: center;
	width: 20%;
	margin-left: 40%;
	margin-top: 5%;
}
.ly_oldMain {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	bottom: 10%;
	text-align: center;
	background: white;
}
.bl_img {
	display: flex;
	justify-content: space-around;
}
.bl_btn {
	display: flex;
	justify-content: center;
}
</style>