<template>
<div> 
<div class="box comImg " style="background-color: #f96175;transfrom:translate(0,0,0);">		
		<img src="../../images/mainbg.png" alt="3.8女王节,宠爱有礼--YOU选"> 
		<div class="wrap ">			
	        <!-- 倒计时 -->
	        <div class="timeBox" v-bind:class="[timeBoxStyle]"> 
	        	<cur-timeout  :starttime="startTime"></cur-timeout>
	        </div>  
	         <div class="actBtn" v-bind:class="[actBtnStyle]"  @click="showModel()">                
	              <img src="../../images/startBtn.png" alt="点击" >      
	        </div> 

	        <div class="actBtn" v-bind:class="[actBtnStyleing]">      
	            <img src="../../images/startBtned.png" alt="活动未开始" >           
	        </div>
	        <div class="actBtn" v-if="actBtnStyleed">                
	            <img src="../../images/startBtned2.png" alt="活动结束" >           
	        </div>
       <img src="../../images/rule_01.png" alt="">
    	</div>
		
        <img src="../../images/shoptitcolse.png" v-if="shopTitImg"  alt="展开商家信息" @click="showShopList()">
        <img src="../../images/shoptit.png" v-else alt="商家名称">
        <div class="act-content ">         
            <div class="shop-container">
                 <a v-for="item in shops" href="javascript:" class="shop-list clearfix">
                    <div class="shop-pic fl">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="shop-info">
                        <h2 class="shop-info-title">{{item.name}}</h2>
                        <h3 class="shop-info-loca">地址：{{item.address}}</h3>
                        <p class="shop-info-phone">电话：<a :href="item.telUrl">{{item.tel}}</a></p>
                    </div>
                </a>
            </div>
        </div>
        <img src="../../images/rule_02.png" style="margin-bottom:-1rem;" alt="">
    </div>
	<div class="activityModal" v-bind:class="[modelActiveClass]" >
		<div class="activityModalBg">
		</div>
		<div class="alert-modal alert-input" id="modelBox">
        <a href="javascript:" class="alert-cancel" @click="closeModel()"></a>
        <!-- 提交的弹框 -->
        <input type="text" pattern="[0-9]*" maxlength="11" v-model="username" placeholder="请输入手机号" class="alert-modal-phone">
        <div class="yzm-container">
            <input type="text" pattern="[0-9]*" maxlength="6" v-model="smscode" placeholder="请输入验证码" class="alert-modal-yzm fl">
            <input type="button" class="getyzm  fl" v-model="sendVal" id="codeBtn"  v-on:click="sendCodeFun()">
        </div>
        <a href="javascript:" class="alert-modal-submit" v-on:click="getWinFun()" ><img src="../../images/submit_btn.png" alt=""></a>
     </div>
	</div>
