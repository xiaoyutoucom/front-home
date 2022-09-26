<template>
    <div>
		<div :style ='{backgroundImage: "url("+ q12img+")"}' :height="computeHeight" style="background-repeat:no-repeat;width: 100%;">
        <el-carousel :height="computeHeight" style="margin: 0 5% 0 5%;padding: 1% 2% 0 2%;">
            <el-carousel-item v-for="(item, index) in sliders" :key="index">
                <img :src="item.img" class="slider_img" :height="computeHeight">
            </el-carousel-item>
        </el-carousel>
		</div>
<!--        <div class="solve head-label">
            <div style="text-align: center;" class="font_size_24">
                大幕影业
            </div>
        </div> -->
		<!-- 手机端商品展示 -->
<!-- 		<div id="产品微观" class="head-label">
		    <div style="text-align: center;" class="font_size_24">
		        产品微观介绍
		    </div>
		</div> -->
	    <div :style ='{backgroundImage: "url("+ redimg+")"}' style="width: 100%;height: 100%;">
			
		<div style="color: #EBEEF5;">
		    <el-row>
		        <el-col  v-if="seen" :xs="24" :sm="12">
					<div style="text-align: left;color: #EBEEF5;margin-left: 7%;" class="font_size_24">
					   <span style="font-size:40px;color:#FF3939;"><strong>G</strong></span> 公司介绍
					</div>
		            <div class="product_mobile_content" style="letter-spacing:2px;line-height: 1.6rem;">
						 <!-- <el-row style="padding: 10% 5% 0 5%;">
							<img id="header-img" style="width: 10rem;" src="../assets/logo2.png" >
						  </el-row> -->
						 <el-row>
						<div style="margin: 0 5% 0 15%;">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。
							杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。
							杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。
						</div>
						</el-row>
						<el-row>
						<div style="margin: 0 5% 0 15%;">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。
							杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。				
						</div>
						</el-row>
		            </div>
		        </el-col>
				<el-col  v-if="!seen" :xs="24" :sm="12" style="color: #EBEEF5;">
					<div style="text-align: left;color: #EBEEF5;margin-left: 7%;" class="font_size_24">
					   <span style="font-size:40px;color:#FF3939;"><strong>G</strong></span> 公司介紹
					</div>
				    <div >
						 <!-- <el-row style="padding: 10% 5% 0 5%;">
							<img id="header-img" style="width: 10rem;" src="../assets/logo2.png" >
						  </el-row> -->
						 <el-row>
						<div style="margin: 0 5% 0 15%;">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。
							杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。
							杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。
						</div>
						</el-row>
						<el-row>
						<div style="margin: 0 5% 0 15%;">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。
							杭州大幕影视传媒有限公司, 成立于2018年, 位于浙江省杭州市, 是一家以从事商务服务业为主的企业。企业注册资本300万人民币。				
						</div>
						</el-row>
				    </div>
				</el-col>
		        <el-col :xs="24" :sm="12">
		             <div class="player-container"style="margin: 5% 0 5% 0;" >
		                   <video    :preload="preload"
		                           :poster="videoImg" height="100%" width="100%" align="center" :controls="controls"  :autoplay="autoplay">
		                     <source :src="videoSrc" type="video/mp4">
		                   </video>
		         
		           </div>
		        </el-col>
		    </el-row>
		</div>
		</div>
		<div :style ='{backgroundImage: "url("+ qimg+")"}' style="color: white">
		<!-- 企业业务-->
		<div id="企业业务" >
		    <div style="text-align: left;" class="font_size_24">
		       <span style="font-size:40px;color:#FF3939;"><strong>Q</strong></span> 企业业务
		    </div>
		</div>
        <!-- 盒子 -->
        <div class="border_parent" style="color: #101011;">
            <el-row :gutter="10">
				<div class="projects_top">
				<ul class="category" style="margin-left: 25%;color: white;margin-bottom: 2%;">
									
									<li @click="handleSelect2(1)" class=""><div style="margin-top:2rem !important;">广告</div></li>
									<li class="" @click="handleSelect2(2)"><div style="margin-top:2rem !important;">短剧</div></li>
									<li @click="handleSelect2(3)" class="cur on"><div style="margin-top:2rem !important;">宣传片</div></li>
									<li @click="handleSelect2(4)" class=""><div style="margin-top:2rem !important;">影视</div></li>
									<li @click="handleSelect2(5)" class=""><div style="margin-top:1.8rem !important;">建筑漫游&VR</div></li>
									<li @click="handleSelect2(6)" class=""><div style="margin-top:1.8rem !important;">动画</div></li>
			    </ul>
				</div>
			
            </el-row>
        </div>
	<div id="公司片库" class="product_spec_title head-label">
	    <div style="text-align: left;" class="font_size_24">
	       <span style="font-size:40px;color:#FF3939;"><strong>G</strong></span> 公司片库
	    </div>
	</div>
		<div class="main" style="position: relative;width: 100%;">
		  <el-carousel :interval="4000"  :height="computeHeight2"  class="container" style="color: black;">
			  <el-carousel-item  class="mainimg" v-if="seen"  v-for="imglist in sliderslist" style="height: 32rem;">
				  <el-row :gutter="10">  
			      <div v-for="itemimg in imglist">	
				  <el-col :xs="12" :sm="12"  :md="6">
			     <img class="img_cover" :src ="itemimg.img" alt="" :height="computeHeight2" style="z-index: 1 ;cursor:pointer ;">
			      <div v-if="seen" class="text bg_h"  :style ='{backgroundImage: "url("+ cimg+")"}' style="height: 15rem;text-align: center;position: relative;width: 100%;background-repeat:no-repeat;top:-2rem;z-index: 0 !important;">
			      <div style="padding-top:2rem">
				  <h2>《天使的眼睛》</h2>
			      <p>播放平台：爱奇艺</p>
			      <a href="/networkDrama/detail/id/7" style="position: absolute;
				  top:7rem
				  bottom: 22px;
				  font-weight: bold;
				  left: 25%;
				  width: 48%;
				  height: 45px;
				  line-height: 45px;
				  font-size: 12px;
				  color: #ff0000;
				  border-radius: 16px;
				  -webkit-border-radius: 16px;
				  -moz-border-radius: 16px;
				  border: 1px #fd9158 solid;">详情</a>
				    </div>
			      </div>
				 </el-col>
			      </div> 
				 
			  </el-row>
		    </el-carousel-item>
			<el-carousel-item  v-if="!seen" v-for="imglist in sliderslist" style="height: 21.5rem;">
				  <el-row :gutter="10">  
			      <div v-for="itemimg in imglist">	
				  <el-col :xs="12" :sm="12"  :md="12">
			     <img class="img_cover" :src ="itemimg.img" alt="" :height="computeHeight2" style="z-index: 1 ;cursor:pointer ;">
			      <div  class="text bg_h"  :style ='{backgroundImage: "url("+ cimg+")"}' style="height: 14rem;text-align: center;position: relative;width: 100%;background-repeat:no-repeat;top:-2rem;z-index: 0 !important;">
			      <div style="padding-top:2rem">
				  <h2>《天使的眼睛》</h2>
			      <p>播放平台：爱奇艺</p>
			      <a href="/networkDrama/detail/id/7" style="position: absolute;
				  top:5rem
				  bottom: 22px;
				  font-weight: bold;
				  left: 25%;
				  width: 48%;
				  height: 45px;
				  line-height: 45px;
				  font-size: 12px;
				  color: #ff0000;
				  border-radius: 16px;
				  -webkit-border-radius: 16px;
				  -moz-border-radius: 16px;
				  border: 1px #fd9158 solid;">详情</a>
				    </div>
			      </div>
				 </el-col>
			      </div> 
				 
			  </el-row>
			</el-carousel-item>
		  </el-carousel>
		</div>
        	</div>
		<!-- 关于我们-->
		<div  >
        <div id="企业业务" class="product_spec_title head-label" >
            <div style="text-align: left;" class="font_size_24">
               <span style="font-size:40px;color:#FF3939;"><strong>G</strong></span> 关于我们
            </div>
        </div>
        <!-- 后台管理 -->
        <div class="product_pc" >
            <el-row style="width: 100%">
                <el-col :xs="24" :sm="12">
					<el-row>
					  <el-col :span="8" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 2 : 0">
					    <el-card :body-style="{ padding: '0px' }" style="cursor: pointer;" class="new">
					      <img src="../../static/slider/q.jpg" style="height: 10rem;" class="image">
					      <div  style="padding: 10px;" >
					        <div>公司的新闻资讯</div>
					        <div class="bottom clearfix"style="margin-top: 0.2rem;">
					          <time >2022-08-20</time>	          
					        </div>
					      </div>
					    </el-card>
					  </el-col>
					</el-row>
                   <!-- <el-table
					 :show-header="false"
                      :data="tableData"
                      
                      style="width: 100%;height:33.5rem;cursor: pointer;">
                      <el-table-column
                        prop="date"
                        label="日期"
                        width="180"align='center'>
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="标题"
                        width="450"
						align='center'>
                      </el-table-column>
                    </el-table> -->
                </el-col>
                <el-col :xs="24" :sm="12">
						<el-row :gutter="10">
                    	<el-col :xs="12" :sm="12" :md="12">
                    	    <div class="border" style="margin-right: 0" @click="handleSelect(1)">
                    	        <div class="border_img_parent">
                    	            <img :src="images[0].img" class="img_border"/>
                    	        </div>
                    	        <div class="border_title">公司片库</div>
                    	    </div>
                    	</el-col>
                        <el-col :xs="12" :sm="12" :md="12">
                            <div class="border"   @click="handleSelect(2)">
                                <div class="border_img_parent">
                                    <img :src="images[1].img" class="img_border"/>
                                </div>
                                <div class="border_title">公司介绍</div>
                            </div>
                        </el-col>
						 </el-row>
						 <el-row :gutter="10">
						 <el-col :xs="12" :sm="12" :md="12">
						     <div class="border" style="margin-right: 0" @click="handleSelect(3)">
						         <div class="border_img_parent">
						             <img :src="images[2].img" class="img_border"/>
						         </div>
						         <div class="border_title">公司战略</div>
						     </div>
						 </el-col>
						 <el-col :xs="12" :sm="12" :md="12">
						     <div class="border" >
						         <div class="border_img_parent" @click="handleSelect(4)">
						             <img :src="images[3].img" class="img_border"/>
						         </div>
						         <div class="border_title">人才引进</div>
						     </div>
						 </el-col>
						  </el-row>
                </el-col>
            </el-row>
        </div>
		</div>
        <!-- 产品特点-->
<!--        
        <div class="product_spec_parent" style="padding-bottom: 1rem;">
			<cardComponent>
			</cardComponent>
			
        </div> -->
		<div :style ='{backgroundImage: "url("+ rimg+")"}' style="color: #EBEEF5;">
        <div id="联系我们" class="about_me head-label" > 
			  
        </div>
		<div style="text-align: left;" class="font_size_24">
		   <span style="font-size:40px;color:#FF3939;"><strong>L</strong></span> 联系我们
		</div>
        <div style="width: 90%;margin: 10px auto;">
           <div class="footer">
           	<div class="top container">
           		<div class="left">
					
           			<div class="left_text">
                           <p class="title">投资战略合作</p>
                           <p>电　话：010-57807777</p>
                           <p>传　真：80115555-482335</p>
                           <p>邮　箱：000802@bjc-ent.com</p>
                       </div>
                       <div class="left_text left_text_margin">
                           <p class="title">文化项目合作</p>
                           <p>电　话：010-57807777</p>
                           <p>传　真：010-57807778</p>
                           <p>邮　箱：bjwh13121163652@139.com</p>
                       </div>
           		</div>
           		<div href="/" class="ovh footer_logo">
           			<!-- <img src="/images/footer_logo.png"> -->
					大幕影视
           		</div>
           	</div>
           	<div class="container center">
				<div class="dt_ceng" v-show="flag"><!-- style="display: none;" -->
					<img src="../assets/dt.jpg" >
				</div>
                   <!-- <div class="wx_ewm_ceng" style="display: none;"><img src="/images/wx_ewm.jpg"></div>
                   <div class="wb_ewm_ceng" style="display: none;"><img src="/images/wb_ewm.jpg"></div> -->
               	<span>地址：北京市朝阳区望京街1号北京数字文化产&nbsp;</span><span class="dz_biao"><img  @mouseenter="enter()"     
        @mouseleave="leave()" :src="dimg"></span><span>邮编：100016</span>
               <!-- 	<span class="ewm ewm1"><img src="/images/wx_biao.png"></span><span class="ewm ewm2"><img src="/images/wb_biao.png"></span> -->
           	</div>

           </div>
        </div>
