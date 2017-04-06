<template>
	<div style="height:100%">
		<!--菜单-->
		<choose></choose>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide flex column">
					<div class="episode episode-1"></div>
					<div class="font-con">
						<img src="./src/images/coo/coo-text1.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide flex column">
					<div class="episode episode-2"></div>
					<div class="font-con">
						<img src="./src/images/coo/coo-text2.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide flex column">
					<div class="episode episode-3"></div>
					<div class="font-con">
						<img src="./src/images/coo/coo-text3.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide flex column">
					<div class="episode episode-4"></div>
					<div class="font-con">
						<img src="./src/images/coo/coo-text4.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide flex column">
					<div class="joinbox">
						<ul class="join-form">
							<li>
								<span class="form-left">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
								<span class="form-right">
									<input type="text" name="username" id="name" v-model="name">
								</span>
							</li>
							<li>
								<span class="form-left">联系电话：</span>
								<span class="form-right">
									<input type="tel" name="linkPhone" id="linkPhone" v-model="linkPhone">
								</span>
							</li>
							<li>
								<span class="form-left">意向区域：</span>
								<span class="form-right">
									<input type="text" name="intentArea" id="intentArea" v-model="intentArea">
								</span>
							</li>
							<li>
								<span class="form-left">公司名称：</span>
								<span class="form-right">
									<input type="text" name="company" id="company" v-model="company">
								</span>
							</li>
						</ul>
						<div class="joinFormBtn" id="joinFormBtn" v-on:click="toSubmit()">
							<span>提交信息</span>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
	import './src/js/zepto.min.js'
	import choose from "./choose.vue";
	import './src/js/swiper.min.js';
	import axios from 'axios';
	export default {
		data: function() {
			return {
				name: "", //表单姓名
				linkPhone: "", //联系电话
				intentArea: "", //区域
				company: "", //公司名称
			}
		},
		mounted: function() {
			var mySwiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				direction: 'vertical',
				loop: true
			})

		},
		methods: {
			toSubmit: function() {
				var pattern = /^1[34578]\d{9}$/;
				if(this.name == "") {
					alert("联系人姓名不能空");
					return
				}
				if(!pattern.test(this.linkPhone)) {
					alert("请输入正确的手机号");
					return
				}
				if(this.intentArea == "") {
					alert("意向区域不能空");
					return
				}
				var data = {
					'name': this.name,
					'linkPhone': this.linkPhone,
					'intentArea': this.intentArea,
					'company': this.company,
				};
				axios.get('http://app.youx.mobi/website/intention/saveIntention', {
		          	params: data
		     	}).then((response) => {
			        console.log(response.data)		        		           
					if(response.data.status == "1") {
						this.name = "";
						this.linkPhone = "";
						this.intentArea = "";
						this.company = "";
						alert("提交成功");

					} else {
						alert("失败");
					}					
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
<style lang="sass">

</style>