<template>
		<div class="ly_pop">
			<div class="bl_pop" v-if="poppart === 0">
				<h1 class="el_pop_txt">{{save}}</h1>
				<p class="el_pop_cont">{{popmemo00}}</p>
				<button @click="downpop" class="el_pop_btn el_pop_btn_l_clr">OK</button>
			</div>
			<div class="bl_pop" v-if="poppart === 1">
				<h3 class="el_pop_txt">前回のメモ内容が無くなりますが、よろしいでしょうか？</h3>
					<button @click="ispopinterview" class="el_pop_btn_l el_pop_btn_l_clr">OK</button><button @click="downpop" class="el_pop_btn_r el_pop_btn_r_clr">キャンセル</button>
			</div>
		</div>
</template>

<script>
export default {
	data() {
		return {
			save: '以下の内容で保存が完了しました',
		}
	},
	props: {
		popmemo00: {
			type:String,
			default:''
		},
		poppart: {
			type:Number,
			default:2
		}
	},
	methods: {
		downpop() {
			this.$emit("downpop")
		},
		ispopinterview() {
			this.$emit("ispopinterview")
			this.$emit("downpop")
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
.ly_pop {
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.671);
	width: 100%;
	height: 100%;
}

.bl_pop {
	position: absolute;
	top: 25%;
	margin: 0 25%;
	width: 50%;
	height: 25%;
	border: 1px double rgba(0, 0, 0, 0.63);
	border-radius: 10px;
	background: white;
	@include media(m) {
		width: 80%;
		margin: 0 10%;
	}
}

.el_pop_btn {
	outline: none;
	margin: 5px;
}
.el_pop_btn:active {

  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.el_pop_txt {
	margin: 5px;
	font-weight: normal;
	font-size: 1.5rem;
	text-align: center;
}
.el_pop_cont{
	text-align: center;
	margin: 5px;
}
.el_pop_btn {
	position: absolute;
	width: 20%;
	left: 40%;
	bottom: 5px;
}
.flex {
	display: flex;
}
.el_pop_btn_l {
	position: absolute;
	font-size: 1rem;
	left: 15%;
	width: 30%;
	bottom: 30px;
	color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
.el_pop_btn_l_clr {
	color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
.el_pop_btn_r{
	position: absolute;
	font-size: 1rem;
	width: 35%;
	left: 55%;
	bottom: 30px;
}
.el_pop_btn_r_clr{
	color: red;
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}

</style>