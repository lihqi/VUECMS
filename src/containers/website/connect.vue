<template>
	<div class="connect" style="height: 100%; width: 100%;">
		<!--菜单-->
		<choose></choose>
		<div style="width:100%;margin:0 auto;">
			<div class="map-graphic"><img style="width: 100%;" src="./src/images/map.jpg" alt=""></div>
			<div class="contacts">
				<div class="title">
					<h3>Are you interested in?</h3>
					<h4>感兴趣吗？</h4>
					<p>有关我们服务的更多信息，请联系</p>
				</div>
				<ul class="contacts-list">
					<li class="flex">
						<div class="contacts-icon"><img src="./src/images/tel-icon.png" alt=""></div>
						<div class="contact-item">
							<h3>热线电话</h3>
							<p>合作热线：400-168-6667</p>
							<p>客服热线：0571-56603786</p>
						</div>
					</li>
					<li class="flex">
						<div class="contacts-icon"><img src="./src/images/service-time-icon.png" alt=""></div>
						<div class="contact-item">
							<h3>服务帮助</h3>
							<p>工作时间：工作日  9:00-17:00</p>
							<p>客服邮箱：service@youx.cn</p>
						</div>
					</li>
					<li class="flex">
						<div class="contacts-icon"><img src="./src/images/location-icon.png" alt=""></div>
						<div class="contact-item">
							<h3>公司地址</h3>
							<p>浙江省杭州市</p>
							<p>江干区浙江省国家大学科技园C座11楼</p>
						</div>
					</li>
				</ul>
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
			"choose":choose
		}
	}
</script>
<style lang="sass">

</style>