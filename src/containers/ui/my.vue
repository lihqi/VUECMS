<template>
	<div>
	 <mt-button @click.native="openAlert" size="large">打开 alert 提示框</mt-button>
      <mt-button @click.native="openConfirm" size="large">打开 confirm 提示框</mt-button>
      <mt-button @click.native="openPrompt" size="large">打开 prompt 提示框</mt-button>
	<br>
       <mt-button @click.native="openIndicator" size="large">点击弹出 Indicator</mt-button>
      <mt-button @click.native="openIndicatorWithSpinner" size="large">可配置 spinner</mt-button>
      <mt-button @click.native="openIndicatorWithText" size="large">spinner风格二</mt-button>
      <mt-button @click.native="openIndicatorWithText2" size="large">spinner风格三</mt-button>
	</div>
</template>
<script>	
	import { Button } from 'mint-ui';
	export default {
		data : function() {
			return {
				value :""
			}
		},
		mounted : function() {
			/*this.$toast({
			  message: '提魂牵梦萦地示',			
			  duration: 145000
			});*/
			//this.$messagebox.alert('操作成功!', '提示');;
			//this.$indicator.open();
			/*this.$indicator.open({ spinnerType: 'fading-circle' });
			setTimeout(() => this.$indicator.close(), 2000);*/
			
		},
		methods : {
			openAlert() {
				 var instance = this
		        this.$messagebox.alert('操作成功!', '提示').then(action => {
	               instance.$toast('json.Message')
	            });
		      },

		      openConfirm() {
		        this.$messagebox.confirm('确定执行此操作?', '提示').then(action => {
	               //console.log(action)
	            });
		      },

		      openPrompt() {

		        this.$messagebox.prompt(' ', '请输入姓名').then(({ value }) => {
		          if (value) {
		            this.$messagebox.alert(`你的名字是 ${ value }`, '输入成功');
		          }
		        });
		      },
		       openIndicator() {
		        this.$indicator.open();
		        setTimeout(() => this.$indicator.close(), 2000);
		      },

		      openIndicatorWithSpinner() {
		        this.$indicator.open({ spinnerType: 'fading-circle' });
		        setTimeout(() => this.$indicator.close(), 2000);
		      },

		      openIndicatorWithText() {
		        this.$indicator.open({ spinnerType: 'triple-bounce' });
		        setTimeout(() => this.$indicator.close(), 2000);
		      },
		      openIndicatorWithText2() {
		        this.$indicator.open({ spinnerType: 'double-bounce' });
		        setTimeout(() => this.$indicator.close(), 112000);
		      }

		},
		components : {
			mtButton:Button
		}
		
	}
</script>
<style lang="sass">
	.mint-button{font-size: .26rem;height:.41rem;}
</style>