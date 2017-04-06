<template>
	<div id="service" style="height: 100%;">
		<div class="arrow"></div>
		<!--背景图-->
		<div class="page-bg page-bg-1 active"></div>
		<div class="page-bg page-bg-2"></div>
		<div class="page-bg page-bg-3"></div>
		<!--菜单-->
		<choose></choose>
		<!---->
		<div class="main" id="skrollr-body">
			<section class="page page-1">	
				<img src="./src/images/service/slogan.png" class="logo" alt="">
				<p>你的服务足以影响这个社会</p>
				<img src="./src/images/service/smalllogo.png" style="margin-top: 30px;color:#262626;" alt="">
			</section>
			<section class="page page-3">
				<h3>人人都是CEO<small>YOU选倡导分享经济，企业、商家、自由职业者均可申请入驻，分享服务赚大钱</small></h3>
				<img src="./src/images/service/page3-img.jpg" alt="">
			</section>
			<section class="page page-4"></section>
			<section class="page page-5">
				<h3>千百种技能任性发<small>YOU选倡导分享经济，企业、商家、自由职业者均可申请入驻，分享服务赚大钱</small></h3>
				<img src="./src/images/service/page5-img.jpg" alt="">
			</section>
			<section class="page page-6"></section>
			<section class="page page-7">
				<h3>优质订单源源不断<small>YOU选倡导分享经济，企业、商家、自由职业者均可申请入驻，分享服务赚大钱</small></h3>
				<img src="./src/images/service/page7-img.jpg" alt="">
			</section>
			<section class="page page-8"></section>
			<section class="page page-9">
				<h3>怎样成为YOU选er<small>YOU选倡导分享经济，企业、商家、自由职业者均可申请入驻，分享服务赚大钱</small></h3>
				<ul class="steps">
					<li class="flex">
						<div class="idx">1</div>
						<div class="graphic-icon"><img src="./src/images/service/step1-icon.png" alt=""></div>
						<div class="text-con">
							<h3>下载APP</h3>
							<p>下载商户版APP申请成为服务商</p>
						</div>
					</li>
					<li class="flex">
						<div class="idx">2</div>
						<div class="graphic-icon"><img src="./src/images/service/step2-icon.png" alt=""></div>
						<div class="text-con">
							<h3>提交申请</h3>
							<p>填写信息 上传资质 提交申请</p>
						</div>
					</li>
					<li class="flex">
						<div class="idx">3</div>
						<div class="graphic-icon"><img src="./src/images/service/step3-icon.png" alt=""></div>
						<div class="text-con">
							<h3>资质审核</h3>
							<p>3个工作日内将对你的资质进行审核</p>
						</div>
					</li>
					<li class="flex">
						<div class="idx">4</div>
						<div class="graphic-icon"><img src="./src/images/service/step4-icon.png" alt=""></div>
						<div class="text-con">
							<h3>上线营业</h3>
							<p>通过审核  发布服务  接收订单</p>
						</div>
					</li>
				</ul>
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
	import './src/js/zepto.min.js'
	import skrollr from './src/js/skrollr.min.js';
	import choose from "./choose.vue"
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
			'choose':choose
		}
	}
</script>
<style lang="sass">
	
</style>