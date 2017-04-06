<template>
	<div>
<mt-radio
  title="radio list"
  v-model="value"
  :options="['optionA', 'optionB', 'optionC']">
</mt-radio>
<h2>
	已经选中：{{value}}
</h2>
	</div>
</template>
<script>
	import {Radio} from 'mint-ui';
	export default {
		data : function() {
			return {
				value :""
			}
		},
		mounted : function() {
			
		},
		methods :  {
			
		},
		components : {
			"mt-radio":Radio
		}
		
	}
</script>
<style lang="sass">
	
</style>