</div>
</template>
<script>
	import * as CommonServer from '../../js/CommonServer.js';	
	import curTimeout from '../../components/curTimeout.vue';
	import * as shopList from '../../js/data.js';
	import {tsLib} from '../../js/lib.js';
	import $ from 'n-zepto';
	const time=60;
	export default {
		data : function() {
			return {
				shopName :"",
				uselist : [],
				username:'',
				countNum:60,
				sendVal:'发送验证码',
				smscode:'',
				sendFlag:true,//不可以发送验证码
				modelActiveClass:'hide',//
				startTime:"",
				shops:[],
				actBtnStyle:"hide",
				actBtnStyleing:'show',
				timeBoxStyle:'hide',
				actBtnStyleed:false,//活动结束
				shopTitImg:true,
				startTimeInt:0,
				startTimeFlag:true,
				clickNum:[],//防止重复刷
			}
		},
		mounted : function() {	
   			this.womensdayDetail();
   			setTimeout(()=>{
   				this.timeBoxStyle="show";
   			}, 1500);
		},
		methods :{	
			//展示商家数据
			showShopList:function(){
				this.shops=shopList.shopList;
				this.shopTitImg=false;
			},
			getNowFormatDate:function(){
			    var date = new Date();
			    var seperator1 = "-";
			    var seperator2 = ":";
			    var month = date.getMonth() + 1;
			    var strDate = date.getDate();
			    if (month >= 1 && month <= 9) {
			        month = "0" + month;			    }
			    if (strDate >= 0 && strDate <= 9) {
			        strDate = "0" + strDate;
			    }
			    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
			            + " " + date.getHours() + seperator2 + date.getMinutes()
			            + seperator2 + date.getSeconds();
			    return currentdate;
			},
			//活动详情--获取当前活动开始时间
			womensdayDetail:function(){
				CommonServer.commonAjax(CommonServer.API.womensdayDetail,{id:1},e=>this.womensdayDetailBack(e));	
			},
			womensdayDetailBack:function(data){
				this.startTime=data.startTime;
				console.log(data)
				//开始时间的时间戳
				let startTimeInt=parseFloat(Date.parse(new Date(data.startTime.replace(/-/g, '/'))));
				let endTimeInt=parseFloat(Date.parse(new Date(data.endTime.replace(/-/g, '/'))));
				let curTimeInt=parseFloat(Date.parse(new Date()));
				console.log(startTimeInt)
				this.startTimeInt=parseInt((startTimeInt-curTimeInt)/1000);
				//alert(startTimeInt)
				//alert(curTimeInt)
				//alert(startTimeInt)
				if(curTimeInt>startTimeInt){//开始				
					this.actBtnStyle="show";
					this.actBtnStyleing='hide';
				}else{//no start					
					this.actBtnStyle="hide";
					this.actBtnStyleing='show';
					//只有在没开始的情况才出现倒计时
					this.startClearTimeFun=setInterval(()=>{ this.clearStartFun();},1000);
				};
				if(curTimeInt>endTimeInt){
					console.log('end')
					this.modelActiveClass='hide';
					this.actBtnStyleed=true;
					this.actBtnStyle="hide";
				};
				
				
			},
			//倒计时
			clearStartFun:function(startTimeInt){
				let i=this.startTimeInt-1;
				this.startTimeInt=i;
				if(this.startTimeInt<=0){
					this.actBtnStyle="show";
					this.actBtnStyleing='hide';
					this.startTimeFlag=false;
				};
			},
			//抽奖
			getWinFun:function(){
				this.clickNum.push(Date.parse(new Date()));
				//第二次及以上次数提交做控制，大于1秒则认为重复提交
				let clickNumLen=this.clickNum.length;

				if(clickNumLen>=2){
					let differTime=this.clickNum[clickNumLen-1]-this.clickNum[clickNumLen-2];//最近两次间隔时间
					if(differTime<1000){
						alert('请不要重复提交')
						return;
					}
				};
				console.log(this.clickNum)
				let data={
					mobile:this.username,
					smscode:this.smscode,
					womensDayId:1
				};
				if(!tsLib.isPhoneNum(this.username)){
					alert('请输入正确的手机号');
					return;
				};
				if(tsLib.isNull(this.smscode)){
					alert('验证码不能为空');
					return;
				};
				CommonServer.commonAjax(CommonServer.API.winningAdd,data,e=>this.winAddBack(e));			
			},
			showModel:function(){
				this.modelActiveClass='show';
				var startScrollY = $(window).scrollTop();//获得焦点时滚动条的起始距离	    
			   
			    $('#modelBox').css({'position':'absolute', 'top':startScrollY ,'marginTop':"2rem"});
			},
			closeModel:function(){
				this.modelActiveClass='hide';
			},
			//领取回调
			winAddBack:function(data){
				this.smscode="";
				this.modelActiveClass="hide";
				//$('.activityModal').hide();//成功后model hide
				localStorage.setItem("sn", data.sn);
				localStorage.setItem("mobile", data.mobile);
				this.modelActiveClass='hide';
				if(data.resultCode==20){//已经抽过
					alert('你已抽过！');
					//this.$router.push({path:'/winSuc'});
				}else{
					this.$router.push({path:'/winSuc'});
				};
			},
			//获取验证码
			sendCodeFun:function(){

				if(!tsLib.isPhoneNum(this.username)){
					alert('请输入正确的手机号');
					return;
				};				
				//发送验证码交互
				//alert(147)
				if(this.sendFlag){
					CommonServer.commonAjax(CommonServer.API.sendRegCode,{"username":this.username},e=>this.sendBack(e));
			    };			    
			},
			sendBack:function(data){
				this.sendFlag=false;
				this.sendVal="重新发送("+this.countNum+")";
				this.clearTimeFun=setInterval(()=>{ this.clearCodeFun();},1000);
			},

			clearCodeFun:function(){
				let p=0;
				console.log(p)
				if (this.countNum == 0) {
			           // obj.removeAttribute("disabled");
			            this.sendVal="获取验证码";
			            this.countNum = time;
			            clearTimeout(this.clearTimeFun);
			            console.log(this.countNum)
			            this.sendFlag=true;
			            p = 0;
			            return;
			        }else{//obj.setAttribute("disabled", true);
			            //obj.val('重新发送'+this.countNum);
			            this.sendVal="重新发送("+this.countNum+")";
			            p = this.countNum-1;
			            this.countNum=p;
			    	}
			}			
		},
		components : {
			curTimeout
		},
		destroyed:function(){
			console.log('destroyed')
		}
	}
