/*倒计时组件 
基于jquery
*/
<template>
<div>	
	<div class="yomibox2" :data="starttime"></div>
</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		data : function() {
			return {
				
			}
		},
		props: ['starttime'],

		mounted:function(){
			console.log(this.starttime);
			 $.fn.yomi = function (st,page) {
		        var data = "";
		        var _DOM = null;
		        var TIMER;
		        var nol;
		        var _serverTime = st;
		        var _cupage = page;
		        var createdom = function (dom) {
		            _DOM = dom;
		            data = $(dom).attr("data");
		            data = data.replace(/-/g, "/");
		            data = Math.round((new Date(data)).getTime() / 1000);
		            //$.get("http://apiproxy.yishu.ts/gateway/servertime?format=json", {}, function (json) {
		            //    _serverTime = json.ServerTime;
		            //    initDom();
		            //});
		            initDom();
		        };
		        var initDom = function () {
		            _serverTime = _serverTime.replace(/-/g, "/");
		            var range = data - Math.round((new Date(_serverTime)).getTime() / 1000),
		                secday = 86400, sechour = 3600,
		                days = parseInt(range / secday),
		                hours = parseInt((range % secday) / sechour),
		                min = parseInt(((range % secday) % sechour) / 60),
		                sec = ((range % secday) % sechour) % 60;
		            $(_DOM).find(".yomiday").html(nol(days));
		            $(_DOM).find(".yomihour").html(nol(hours));
		            $(_DOM).find(".yomimin").html(nol(min));
		            $(_DOM).find(".yomisec").html(nol(sec));
		            if (range > 0) {
		                $(_DOM).append("<span>距离开抢还剩：</span><ul class='yomi'><li class='yomiday'></li><li class='split'>天</li><li class='yomihour'></li><li class='split'>时</li><li class='yomimin'></li><li class='split'>分</li><li class='yomisec'></li><li class='split'>秒</li></ul>");
		            } else {
		                $(_DOM).append('');
		            }
		        };
		        var reflesh = function () {
		            var range = data - Math.round((new Date()).getTime() / 1000),
		                secday = 86400, sechour = 3600,
		                days = parseInt(range / secday),
		                hours = parseInt((range % secday) / sechour),
		                min = parseInt(((range % secday) % sechour) / 60),
		                sec = ((range % secday) % sechour) % 60;
		            if (range < 0) {
		                if (_cupage == "index") {
		                    $(_DOM).prev().css("display", "none");
		                    $(_DOM).html('<div style="font-size:20px"><b style="color:#999">活动已结束</b></div>');
		                }
		                if (_cupage == "list") {
		                    $(_DOM).after('<div class="xg-over">已结束</div>');
		                    //$(_DOM).html('<div style="margin-top:6px;font-size:20px"><b>拍卖已结束</b></div>');
		                    $(_DOM).remove();
		                }
		                
		                if (_cupage == "detail") {
		                    $(".cpxx-c-c").html('<h3 style="text-align:center;line-height:140px;font-size:24px;">已结束</h3>');
		                    $(".cpxx-date span").html("活动已结束");
		                    $(".cpxx-date i").html("结束时间 " + $(_DOM).attr("data"));
		                    $(".cpxx-date").next().remove();//remove remind
		                    $(_DOM).children().remove();
		                }
		                return;
		            }
		            $(_DOM).find(".yomiday").html(nol(days));
		            $(_DOM).find(".yomihour").html(nol(hours));
		            $(_DOM).find(".yomimin").html(nol(min));
		            $(_DOM).find(".yomisec").html(nol(sec));
		        };
		        TIMER = setInterval(reflesh, 1000);
		        nol = function (h) {
		            return h > 9 ? h : '0' + h;
		        };
		        return this.each(function () {
		            var $box = $(this);
		            createdom($box);
		        });
		    };
		     
		   

		},
		methods : {
			getNowFormatDate:function(){
			    var date = new Date();
			    var seperator1 = "-";
			    var seperator2 = ":";
			    var month = date.getMonth() + 1;
			    var strDate = date.getDate();
			    if (month >= 1 && month <= 9) {
			        month = "0" + month;
			    }
			    if (strDate >= 0 && strDate <= 9) {
			        strDate = "0" + strDate;
			    }
			    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
			            + " " + date.getHours() + seperator2 + date.getMinutes()
			            + seperator2 + date.getSeconds();
			    return currentdate;
			},
		},
		updated:function(){
			 var _CurrentServerTime=this.getNowFormatDate();
    		//var _CurrentServerTime="2017-04-01 12:00:00"
	    $(".yomibox2").each(function () {        
    		$(this).yomi(_CurrentServerTime);//传服务器时间
		});
		},
		components : {
           
        }
	}
</script>
<style lang="sass">
	
</style>