<template>
	<div>
 <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>


<div @click="messageBox()">messageBox</div>


<h2 style="font-size:0.14rem;">
	已经0选中：{{value}}
</h2>
<div class="imgtest">
	
</div>
<div>选择的时间：{{pickerValue}}   <span @click="openPicker()">点击时间选择</span></div>

<div class="page-msgbox-wrapper">
      <mt-button @click.native="openAlert" size="large">打开 alert 提示框</mt-button>
      <mt-button @click.native="openConfirm" size="large">打开 confirm 提示框</mt-button>
      <mt-button @click.native="openPrompt" size="large">打开 prompt 提示框</mt-button>
    </div>
<div class="page-lazyload">
    <h1 class="page-title">Lazy Load</h1>
    <ul class="page-lazyload-list">
      <li class="page-lazyload-listitem" v-for="item in list">
        <img v-lazy="item" class="page-lazyload-image">
      </li>
    </ul>
  </div>
	</div>

	
</template>
<script>
	import { MessageBox } from 'mint-ui';
	export default {
		data : function() {
			return {
				value : [],
				pickerValue:'',
				popupVisible:true,
				list: [
		          'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
		          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
		          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
		          'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
		          'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
		          'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
		        ]
			}
		},
		mounted : function() {
			//this.openPicker();
		},
		methods :  {
			openAlert() {
		        MessageBox.alert('操作成功!', '提示');
		      },
		    messageBox(){
		    	Toast('It Works!')
		    	
		    },
		    startHacking () {
		      this.$toast('It Works!')
		      //MessageBox('提示', '操作成功');
		    }
		},
		components : {
			
		}
		
	}
</script>
<style lang="sass">
.page-lazyload-listitem {
        width: 300px;
        margin: 0 auto;
        margin-bottom: 10px;
        background-color: #ddd;
      }

.page-lazyload-list {
        text-align: center;
      }

   .page-lazyload-image{
        width: 40px;
        height: 300px;
        margin: auto;
      }   

   

	 .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
      }

      .slide1 {
        background-color: #0089dc;
        color: #fff;
      }

      .slide2 {
        background-color: #ffd705;
        color: #000;
      }

      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
      }
	.imgtest{width:332px;height:242px; background: url('../img/test.png')}
</style>