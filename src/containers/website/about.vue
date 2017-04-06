<template>
	<div class="connect" style="height: 100%;">
		<choose></choose>
		<div style="background:#f2f2f2;width:100%;margin:0 auto;">
			<div class="banner"><img src="./src/images/aboutbanner.jpg" alt=""></div>
			<!--企业简介-->
			<div class="intro">
				<h3>企业简介</h3>
				<p>浙江众匠信息技术有限公司，坐落于天堂硅谷——杭州，是一家专注于移动互联网领域开发、运营与推广于一体的高新移动互联网企业。</p>
				<p>目前，公司旗下产品YOU选，首推S2C模式（Service to Consumer）,零距离连接人与服务，让消费者随时随地获得商家专属定制服务，任何企业商家或个人，都可以通过YOU选输出服务，让产能和效率的价值最大化，为服务行业带来了颠覆性变革。</p>
			</div>
			<!--logo 含义-->
			<div class="intro">
				<h3>YOU选标志及含义</h3>
				<img src="./src/images/logo-discription.png" style="width:100%;margin-bottom: 30px;" alt="">
				<p>太极：Y取自“无极生太极,太极生两仪,两仪生四象,四象生八卦,八卦定乾坤”，代表了中国古代的传统文化，具有深厚的文化内涵。</p>
				<p>YOU：巧妙的设计成尾巴的造型，O运用在眼睛上，U对应鲸鱼整体曲线外形，完整的将字母YOU都包含在标志内。</p>
				<p>鲸鱼：整体形象设计成鲸鱼，象征志向远大。庄周在其《庄子－逍遥游》中说：“北冥有鱼，其名为鲲。鲲之大，不知其几千里也“，就是指的鲸鱼。</p>
			</div>
			<footer style="background: #2a2a2a;width: 100%;height: 200px;padding:20px 0;font-size: 24px;line-height:40px;text-align: center;color: #7f7f7f;">
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
	import './src/js/menu.js';
	import choose from "./choose.vue"
	export default {
		data: function() {
			return {

			}
		},
		mounted: function() {

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