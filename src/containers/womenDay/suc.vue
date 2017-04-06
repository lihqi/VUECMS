<template>

 <div class="box comImg" style="background-color: #f96175;margin-top:0">	
 	<div class="wrap">
	<div class="win-top">
	    <div class="ticket-pic">
	      <img src="../../images/ticket.png" alt="" >
	      <div class="ticket-info">
	        <p class="ticket-code">消费码：<span>{{sn}}</span></p>
	        <p class="ticket-date">有效期：<span>2017年03月15日</span></p>
	      </div>
	    </div>
	      <div class="win-info">
	        <h3>已经存入手机账户：<span class="win-phone">{{mobile}}</span></h3>
	        <p>稍后以短信的形式，发送至此手机</p>
	      </div>
	  </div>
	  <div class="win-rule">
	    <img src="../../images/win_rule.png" alt="">
	  </div>
     </div>	
         <div v-title>3.8女王节,宠爱有礼--YOU选</div>
    </div>    
</div>
</template>
<script>

	import * as CommonServer from '../../js/CommonServer.js';
	
	export default {
		data : function() {
			return {
				mobile :"",
				sn:"",		

			}
		},
		mounted : function() {			
		    if(localStorage.getItem("mobile")==""||localStorage.getItem("mobile")==undefined){
		    	this.$router.push({path:'/womenDay'})
		    }else{
		    	this.mobile=localStorage.getItem("mobile");
		    	this.sn=localStorage.getItem("sn");
		    };

    // 验证码倒计时
    
		},
		methods :  {
			//抽奖
			getWinFun:function(){
				let data={
					mobile:this.username,
					smscode:this.smscode,
					womensDayId:1
				};
				CommonServer.commonAjax(CommonServer.API.winningAdd,data,e=>this.winAddBack(e));
				
			},
			//领取回调
			winAddBack:function(data){
				this.smscode="";
				$('.activityModal').hide();//成功后model hide
				console.log(data)
			},
			
			
		},
		components : {
			
		}
	}
</script>
<style lang="scss">
.win-top {
    padding-top: 0.3rem;
    background-size: cover;
    /*background: url(../../images/ticket.png) center 0 no-repeat;background-size: cover*/
    position: relative;
}

.ticket-pic {
    text-align: center;
    position: relative;
}

.ticket-pic img {
    width: 100%;
}

.ticket-info {
    position: absolute;
    top: 48%;
    right: 30%;
    margin-right: -1.5rem;
    margin-top: -.3rem;
}

.ticket-info p {
    font-size: .3rem;
    color: #fff;
    line-height: .4rem;
  color: rgb(255, 255, 255);
  text-align: right;
  text-shadow: 0 .04rem .06rem #ec7802;
}

.win-info {
    text-align: center;
    line-height: .32rem;
    position: absolute;
    bottom: .12rem;
    width: 100%;
    text-align: center;
}

.win-info h3,
.win-info p {
    font-size: .28rem;line-height:0.38rem;
    color: #fff;
}

.win-phone {
    font-size: .34rem;
    color: #ffee0b;
    a{color:#ffee0b}
}
p.ticket-code{ color:#fff !important;span{color:#fff !important;}}
</style>
