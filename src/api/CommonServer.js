//import $ from 'jquery';
//import reqwest from 'reqwest';
//require('es6-promise').polyfill();
// To add to window  
/*if (!window.Promise) {  
  window.Promise = Promise;  
  console.log('Promise')
};*/
import axios from 'axios';
import config from './config';
//接口地址
const API = {
    //host: 'http://app.youx.mobi/',
    //host:'http://youxdev.tsou.cn/',
    
    
    doLogin:'web/user/doLogin.do',//登录
    customerUserList:'web/customerUser/getThisPage.do',//会员Page页面   
    customerMemberDetails:'web/customerUser/getThisDetail.do',//会员详情
    customershopGuide:'web/shoppingGuide/getThisPage.do',//导购管理
    customershopStore:'web/store/getThisPage.do',//门店管理
    storeSelectList:' web/store/getThisList',//门店下拉

   // customershopAddStore:'web/store/updThis.do',//新增/修改店铺

    

    
};

//ajax方法
const commonAjax = function(URL, data, callBack) {    
    config.params = data;
    axios.get(URL, config).then((response) => {       
        //请求响应成功
        if (response.status == 200) {
            //接口返回正常状态
            if(response.data.status==1){
                callBack(response.data.data)
            }else{
            }
            
        } else {
            alert(response.data.showMessage);
        }
    }).catch(function(error) {
        console.log(error);
    });
}
export {
    API,
    commonAjax
};