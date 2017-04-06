<template>
	<div class="connect" style="height: 100%;">
		<!--菜单-->
		<choose></choose>	
		<div class="banner" style="width:100%;margin:0 auto; position: fixed; top: 0; left: 0;">
			<img src="./src/images/newsbanner.jpg" alt="">
		</div>
		<!--数据列表-->
		<div id="wrapper" class="list" >
			<div id="scroller">
				<ul class=" news-list">
					<li v-for="items in itemList">
						<router-link :to="{name:'view',params: {id:items.id}}">
							<a class="flex">
								<div class="news-title flex column">
									<h3>{{items.title}}</h3>
									<p>{{items.createTime}}</p>
								</div>
								<div class="news-graphic">
									<img v-bind:src="items.sourceUrl" alt="" />
								</div>
							</a>
						</router-link>
					</li>
				</ul>
				<!--<p class="loading">正在加载...</p>-->
			</div>
		</div>
	</div>
</template>
<script>
	import './src/js/zepto.min.js';
	import IScroll from './src/js/iscroll.js'
	import choose from "./choose.vue";
	import axios from 'axios';
	export default {
		data: function() {
			return {
				itemList: [],
				myScroll: ""
			}
		},
		created: function() {
			var _this = this;
			this.getData(1, _this);
		},
		mounted: function() {
			var _this = this;
			var index = 1;
			//监听滚动事件
			this.myScroll = new IScroll('#wrapper', {
				scrollbars: true,
				mouseWheel: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				tap:"true",
				fadeScrollbars: true
			});
			this.myScroll.refresh();
			this.myScroll.on("scrollEnd", function(e) {
				// 上拉刷新
				if(_this.myScroll.maxScrollY == _this.myScroll.y ) {
					index = index+1;
					console.log(index)
			        _this.getData(index,_this);
				}
			});
		},
		methods: {
			getData: function(index, _this) {
				axios.get("http://app.youx.mobi/website/news/listQuery", {
		          	params: {'page':index}
		     	}).then((response) => {
			        console.log(response.data.data.dataList)		        
		            var _len = response.data.data.dataList.length;
					for(var i = 0; i < _len; i++) {
						_this.itemList.push(response.data.data.dataList[i]);
					};
					setTimeout(function() {
						_this.myScroll.refresh();
					}, 200)
			        
		      	}).catch(function(error) {
		           console.log(error);
		      	})
			}
		},
		components: {
			'choose': choose
		}
	}
</script>
<style lang="scss">
	.list{position:absolute;top: 255px; bottom: 0; overflow: hidden;}
</style>