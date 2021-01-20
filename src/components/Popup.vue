<template>
	<div>
		<div class="popupbody">
			<div class="memopop" v-if="poppart === 0">
				<h1>{{save}}</h1>
				<p>{{popmemo00}}</p>
				<button @click="downpop" class="center">OK</button>
			</div>
			<div class="memopop" v-if="poppart === 1">
				<h3>前回のメモ内容が無くなりますが、よろしいでしょうか？</h3>
					<button @click="ispopinterview" class="left">OK</button><button @click="downpop" class="right">キャンセル</button>
			</div>
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
button {
	outline: none;
	margin: 5px;
}
button:active {

  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
h1 {
	margin: 5px;
	font-weight: normal;
	font-size: 1.5rem;
}
h3{
	font-weight: normal;
	text-align: center;
}
p {
	text-align: center;
	margin: 5px;
}
.center {
	position: absolute;
	width: 20%;
	left: 40%;
	bottom: 5px;
}
.flex {
	display: flex;
}
.left {
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
.right{
	position: absolute;
	font-size: 1rem;
	width: 35%;
	left: 55%;
	bottom: 30px;
	color: red;
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}
.popupbody {
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.671);
	width: 100%;
	height: 100%;
}
.memopop {
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
</style>