</div>
    </div>
</template>
<script>
//1.先使用import导入你要在该组件中使用的子组件
import cardComponent from './Card.vue'
import qimg from '../../static/slider/q1.jpg'
import redimg from '../../static/slider/red.jpg'
import bbimg from '../../static/slider/bb.jpg'
import rimg from '../../static/slider/r.jpg'
import dimg from '../../static/slider/d.png'
import cimg from '../../static/slider/c.png'
import q12img from '../../static/slider/q12.jpg'
    export default {
		components: {
		cardComponent
		},
        name: 'Index',
        data() {
            return {
				seen: true,
				 flag: false,
				red:"red",
				qimg: qimg,
				q12img: q12img,
				redimg: redimg,
				bbimg:bbimg,
				rimg:rimg,
				dimg:dimg,
				cimg:cimg,
				tableData: [{
				          date: '2016-05-02',
				          name: '公司重要通知发布如下信息公司重要通知发布如下信息',
				        }, {
				          date: '2016-05-04',
				          name: '公司重要通知发布如下信息',
				        }, {
				          date: '2016-05-01',
				          name: '公司重要通知',
				        }, {
				          date: '2016-05-03',
				          name: '公司重要通知',
				        },
						{
						          date: '2016-05-02',
						          name: '公司重要通知',
						        }, {
						          date: '2016-05-04',
						          name: '公司重要通知',
						        }, {
						          date: '2016-05-01',
						          name: '公司重要通知',
						        }, {
						          date: '2016-05-03',
						          name: '公司重要通知',
						        },
								{
								          date: '2016-05-02',
								          name: '公司重要通知',
								        }, {
								          date: '2016-05-04',
								          name: '公司重要通知',
								        }, {
								          date: '2016-05-01',
								          name: '公司重要通知',
								        }, {
								          date: '2016-05-03',
								          name: '公司重要通知',
								        },
						]
				 ,
				videoSrc: require('../../static/xc.mp4'),
				      videoImg:require('../../static/other/用户管理.png'),
				      playStatus: '',
				      muteStatus: '',
				      isMute: true,
				      isPlay: false,
				      // width: '800', // 设置视频播放器的显示宽度（以像素为单位）
				      // height: '500', // 设置视频播放器的显示高度（以像素为单位）
				      preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
				      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
				      autoplay: '',
			
                sliders: [],
                images: [
                    {
                        img: require('../../static/other/1.png'),
                        title: "短剧",
                        color: 'red'
                    },
                    {
                        img: require('../../static/other/2.png'),
                        title: "广告",
                        color: 'red'
                    },
                    {
                        img: require('../../static/other/3.png'),
                        title: "宣传片",
                        color: 'red'
                    }, {
                        img: require('../../static/other/4.png'),
                        title: "影视",
                        color: 'red'
                    },
                    {
                        img: require('../../static/other/品牌渠道.png'),
                        title: "动画",
                        color: 'red'
                    },
                    {
                        img: require('../../static/other/品牌渠道.png'),
                        title: "建筑漫游&VR",
                        color: 'red'
                    }
                ],
                products: [
                    {
                        img: [require('../../static/other/手机端商品.png'), require('../../static/other/手机端商品SKU.png')],
                        title: "手机端商品展示 满足多规格显示",
                        content: ["商品热销分类显示 分类导航显示所有分类", "热销商品优先排序 商城首页轮播自定义",
                            "商品多规格多价格展示 商品直接在线购买支付"
                        ]
                    }
                ],
                manages: [
                    {
                        img: [require('../../static/other/图片1.png')],
                        title: "小程序+公众号一体化微信商城管理平台",
                        content: ["公众号菜单自定义发布 微信图文图片素材管理", "商品多规格SKU自定义上架 分类自定义设置",
                            "用户管理 用户自定义标签，了解用户消费行为",
                            "订单管理 实时掌握商品交易详情", "物流闪电发货 实时掌握物流追踪状态",
                        ]
                    }
                ],
                spec: {
                    img: require('../../static/other/arrow.png'),
                    product: [
                        {
                            img: require('../../static/other/手指.png'),
                            title: "一键建铺",
                            contents: ["注册一键创建店铺", "开启您的专属店铺"]
                        },
                        {
                            img: require('../../static/other/店铺管理.png'),
                            title: "店铺装扮",
                            contents: ["不同业态打造不同风格", "给用户流畅的视觉体验"]
                        },
                        {
                            img: require('../../static/other/数据分析.png'),
                            title: "营销分析",
                            contents: ["多玩法提升品牌知名度", "优惠福利刺激付费转化"]
                        },
                        {
                            img: require('../../static/other/助力零售.png'),
                            title: "助力零售",
                            contents: ["提供专业产品服务", "帮助线下零售业态提升营销"]
                        }
                    ]
                },
                carousel_height: '550px',
            }
        },
        methods: { enter() {
                    this.flag = true
                },
                leave() {
                    this.flag = false
                },
				handleSelect(key) {
				    switch (key){
				        case 1:
				            this.$router.push({path:"fashion",name: "Fashion",query: '公司片库' });
				            break;
				        case 2:
				            this.$router.push({name: "Fashion",query: '公司介绍'});
				            break;
				        case 3:
				            this.$router.push({name: "Fashion",query:'公司战略'});
				            break;
						case 4:
						    this.$router.push({name: "Fashion",query: '人才引进'});
						    break;
				        // case '3':
				        //     this.$router.push({name: "Index"});
				        //     window.location.hash = "#产品特点";
				        //     break;
				        // case '4':
				        //     this.$router.push({name: "Index"});
				        //     window.location.hash = "#合作伙伴";
				        //     break;
				        case '5':
				            this.$router.push({name: "Index"});
				            window.location.hash = "#联系我们";
				            break;
				    }
				},
				handleSelect2(key) {

				    switch (key){
				        case 1:
				            this.$router.push({path:"com",name: "Com",query: '短剧' });
				            break;
				        case 2:
				            this.$router.push({name: "Com",query: '广告'});
				            break;
				        case 3:
				            this.$router.push({name: "Com",query:'宣传片'});
				            break;
						case 4:
						    this.$router.push({name: "Com",query: '影视'});
						    break;
				        case 5:
				           this.$router.push({name: "Com",query: '建筑漫游&VR'});
				            break;
							case 6:
							   this.$router.push({name: "Com",query: '动画'});
							    break;
								case 7:
								   this.$router.push({name: "Com",query: '人才引进'});
								    break;
				    }
				},
				menuSeen(){
				    // 屏幕尺寸
				    let screenHeight=document.body.clientWidth;
				    if(screenHeight>415){
				        this.seen=true;
				    }else{
				        this.seen=false;
				    }
				},
},
        mounted() {
			this.menuSeen()
            this.sliders = [
                {
                    img: require("../../static/slider/a1.jpg")
                },
                {
                    img: require("../../static/slider/a2.jpg")
                },
                {
                    img: require('../../static/slider/a3.jpg')
                },
                {
                    img: require('../../static/slider/a4.jpg')
                }
            ]
			this.sliderslist = [
			    
			        [
                {
                    img: require("../../static/slider/b1.jpg")
                },
                {
                    img: require("../../static/slider/b2.jpg")
                },
                {
                    img: require('../../static/slider/b3.jpg')
                },
                {
                    img: require('../../static/slider/b4.jpg')
                }
            ]
			    ,
			    
			        [
                {
                    img: require("../../static/slider/b3.jpg")
                },
                {
                    img: require("../../static/slider/b2.jpg")
                },
                {
                    img: require('../../static/slider/b3.jpg')
                },
                {
                    img: require('../../static/slider/b4.jpg')
                }
            ]
			    ,
			    
			      [
                {
                    img: require("../../static/slider/b4.jpg")
                },
                {
                    img: require("../../static/slider/b4.jpg")
                },
                {
                    img: require('../../static/slider/b3.jpg')
                },
                {
                    img: require('../../static/slider/b4.jpg')
                }
            ]
			   ,
			    
			        [
                {
                    img: require("../../static/slider/b2.jpg")
                },
                {
                    img: require("../../static/slider/b1.jpg")
                },
                {
                    img: require('../../static/slider/b3.jpg')
                },
                {
                    img: require('../../static/slider/b4.jpg')
                }
            ]
			    
			]
        },
        computed: {
            //计算高度
            computeHeight() {
                let screenHeight = document.body.clientWidth;
                if (screenHeight > 415) {
                    return '29rem';
                } else {
                    return '17rem';
                }
            },
			//计算高度
			computeHeight2() {
			    let screenHeight = document.body.clientWidth;
			    if (screenHeight > 415) {
			        return '33rem';
			    } else {
			        return '22rem';
			    }
			},
			//计算高度
			computeHeight3() {
			    let screenHeight = document.body.clientWidth;
			    if (screenHeight > 415) {
			        return '10rem';
			    } else {
			        return '8rem';
			    }
			},
            computeArrowImg() {
                let screenHeight = document.body.clientWidth;
                if (screenHeight > 450) {
                    return require('../../static/other/arrow.png');
                } else {
                    return require('../../static/other/arrow_down.png');
                }
            }

        },
    }
</script>

<style scoped>
/* 	>>>.el-carousel__container{
		height: 33rem;
	} */
/* 	>>>.el-carousel__arrow--left{
		display:inherit !important;
	}
	>>>.el-carousel__arrow--right{
		display:inherit !important;
	} */
	>>>.el-carousel__arrow{
	
		font-size: 2rem;
		width: 2rem;
		height: 2rem;
	}
