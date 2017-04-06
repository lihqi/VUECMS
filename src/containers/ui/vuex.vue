<template>
	<div>
<h1>
总数	{{messageCount}}
</h1>
<button @click="addFun">加</button>

	</div>
</template>
<script>
	
	export default {
		data : function() {
			return {
				value :""
			}
		},
		mounted : function() {
			
		},
		computed : {
			messageCount() {
				return this.$store.getters.getNotMessageCount;
			},
		},
		methods :  {
			addFun:function(){
				//this.$store.dispatch('addFun');
				console.log(this.messageCount)
				this.$store.commit('ADDFUN')
			}
		},
		components : {
			
		}
	}
</script>
<style lang="sass">
	
</style>