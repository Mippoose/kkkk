<template>
  <component ref="menu" :is="MenusList[GetActiveMenu]" />
</template>

<script>
import { computed } from 'vue'
import { mapGetters } from 'vuex';
import Creator from "./components/creator/index.vue"
export default {
  name: 'App',
  data(){
    return{
      MenusList: {
				'creator':'creator',
			},
    }
  },
  components: {
    Creator
  },
  methods:{
    isActiveMenu(name){
			return false
		},
		noty(pos, text, timeout, style) {
			this.position = pos;
			this.$notify({ group: 'global', text: text, duration: timeout, type: style })
		},
		updateOnline(onlineV, idV){
			this.$refs.hud.UpdateHud(onlineV, idV)
		},
		isActiveElement(name){
			return this.$store.getters.isActiveElement(name);
		},
		Run(name, func, ...args){
			this.$refs[name][func](...args);
		},
		EditState(name,value){
			this.$store.state[name.split] = value
		},
		OpenMenu(name = ''){
			this.$store.dispatch('setActiveMenu',name);
			this.SendNotify('Success!', 'Ure GAY', 'success')
		},
		ToggleElement(name, toggle = true){
			this.$store.dispatch(toggle ? 'addActiveElement' : 'removeActiveElement',name);
		},
		GetComponent(name){
			return this.$refs[name];
		},
		SendNotify(ttle, msg, type){
			this.showLoginError({
				title: ttle,
				message: msg,
				type: type,
			})
		}
  },
  computed: {
    ...mapGetters([
			'GetActiveMenu'
		]),
  },
  notifications: {
      showLoginError: {
        title: 'Login Failed',
        message: 'Failed to authenticate',
        type: 'error'
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
