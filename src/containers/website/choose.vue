<template>
	<div style="height: 100%; position: absolute; top: 0; left: 0;">
		<div id="menu" :style="{height:menuHeight}">
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
						<router-link href="javascript:void(0);" :to="{name:'join'}">
							我要加入
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div id="menu-icon" @click="showModel()"></div>
	</div>
</template>

<script>
	import './src/js/zepto.min.js'
	export default {
		data: function() {
			return {
				dontShowMenu:false,
				dontHideMenu:false,
				menuHeight:0
			}
		},
		mounted: function() {
			
		},
		methods: {
			showModel: function() {
				var _this = this;
				if(!_this.dontShowMenu) {
					_this.dontHideMenu = true;
					_this.menuHeight = "100%";
					setTimeout(function() {
						_this.dontHideMenu = false;
					}, 500);
				}
			},
			closeModel: function() {
				var _this = this;
				if(!_this.dontHideMenu) {
					_this.dontShowMenu = true;
					_this.menuHeight = 0;
					setTimeout(function() {
						_this.dontShowMenu = false;
					}, 500);
				}
			},
		},
		components: {

		}
	}
</script>

<style>
	.menu-list .router-link-active{background: url(./src/images/dot-active.png) left center no-repeat}
	#menu-icon {
		position: fixed;
		left: 30px;
		top: 35px;
		width: 60px;
		height: 60px;
		background: url(./src/images/menu-icon.png) center center no-repeat;
		z-index: 99;
	}
	
	#menu {
		position: fixed;
		width: 100%;
		height: 0;
		left: 0;
		top: 0;
		z-index: 999;
		overflow: hidden;
		background: rgba(255, 70, 60, .90);
		transition: all .2s ease-in;
	}
	
	.menu-con {
		position: relative;
		overflow: hidden;
	}
	
	#close-btn {
		position: absolute;
		left: 30px;
		top: 35px;
		width: 60px;
		height: 60px;
		background: url(./src/images/close-icon.png) center center no-repeat;
	}
	
	.menu-list {
		padding: 0 30px;
		margin-top: 140px;
	}
	
	.menu-list li {
		padding: 20px 0;
		background: url(./src/images/arrow2.png) right center no-repeat;
	}
	
	.menu-list li a {
		display: block;
		padding-left: 60px;
		font-size: 26px;
		line-height: 60px;
		color: #fff;
		background: url(./src/images/dot-normal.png) left center no-repeat;
	}
	
	.menu-list li a.active {
		background: url(./src/images/dot-active.png) left center no-repeat;
	}
</style>