</script>
<style lang="scss">
.activityModalBg{background-color: rgba(0,0,0,.6);width:100%;height:100%;position: fixed;
    overflow: auto;top: 0;
    right: 0;
    bottom: 0;left: 0;z-index: 999;}

.act-top {
    background:url(../../images/mainbg.png) center 0 no-repeat;
    min-height: 12.23rem;
    background-size: 100%;
}
.actBtn{bottom:0;}
.actBtn img{}

.act-start-btn {
    width: 6.3rem;
    height: 1.65rem;
    display: block;
    margin: 0 auto;
}

.shop-container {
    padding: 0 .4rem;
    margin-top: .15rem;
}

.shop-list {
    display: block;
    padding: .25rem 0 .12rem 0;
    border-bottom: .01rem solid #f38997;
}

.shop-pic img {
    width: 1.5rem; border:0.04rem solid #fff;
    height: 1.5rem;
}

.shop-info {
    margin: 0 .4rem 0 2rem;
    a{color:#fff;}
}


.shop-info-title {
    font-size: .28rem;
    color: #ffee0b;
}

.shop-info-loca,
.shop-info-phone {
    font-size: .24rem;
    color: #fff;
}

.shop-info-loca {
    margin: .2rem 0;
    line-height: .3rem;
}

.act-rule {
    margin-top: .70rem;
}

.act-rule img,
.win-rule img {
    display: block;
    width: 100%;
}

.win-rule {
    margin-top: .5rem;
}

.win-top {
    margin-top: 1rem;
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
    font-size: 24px;
    color: #fff;
    line-height: .4rem;
  font-family: "Adobe Heiti Std";
  color: rgb(255, 255, 255);
  text-align: center;
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
    font-size: .28rem;
    color: #fff;
}
.win-phone {
    font-size: .34rem;
    color: #ffee0b;
}
.alert-modal{
	width: 96%;
    height:5.06rem;
    background:url(../../images/alert_bg.png) center 0 no-repeat; background-size: cover;    
    border-radius: .1rem;
    position: fixed;
    top:50%;margin-top:-2.6rem;margin-left:-48%;left:50%;padding: .95rem 0 0 0;
    z-index: 1000;   
}

.alert-modal input {
    outline: none;
    border: none;
    font-size: .28rem;
    display: block;
    /*line-height: .86rem;*/
    margin-bottom: .3rem;font-size: 0.32rem;
}

.alert-modal-phone {
    border-radius: .43rem;
    width: 5.50rem; 
    /*width: 83%;*/
    height: .86rem;
    margin: 0 auto;
}

.yzm-container {
    overflow: hidden;
    width: 5.50rem;
    /*width: 83%;*/
    margin: 0 auto;
}

.alert-modal-phone,
.alert-modal-yzm {
    padding-left: .6rem;
}

.getyzm {
    background-color: #37c6d2;
    /*width: 2.1rem;*/
    width: 35%;
    border-top-right-radius: .43rem;
    border-bottom-right-radius: .43rem;
    color: #fff;
    height: .86rem;
}

.alert-modal-yzm {
    /*width: 3.82rem;*/
    width: 65%;
    border-bottom-left-radius: .43rem;
    border-top-left-radius: .43rem;
    height: .86rem;
}

.alert-modal-submit {
    display: block;
    width: 5.50rem;
    /*width: 83%;*/
    height: .97rem;
    margin: 0 auto;
}

.alert-modal-submit  img{
	 width: 5.50rem;
	/*width: 100%;*/
	height: .97rem;
}
.cover-layer {
width: 100%; background: rgba(0,0,0,0.5); position: fixed; top: 0; bottom: 0; z-index: 10; display: none;
}

.alert-cancel{
	display: block;
	width: .25rem;
	height: .25rem;
	position: absolute;
	top: .2rem;
	right: .2rem;
	background:url(../../images/cancel_icon.png) 0 0 no-repeat;
	-webkit-background-size:cover;
	background-size: cover;
}
.alert-sorry{
margin-top:.7rem; 
  font-size: .4rem;
  font-family: "Adobe Heiti Std";
  color: rgb(255, 255, 255);
  text-align: center;
  text-shadow: 0 .04rem .06rem #ec7802;
}
.a-mt{margin-top: .5rem;}
.remind_delivery_bg{ width:100%; height:.7rem; position:fixed; top:50%; display:none; z-index:200; }
.remind_delivery_cont{ width:3.19rem; height:.57rem; margin:0 auto; background:rgba(0,0,0,0.5); border-radius:10px; z-index:100; }
.remind_delivery_cont p{ width:inherit; height:.57rem; line-height:.57rem; text-align:center; color:#FFF; }
.text_correct{font-size: .28rem;}
</style>
