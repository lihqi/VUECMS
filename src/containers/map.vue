<template>
	<div>
		<div class="mapBox">
		<h3>活动相关</h3>
		<ul class="">
			<li>
				<router-link  href="javascript:void(0);" :to="{name:'womenDay'}">
					女王节主页
				</router-link>
			</li>
			<li>
				<router-link  href="javascript:void(0);" :to="{name:'businessMain',params: { womensDayId: 1,shopId:2 }}">
					商家查询页面
				</router-link>
			</li>
			<li>
				<router-link  href="javascript:void(0);" :to="{name:'winSuc'}">
					获奖成功页面
				</router-link>
			</li>
			<li>
				<router-link  href="javascript:void(0);" :to="{name:'about'}">
					wap官网
				</router-link>
			</li>
		</ul>
		<h3>组件相关</h3>
		<ul class="">
			<li>
				<router-link  href="javascript:void(0);" :to="{name:'radio'}">
					radio
				</router-link>
			</li>
			<li>
				<router-link  href="javascript:void(0);" :to="{name:'mytest'}">
					常用三大组件
				</router-link>
			</li>
			<li>
				<router-link  href="javascript:void(0);" :to="{name:'vuex'}">
					Vuex Demo
				</router-link>
			</li>
		</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data : function() {
			return {
				initIndex : 0,
			}
		},
		mounted : function() {
			
		},
		methods :  {
			
		},
		components : {
			
		}
	}
</script>
<style lang="scss">
	.mapBox{
		color: #333; padding-left: .1rem;
		h3{font-size: 0.4rem; height:0.8rem;line-height:.8rem;}
		li{height:0.64rem;width: 100%;line-height: 0.64rem;font-size:0.24rem; border-bottom:0.01rem solid #999;}
		a{color:#333;display: block}
	}
</style>