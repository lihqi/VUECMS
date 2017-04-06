<template>
	<div id="index" style="height: 100%;">
		<div class="arrow"></div>
		<!--背景图-->
		<div class="page-bg page-bg-1 active"></div>
		<div class="page-bg page-bg-2"></div>
		<div class="page-bg page-bg-3"></div>
		<div class="page-bg page-bg-4"></div>
		<!--菜单-->
		<choose></choose>
		<!--<div id="menu">
			<div class="menu-con">
				<a id="close-btn" @click="closeModel()"></a>
				<ul class="menu-list">
					<li>
						<router-link href="javascript:void(0);" :to="{name:'test'}">
							首页
						</router-link>
					</li>
					<li>
						<router-link href="javascript:void(0);" :to="{name:'service'}">
							全民服务商
						</router-link>
					</li>
					<li>
						<router-link href="javascript:void(0);" :to="{name:'coopration'}">
							YOU选合作
						</router-link>
					</li>
					<li>
						<router-link href="javascript:void(0);" :to="{name:'news'}">
							YOU选动态
						</router-link>
					</li>
					<li>
						<router-link href="javascript:void(0);" :to="{name:'about'}">
							关于YOU选
						</router-link>
					</li>
					<li>
						<router-link href="javascript:void(0);" :to="{name:'connect'}">
							联系我们
						</router-link>
					</li>
					<li>
						<router-link href="javascript:void(0);" :to="{name:'connect'}">
							我要加入
						</router-link>
					</li>
				</ul>
			</div>
		</div>-->
		<!---->
		<div class="main" id="skrollr-body" >
			<section class="page page-1">
				
				<img src="./src/images/logo.png" class="logo" alt="">
				<h3>让优质生活一步到位</h3>
				<p>一键发布，全城响应，尽享品质生活</p>
			</section>
			<section class="page page-2"></section>
			<section class="page page-3">
				<h3>品类众多<small>你要的服务全在这里</small></h3>
				<p>3600+种服务，全方位打造生态服务圈,满足你遇到的所有需求</p>
				<img src="./src/images/index/page3-img.png" alt="">
			</section>
			<section class="page page-4"></section>
			<section class="page page-5">
				<h3>一键下单<small>需求轻松解决</small></h3>
				<p>万千大神一呼百应 让更专业的人解决你的个性化需求</p>
				<img src="./src/images/index/page5-img.png" alt="">
			</section>
			<section class="page page-6"></section>
			<section class="page page-7">
				<h3>消费返利<small>消费赚钱两不误</small></h3>
				<p>邀请好友使用YOU选，下单一起拿返利，升级自己的“小金库”</p>
				<img src="./src/images/index/page7-img.png" alt="">
			</section>
			<section class="page page-8"></section>
			<section class="page page-9">
				<h3>智能语音<small>服务推荐更全面</small></h3>
				<p>把你的烦恼告诉“优小秘” 让他为你配置全套服务</p>
				<img src="./src/images/index/page9-img.png" alt="">
			</section>
			<footer style="background: #2a2a2a;width: 100%;height: 200px;padding:20px 0;font-size: 24px;line-height:40px;text-align: center;color: #7f7f7f; position: relative;">
				<p>浙ICP备16010133号-1</p>
				<p>浙公网安备 33010402000932号</p>
				<p>浙江众匠信息技术有限公司</p>
				<p>©2017版权所有</p>
			</footer>
		</div>
	</div>
</template>
<script>
	//	import $ from 'n-zepto';	
	import './src/js/zepto.min.js'
	import skrollr from './src/js/skrollr.min.js';
	import choose from "./choose.vue";
	export default {
		data: function() {
			return {
				
			}
		},
		mounted: function() {			
			$(window).scrollTop(0)
		},
		methods: {

		},
		components: {
			"choose":choose
		}
	}
</script>
<style lang="sass">

</style>