/* 	.container>>> .el-carousel__arrow--left{
		left: -1% !important;
		top:70%
	}
	.container>>>.el-carousel__arrow--right{
		top:70%
	} */
    .border_parent {
        width: 90%;
        margin: auto;
    }

    .slider_img {
        height: 550px;
        width: 100%;
    }

    .solve {
        margin-top: 30px;
        margin-bottom: 10px
    }

    .border {
        border-radius: 6px;
        border: 1px solid #EBEEF5;
        height: auto;
        margin: 10% 10% 0% 10%;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		cursor: pointer;
    }

    .border_one {
        margin-left: 0;
    }

    .border_img_parent {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .product_mobile_content {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .product_mobile_img {
        width: 50%;
    }

    .product_mobile_title {
        font-weight: bold;
        text-align: center;
    }

    .product_pc_one {
        text-align: center;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .font_size_30 {
        font-size: 1.875em;
    }

    .product_font_style {
        font-size: 1.125em;
    }

    .product_pc_img {
        width: 100%
    }

    .product_pc_img_div {
        width: 50%;
        float: left;
        display: flex;
        align-items: center;
    }

    .product_pc {
        display: flex;
        width: 90%;
        margin: 20px auto;
        /* background: #F2F6FC; */
        align-items: center;
    }

    .product_spec_title {
        /* margin-top: 30px; */
        margin-bottom: 10px
    }

    .product_spec_parent {
        display: flex;
        width: 90%;
        margin: 20px auto;
        align-items: center;
        height: auto
    }

    .cooperation_parent {
        display: flex;
        justify-content: center;
        width: 90%;
        margin: 20px auto;
        align-items: center;
        height: auto
    }

    .border_spec {
        border-radius: 6px;
        border: 1px solid #EBEEF5;
        float: left;
        width: 25%;
        height: auto;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .about_me_p {
        font-size: 1.25em;
        font-weight: normal;
        padding: 0 20px;
        margin: 10px;
    }

    .border_title {
        font-family: "PingFang SC";
        margin-top: 10px;
        font-size: 1.125em;
        font-weight: bold;
        text-align: center;
		margin-bottom: 20px !important;
    }

    .border_content_one {
        margin-top: 20px;
        font-size: 1.125em;
        text-align: center;
    }

    .border_content_two {
        margin-top: 5px;
        font-size: 1.125em;
        margin-bottom: 25px;
        text-align: center;
    }

    .img_border {
        margin-top: 15px;
        width: 80px;
        height: 80px
    }

    .border_spec_inner_one {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 35px;
        height: 70px;
    }

    .border_spec_content_one {
        margin-top: 15px;
        font-size: 1.125em;
        float: left;
        text-align: center;
    }

    .border_spec_inner_last {
        margin-top: 15px;
        font-size: 1.125em;
        float: left;
        margin-bottom: 25px;
        text-align: center;
    }

    .cooperation {
        margin-top: 30px;
        width: 100%;
    }

    .about_me {
        display: flex;
        margin-top: 30px;
        justify-content: center;
        width: 100%;
    }

    .product_mobile {
        width: 90%;
        align-items: center;
        margin: 0px 20px 0px 20px; 
  /*      background: #F2F6FC; */
    }

    .product_mobile_img_div {
        width: 50%;
        height: auto;
    }

    .product_mobile_content_one {
        margin-top: 20px;
        text-align: center;
    }

    .product_mobile_content_two {
        margin-top: 10px;
        text-align: center;
    }
/**- reset -**/
*,
input,
textarea,
a,
button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
input,
select,
button,
textarea {
  border: 0;
  background: transparent;
  vertical-align: middle;
  outline: 0;
}
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
img {
  border: none;
}
input,
select,
textarea {
  outline: none;
  border: none;
  background: none;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
}
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img,
footer,
header,
nav {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
fieldset,
img {
  border: none;
}
img {
  display: block;
}
h1,
h2,
h3,
h4 {
  font-weight: normal;
}
i,
em {
  font-style: normal;
}
address,
caption,
cite,
code,
dfn,
th,
var {
  font-style: normal;
  font-weight: normal;
}
ul,
ol {
  list-style: none;
}
input {
  padding-top: 0;
  padding-bottom: 0;
  font-family: "å¾®è½¯é›…é»‘", "å®‹ä½“";
}
input::-moz-focus-inner {
  border: none;
  padding: 0;
}
select,
input {
  vertical-align: middle;
}
select,
input,
textarea {
  font-size: 12px;
  margin: 0;
}
input[type="text"],
input[type="password"],
textarea {
  outline-style: none;
  -webkit-appearance: none;
}
textarea {
  resize: none;
}
input,
textarea {
  background: none;
  border: none;
}
table {
  border-collapse: collapse;
}
body {
  color: #333;
  /**- 20180708-02 start -**/
  font: 12px "å¾®è½¯é›…é»‘";
  /**- 20180708-02 end -**/
  background: #fff;
}
a {
  color: #666;
  text-decoration: none;
}
a,
label {
  outline: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.pcshow {
  display: block !important;
}
.moshow {
  display: none !important;
}
.ovh {
  overflow: hidden;
  display: block;
}
.w100,
img {
  width: 100%;
  height: auto;
}
.main {
  width: 100%;
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
}
.container {
  width: 83.33%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
body {
  color: #fff;
  font-family: "å¾®è½¯é›…é»‘";
  overflow-x: hidden;
}
a {
  color: #fff;
}
.arrow-left,
.arrow-right {
  position: absolute;
  width: 4%;
  height: 80px;
  left: 4%;
  top: 50%;
  margin-top: -40px;
}
.arrow-right {
  left: auto;
  right: 4%;
}
.arrow-left img,
.arrow-right img {
  width: auto;
  height: 62.5%;
  position: absolute;
  top: 18.75%;
}
.arrow-left img,
.arrow-right img {
  left: 50%;
  transform: translateX(-50%);
}
/******************- index.html -*********************/
/**- nav -**/
.header {
  background-color: #c8000a;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99993;
}
.header .container {
  height: 61px;
  margin: 0 auto;
  position: relative;
}
.nav {
  width: 765px;
  position: absolute;
  left: 50%;
  margin-left: -340px;
  top: 0px;
  overflow: hidden;
}
.nav a {
  width: 12.4%;
  height: 61px;
  line-height: 61px;
  text-align: center;
  font-size: 16px;
  float: left;
  position: relative;
  transition: all 0.1s linear 0s;
  -webkit-transition: all 0.1s linear 0s;
  -moz-transition: all 0.1s linear 0s;
  -o-transition: all 0.1s linear 0s;
}
.nav a:hover {
  font-size: 18px;
}
.nav a.cur {
  font-size: 18px;
}
.nav a.cur span {
  bottom: 0 !important;
}
.nav a span {
  font-size: 11px;
  height: 22px;
  line-height: 22px;
  font-family: Arial;
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
}
.hea-video {
  width: 40px;
  height: 61px;
  position: absolute;
  top: 0px;
  right: 45px;
  cursor: pointer;
}
.hea-video img {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
}
.subnav {
  cursor: pointer;
  width: 45px;
  position: absolute;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 99;
}
.subnav img {
  width: auto;
  position: absolute;
  top: 50%;
  right: 0px;
  margin-top: -9px;
}
.subnav ul {
  width: 132px;
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  padding: 10px 0px 20px 0px;
  border-bottom: 2px #c8000a solid;
  z-index: 9999;
}
.subnav ul li {
  width: 100px;
  margin: 0 auto;
  border-bottom: 2px #eee solid;
}
.subnav ul li a {
  overflow: hidden;
  display: block;
  height: 28px;
  font-size: 16px;
  line-height: 28px;
  padding-left: 23px;
  color: #000;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  background: url('/images/subnav-bg.png') left center no-repeat;
}
.subnav ul li a:hover {
  color: #c8000a;
  background: url(/images/subnav_biao.jpg) no-repeat left center;
}
.logo {
  position: absolute;
  left: 0px;
  top: 0px;
  /**- 20180709 start -**/
  width: 150px;
  /**- 20180709 end -**/
}
.hea-home .logo {
  display: none;
}
.hea-home .nav {
  margin-left: -420px;
}
.hea-home .hea-video {
  right: 50%;
  margin-right: -384px;
}
.hea-home .subnav {
  right: 50%;
  margin-right: -424px;
}
.scr-href {
  overflow: hidden;
  display: block;
  border-top: 61px solid #fff;
  margin-top: -61px;
}
/**- banner -**/
.logo-home {
  margin-top: 61px;
}
.logo-home img {
  width: 26.5%;
  max-width: 290px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4.2%;
}
.banner {
  background: url('/images/banner_bg.jpg') 50% 50% no-repeat;
  background-size: cover;
  position: relative;
}
.banner .main {
  position: relative;
  /**-20180709 start-**/
  width: 100%;
  padding: 0 3.525%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  /**-20180709 end-**/
}
.banner .sw-banner {
  /**-20180709 start-**/
  width: 100%;
  /**-20180709 end-**/
  margin-left: auto;
  margin-right: auto;
}
.banner .swiper-wrapper,
.banner .swiper-slide {
  height: auto !important;
}
.banner .arrow-left,
.banner .arrow-right {
  width: 4%;
  height: 80px;
  position: absolute;
  left: 0;
  top: 0;
  top: 50%;
  margin-top: -40px;
}
.banner .arrow-right {
  left: auto;
  right: 0;
}
.banner-top,
.banner-bottom {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}
.banner-bottom {
  top: auto;
  bottom: 0;
}
/**- aboutUs -**/
.about {
  background: url(/images/about_bg.jpg) repeat-x center top;
  background-size: 100% 100%;
  padding-bottom: 1.3%;
  width: 100%;
  font-size: 16px;
}
.about .aboutUs {
  width: 100%;
  margin-top: 5%;
  line-height: 26px;
}
.about .aboutUs .tu {
  float: left;
  width: 23%;
}
.about .aboutUs .tu img {
  width: 100%;
}
.about .aboutUs p {
  position: relative;
  right: 0;
  width: 74%;
  margin-left: 25%;
}
.about .companies h3 {
  width: 32.7%;
  margin: 0 auto;
  margin-top: 4.5%;
  margin-bottom: 1.5%;
}
.about .companies ul {
  *zoom: 1;
}
.about .companies ul:before,
.about .companies ul:after {
  display: table;
  content: "";
}
.about .companies ul:after {
  clear: both;
}
.about .companies ul li {
  width: 49.1%;
  float: left;
  overflow: hidden;
  margin-right: 1px;
  background: #fff;
}
.about .companies ul li > a {
  overflow: hidden;
}
.about .companies ul li > a img {
  width: 100%;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.about .companies ul li > a:hover img {
  transform: scale(1.05);
}
.comp-con {
  width: 828px;
  height: 608px;
  position: fixed;
  display: none;
  top: 50%;
  left: 50%;
  margin-left: -414px;
  margin-top: -304px;
  background: url(/images/company_bg.jpg) center center no-repeat;
  z-index: 9999999;
}
.comp-con .fl {
  width: 360px;
}
.comp-con .fl .comp-enter {
  width: 102px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -15px;
}
.comp-con .fr {
  padding-top: 120px;
  width: 320px;
  margin-right: 50px;
  color: #595656;
  font-size: 14px;
  line-height: 28px;
}
.comp-img {
  width: 320px;
  overflow: hidden;
  display: block;
  margin-top: 175px;
  margin-left: 6px;
}
.comp-img img {
  width: 362px;
}
.comp-close,
.ceng_gb_buton {
  padding: 10px 10px 10px 10px;
  position: absolute;
  top: 3px;
  right: 3px;
  cursor: pointer;
}
.comp-close img,
.ceng_gb_buton img {
  width: 30px;
  height: 30px;
  display: inline;
  float: right;
}
.comp-layer {
  width: 100%;
  height: 100%;
  position: fixed;
  display: none;
  top: 0px;
  left: 0px;
  z-index: 99998;
  background: url('/images/ceng_bg.png') center center repeat;
}
/**- group -**/
.group {
  width: 100%;
  background-color: #fff;
  background: url(/images/group_bg.jpg) center top no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.group .main {
  position: relative;
  /**- 20180709 start -**/
  width: 100%;
  padding: 0 8.335%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  /**- 20180709 end -**/
}
.group .tu {
  width: 27.3%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
}
.group .swiper-wrapper {
  height: auto !important;
}
.sw-group{
  width: 100% !important;
}
.group .elite {
  width: 89.33%;
  height: auto !important;
  position: relative;
  overflow: hidden;
}
.group .elite .people {
  width: 100%;
  overflow: hidden;
  display: block;
  padding: 18% 0px 30% 0px;
  /**- 20180708-02 start -**/
  padding-left: 1px !important;
  padding-right: 1px !important;
  /**- 20180708-02 end -**/
}
.group .elite .people img {
  width: 34%;
  float: left;
}
.group .elite .people div {
  color: #595656;
  width: 56%;
  display: inline;
  float: right;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 9%;
}
.group .elite .people div h4 {
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  border-bottom: 1px #bdbbbb solid;
  margin-bottom: 2%;
  padding-bottom: 4%;
}
.group .elite .people div p {
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
}
.group .group-pagination {
  position: absolute;
  z-index: 20;
  bottom: 4%;
  width: 100%;
  text-align: center;
}
.group .swiper-pagination-switch {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 8px;
  background: #fff;
  margin: 0 6px;
  opacity: 0.8;
  cursor: pointer;
}
.group .swiper-active-switch {
  background: #ff5e37;
}
/**- projects -**/
.projects {
  width: 100%;
  background: url(/images/bg-projects.jpg) no-repeat center top;
  background-size: 100% 100%;
  padding-top: 3.5%;
  padding-bottom: 6%;
  position: relative;
}
.projects .main {
  position: relative;
}
.projects .swiper-wrapper {
  height: auto !important;
}
.projects .arrow-left {
  left: -5%;
  width: 5%;
}
.projects .arrow-right {
  left: auto;
  right: -5%;
  width: 5%;
}
.projects .projects_top {
  position: relative;
}
.projects .projects_top h2 {
  width: 40.9%;
}
.projects .projects_top h2 img {
  width: 100%;
}
.projects .projects_top .more {
  width: 10.9%;
  position: absolute;
  top: 24%;
  right: 450px;
  overflow: hidden;
}
.projects .projects_top .more img {
  width: 100%;
}
.projects .projects_top .more img.more_hover {
  transform: translateX(0);
  position: absolute;
  top: 0;
  left: -100% !important;
  right: auto;
  transition: all 0.2 linear 0s;
  -webkit-transition: all 0.2 linear 0s;
  -moz-transition: all 0.2 linear 0s;
  -o-transition: all 0.2 linear 0s;
}
.projects .projects_bottom {
  margin-top: 7%;
  width: 100%;
  height: 76%;
  position: relative;
}
.projects .projects_bottom .swiper-container {
  height: 100%;
}
.projects .projects_bottom .swiper-container .swiper-wrapper {
  height: 100%;
}
.projects .projects_bottom .project {
  width: 100%;
  height: auto !important;
}
.projects .projects_bottom .project ul {
  *zoom: 1;
  width: 100%;
  /**- 20180708-02 start -**/
  padding-left: 1px !important;
  padding-right: 1px !important;
  /**- 20180708-02 end -**/
}
.projects .projects_bottom .project ul:before,
.projects .projects_bottom .project ul:after {
  display: table;
  content: "";
}
.projects .projects_bottom .project ul:after {
  clear: both;
}
.projects .projects_bottom .project ul li {
  width: 25%;
  float: left;
  overflow: hidden;
}
.projects .projects_bottom .project ul li .img {
  padding-bottom: 127.5%;
  cursor: pointer;
  width: 100%;
  position: relative;
}
.projects .projects_bottom .project ul li .img .img_cover {
  z-index: 99;
  height: 100% !important;
  opacity: 1;
  display: block\9;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.projects .projects_bottom .project ul li .img img {
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}
.projects .projects_bottom .project ul li:hover .img_cover {
  opacity: 0;
  display: none \9;
}
.projects .projects_bottom .project ul li .text {
  height: 190px;
  font-size: 16px;
  line-height: 30px;
  color: #414141;
  text-align: center;
  margin-top: -11px;
  padding-top: 50px;
  z-index: 100;
  position: relative;
  right: 0;
  left: 0;
  margin-top: -20px;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  background: url(/images/project_hui.png) center top no-repeat;
}
.projects .projects_bottom .project ul li .text.bg_sh {
  background: url(/images/project_shenhui.png) center top no-repeat;
}
.projects .projects_bottom .project ul li .text h4 {
  font-size: 20px;
  font-weight: 400;
  padding-left: 2%;
  padding-right: 2%;
}
.projects .projects_bottom .project ul li .text p {
  font-size: 16px;
  line-height: 28px;
  height: 84px;
  overflow: hidden;
  display: block;
  padding-left: 2%;
  padding-right: 2%;
}
.projects .projects_bottom .project ul li .text a {
  position: absolute;
  bottom: 22px;
  left: 25%;
  width: 48%;
  height: 45px;
  line-height: 45px;
  font-size: 12px;
  color: #fd9158;
  border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border: 1px #fd9158 solid;
}
.category {
  height: 100px;
  font-size: 20px;
  width: auto;
/*  position: absolute; */
  left: auto;
  right: 0;
  top: 0;
}
.category li {
  width: 98px;
  height: 98px;
  /* line-height: 98px; */
  margin-left: 8px;
  margin-right: 0px !important;
  text-align: center;
  cursor: pointer;
  background: url(../../static/slider/y1.png) no-repeat center top;
  background-size: 100% 100%;
  float: left;
}
.category li:hover {
  background: url(../../static/slider/y2.png) no-repeat center top;
  background-size: 100% 100%;
  color: #022d31;
  font-weight: bold;
}
.category li:hover {
  background: url(../../static/slider/y2.png) no-repeat center top;
  background-size: 100% 100%;
  color: #022d31;
  font-weight: bold;
}
/**- resources -**/
.resources {
  width: 100%;
  background: url(/images/bg-resources.jpg) no-repeat center top;
  background-size: 100% 100%;
  padding-top: 70px;
  position: relative;
}
.resources .main {
  position: relative;
}
.resources .swiper-wrapper {
  height: auto !important;
}
.resources .resources_top {
  position: relative;
}
.resources .resources_top h2 {
  width: 41.8%;
}
.resources .resources_top h2 img {
  width: 100%;
}
.resources .resources_top .more {
  width: 10.9%;
  position: absolute;
  top: 16px;
  right: 555px;
  overflow: hidden;
}
.resources .resources_top .more img {
  width: 100%;
}
.resources .resources_top .more img.more_hover {
  transform: translateX(0);
  position: absolute;
  top: 0;
  left: -100%;
}
.resources .resources_top .category {
  font-size: 20px;
  height: 100px;
  width: auto;
  position: absolute;
  left: auto;
  right: 0;
  top: 0;
}
.resources .resources_bottom {
  margin-top: 80px;
  width: 100%;
  height: 76%;
  position: relative;
}
.resources .resources_bottom .swiper-container {
  height: 100%;
}
.resources .resources_bottom .swiper-container .swiper-wrapper {
  height: 100%;
}
.resources .resources_bottom .resource {
  width: 100%;
  height: auto !important;
  padding-bottom: 170px;
}
.resources .resources_bottom .resource ul {
  width: 100%;
  /**- 20180708-02 start -**/
  padding-left: 1px !important;
  padding-right: 1px !important;
  /**- 20180708-02 end -**/
}
.resources .resources_bottom .resource ul li {
  width: 25%;
  float: left;
  position: relative;
}
.resources .resources_bottom .resource ul li .box .img {
  cursor: pointer;
  width: 100%;
  padding-bottom: 127.5%;
  position: relative;
}
.resources .resources_bottom .resource ul li .box .img .img_cover {
  z-index: 99;
  height: 100%;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.resources .resources_bottom .resource ul li .box .img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  cursor: pointer;
}
.resources .resources_bottom .resource ul li .box .text {
  font-size: 14px;
  height: 126px;
  font-weight: 400;
  color: #414141;
  margin-top: -24px;
  /**- 20180706 -**/
  padding: 18px;
  width: 100%;
  z-index: 100;
  position: relative;
  right: 0;
  left: 0;
  background-color: #fff;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.resources .resources_bottom .resource ul li .box .text.bg_sh {
  background-color: #f0f0f0;
}
.resources .resources_bottom .resource ul li .box .text h4 {
  font-size: 20px;
  line-height: 24px;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
}
.resources .resources_bottom .resource ul li .box .text h4:hover span {
  opacity: 0;
  display: none\9;
}
.resources .resources_bottom .resource ul li .box .text > p {
  /**- 20180706 -**/
  line-height: 24px;
  height: 72px;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.resources .resources_bottom .resource ul li .box .ceng {
  opacity: 0;
  display: none\9;
  z-index: 100;
  /**- 20180706 -**/
  padding: 18px;
  width: 100%;
  /**- 20180706 -**/
  height: 225px;
  overflow: hidden;
  color: #fff;
  background: #ff683f;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  position: absolute;
  top: 0px;
  left: 0px;
}
.resources .resources_bottom .resource ul li .box .ceng h4 {
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
}
.resources .resources_bottom .resource ul li .box .ceng p {
  /**- 20180706 -**/
  line-height: 24px;
}
.resources .resources_bottom .resource ul li .box .ceng .byxy {
  margin-bottom: 22px;
}
.resources .resources_bottom .resource ul li .box .ceng .res-con {
  /**- 20180706 -**/
  max-height: 72px;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.resources .resources_bottom .resource ul li .box:hover .img_cover {
  opacity: 0;
  display: none\9;
}
.resources .resources_bottom .resource ul li .box:hover .ceng {
  opacity: 1;
  display: block\9;
}
.resources .resources_bottom .arrow-left {
  left: -4%;
  top: 35%;
}
.resources .resources_bottom .arrow-right {
  right: -4%;
  top: 35%;
}
/**- newsSecurity -**/
.newsSecurity {
  width: 100%;
  overflow: hidden;
  display: block;
  padding-bottom: 7.5%;
  padding-top: 7%;
  background: url(/images/bg-news.jpg) no-repeat center top;
  background-size: 100% 100%;
  position: relative;
  z-index: 3;
}
.newsSecurity .banxin {
  width: 90%;
  margin: 0 auto;
}
.newsSecurity .banxin .news {
  float: left;
  width: 68%;
}
.newsSecurity .banxin .news .news_top {
  position: relative;
}
.newsSecurity .banxin .news .news_top h2 {
  width: 42.3%;
}
.newsSecurity .banxin .news .news_top h2 img {
  width: 100%;
}
.newsSecurity .banxin .news .news_top .more {
  width: 14.9%;
  position: absolute;
  top: 16px;
  right: 0;
  overflow: hidden;
}
.newsSecurity .banxin .news .news_top .more img {
  width: 100%;
}
.newsSecurity .banxin .news .news_top .more img.more_hover {
  transform: translateX(0);
  position: absolute;
  top: 0;
  left: -100%;
}
.newsSecurity .banxin .news .news_bottom {
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  display: block;
}
.newsSecurity .banxin .news .news_bottom ul {
  width: 100%;
  padding-top: 50px;
}
.newsSecurity .banxin .news .news_bottom ul li {
  width: 33.33%;
  height: 340px;
  float: left;
  overflow: hidden;
  position: relative;
}
.newsSecurity .banxin .news .news_bottom ul li .box .img {
  height: 170px;
  width: 100%;
  position: relative;
}
.newsSecurity .banxin .news .news_bottom ul li .box .img .img_cover {
  z-index: 99;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.newsSecurity .banxin .news .news_bottom ul li .box .img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.newsSecurity .banxin .news .news_bottom ul li .box .text {
  width: 100%;
  height: 170px;
  background: #fff;
  position: relative;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.newsSecurity .banxin .news .news_bottom ul li .box .text .bj {
  width: 100%;
  height: 100%;
}
.newsSecurity .banxin .news .news_bottom ul li .box .text .bj .day {
  font-size: 125px;
  color: #fae9e9;
  text-align: center;
  padding: 10px 0;
  line-height: 85px;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.newsSecurity .banxin .news .news_bottom ul li .box .text .bj .month {
  font-size: 60px;
  color: #fae9e9;
  text-align: center;
  line-height: 64px;
  padding-left: 16px;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.newsSecurity .banxin .news .news_bottom ul li .box .text .font {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  font-size: 16px;
  color: #000;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.newsSecurity .banxin .news .news_bottom ul li .box .text .font .time {
  height: 60px;
  line-height: 60px;
  padding-right: 20px;
  text-align: right;
}
.newsSecurity .banxin .news .news_bottom ul li .box .text .font .dec {
  line-height: 24px;
  width: 210px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
  display: block;
  height: 72px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.newsSecurity .banxin .news .news_bottom ul li .box:hover .img_cover {
  opacity: 0;
  display: none\9;
}
.newsSecurity .banxin .news .news_bottom ul li .box:hover .font {
  color: #fff;
}
.newsSecurity .banxin .news .news_bottom ul li .box:hover .day,
.newsSecurity .banxin .news .news_bottom ul li .box:hover .month {
  color: #fa603a !important;
}
.newsSecurity .banxin .security {
  width: 26%;
  float: right;
}
.newsSecurity .banxin .security h2 {
  width: 95.7%;
}
.newsSecurity .banxin .security h2 img {
  width: 100%;
}
.newsSecurity .banxin .security div {
  margin-top: 21px;
}
.newsSecurity .banxin .security div a {
  font-size: 18px;
  color: #fff;
  width: 100%;
  height: 62px;
  line-height: 62px;
  text-align: center;
  background: url(/images/sec_bd.png) center center no-repeat;
  background-size: 100% 100%;
  display: block;
  margin-bottom: 10px;
  position: relative;
}
.newsSecurity .banxin .security div .first {
  background: #e9080f;
}
.newsSecurity .banxin .security div .first:hover {
  font-size: 20px;
}
.newsSecurity .banxin .security div .sec_hover {
  position: absolute;
  top: -21px;
  left: 0;
  width: 0;
  overflow: hidden;
  z-index: 5;
  background: url(/images/sec_bg.jpg) no-repeat center center;
  background-size: 100% 100%;
  height: 62px;
  transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
  -webkit-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
  -moz-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
  -o-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
}
/**- video -**/
.video {
  width: 100%;
  background: url(/images/bg-video.jpg) no-repeat center top;
  padding-top: 4.5%;
  padding-bottom: 4%;
  position: relative;
  z-index: 999999;
  /**- 20180708-02 start -**/
  background-color: #000;
  /**- 20180708-02 end -**/
}
.video .banxin {
  width: 88%;
  margin: 0 auto;
}
.video .banxin .video_top {
  position: relative;
}
.video .banxin .video_top h2 {
  width: 38.7%;
}
.video .banxin .video_top h2 img {
  width: 100%;
}
.video .banxin .video_top .more {
  width: 10.3%;
  position: absolute;
  top: 44px;
  right: 18%;
  overflow: hidden;
}
.video .banxin .video_top .more img {
  width: 100%;
}
.video .banxin .video_top .more img.more_hover {
  transform: translateX(0);
  position: absolute;
  top: 0;
  left: -100%;
}
.video .banxin .video_top .tv {
  width: 8.12%;
  position: absolute;
  top: 12px;
  right: 5%;
}
.video .banxin .video_bottom {
  width: 90%;
  padding: 5% 5% 5% 5%;
  margin: 0 auto;
  margin-top: 20px;
  background: #000;
}
.video .banxin .video_bottom > div {
  position: relative;
}
.video .banxin .video_bottom .video-js {
  width: 100%;
  position: relative;
  height: 100% !important;
  margin: 0 auto;
}
.video .banxin .video_bottom .video-js .vjs-big-play-button {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 0;
  border: 0;
  background: rgba(0, 0, 0, 0.4);
}
.video .banxin .video_bottom .video-js .vjs-poster {
  display: none;
}
.video .banxin .video_bottom .video-js .vjs-has-started .vjs-poster {
  display: none;
}
.video .banxin .video_bottom .video-js .vjs-tech {
  position: relative;
  height: auto;
  overflow: hidden;
  display: block;
}
.video .banxin .video_bottom .video-js .vjs-big-play-button span {
  overflow: hidden;
  display: block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: url(/images/vid-btn.svg) center center no-repeat;
  background-size: cover !important;
  top: 50%;
  left: 50%;
  position: absolute;
  margin-left: -30px;
  margin-top: -48px;
}
.video .banxin .video_bottom .video-js .vjs-control-bar {
  display: inline-flex;
}
/**- 20180708 start -**/
.vid-con {
  width: 75%;
  overflow: hidden;
  display: block;
  display: inline;
  float: left;
}
.vid-con a {
  position: relative;
}
.vid-con p {
  width: 96%;
  position: absolute;
  left: 2%;
  bottom: -50px;
  height: auto;
  font-size: 20px;
  color: #f0f0f0;
  height: 50px;
  line-height: 50px;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  padding-left: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: url(/images/playBtn.png) left center no-repeat;
  background-size: 30px auto;
}
.vid-con > div {
  cursor: pointer;
}
.vid-con > div:hover p {
  bottom: 0px;
}
.vid-list {
  width: 21%;
  display: inline;
  float: right;
  margin-top: -3%;
}
.vid-list li {
  cursor: pointer;
  margin-top: 15%;
}
/**- 20180708 end -**/
.comp-con.ceng_cont {
  background: url(/images/zi_bg.jpg) no-repeat !important;
}
.comp-con.ceng_cont .fl,
.comp-con.ceng_cont .fr {
  width: 100%;
  float: none;
}
.comp-con.ceng_cont .fr {
  padding-top: 0px;
}
.ceng_cont p.ceng_title {
  line-height: 80px;
  font-size: 30px;
  font-weight: bold;
  color: #191919;
  text-align: center;
  padding: 40px 0px 30px 0px;
}
.ceng_cont .fr div {
  display: block;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 90%;
}
.ceng_cont object {
  width: 100%;
  height: 400px;
}
/*******************- welcome.html -*******************/
.welcome {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
.welcome .video-js {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50%;
  margin-top: -50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
.welcome .video-js .vjs-big-play-button {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 0;
  border: 0;
  background: rgba(0, 0, 0, 0.4);
}
.welcome .video-js .vjs-poster {
  display: none;
}
.welcome .video-js .vjs-has-started .vjs-poster {
  display: none;
}
.welcome .video-js .vjs-big-play-button span {
  overflow: hidden;
  display: block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: url(/images/vid-btn.svg) center center no-repeat;
  background-size: cover !important;
  top: 50%;
  left: 50%;
  position: absolute;
  margin-left: -25px;
  margin-top: -25px;
}
.welcome .video-js .vjs-control-bar {
  display: inline-flex;
}
.tupian {
  background: url(/images/yuan.png) no-repeat center center;
  animation: 4s linear 0s normal none infinite rotate;
  -webkit-animation: 4s linear 0s normal none infinite rotate;
  height: 65px;
  width: 65px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.zhezhao {
  background: url(/images/zi.png) no-repeat center center;
  height: 65px;
  width: 65px;
  z-index: 11111;
  position: absolute;
  bottom: 15%;
  right: 10%;
}
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-ms-keyframes rotate {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@-o-keyframes rotate {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}
/**- footer -**/
.footer {
  width: 100%;
  background: url(/images/bg_footer_top.jpg) no-repeat center top;
  background-size: 100% 100%;
  position: relative;
  z-index: 99999990;
}
.footer .container {
  width: 51%;
}
.footer .top {
  overflow: hidden;
  display: block;
  padding-top: 2.6%;
  margin-bottom: 0.6%;
}
.footer .top .left {
  float: left;
  width: 560px;
  padding: 1.62% 0;
  border-top: 1px #e79992 solid;
  border-bottom: 1px #e79992 solid;
}
.footer .top .left .left_text {
  width: 44.1%;
  float: left;
  line-height: 23px;
  font-size: 14px;
}
.footer .top .left .left_text .title {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 12%;
}
.footer .top .left .left_text p:hover {
  color: #fff;
  font-weight: bold;
}
.footer .top .left .left_text_margin {
  padding-left: 8%;
  border-left: 1px #e79992 solid;
  width: 47%;
}
.footer .top .footer_logo {
  display: block;
  float: right;
  padding-top: 6%;
  font-size:2rem
}
.footer .center {
  padding-top: 1px;
  margin: 0 auto;
  padding-top: 3px;
  height: 96px;
  line-height: 40px;
  color: #fff;
  position: relative;
}
.footer .center .dt_ceng {
  position: absolute;
  bottom: 98px;
  width: 55%;
  left: 26px;
  z-index: 999;
/*  display: none; */
  cursor: pointer;
}
.footer .center .dt_ceng .de-close {
  position: absolute;
  padding: 15px 15px 15px 15px;
  top: 0px;
  right: 0px;
}
.footer .center .dt_ceng .de-close img {
  width: 28px;
  height: 28px;
}
.footer .center .wx_ewm_ceng {
  position: absolute;
  top: -145px;
  width: 135px;
  left: 390px;
  display: none;
}
.footer .center .wb_ewm_ceng {
  position: absolute;
  top: -145px;
  width: 135px;
  left: 390px;
  display: none;
}
.footer .center span {
  display: inline-block;
  font-size: 14px;
  float: left;
}
.footer .center .dz_biao {
  padding-top: 20px;
  margin-top: -16px;
  height: 39px;
  padding-right: 15px;
}
.footer .center .dz_biao img {
  animation: dtbiao 1s linear 0s infinite;
  -webkit-animation: dtbiao 1s linear 0s infinite;
  -moz-animation: dtbiao 1s linear 0s infinite;
  -o-animation: dtbiao 1s linear 0s infinite;
}
.footer .center .ewm {
  float: left;
  width: 4.16%;
  height: 36px;
}
.footer .center .ewm1 {
  padding: 0px 15px 0px 25px;
}
.footer .bottom {
  width: 100%;
  background-color: #232323;
}
.footer .bottom div {
  font-size: 14px;
  margin: 0 auto;
  overflow: hidden;
  height: 48px;
  line-height: 48px;
  color: #fff;
}
.footer .bottom div p {
  display: block;
  height: 48px;
  line-height: 48px;
}
.footer .bottom div p a:hover{
	color:#c8000a;
}
@keyframes dtbiao {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@-webkit-keyframes dtbiao {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@-moz-keyframes dtbiao {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@-o-keyframes dtbiao {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
/*******************- projects.html -*******************/
.ban-info {
  background-size: cover !important;
  margin-top: 61px;
}
.ban-info .container {
  position: relative;
  padding-bottom: 25.75%;
}
.ban-info i {
  width: 100%;
  height: 32.35%;
  overflow: hidden;
  display: block;
  position: absolute;
  top: 28%;
  left: 0px;
}
.ban-info img {
  width: auto !important;
}
.project-con .category {
  position: relative;
  height: auto;
}
.project-con .category a {
  overflow: hidden;
  display: block;
  color: #000;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.project-con .category li:hover a,
.project-con .category li.on a,
.project-con .category li.cur a {
  background: url('/images/cyxm_nav_hover.png') center center no-repeat;
  background-size: 100% 100% !important;
  color: #fff;
}
.project-con {
  background: url('/images/zi_bg.jpg') center top repeat;
}
.project-con .container {
  position: relative;
  margin-top: 2.2%;
  margin-bottom: 2.2%;
}
.proj-menu {
  display: inline;
  float: left;
  margin-left: -14px;
}
.proj-menu li,
.proj-menu a {
  width: 98px;
  height: 98px;
  line-height: 98px;
  display: inline;
  float: left;
}
.proj-menu li {
  margin-left: 14px;
}
.proj-menu a {
  background: url('/images/cyxm_nav.png') center center no-repeat;
  font-size: 20px;
  color: #000;
  text-align: center;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.proj-menu .pm-active a,
.proj-menu a:hover {
  background: url('/images/cyxm_nav_hover.png') 0 0 no-repeat;
  color: #fff;
}
.crumbs {
  display: block;
  position: absolute;
  right: 0px;
  bottom: -6px;
}
.crumbs a,
.crumbs p {
  display: inline;
  float: left;
  display: block;
  font-size: 16px;
  color: #595656;
  line-height: 30px;
}
.crumbs a {
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
}
.crumbs a span {
  padding: 0px 6px 0px 6px;
  cursor: default;
}
.crumbs a:hover {
  color: #c8000a;
}
.crumbs a:hover span {
  color: #595656;
}
.proj-con {
  background: url('/images/zi_nav_xian.jpg') center top repeat-x;
  padding-bottom: 2.3%;
}
.proj-list {
  margin-left: -3.03%;
  padding-bottom: 1.1%;
}
.proj-list li {
  width: 30.3%;
  display: inline;
  float: left;
  display: block;
  position: relative;
  margin-left: 3.03%;
  margin-bottom: 3.6%;
}
.proj-list a {
  position: relative;
  z-index: 10;
  margin-top: 14.5%;
  margin-right: 15%;
  margin-bottom: 23%;
  margin-left: 10%;
}

/**- 20180708 start -**/
.proj-list i {
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 139.8%;
}
/**- 20180708 end -**/

.proj-list i img {
  position: absolute;
}
.proj-list p {
  position: absolute;
  width: 100%;
  bottom: -50px;
  left: 0px;
  font-size: 20px;
  color: #f0f0f0;
  line-height: 50px;
  text-align: center;
  -webkit-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  -moz-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  -o-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  background: url('/images/cyxm_list_title.png') 0 0 repeat;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /**- 20180708-02 start -**/
   font-family: "Arial";
  /**- 20180708-02 end -**/
}
.proj-list a:hover p {
  bottom: 0px;
}
.proj-list .pv-bg {
  width: 100%;
}
.page {
  text-align: center;
  font-size: 0px;
  line-height: 0px;
}
.page li {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
.page a {
  min-width: 10px;
  font-size: 16px;
  color: #595656;
  line-height: 30px;
  padding: 0px 10px 0px 10px;
  margin: 0px 5px;
  transition: all 0.3s linear 0s;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  cursor: pointer;
  background: #fff;
  border: 1px solid #595656;
}
.page a:hover,
.page li.page-active a {
  color: #fff;
  background: #c8000a;
}
/*******************- projects-view.html -*******************/
.pv-con {
  position: relative;
  padding: 7% 4% 11% 4%;
  z-index: 2;
}
.pv-con img {
  width: 35.4%;
  display: inline;
  float: left;
}
.pv-info {
  display: inline;
  float: right;
  display: block;
  width: 50%;
  margin-right: 3.5%;
}
.pv-info h4 {
  font-size: 20px;
  color: #c8000a;
  line-height: 28px;
  margin-top: -5px;
  padding-bottom: 6%;
}
.pv-info p {
  font-size: 18px;
  color: #595656;
  line-height: 28px;
  padding-bottom: 6%;
}
.pv-info p.pv-pro {
  color: #a6a6a6;
  line-height: 30px;
}
.pv-info p.pv-pro span {
  color: #595656;
}
.pv-bg,
.pv-bg img,
.news-vpic img,
.ban-info img,
.video-list a img {
  position: absolute;
  width: 105%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1;
}
.pv-bg img,
.news-vpic img,
.video-list a img {
  width: 100%;
}
/*******************- video.html -*******************/
.video-list {
  margin-left: 0px;
}
.video-list li {
  width: 50% !important;
  margin-left: 0px !important;
  margin-bottom: 1%;
  background-size: 106% 100%;
}
.video-list a {
  margin-top: 6.5%;
  margin-right: 8.4%;
  margin-bottom: 11%;
  margin-left: 5.4%;
  position: relative;
  padding-bottom: 51.5%;
}
.video-list a img {
  height: auto !important;
}
.video-list p {
  padding-left: 43px;
  text-align: left;
  z-index: 10;
}
.video-list p img {
  width: 28px;
  height: 28px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -14px;
  margin-top: -14px;
  left: 10px;
  margin-left: 0px;
}
.v-embed {
  width: 700px;
  display: none;
  position: fixed;
  top: 50%;
  margin-top: -250px;
  left: 50%;
  margin-left: -350px;
  z-index: 999999;
  padding-top: 48px;
}
.v-embed .comp-close {
  right: -10px;
}
.ve-con,
.embed {
  width: 700px;
  height: 418px;
  background: #000;
}
/*******************- news.html -*******************/
.news-vlist {
  width: 92.7%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4%;
}
.news-vlist li {
  border-bottom: 2px solid #a9a9a9;
  padding-top: 1.5%;
  padding-bottom: 1%;
  position: relative;
}
.news-vimg {
  width: 43.5%;
  position: relative;
  display: inline;
  float: left;
  display: block;
}
.news-vimg .pv-bg {
  width: 100%;
}
.news-vpic {
  position: relative;
  padding-bottom: 46.88%;
  z-index: 10;
  margin-top: 5.6%;
  margin-right: 13.1%;
  margin-bottom: 8%;
  margin-left: 8%;
}
.news-vpic img {
  height: auto;
}
.news-vcon {
  width: 50.3%;
  display: inline;
  float: right;
  display: block;
  margin-right: 4%;
  color: #595656;
}
.news-vcon p {
  font-size: 16px;
  line-height: 24px;
  display: block;
  clear: both;
  height: 96px;
  text-indent: 2em;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
/**- 20180708-02 start -**/
.news-vcon img{
  width: auto !important;
  overflow: hidden;
  display: block;
  margin: 0 auto !important;
}
/**- 20180708-02 end -**/
.news-vtit {
  font-size: 18px;
  line-height: 24px;
  margin-top: 1.2%;
  margin-bottom: 5.5%;
  max-height: 48px;
  color: #c8000a;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.news-vmore {
  font-size: 16px;
  line-height: 34px;
  padding-left: 16px;
  color: #595656;
  overflow: hidden;
  display: block;
  position: absolute;
  right: 0px;
  bottom: 10.2%;
  background: url('/images/news-vmore.png') left center no-repeat;
}
.news-vmore:hover {
  color: #c8000a;
}
.news-vtop {
  margin-bottom: 0px;
  padding: 0px 3.65% 1% 3.65%;
  position: relative;
}
.news-vtop .news-vimg {
  display: inline;
  float: right;
  width: 57%;
  margin-right: -3%;
}
.news-vtop .news-vpic {
  margin-top: 4.8%;
  margin-right: 11.5%;
  margin-bottom: 6.6%;
  margin-left: 6%;
  padding-bottom: 49%;
}
.news-vtop .news-vcon {
  width: 43%;
  display: inline;
  float: left;
  margin-right: 0px;
}
.news-vtop .news-vcon p {
  height: auto;
  display: block;
  line-height: 22px;
}
.news-vtop .news-vtit {
  margin-top: 2.2%;
  margin-bottom: 4.5%;
}
.news-vtop .news-vmore {
  display: none;
}
.news-vtop i {
  width: 92.7%;
  height: 2px;
  position: absolute;
  bottom: 0px;
  left: 3.65%;
  background: #a9a9a9;
}
.news_vdate {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4%;
  color: #595656;
}
.news-vpro {
  padding-top: 4%;
}
.news-vpro .news-vcon {
  width: 100%;
  float: none;
  position: relative;
  padding-bottom: 2%;
}
.news-vpro .news-vcon .news-vtit {
  padding-right: 280px;
  margin-top: 0px;
  margin-bottom: 4%;
}
.news-vpro .news-vcon .news_vdate {
  position: absolute;
  top: 0px;
  right: 0px;
}
.news-vpro .news-vcon p {
  height: auto;
  display: block;
  line-height: 30px;
  text-indent: 0;
}
.news-vpro .news-vimg {
  margin-left: auto;
  margin-right: auto;
  float: none;
  margin-top: 2%;
}
.news-vline {
  border-top: 2px solid #a9a9a9;
  border-bottom: 2px solid #a9a9a9;
  padding-bottom: 1.6%;
  margin-bottom: 3%;
}
.news-vsource {
  padding-right: 30.3%;
  font-size: 14px;
  line-height: 22px;
  color: #595656;
  text-align: right;
}
@media screen and (max-width: 1700px) {
  .footer .container {
    width: 58%;
  }
}
@media screen and (max-width: 1500px) {
  .footer .container {
    width: 68%;
  }
}
/**å½“é¡µé¢å°äºŽ1350pxæ—¶ï¼Œå¤§å±å¹•ï¼Œä¸»è¦æ˜¾ç¤ºPCç«¯**/
@media screen and (max-width: 1350px) {
  .projects .projects_top .more {
    right: 370px;
  }
  .category li {
    width: 80px;
    height: 80px;
    font-size: 16px;
    line-height: 80px;
    margin-left: 6px;
  }
  .category li.on {
    background-size: 100% 100%;
  }
  .category li.cur {
    background-size: 100% 100%;
  }
  .resources .resources_top .more {
    right: 450px;
    top: 22px;
  }
  .newsSecurity .banxin .security div .first {
    font-size: 16px;
    background: #e9080f;
  }
  .newsSecurity .banxin .security div .first:hover {
    font-size: 17px;
  }
  .video {
    background-size: 130% 100%;
  }
  .footer .container {
    width: 83.33%;
  }
}
@media screen and (max-width: 1250px) {
  .nav {
    width: 670px;
    margin-left: -290px;
  }
  .hea-video {
    right: 40px;
  }
  .subnav {
    width: 40px;
  }
  .hea-home .nav {
    margin-left: -360px;
  }
  .hea-home .hea-video {
    margin-right: -350px;
  }
  .hea-home .subnav {
    margin-right: -390px;
  }
}
@media screen and (max-width: 1100px) {
  .nav {
    display: none;
  }
  .hea-home .nav {
    display: block;
  }
  .vid-con p {
    font-size: 16px;
    background-size: 24px auto;
    padding-left: 30px;
  }
}
/**åœ¨769pxå’Œ1050pxä¹‹é—´çš„å±å¹•é‡Œï¼Œä¸­ç­‰å±å¹•ï¼Œåˆ†è¾¨çŽ‡ä½Žçš„PC**/
@media screen and (max-width: 1050px) {
  .banner .main {
    width: 90%;
  }
  .arrow-left,
  .arrow-right,
  .banner .arrow-left,
  .banner .arrow-right {
    height: 70px;
    margin-top: -35px;
  }
  .about .aboutUs {
    line-height: 24px;
  }
  .about {
    font-size: 14px;
  }
  .group .elite .people div h4 {
    font-size: 16px;
    line-height: 24px;
  }
  .group .elite .people div p {
    font-size: 12px;
    line-height: 24px;
  }
  .projects .projects_top .more {
    width: 80px;
    height: 26px;
    line-height: 24px;
    right: 265px;
    top: 20px;
  }
  .projects .projects_top .more img {
    width: auto;
    height: 100%;
  }
  .projects .projects_bottom .project ul li {
    width: 25%;
  }
  .projects .projects_bottom .project ul li .text {
    height: 145px;
    padding-top: 40px;
  }
  .projects .projects_bottom .project ul li .text a {
    bottom: 12px;
    height: 26px;
    line-height: 26px;
    border-radius: 10px;
  }
  .projects .projects_bottom .project ul li .text h4 {
    font-size: 18px;
  }
  .projects .projects_bottom .project ul li .text p {
    font-size: 14px;
    line-height: 24px;
    height: 72px;
  }
  .category li {
    width: 58px;
    height: 58px;
    line-height: 58px;
    font-size: 14px;
    margin-left: 4px;
    transition: all 0.3s linear 0s;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
  }
  .resources .resources_top .more {
    right: 325px;
    top: 15px;
    width: 80px;
    height: 26px;
  }
  .resources .resources_top .more img {
    width: auto;
    height: 100%;
  }
  .resources .resources_bottom .resource {
    padding-bottom: 130px;
  }
  .resources .resources_bottom .resource ul li .box {
    /**- 20180706 -**/
  }
  .resources .resources_bottom .resource ul li .box .text h4 {
    font-size: 16px;
  }
  .newsSecurity .banxin .news .news_bottom ul {
    padding-top: 3%;
  }
  .newsSecurity {
    padding-top: 68px;
  }
  .newsSecurity .banxin .news .news_top .more {
    width: 80px;
    height: 26px;
  }
  .newsSecurity .banxin .news .news_top .more img {
    width: auto;
    height: 100%;
  }
  .newsSecurity .banxin .news .news_bottom ul li .box .text .font {
    font-size: 14px;
  }
  .newsSecurity .banxin .news .news_bottom ul li .box .text .font .dec {
    width: 100%;
  }
  .newsSecurity .banxin .security {
    width: 28%;
  }
  .newsSecurity .banxin .security div a {
    font-size: 16px;
    line-height: 50px;
    height: 50px;
  }
  .newsSecurity .banxin .security div .sec_hover {
    height: 50px;
  }
  .newsSecurity .banxin .security div .first {
    font-size: 12px;
    background: #e9080f;
  }
  .newsSecurity .banxin .security div .first:hover {
    font-size: 12px;
  }
  .footer .top {
    position: relative;
  }
  .footer .top .left {
    width: 68%;
  }
  .footer .top .footer_logo {
    width: 27%;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-60%);
  }
  /*******************- project.html -*******************/
  .proj-list p {
    font-size: 16px;
    line-height: 40px;
    bottom: -40px;
  }
  .pv-info h4,
  .pv-info p {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 4%;
  }
  .pv-info p {
    font-size: 16px;
  }
  .pv-info p.pv-pro {
    line-height: 28px;
  }
  .crumbs a,
  .crumbs p {
    font-size: 14px;
  }
}
@media screen and (max-width: 950px) {
  .hea-home .logo {
    display: block;
  }
  .hea-home .nav {
    display: none;
  }
  .hea-home .hea-video {
    right: 0px;
    margin-right: 40px;
  }
  .hea-home .subnav {
    right: 0px;
    margin-right: 0px;
  }
  .footer .bottom {
    padding: 2.5% 0px 2.5% 0px;
  }
  .footer .bottom div {
    height: auto;
    line-height: 20px;
  }
  .footer .bottom div p {
    width: 100%;
    float: none;
    text-align: center;
    line-height: 20px;
    height: auto;
  }
  .comp-con {
    width: 80%;
    height: 80%;
    margin-top: 0px;
    margin-left: 0px;
    top: 10%;
    left: 10%;
    background: #fff;
  }
  .comp-con .fl,
  .comp-con .fr {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
  .comp-con .fl {
    border-bottom: 1px solid #e37f84;
    padding-bottom: 20px;
  }
  .comp-con .fl .comp-enter {
    width: 68px;
    margin-top: -10px;
  }
  .comp-con .fr {
    padding-top: 20px !important;
    padding-bottom: 20px;
  }
  .comp-con .fr > div {
    overflow: auto;
  }
  .comp-img {
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
  }
  .comp-img img {
    width: 100%;
  }
  .ceng_cont object {
    height: 100%;
    position: absolute;
  }
  .ceng_cont p.ceng_title {
    font-size: 24px;
    line-height: 40px;
    padding-top: 25px;
    padding-bottom: 5px;
  }
}
@media screen and (max-height: 620px) {
  .comp-con {
    width: 80%;
    height: 80%;
    margin-top: 0px;
    margin-left: 0px;
    top: 10%;
    left: 10%;
    background: #fff;
	z-index: 9999999;
  }
  .comp-con .fl,
  .comp-con .fr {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
  .comp-con .fl {
    border-bottom: 1px solid #e37f84;
    padding-bottom: 20px;
  }
  .comp-con .fl .comp-enter {
    width: 68px;
    margin-top: -10px;
  }
  .comp-con .fr {
    padding-top: 20px !important;
    padding-bottom: 20px;
  }
  .comp-con .fr > div {
    overflow: auto;
  }
  .comp-img {
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
  }
  .comp-img img {
    width: 100%;
  }
  .ceng_cont object {
    height: 100%;
    position: absolute;
  }
  .comp-con.ceng_cont .fr {
    padding-top: 20px !important;
  }
  .ceng_cont p.ceng_title {
    font-size: 24px;
    line-height: 40px;
    padding-top: 25px;
    padding-bottom: 5px;
  }
}
@media screen and (min-width: 770px) {
  .more:hover img.more_hover {
    left: 0% !important;
  }
  .newsSecurity .banxin .security div a:hover .sec_hover {
    width: 100% !important;
  }
}
/**åœ¨480pxå’Œ769pxä¹‹é—´çš„å±å¹•é‡Œï¼Œè¶…å°å±å¹•ï¼Œä¸»è¦æ˜¯æ‰‹æœº**/
@media screen and (max-width: 769px) {
  .subnav ul {
    width: 100%;
    position: fixed;
    height: 100%;
    top: 61px;
    left: 0px;
    padding-left: 5%;
    padding-right: 5%;
    background: rgba(255, 255, 255, 0.97);
  }
  .subnav ul li {
    width: 100%;
    margin-left: 10%;
    border-width: 1px;
  }
  .subnav ul li a {
    line-height: 42px;
    height: 42px;
    padding-left: 15px;
  }
  .subnav ul li:nth-child(1) {
    animation: nav 0.4s ease-out 0s;
    animation-fill-mode: both;
  }
  .subnav ul li:nth-child(2) {
    animation: nav 0.4s ease-out 0.1s;
    animation-fill-mode: both;
  }
  .subnav ul li:nth-child(3) {
    animation: nav 0.4s ease-out 0.2s;
    animation-fill-mode: both;
  }
  .subnav ul li:nth-child(4) {
    animation: nav 0.4s ease-out 0.3s;
    animation-fill-mode: both;
  }
  .subnav ul li:nth-child(5) {
    animation: nav 0.4s ease-out 0.4s;
    animation-fill-mode: both;
  }
  .subnav ul li:nth-child(6) {
    animation: nav 0.4s ease-out 0.5s;
    animation-fill-mode: both;
  }
  .subnav ul li:nth-child(7) {
    animation: nav 0.4s ease-out 0.6s;
    animation-fill-mode: both;
  }
  .subnav ul li:nth-child(8) {
    animation: nav 0.4s ease-out 0.7s;
    animation-fill-mode: both;
  }
  @keyframes nav {
    0% {
      opacity: 0;
      margin-left: 25%;
    }
    100% {
      opacity: 1;
      margin-left: 0px;
    }
  }
  .arrow-left,
  .arrow-right {
    height: 60px;
    margin-top: -30px;
  }
  .arrow-left img,
  .arrow-right img {
    height: 54%;
    z-index: 20;
  }
  .arrow-left {
    left: 0.5% !important;
  }
  .arrow-right {
    right: 0.5% !important;
  }
  .group .arrow-left {
    left: 4% !important;
    z-index: 10;
  }
  .group .arrow-right {
    left: auto;
    right: 4% !important;
    z-index: 10;
  }
  .group .elite .people {
    padding-top: 7%;
    padding-bottom: 12%;
  }
  .group .elite .people img {
    width: 24%;
  }
  .group .elite .people div {
    width: 71%;
    margin-right: 0px;
    margin-left: 0px;
  }
  .group .swiper-pagination-switch {
    width: 6px;
    height: 6px;
    margin-left: 3px;
    margin-right: 3px;
  }
  .projects .projects_bottom .project ul li .text {
    padding-top: 24px;
    background-size: 100% auto !important;
    background-repeat: no-repeat !important;
  }
  .projects .projects_bottom .project ul li .text h4 {
    font-size: 16px;
  }
  .projects .projects_bottom .project ul li .text a {
    border-radius: 13px;
    -webkit-border-radius: 13px;
    -moz-border-radius: 13px;
  }
  .resources .arrow-left {
    left: -4%;
    top: 35%;
    width: 5%;
  }
  .resources .arrow-right {
    width: 5%;
    right: -4%;
    top: 35%;
  }
  .video .banxin .video_bottom .video-js {
    height: auto;
  }
  .video .banxin .video_bottom .video-js .vjs-big-play-button span {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-top: -38px;
  }
  .comp-con.ceng_cont {
    height: 170px !important;
    margin-top: -85px;
    top: 50% !important;
  }
  .comp-con .fl {
    padding-bottom: 12px;
  }
  .ceng_cont p.ceng_title {
    font-size: 14px;
    padding-top: 16px;
  }
  .comp-con.ceng_cont .fr {
    font-size: 14px;
    line-height: 28px;
    text-align: center;
  }
  /*******************- project.html -*******************/
  .main {
    width: 100%;
  }
  .container {
    width: 92%;
  }
  .proj-list {
    margin-left: -2.03%;
  }
  .proj-list li {
    width: 31.3%;
    margin-left: 2.03%;
  }
  .proj-list p {
    font-size: 14px;
    line-height: 28px;
    bottom: 0px !important;
  }
  .proj-list p img {
    width: 20px;
    height: 20px;
    margin-top: -10px;
  }
  .proj-list.video-list p {
    padding-left: 26px;
    font-size: 12px;
    line-height: 26px;
  }
  .proj-list.video-list p img {
    width: 16px;
    margin-top: -8px;
    left: 8px;
  }
}
/**åœ¨å°äºŽ480pxçš„å±å¹•é‡Œï¼Œå¾®å°å±å¹•ï¼Œæ›´ä½Žåˆ†è¾¨çŽ‡çš„æ‰‹æœº**/
@media screen and (max-width: 700px) {
  .pcshow {
    display: none !important;
  }
  .moshow,
  .banner .arrow-left,
  .banner .arrow-right {
    display: block !important;
  }
  .comp-close,
  .ceng_gb_buton {
    padding: 5px 5px 15px 15px;
  }
  .header .nav {
    display: none;
  }
  .header .banxin {
    width: 92%;
  }
  .banner .main {
    width: 96%;
  }
  .banner .main .sw-banner {
    width: 88%;
  }
  .banner .main .banner-bottom,
  .banner .main .banner-top {
    width: 96%;
    left: 2%;
  }
  .about .aboutUs .tu {
    width: 28%;
    float: none;
    margin: 0 auto;
  }
  .about .aboutUs p {
    width: 100%;
    float: none;
    margin-left: 0px;
  }
  .about .companies ul li {
    width: 49.1%;
    margin-right: 0px;
    background: none;
  }
  .about .companies ul li a {
    margin-left: 1px;
    overflow: hidden;
    display: block;
  }
  .about .companies h3 {
    width: 48%;
  }
  .sw-group {
    width: 82%;
  }
  .group .group-pagination {
    bottom: 3%;
  }
  .group .tu {
    width: 44%;
    margin-top: 3%;
  }
  .group .tu .sw-group,
  .group .tu .swiper-wrapper,
  .group .tu .swiper-slide {
    height: auto !important;
  }
  .group .elite .people {
    padding-top: 5%;
    padding-bottom: 15%;
  }
  .group .elite .people div {
    width: 66%;
    margin-top: 4%;
  }
  .group .elite .people div h4 {
    font-size: 14px;
    line-height: 20px;
  }
  .group .elite .people div p {
    height: 100px;
    line-height: 20px;
    overflow: auto;
  }
  .group .elite .people img {
    margin-left: 4%;
  }
  .projects {
    padding-bottom: 8%;
  }
  .projects .projects_top h2,
  .resources .resources_top h2,
  .newsSecurity .banxin .news .news_top h2 {
    width: auto;
    height: 50px;
  }
  .projects .projects_top h2 img,
  .resources .resources_top h2 img,
  .newsSecurity .banxin .news .news_top h2 img,
  .newsSecurity .banxin .security h2 img {
    width: auto;
    height: 100%;
  }
  .projects .projects_top .more,
  .resources .resources_top .more,
  .newsSecurity .banxin .news .news_top .more,
  .newsSecurity .banxin .security .more {
    right: 0px;
  }
  .projects .projects_bottom {
    width: 100%;
    float: none;
    clear: both;
    margin-top: 0px;
  }
  .projects .projects_bottom .project ul li {
    width: 50%;
  }
  .projects .projects_bottom .project ul li .text {
    height: 124px;
  }
  .projects .projects_bottom .project ul li .text p {
    height: 48px;
  }
  .projects .projects_bottom .project ul li:nth-child(2),
  .projects .projects_bottom .project ul li:nth-child(3),
  .resources .resources_bottom .resource ul li:nth-child(2),
  .resources .resources_bottom .resource ul li:nth-child(3) {
    display: none;
  }
  .category {
    overflow: hidden;
    display: block;
    position: relative !important;
    padding-top: 4%;
    padding-bottom: 4%;
    margin-left: -4px;
    height: auto !important;
  }
  .category li {
    line-height: 30px;
    width: auto;
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
    display: block;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    background: none;
    border: 1px solid #ff5b35;
  }
  .category li.cur,
  .category li.on,
  .category li:hover {
    background: #ff5b35 !important;
  }
  .category li.cur a,
  .category li.on a,
  .category li:hover a {
    background: #ff5b35 !important;
  }
  .category li a {
    overflow: hidden;
    display: block;
  }
  .project-con > .container {
    padding-top: 3%;
    padding-bottom: 3%;
  }
  .project-con .category {
    display: inline;
    float: left;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .project-con .crumbs {
    display: inline;
    float: right;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .project-con .crumbs a {
    line-height: 30px;
  }
  .resources {
    padding-top: 7%;
  }
  .resources .resources_bottom {
    margin-top: 0px;
  }
  .resources .resources_bottom .resource {
    padding-bottom: 3.5%;
  }
  .resources .resources_bottom .resource ul li {
    width: 50%;
  }
  .resources .resources_bottom .resource ul li .box .text {
    /**- 20180706 -**/
    height: 110px;
  }
  .resources .resources_bottom .resource ul li .box .text > p {
    /**- 20180706 -**/
    height: 48px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .resources .resources_bottom .resource ul li .box .ceng {
    /**- 20180706 -**/
    height: 177px;
  }
  .resources .resources_bottom .resource ul li .box .ceng .res-con {
    /**- 20180706 -**/
    max-height: 48px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .ceng_cont p.ceng_title {
    font-size: 16px;
    line-height: 28px;
  }
  .resources,
  .newsSecurity {
    background-size: auto 100%;
  }
  .newsSecurity .banxin .news,
  .newsSecurity .banxin .security {
    width: 100%;
    float: none;
  }
  .security {
    padding-top: 9%;
  }
  .newsSecurity .banxin .security h2 {
    width: auto;
    height: 72px;
  }
  .newsSecurity .banxin .security div a {
    width: 49%;
    display: inline;
    float: left;
    overflow: hidden;
    display: block;
    font-size: 14px;
    height: auto;
  }
  .newsSecurity .banxin .security div a:first-child {
    width: 100%;
    float: none;
    font-size: 14px;
  }
  .newsSecurity .banxin .security div a:last-child {
    margin-left: 2%;
  }
  .newsSecurity .banxin .news .news_bottom ul li {
    width: 50%;
  }
  .newsSecurity .banxin .news .news_bottom ul li:nth-child(3) {
    display: none;
  }
  .video .banxin {
    overflow: hidden;
    display: block;
  }
  .video .banxin .video_top .more {
    top: 8px;
    width: 19.3%;
  }
  .video .banxin .video_top .tv {
    top: 5px;
  }
  .video .banxin .video_bottom {
    margin-top: 2.5%;
  }
  .vid-con {
    width: 100%;
    padding-bottom: 2%;
    position: relative;
  }
  .vid-list {
    width: 100%;
    float: none;
    display: block;
    margin-top: 2%;
    margin-left: -2%;
  }
  .vid-list li {
    width: 31.33%;
    display: block;
    display: inline;
    float: left;
    margin-left: 2%;
    margin-top: 0px;
  }
  .vid-list li img {
    border: 1px solid #0f0f0f;
  }
  .proj-list.video-list {
    margin-left: 0px;
  }
  .news-vlist {
    width: 100%;
  }
  .news-vlist li {
    padding-top: 6px;
    padding-bottom: 42px;
    border-width: 1px;
  }
  .news-vlist .news-vmore {
    bottom: 10px;
    font-size: 14px;
  }
  .news-vcon,
  .news-vimg {
    width: 100%;
    float: none;
  }
  .news-vcon p {
    font-size: 14px;
    line-height: 22px;
    height: 88px;
  }
  .news-vtit {
    font-size: 16px;
    margin-bottom: 3.5%;
    margin-top: 0px !important;
  }
  .news-vtop {
    padding-left: 0px !important;
    padding-bottom: 10px;
  }
  .news-vtop .news-vcon,
  .news-vtop .news-vimg {
    width: 96%;
    float: none;
    display: block;
  }
  .news-vtop i {
    width: 100%;
    left: 0px;
    height: 1px;
  }
  .news-vpro .news-vcon .news-vtit {
    padding-right: 0px;
    margin-bottom: 2%;
  }
  .news-vpro .news-vcon .news_vdate {
    position: relative;
    font-size: 14px;
    margin-bottom: 2%;
  }
  .news-vpro .news-vcon p {
    line-height: 24px;
  }
  .news-vsource {
    padding-right: 0px;
  }
  .footer .top .left {
    width: 100%;
    margin-top: 60px;
  }
  .footer .top .left .left_text {
    font-size: 12px;
    width: 47.1%;
  }
  .footer .top .left .left_text .title {
    font-size: 14px;
  }
  .footer .top .left .left_text_margin {
    padding-left: 4%;
  }
  .footer .top .footer_logo {
    width: auto;
    height: 36px;
    top: 0px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  .footer .top .footer_logo img {
    width: auto;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .footer .container {
    width: 92%;
  }
  .footer .center {
    line-height: 30px;
    height: 80px;
  }
  .footer .center .dz_biao {
    height: 30px;
  }
  .footer .center .dt_ceng {
    width: 100%;
    left: 0px;
  }
  .footer .center .ewm {
    width: 24px;
    height: 30px;
  }
  .footer .center .ewm img {
    margin-top: 4px;
  }
  .footer .center .wx_ewm_ceng,
  .footer .center .wb_ewm_ceng {
    width: 110px;
    left: 50%;
    top: -80px;
    margin-left: -84px;
  }
  .footer .bottom {
    padding: 3% 0px 3% 0px;
  }
  /*******************- project.html -*******************/
  .proj-list {
    margin-left: -3%;
  }
  .proj-list li {
    width: 47%;
    margin-left: 3%;
  }
  .pv-con {
    padding-top: 3%;
    padding-bottom: 3%;
    margin-top: 4.5%;
    background: #eaeaea;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .pv-con img,
  .pv-con .pv-info {
    width: 100%;
    float: none;
  }
  .pv-info {
    margin-top: 5%;
  }
  .pv-info h4,
  .pv-info p {
    font-size: 16px;
    line-height: 22px;
    padding-bottom: 3%;
  }
  .pv-info p {
    font-size: 14px;
  }
  .pv-info p.pv-pro {
    line-height: 24px;
  }
  .crumbs {
    bottom: 0px;
    margin-bottom: 0px;
    position: relative;
    display: inline;
    float: right;
  }
  .v-embed {
    width: 100%;
    left: 0px;
    margin-left: 0px;
  }
  .v-embed .ve-con,
  .v-embed .vmain {
    width: 100%;
    height: auto;
  }
}
@media screen and (max-width: 376px) {
  .footer .center .wx_ewm_ceng,
  .footer .center .wb_ewm_ceng {
    margin-left: -72px;
  }
}
@media screen and (max-width: 321px) {
  .video .banxin .video_bottom .video-js .vjs-big-play-button span {
    width: 36px;
    height: 36px;
    line-height: 36px;
  }
  .category li {
    padding-left: 6px;
    padding-right: 6px;
  }
  .footer .center .wx_ewm_ceng,
  .footer .center .wb_ewm_ceng {
    margin-left: -43px;
  }
}

ul.yiiPager a:link, ul.yiiPager a:visited{border:1px #595656 solid}
ul.yiiPager a:link, ul.yiiPager a:visited{color:#595656}
ul.yiiPager .selected a{background-color:#c8000a;color:white}
ul.yiiPager a:hover{color:white}
ul.yiiPager .hidden a{color:#888888;border:solid 1px #DEDEDE}
ul.yiiPager .hidden a:hover{background-color:white}
.page a{display:inline-block;width:30px;height:30px;text-align:center;line-height:30px;margin:0px 6px;border:1px #595656 solid;font-size:16px;color:#595656;background:#fff;}



.proj-list i img,.news-vpic img{ min-height: 100%; }
.news-vcon img{ max-width: 100% !important; }
@media screen and (max-width: 769px) {
  ul.yiiPager li.page{
    display: none ;
  }
}
@media screen and (max-width: 769px) {
  .projects .projects_bottom .project ul li,
  .resources .resources_bottom .resource ul li{ display: none; }
  .projects .projects_bottom .project ul li:nth-child(1),
  .projects .projects_bottom .project ul li:nth-child(2),
  .resources .resources_bottom .resource ul li:nth-child(1),
  .resources .resources_bottom .resource ul li:nth-child(2){ display: block;}
}
.js_tx_video_container, .video_iframe, .js_tx_video_container{margin:0 auto !important}

    /* 屏幕设备适配 max-device-width: 400px */
    @media screen and (max-device-width: 415px) {
        .slider_img {
            height: 250px;
            width: 100%;
        }


        .border_parent {
            display: flex;
            width: 90%;
            margin: auto;
            height: auto;
            flex-direction: column;
        }

        .border {
            border-radius: 6px;
            border: 1px solid #EBEEF5;
            float: left;
            width: 100%;
            height: auto;
            margin: 10px 0 auto;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
            /*background: aquamarine;*/
        }

        .border_img_parent {
            margin-top: 0;

        }

        .product_mobile {
            width: 90%;
            align-items: center;
            margin: 20px auto;
            height: auto;
            background: #F2F6FC;
        }

        .product_mobile_content {
            width: 100%;
            margin-top: 15px;
        }

        .product_mobile_content_one {
            margin-top: 5px;
        }

        .product_mobile_content_two {
            margin-top: 5px;
        }

        .product_mobile_img_div {
            display: flex;
            width: 100%;
            height: auto;
            justify-content: center;
            margin-top: 10px;
            margin-bottom: 15px;
        }

        .product_mobile_img {
            float: left;
        }

        .product_mobile_title {
            font-weight: bold;
        }

        .product_pc_one {
            width: 100%;
            margin-top: 15px;
        }

        .font_size_30 {
            font-size: 1.25em;
        }

        .product_font_style {
            font-size: 1em;
        }

        .product_pc_img {
            height: 280px;
            width: 320px;
        }

        .product_pc_img_div {
            width: 100%;
            float: left;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
        }

        .product_pc {
            display: flex;
            width: 90%;
            height: auto;
            margin: 20px auto;
            /* background: #F2F6FC; */
            flex-direction: column;
        }

        .head-label {
            display: flex;
            margin-top: 10px;
        }

        .product_spec_parent {
            display: flex;
            width: 90%;
            align-items: center;
            justify-content: center;
            margin: 20px auto;
            height: auto;
            flex-direction: column;
        }

        .border_spec {
            float: left;
            height: auto;
            margin: 8px;
            width: 100%;
            border-radius: 6px;
            border: 1px solid #EBEEF5;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }


        .border_title {
            font-family: "PingFang SC";
            margin-top: 5px;
            font-size: 1.125em;
            font-weight: bold;
			 margin-bottom: 20px !important;
        }

        .border_content_one {
            margin-top: 5px;
            font-size: 1.125em;
        }

        .border_content_two {
            margin-top: 5px;
            font-size: 1.125em;
            margin-bottom: 8px;
        }

        .img_border {
            margin-top: 8px;
            width: 80px;
            height: 80px
        }

        .border_spec_inner_one {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 8px;
            /*background-color: aqua;*/
            height: 70px;
        }

        .border_spec_content_one {
            margin-top: 5px;
            font-size: 1.125em;
            float: left;
        }

        .border_spec_inner_last {
            /*background-color: bisque;*/
            margin-top: 5px;
            font-size: 1.125em;
            float: left;
            margin-bottom: 8px;
        }

        .about_me {
            display: flex;
            margin-top: 10px;
            width: 100%;
        }
    }

    .border_spec_img {
        width: 75px;
        height: 55px;
        align-self: center
    }

    .font_size_24 {
        font-size: 1.7em;
		padding-left: 7%;
    }
	 a:hover {
		background-color:#c8000a;
		color: white !important;
	}
	.new:hover {
		background-color:#c8000a;
		color: white !important;
	}
	.border:hover {
		background-color:#fd9158;
		color: white !important;
	}
</style>