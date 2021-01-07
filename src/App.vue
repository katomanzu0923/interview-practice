<template>
  <div class="all">
    <div class="top-title">
      <h3>不安を自信に</h3>
      <h2 v-if="!isAuthenticated"><span class="span">{{displayName}}</span>のための面接練習</h2>
      <h2 v-if="isAuthenticated"><span class="span">{{displayName}}様</span>のための面接練習</h2>
		</div>
    <transition name="fade">
			<router-view class="component"></router-view>
		</transition>
    <img src="@/assets/interviewback.png">
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  computed: {
		isAuthenticated() {
      return this.$store.getters.idToken !== null;
    },
    displayName() {
      return this.$store.state.displayName
    }
	},

}

</script>


<style lang="scss" scoped>
h2 {
  width: 80%;
  text-align: center;
  color:white;
  font-size: 3rem;
  margin: 0 auto;
  -webkit-text-stroke: 1.5px black;
  text-stroke: 1px rgb(128, 34, 34);
}
h3 {
  width: 30%;
  background-color: transparent;
  text-align: center;
  color:rgb(255, 255, 255);
  font-size: 2rem;
  margin: 0 auto;
  border-bottom: 1px solid black;
  -webkit-text-stroke: 0.75px black;
  text-stroke: 1px black;
}
button {
	display: block;
	text-decoration: none;
  outline: none;
	margin: 0 5px;
}
button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:  -5;
}
.fade-enter-active {
  transition: all 2s ease;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-to {
	opacity: 1;
}
.component {
  margin: 10px;
}
.top-title {
  margin-top: 25px;
  width: 100%;
}
.AButton {
	color: red;
  background:rgba(247, 205, 90, 0.548);
  border:1px solid rgb(255, 0, 0);
  border-radius: 20px;
  border-bottom: solid 4px rgba(255, 0, 0, 0.822);
}
.BButton {
	color: blue;
  background:rgba(90, 247, 247, 0.548);
  border:1px solid blue;
  border-radius: 20px;
  border-bottom: solid 4px rgba(25, 0, 255, 0.822);
}
.NoButton  {
  color: rgb(0, 128, 0);
  background:rgba(148, 247, 90, 0.548);
  border:1px solid green;
  border-radius: 20px;
  border-bottom: solid 4px rgba(0, 128, 0, 0.822);
}
.defaultTitle {
  width: 100%;
  text-align: center;
  color:white;
  border-bottom: 1px solid black;
  width: 15%;
  margin: 50px auto;
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
}
.top-buttons {
	display: flex;
	justify-content: center;
}
.span{
  padding: 2px;
  -webkit-text-stroke: 2px rgb(182, 86, 86);
  text-stroke: 2px rgb(128, 34, 34);
}
</style>