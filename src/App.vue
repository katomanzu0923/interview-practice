<template>
  <div class="ly_app">
    <div class="bl_app">
      <h3 class="el_app_ttl el_app_ttl_clr">不安を自信に</h3>
      <h2 class="el_app_ttl02 el_app_ttl02_clr" v-if="!isAuthenticated"><span class="js_app_ttl_clr">{{displayName}}</span>のための面接練習</h2>
      <h2 class="el_app_ttl02 el_app_ttl02_clr" v-if="isAuthenticated"><span class="js_app_ttl_clr">{{displayName}}様</span>のための面接練習</h2>
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
      newback:false
    }
  },
  computed: {
		isAuthenticated() {
      return this.$store.getters.idToken !== null;
    },
    displayName() {
      return this.$store.state.displayName
    },
    photoURL() {
      return this.$store.state.photoURL
    },
    changeDefault() {
      return this.$store.state.changeDefault
    },
    changeNew() {
      return this.$store.state.changeNew
    },
    salesChange() {
      return this.$store.state.salesChange
    },
    techChange() {
      return this.$store.state.techChange
    },
	},

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
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index:  -5;
  filter: opacity(90%);
  @include media(m) {
		width: 100%;
    height: 100%;
	}
}
.el_app_ttl {
  width: 30%;
  background-color: transparent;
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  @include media(m) {
		width: 50%;
    font-size: 1rem;
	}
}
.el_app_ttl_clr {
  color:rgb(255, 255, 255);
  border-bottom: 1px solid black;
  -webkit-text-stroke: 0.75px black;
  text-stroke: 1px black;
}
.el_app_ttl02 {
  width: 80%;
  text-align: center;
  font-size: 3rem;
  margin: 0 auto;
  @include media(m) {
		width: 100%;
    font-size: 2rem;
	}
}
.el_app_ttl02_clr {
  color:white;
  -webkit-text-stroke: 1.5px black;
  text-stroke: 1px rgb(0, 0, 0);

}

.bl_app {
  margin-top: 25px;
  width: 100%;
}

.js_app_ttl_clr{
  -webkit-text-stroke: 2px rgb(0, 0, 0);
  text-stroke: 2px rgb(0, 0, 0);
}
</style>