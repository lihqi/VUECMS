<template>
	<div style="width:100%;margin:0 auto;background: #f2f2f2;" class="connect">
		<header class="header">
			<router-link href="javascript:void(0);" :to="{name:'news'}">
				<a class="goback">
					<img src="./src/images/goback-icon.png" alt="">
					<!--头部左侧操作按钮-->
				</a>
			</router-link>
			<h3 class="title">新闻详情</h3>
		</header>
		<article class="new-item" id="newsContent">
			<div class="new-title">
				<h3 class="title">{{title}}</h3>
				<p class="release-time">{{createTime}}</p>
			</div>
			<div class="new-con">
				<!--{{content}}-->
			</div>
		</article>
		<footer style="background: #2a2a2a;width: 100%;height: 200px;padding:20px 0;font-size: 24px;line-height:40px;text-align: center;color: #7f7f7f;">
			<p>浙ICP备16010133号-1</p>
			<p>浙公网安备 33010402000932号</p>
			<p>浙江众匠信息技术有限公司</p>
			<p>©2017版权所有</p>
		</footer>
	</div>
</template>
<script>
	import './src/js/zepto.min.js';
	import choose from "./choose.vue";
	import Vue from 'vue';
	import axios from 'axios';
	export default {
		data: function() {
			return {
				title:"",
				createTime:"",
				content:"",
			}
		},
		created: function(){
			
		},
		mounted: function() {
			var _this = this;
			//获取页面参数
			var curID = this.$route.params.id;
			var data = {
					'id': curID
				};
			if(curID) {
				axios.get('http://app.youx.mobi/website/news/getNewsById', {
		          	params: data
		     	}).then((response) => {
			        console.log(response.data)		        
		            if(response.data.status == "1") {
						_this.title = response.data.data.title;
						_this.createTime = response.data.data.createTime;
						$(".new-con").html(response.data.data.content)
					} else {
						alert("失败");
					}
			        
		      	}).catch(function(error) {
		           console.log(error);
		      	})
			} else {
				alert('非法请求');
			}
		},
		methods: {
			
		},
		components: {
			'choose': choose
		}
	}
</script>
<style lang="sass">

</style>