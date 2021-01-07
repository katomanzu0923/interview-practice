<template>
<div>
	<div v-if="Up">
		<NewInterview :select="select" :face="face" @isOff="off"></NewInterview>
	</div>
	<div class="PartButton">
      <div class="NewButton">
        <button @click="PositionNew()">新卒として練習する</button>
      </div>
      <div class="OldButton">
        <button @click="PositionOld()">中途として練習する</button>
      </div>
      <div class="TechButton">
        <router-link to="/" tag="button" >戻る</router-link>
      </div>
      <div class="BackButton">
      </div>
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
      console.log(this.face)
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
  padding: 5px;
  text-decoration: none;
  outline: none;
}
.back-button {
  text-align: center;
  color: rgb(0, 0, 0);
  background:rgba(224, 222, 214, 0.548);
  border:1px solid rgb(0, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 0, 0, 0.822);
  padding: 0 50px;
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
.BackButton button:active {
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
  margin: 0 20px;
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
  margin: 0 20px;
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
  margin: 0 20px;
}
.TechButton button {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
}
.BackButton {
  display: inline;
  margin: 20px;
}
.BackButton button {
  color: rgb(0, 0, 0);
  background:rgba(255, 255, 255, 0.548);
  border:1px solid rgb(0, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 0, 0, 0.822);
}
</style>