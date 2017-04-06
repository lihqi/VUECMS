<template>
	<div class="connect">
		<!--菜单-->
		<choose></choose>
		<div style="background:#f2f2f2;width:100%;margin:0 auto;">
			<div class="joinbox">
				<ul class="join-form">
					<li>
						<span class="form-left">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
						<span class="form-right"><input type="text" name="username" id="name" v-model="name"></span>
					</li>
					<li>
						<span class="form-left">联系电话：</span>
						<span class="form-right"><input type="tel" name="linkPhone" id="linkPhone" v-model="linkPhone"></span>
					</li>
					<li>
						<span class="form-left">意向区域：</span>
						<span class="form-right"><input type="text" name="intentArea" id="intentArea" v-model="intentArea"></span>
					</li>
					<li>
						<span class="form-left">公司名称：</span>
						<span class="form-right"><input type="text" name="company" id="company" v-model="company"></span>
					</li>
				</ul>

				<div class="joinFormBtn" id="joinFormBtn" v-on:click="toSubmit()">
					<span>提交信息</span>
				</div>
			</div>
			<footer style="background: #2a2a2a;width: 100%;height: 2rem;padding:.2rem 0;font-size: .24rem;line-height:.4rem;text-align: center;color: #7f7f7f;">
				<p>浙ICP备16010133号-1</p>
				<p>浙公网安备 33010402000932号</p>
				<p>浙江众匠信息技术有限公司</p>
				<p>©2017版权所有</p>
			</footer>
		</div>
	</div>
</template>
<script>
	import './src/js/zepto.min.js';
	import choose from "./choose.vue";
	import axios from 'axios';
	import Vue from 'vue';
	export default {
		data: function() {
			return {
				name:"",//表单姓名
				linkPhone:"",//联系电话
				intentArea:"",//区域
				company:"",//公司名称
			}
		},
		mounted: function() {

		},
		created: function() {
			var _this = this
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
				this.postRequest("http://app.youx.mobi/website/intention/saveIntention",data)
			},
			postRequest: function(url, data){
				axios.get(url, {
		          	params: data
		     	}).then((response) => {
			        console.log(response.data)		        		           
					if(response.data.status == "1") {
						if(response.data.status == "1") {
							alert("提交成功");
						} else {
							alert("失败");
						}
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