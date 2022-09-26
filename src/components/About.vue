<template  id="card-template">
  <div :style ='{backgroundImage: "url("+ redimg+")"}' style="width: 100%;height: 100%;">
	  <div style="padding: 2% 10% 2% 10%;color: #EBEEF5;">
		  <div id="企业业务" class="product_spec_title head-label">
		      <div style="text-align: left;" class="font_size_24">
		         <span style="font-size:40px;color:#FF3939;"><strong>L</strong></span> 联系方式
		      </div>
		  </div>
		  <div style="padding: 2% 5% 2% 5%;">
		  <img style="width: 50rem;margin-bottom: 3%;" id="header-img" src="../assets/dt.jpg" >
		  <div style="padding: 2% 5% 2% 5%; border-top: 1px #e79992 solid;
  border-bottom: 1px #e79992 solid;width: 50%;">
		  <el-row :gutter="20">
		    <el-col :span="6"><div class="grid-content bg-purple">地址：</div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple">************************</div></el-col>
		  </el-row>
		  <el-row :gutter="20">
		    <el-col :span="6"><div class="grid-content bg-purple">邮编：</div></el-col>
		  			<el-col :span="6"><div class="grid-content bg-purple">************************</div></el-col>
		  </el-row>
		  <el-row :gutter="20">
		    <el-col :span="6"><div class="grid-content bg-purple">电话：</div></el-col>
		  			<el-col :span="6"><div class="grid-content bg-purple">************************</div></el-col>
		  </el-row>
		  <el-row :gutter="20">
		    <el-col :span="6"><div class="grid-content bg-purple">邮箱：</div></el-col>
		  			<el-col :span="6"><div class="grid-content bg-purple">************************</div></el-col>
		  </el-row>
		  </div>
		  </div>
	  </div>
  </div>
    <!--<div>水果</div>-->

  </div>
</template>
<script>
	import cardComponent from './Card.vue'
	import qimg from '../../static/slider/q1.jpg'
	import redimg from '../../static/slider/red.jpg'
	import bbimg from '../../static/slider/bb.jpg'
	import rimg from '../../static/slider/r.jpg'
    export default {
        name: 'Fruit',
        data () {
            return {
				qimg: qimg,
				redimg: redimg,
				bbimg:bbimg,
				rimg:rimg,
               delivery:[
                   {
                       img: require('../assets/other/定位图标.png'),
                       title: "自定义配送范围",
                       contents:["商家后台自定义配送范围"]
                   },{
                       img: require('../assets/other/骑车送.png'),
                       title: "支持自定义配送",
                       contents:["商家自己优选配送路径"]
                   },{
                       img: require('../assets/other/券.png'),
                       title: "线上优惠券福利",
                       contents:["各种优惠福利提升用户消费"]
                   }
               ]
            }
        }
    }
</script>

<style scoped>
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  .delivery_border{
    height: auto;
    margin: 20px;
    width: 55%;
    /*border-radius: 6px;*/
    /*border: 1px solid #EBEEF5;*/
  }
  .delivery_border_img{
    margin-top: 20px;
    width: 70px;
    height: 70px;
  }
  .delivery_border_title{
    margin-top: 10px;
    font-size: 1.25em;
    font-weight: normal;
  }
  .delivery_border_content{
    margin-top: 10px;
    font-size: 1.125em;
    font-weight: normal;
  }
  .fruit_img{
    height: 550px;width: 100%;
  }
  .fruit_product_img{
    height: 500px;
    width: 260px;
  }
  .deliver_parent{
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .deliver_img_parent{
    width: 30%;
    height: auto;
  }
  .delivery{
    display: flex;
    height: 550px;
    width: 90%;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  .font_size_24 {
      font-size: 1.7em;
  	padding-left: 5%;
  }
  /* 屏幕设备适配 max-device-width: 400px */
  @media screen and (max-device-width: 415px){
    .fruit_img{
      height: 250px;width: 100%;
    }
    .fruit_product_img{
      height: 400px;
      width: 240px;
    }
    .delivery_border_img{
      margin-top: 20px;
      width: 70px;
      height: 70px;
    }
    .deliver_img_parent{
      width: 100%;
      float: left;
      height: 400px;
    }
    .deliver_parent{
      float: left;
      margin-top: 5px;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
    }
    .delivery_border{
      height: auto;
      margin:10px 0 auto;
      width: 100%;
      float: right;
      border-radius: 6px;
      border: 1px solid #EBEEF5;
    }
    .delivery{
      display: flex;
      width: 90%;
      height: auto;
      margin: auto;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .delivery_border_title{
      margin-top: 5px;
      font-size: 1.125em;
      font-weight: normal;
    }
    .delivery_border_content{
      margin-top: 5px;
      font-size: 1.125em;
      font-weight: normal;
      margin-bottom: 10px;
    }
	.el-row {
	    margin-bottom: 50px !important;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
  }
</style>