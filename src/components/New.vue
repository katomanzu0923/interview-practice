<template>
<div class="ly_new">
	<div v-if="Up">
		<NewInterview :select="select" :face="face" @isOff="off"></NewInterview>
	</div>
	<div class="bl_new">
    <button class="el_btn el_btn_new" @click="PositionNew()">面接練習する</button>
    <router-link class="el_btn el_btn_bck" to="/" tag="button" >戻る</router-link>
  </div>
  </div>
</template>

<script>
import NewInterview from '@/components/NewInterview.vue';
export default {
	components: {
		NewInterview
	},
	data() {
    return {
			NewNone: true,
			select: 0,
			face: 2,
			Up: false
    }
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken
    }
  },
  created() {
    
  },
	methods: {
		PositionNew() {
      this.Up = true
			this.select = 1
			this.face = 1 + Math.floor( Math.random() * 4 )
		},
		PositionOld() {
			this.select = 2
			this.part = 'old'
			this.Up = true
		},
		PositionTech() {
			let number = 1 + Math.floor( Math.random() * 4 )
			this.select = number
			this.part = 'tech'
			this.Up = true
		},
		off() {
			this.Up = false
    },
	}
}
</script>

<style lang="scss" scoped>
button {
  outline: none;
}
button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}

.bl_new {
  display: flex;
  justify-content: center;
}

button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}

.el_btn {
  display: inline;
  margin: 0 20px;
  font-size: 1rem;
}
.el_btn_new {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
}
.el_btn_bck {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
}


</style>