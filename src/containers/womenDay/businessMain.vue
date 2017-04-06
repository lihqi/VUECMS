<template>	
<div class="box">
    <div class="top">
      <div class="top-content clearfix">
          <input class="top-code" v-model="searchObj.sn" maxlength="12" type="text" pattern="[0-9]*" placeholder="输入活动消费码">
          <input class="top-btn" type="button"  v-on:click="searchFun()" value="消费验证">
      </div>
      <p class="top-text">{{shopName}}</p>
    </div>
	<div class="content">
	  <h1 class="title">已使用的消费码</h1>
	  <ul class="content-list">
	    <li v-for="item in uselist">
	      <span class="num fl">{{item.sn}}</span>
	      <span class="time fr">{{item.useTime}}</span>
	    </li>    
	  </ul>
	</div>
</div>
</template>
<script>
	import * as CommonServer from '../../js/CommonServer.js';
	export default {
		data : function() {
			return {
				shopName :"",
				uselist : [],
				searchObj:{
					sn:"",
					shopId:this.$route.params.shopId,
					womensDayId:this.$route.params.womensDayId
				},
			}
		},
		mounted : function() {
				/*this.$toast({
                    message: '操作成功',
                    
                  
                });*/
			this.$nextTick(function () {
          	console.log(this.$route.params);
        })
			this.shopDetail();
			this.getallUseCode();
		},
		methods :  {
			//搜索
			searchFun:function(){
				if(this.searchObj.sn==""){
					alert('请输入正确的消费码')
					return;
				};
				CommonServer.commonAjax(CommonServer.API.womensdayoffserch,this.searchObj,e=>this.searchBack(e));
				console.log(this.searchObj)
			},
			searchBack:function(data){
				console.log(data)
				this.searchObj.sn="";
				alert('验证成功！')
				this.getallUseCode();
			},
			//获取店铺详情
			shopDetail:function(){
				let data={
					id:this.$route.params.shopId
				}
				CommonServer.commonAjax(CommonServer.API.womensdayShopDetail,data,e=>this.detailFunBack(e));
			},
			//详情回调
			detailFunBack:function(data){
				this.shopName=data.shopName;
			},
			//获取已经消费的码
			getallUseCode:function(){
				let data={
					shopId:this.$route.params.shopId,
					womensDayId:this.$route.params.womensDayId
				}
				CommonServer.commonAjax(CommonServer.API.womensdayGetalluse,data,e=>this.listBack(e))
			},
			listBack:function(data){
				
				this.uselist=data;
				console.log(this.uselist)
			}
		},
		components : {
			
		}
	}
</script>
<style lang="scss">
.top {
    background: url(../../images/top-bg.png) center 0 no-repeat;
    background-size: cover;
    height: 4.1rem;
    padding: 0 0.2rem;
}

.top-content {
    height: 0.7rem;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    padding-top: 2.7rem;
    justify-content: space-around;
}

.top input {
    display: block;
    border-radius: 6px;
}

.top-code {
    border: none;
    outline: none;
    font-size: .28rem;
    width: 5.1rem;
    height: .7rem;
    padding-left: .3rem;
    margin-right: .2rem;
}

.top-btn {
    border: .03rem solid rgba(209, 11, 0, .5);
    font-size: .28rem;
    background-color: #ffae21;
    color: #fff;
    line-height: .6rem;
    width: 1.66rem;
    height: .72rem;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}


.top-text{
    font-size: .32rem;
    text-align: center;
    color: #fff;
    margin-top: .9rem;
}
.content {
    font-size: .28rem;
    color: #5b5b5b;
}

.title {
    font-size: .28rem;
    color: #5b5b5b;
    line-height: .9rem;
    border-bottom: .01rem #e6e6e6 solid;
    font-weight: 200;
    padding: 0 .2rem;
}

.content-list {
    padding: 0 .2rem;
}

.content-list li {
    overflow: hidden;
}

.num,
.time {
    line-height: .54rem;
}

.num {
    text-align: left;
}

.time {
    text-align: right;
}
</style>