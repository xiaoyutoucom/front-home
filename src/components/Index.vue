<template>

    <div style="padding-top:4.85%;" >
		<div href="/" class="ovh container logo-home"><img src="../assets/logo1.png"></div>
		<div class="ovh banner">
		<div class="ovh main">
<!-- 		<a class="ovh arrow-left" href="#"><img src="../../static/slider//banner_left_button.png"></a>
		<a class="ovh arrow-right" href="#"><img src="../../static/slider//banner_right_button.png"></a> -->
		<div class="swiper-container sw-banner">
                  <div :style ='{backgroundImage: "url("+ q12img+")"}' :height="computeHeight" style="background-repeat:no-repeat;width: 100%;">
		                  <el-carousel :height="computeHeight" style="">
		                      <el-carousel-item v-for="(item, index) in indexsliders" :key="index">
		                          <img :src="item.url" class="slider_img" :height="computeHeight">
		                      </el-carousel-item>
		                  </el-carousel>
		                  </div>
 </div>
		<img src="../../static/slider/banner_top.png" class="banner-top">
		<img src="../../static/slider/banner_bottom.png" class="banner-bottom">
		</div>
		</div>
		
		<div class="ovh about" id="公司介绍">
		<div class="container">
		<div class="aboutUs">
		<div class="tu">
		<img src="../../static/slider/tit-about.png" alt="">
		</div>
		<p>
		杭州大幕影视传媒有限公司，位于杭州，是集创意、策划、拍摄、制作、推广为一体，从事影视与传媒文化市场的研发、项目投资管理及品牌经营等业务，致力打造具备综合性项目运作的影视传媒公司。公司以电影、电视剧、网大、网剧、综艺制作为主营业务，覆盖前期拍摄和后期剪辑、特效制作等制作环节。团队行业经验丰富，横跨影视制作全流程，我们始终以务实的工作作风、精良的制作水准为信条，力求以独具的视觉张力服务于影视作品。<br>
		</p>
		</br></br></br>
		</div>
<!-- 		<h3 v-if="seen"><img src="../../static/slider/tit-company.png" alt="" style="width: 30rem;padding: 5rem 0 2rem 5rem;"></h3>
		<h3 v-if="!seen"><img src="../../static/slider/tit-company.png" alt="" style="width:15rem;padding: 5rem 0 2rem 5rem;"></h3> -->
		<div class="companies"style="margin-left: 17rem;">
		
<!-- 		<ul>
		<li style="align-self: center;">
							<a href="javascript:;"><img style="width:15rem;height: 8rem;margin-left: 10%;" src="../assets/logo1.png" alt=""></a>
							<div class="ovh comp-con">
							<div class="ovh fl">
							<i class="ovh comp-img"><img src="../assets/logo1.png"></i>
													</div>
		<div class="ovh fr">
		<div class="ovh">
		    <p>大幕摩天轮文化传媒有限公司成立于2013年。公司业务覆盖电影投资、制作、营销、宣传、发行，是一家完整产业链的影视娱乐公司。公司董事长宋歌与总经理杜扬曾参与策划制作了《非常完美》《失恋33天》《寻龙诀》《同桌的你》《心花路放》《解救吾先生》《我不是潘金莲》《铁道飞虎》等一系列在国内外极具影响力的影视作品。公司合作阵容豪华，包括金牌监制及制片人陈国富，魔幻派导演乌尔善，硬汉派导演丁晟，著名编剧刘震云。</p>
		    </div>
		    </div>
		    <a class="ovh comp-close"><img src="../../static/slider/cus-close.svg"></a>
							</div>
		        </li>	
		<li>
							<a href="javascript:;"><img style="width:15rem;height: 8rem;margin-left: 10%;" src="../assets/logo1.png" alt=""></a>
							<div class="ovh comp-con">
							<div class="ovh fl">
							<i class="ovh comp-img"><img src="../assets/logo1.png"></i>
														<a  class="ovh comp-enter" target="_blank"><img src="../../static/slider/company_enter.gif"></a>
															</div>
		<div class="ovh fr">
		<div class="ovh">
		    <p>浙江星河文化经纪有限公司前身为北京拾捌文化经纪有限公司，由著名经纪人王京花女士创建。公司以全方位的艺人经纪为主营业务，并涉足影视及节目的开发、投资、制作等领域，致力于成为中国最专业的艺人经纪公司。王京花作为内地第一代经纪人，在其多年的经纪生涯中屡创佳绩，一手打造了几十位一线影视明星，被业内誉为“金牌经纪人”。星河文化及其下属子公司现拥有艺人60余位，以及4位导演、1位编剧。<br>
		</p>
		    </div>
		    </div>
		    <a class="ovh comp-close"><img src="../../static/slider/cus-close.svg"></a>
							</div>
		        </li>	
					</ul> -->
<!-- 					<div class="comp-layer"></div> -->
					</div>
					</div>
		</div>
	<!-- 	<a class="scr-href" name="projects"></a> -->
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
<!-- 	    <div :style ='{backgroundImage: "url("+ redimg+")"}' style="width: 100%;height: 100%;">	
		<div style="color: #EBEEF5;">
		    <el-row>
		        <el-col  v-if="seen" :xs="24" :sm="12">
					<div style="text-align: left;color: #EBEEF5;margin-left: 7%;" class="font_size_24">
					   <span style="font-size:40px;color:#FF3939;"><strong>G</strong></span> 公司介绍
					</div>
		            <div class="product_mobile_content" style="letter-spacing:2px;line-height: 1.6rem;">

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
		</div> -->
		<div class="projects">
		<div class="main">
		    <div class="container">
		    <div class="projects_top">
		    <h2><img src="../../static/slider/tit-projects.png" alt=""></h2>
						<a href="/#/fashionList" class="show more">
						    <img src="../../static/slider/more_hover.jpg" alt="" class="more_hover">
						    <img src="../../static/slider/more.png" alt="">
						</a>
						        <ul class="category">
							<li id="1" class="cur on" @click="initallproject(1)" >电影</li>
							<li id="2" @click="initallproject(2)"  >电视剧</li>
							<li id="4" @click="initallproject(4)"class="">综艺节目</li>
							<li id="3" @click="initallproject(3)" >广告</li>
						</ul>
					</div>
					<div class="projects_bottom">
						  <div class="main" style="position: relative;width: 100%;">
						  <el-carousel v-if="seen" :interval="4000"  :height="computeHeight2"  class="container" style="color: black;width: 80rem;height: 35rem;">
							 <el-carousel-item  class="mainimg" v-if="seen" v-for="item in plist" style="height: 35rem;">
								  <el-row :gutter="10">  
								  <div v-for="itemimg in item">	
								  <el-col :xs="12" :sm="12"  :md="6">
								   <a :href="'/#/fashion?id='+itemimg.id"><img class="img_cover" :src ="itemimg.imageUrl" alt="" :height="computeHeight2" style="z-index: 1 ;cursor:pointer ;"></a>
								 <div v-if="seen" class="text bg_h"  :style ='{backgroundImage: "url("+ cimg+")"}' style="height: 15rem;text-align: center;position: relative;width: 100%;background-repeat:no-repeat;top:-2rem;z-index: 0 !important;">
								
								  <div style="padding-top:2rem">
								 
								  <h2>{{itemimg.projectName}}</h2>
								  <p>导演：{{itemimg.directorName}}</p>
								  <p>播放平台：{{itemimg.platform}}</p>
								  <a :href="'/#/fashion?id='+itemimg.id" style="position: absolute;cursor: pointer;
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
								  border: 1px #2270b2 solid;">详情</a>
									</div>
								  </div>
								 </el-col>
								  </div> 
								 
							  </el-row>
							</el-carousel-item>
							</el-carousel>
						<el-carousel v-if="!seen" style="width: 22rem;height: 48rem;color: #000000;">
							<el-carousel-item   v-for="item in plist"  style="width: 22rem;height: 48rem;">
								  <el-row :gutter="10">  
								  <div v-for="itemimg in item">	
								  <el-col :xs="12" :sm="12"  :md="12">
								 <a :href="'/#/fashion?id='+itemimg.id"><img class="img_cover" :src ="itemimg.imageUrl" alt="" :height="computeHeight2" style="z-index: 1 ;cursor:pointer ;"></a>
								  <div  class="text bg_h"   style="background-color: #EAEAEA;height: 10rem;text-align: center;position: relative;width: 100%;background-repeat:no-repeat;top:-2rem;z-index: 0 !important;">
								  <div style="padding-top:2rem">
									<h2>{{itemimg.projectName}}</h2>
									<p>导演：{{itemimg.directorName}}</p>
									<p>播放平台：{{itemimg.platform}}</p>
								  <a :href="'/#/fashion?id='+itemimg.id"  style="position: absolute;cursor: pointer;
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
								  border: 1px #2270b2 solid;">详情</a>
									</div>
								  </div>
								 </el-col>
								  </div> 
								 
							  </el-row>
							</el-carousel-item>
						  </el-carousel>
						</div>
					 </div>
				</div>
			</div>
		</div>
<!-- 		<div class="resources" style="height: 50rem;">
			<div class="main">
			<div class="container">
			<div class="resources_top">
			<h2><img src="../../static/slider/tit-resources.png" alt=""></h2>
			<a href="/#/comList" class="more">
			<img src="../../static/slider/more_hover.jpg" alt="" class="more_hover">
			<img src="../../static/slider/more.png" alt="">
			</a>
		</div>
		<div class="resources_bottom">
			  <div class="main" style="position: relative;width: 100%;">
			  <el-carousel :interval="4000"  v-if="seen" :height="computeHeight2"  class="container" style="color: black;width: 80rem;height: 33rem;">
				 <el-carousel-item  class="mainimg" v-for="item in rlist" style="height: 30rem;">
					  <el-row :gutter="10">  
					  <div v-for="itemimg in item" class="b_box" >	
					  <el-col :xs="12" :sm="12"  :md="6" >
						<a :href="'/#/com?id='+itemimg.id" class="ovh">
					 <img class="img_cover"  :src ="itemimg.imageUrl" alt="" :height="computeHeight2" style="z-index: 1 ;cursor:pointer ;">
					<div class="b_box" >
														    <div class="box">
																
																<div class="text">
																<h4>{{itemimg.projectName}}</h4>
																<p>{{itemimg.type}}</p>
																<div class="ceng">
																<p>简介：</p>
																<p>{{itemimg.synopsis.substring(0,46)}}...</p>
																</div>
																</div>
																</div>
																</div>
																</a>
					 </el-col>
					  </div> 
					 
				  </el-row>
				</el-carousel-item>
			  </el-carousel>
			  <el-carousel :interval="4000" v-if="!seen" :height="computeHeight2"  class="container" style="color: black;width:20rem;height: 40rem;">
			  				<el-carousel-item   style="width: 20rem;height: 40rem;" v-for="item in rlist">
			  					  <el-row :gutter="10">
			  					  					  <div v-for="itemimg in item" class="b_box">	
			  					  					  <el-col :xs="12" :sm="12"  :md="6" >
														  									  	<a :href="'/#/com?id='+itemimg.id" class="ovh">
			  					  					 <img class="img_cover" :src ="itemimg.imageUrl" alt="" :height="computeHeight2" style="z-index: 1 ;cursor:pointer ;">
			  					  					<div class="b_box"  >
			  					  														    <div class="box">
			  					  																
			  					  																<div class="text">
			  					  															<h4>{{itemimg.projectName}}</h4>
			  					  															<p>{{itemimg.type}}</p>
			  					  															<div class="ceng">

			  					  															<p>简介：</p>
			  					  															<p>{{itemimg.synopsis}}</p>
			  					  																</div>
			  					  																</div>
			  					  																</div>
			  					  																</div>
																								</a>
			  					  					 </el-col>
			  					  					  </div> 
			  					  					 
			  					  </el-row>
			  				</el-carousel-item>
			  </el-carousel>
			</div>
		 </div>
		</div>
		</div></div> -->
		
		<!-- 新闻-->
		<div class="newsSecurity">
			<div class="main">
				<div class="banxin">
					<div class="news" style="color: #000000 !important">
						<div class="news_top" style="width: 80%; ">
						<h2><img src="../../static/slider/tit-news.png" alt=""></h2>
						<a  class="more" href="/#/newsList">
						
								<img src="../../static/slider/more.png" alt="">
							</a>
						</div>
								    <div class="news_bottom" style="margin-top: 5rem;color: #000000  !important;">
										<el-row >
										  <el-col :span="6" v-for="(item, index) in nlist" :key="index">
										    <el-card v-if='index%2==0' :body-style="{ padding: '0px' }" style="cursor: pointer;" class="">
									<div class="b_box">
									<a :href='"/#/news?id="+item.id' class="ovh box">
										<div class="ovh img">
										    <img src="../../static/slider/img_cover.png" alt="" class="img_cover" style="z-index: 99;">
										    <img :src="item.url" alt="">
										</div>
									<div class="text" style="background-color: rgb(255, 255, 255);">
									<div class="bj">
									<!-- <p class="day">{{item.created.split('-')[1]}}</p>
									<p class="month">{{item.created.split('-')[2]}}</p> -->
									</div>
									<div class="font bnew" >
									<p class="time" style="font-size: 18px ;">{{item.created}}</p>
									<p class="dec" style="text-align: center;font-size: 23px;">{{item.name}}</p>
									</div>
									</div>

									        </a>
							</div>
										    </el-card>
											<el-card v-if='index%2!=0' :body-style="{ padding: '0px' }" style="cursor: pointer;" class="">
											<div class="b_box">
									<a :href='"/#/news?id="+item.id' class="ovh box">
									<div class="text" style="background-color: rgb(255, 255, 255);">
									<div class="bj">
									<!-- <p class="day">{{item.created.split('-')[1]}}</p>
									<p class="month">{{item.created.split('-')[2]}}</p> -->
									</div>
									<div class="font bnew" >
									<p class="time" style="font-size: 18px;">{{item.created}}</p>
									<p class="dec" style="text-align: center;font-size: 23px;">{{item.name}}</p>
									</div>
									</div>
									<div class="ovh img">
									    <img src="../../static/slider/img_cover.png" alt="" class="img_cover" style="z-index: 99;">
									    <img :src="item.url" alt="">
									</div>
									        </a>
							</div>
											</el-card>
										  </el-col>
										</el-row>
								  
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div  >
        <!-- <div id="企业业务" class="product_spec_title head-label" >
            <div style="text-align: left;" class="font_size_24">
               <span style="font-size:40px;color:#FF3939;"><strong>G</strong></span> 关于我们
            </div>
        </div> -->
        <!-- 视频 -->
		
<div class="video" id="视频中心" >
	<div class="main">
		<div class="banxin">
			<div class="video_top">
				<h2><img src="../../static/slider/tit-video.png" alt=""></h2>
				<a href="/#/videoList" class="more">
					
					<img src="../../static/slider/more.png" alt="">
				</a>
				<img src="../../static/slider/tv.png" alt="" class="tv">
			</div>
			<div class="ovh video_bottom">
				<div class="ovh">
					<div class="ovh vid-con" >
						<!-- 20180708 start display:none-->				
        	           	<div  v-for="(item, index) in videos" :key="index" :style="{display:(index==0?'block':'none')}">
							<a id="video_2" class="ovh" @click="vclick(item.url,item.img)">
								<img :src="item.img">
								<p>{{item.name}}</p>
							</a>
						</div>       	   					
						<!-- 20180708 end -->
					</div>
					<ul id="vid-list" class="vid-list">
					
					     <li class="ovh" @click=""  v-for="(item, index) in videos" :key="index">
							<img @click="imgclick(index)" :src="item.img">
						</li>
        	           	         
        	   		</ul>
				</div>
			</div>
		</div>
	</div>
	<el-dialog
	  title="预览视频"
	  :visible.sync="dialogVisible"
	  width="50%"
	  >
	  <video  id="video"  :preload="preload"
	          :poster="videoImg" height="100%" width="100%" align="center" style="padding: 0px!important;" :controls="controls"  :autoplay="autoplay">
	    <source  :src="videoSrc" type="video/mp4">
	  </video>
	</el-dialog>
	<!-- 20180708 start   新添加弹窗模块 -->
<div class="ovh v-embed">
	<div class="ve-con">
		
	</div>
	<a href="javascript:;" class="comp-close"></a><!-- <img src="/images/embed-close.svg"> -->
</div>
<div class="comp-layer"></div>
<!-- 20180708 end -->
	
</div>
		</div>
        <!-- 产品特点-->
<!--        
        <div class="product_spec_parent" style="padding-bottom: 1rem;">
			<cardComponent>
			</cardComponent>
			
        </div> -->
<!-- 		<div :style ='{backgroundImage: "url("+ rimg+")"}' style="color: #EBEEF5;">
 -->
<!-- 		<div style="text-align: left;" class="font_size_24">
		   <span style="font-size:40px;color:#FF3939;"><strong>L</strong></span> 联系我们
		</div> -->

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
import {  allimages,allproject,allresources,allnews,allvideos} from "../services/services";
    export default {
		components: {
		cardComponent
		},
        name: 'Index',
        data() {
            return {
				item:[],
				videos:[],
				nlist:[],
				rlist:[],
				plist:[],
				projectType:1,
				indexsliders:[],
				 dialogVisible: false,
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
				tableData: [
						]
				 ,
				videoSrc: null,
				      videoImg:null,
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
                   
                ],
                products: [
                  
                ],
                manages: [
                 
                ],
                spec: {
                   
                },
                carousel_height: '550px',
            }
        },
		methods: { 
			imgclick(index){
			var i = index;
			 $('.vid-con > div').hide();
			$('.vid-con > div').eq(i).show().siblings().hide();
			},
			 pages(data) {
			                const pages = []
			                data.forEach((item, index) => {
			                    const page = Math.floor(index / 4)
			                    if (!pages[page]) {
			                        pages[page] = []
			                    }
			                    pages[page].push(item)
			                })
			                return pages
			},
			// str(data){
			// 		let  b=[];//定义一个二维数组 
			// 		for(var i=0;i<data.length/4;++i)
			// 		{
			// 			for(var j=0;j<4;++j)
			// 			{
			// 			   b[i][j] = data[i*4+j];
			// 			}
				     
			// 	   	} //把一维数组a 赋值给二维数组b 
			// 		return b;
			// },
			vclick(url,img) {
			    this.dialogVisible = true
				this.videoSrc = url;
				this.videoImg = img;
				document.getElementById("video").load();
			  },
			initEnums() {
				allimages({
					groupid: "taskstate"
				}).then((res) => {
					this.indexsliders = res.rows;
						
				});				
			},
			initallvideos() {
				allvideos({
					pageSize: 3,
					pageNum: 1,
				}).then((res) => {
					
					this.videos = res.rows;
				});				
			},
			initallnews() {
				allnews({
					pageSize: 4,
					pageNum: 1,
				}).then((res) => {
					
					this.nlist = res.rows;
				});				
			},
			initallresources(item) {
				allresources({
					// pageSize: "taskstate",
					// pageNum: "taskstate",
					// type: item,
				}).then((res) => {
					

							 this.rlist =this.pages(res.rows)
						// console.log(this.rlist)
						//  this.rlist =this.pages(this.rlist)
						// console.log(this.rlist)
				});				
			},
			initallproject(item) {
				allproject({
					// pageSize: "taskstate",
					// pageNum: "taskstate",
					type: item,
				}).then((res) => {
					
					 
					 this.plist =this.pages(res.rows)

				});				
			},
			enter() {
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
			var that = this;
			 that.initallvideos();
			 that.initallnews();
			 that.initEnums();
			 that.initallproject(1);
			  that.initallresources(1);
			  let count = 1;
			  this.timer = window.setInterval(() => {
			              setTimeout(() => {
							  let c = count%4;
							  if(c==0)
							  {c=4}
			                   that.initallproject(c);
							   $("#"+c).addClass('cur on').siblings().removeClass('cur on');
							   count++;
			              },0)
			  },6000)
 $('.category li').click(function(e){
        // swiperWrapper.style.transform="translate3d(-"+($(this).index()+1)*$('.projects_bottom').width()+"px,0px,0px)"
        // swiperWrapper.style.transitionDuration='0.3s';
        $(this).addClass('cur on').siblings().removeClass('cur on');

        /**- 20180706 start -**/
        cmore();
        /**- 20180706 end -**/

    })
        },
        computed: {
            //计算高度
            computeHeight() {
                let screenHeight = document.body.clientWidth;
                if (screenHeight > 415) {
                    return '32rem';
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
                // let screenHeight = document.body.clientWidth;
                // if (screenHeight > 450) {
                //     return require('../../static/other/arrow.png');
                // } else {
                //     return require('../../static/other/arrow_down.png');
                // }
            }

        },
    }
</script>

<style scoped>

/**- newsSecurity -**/
.newsSecurity {
  width: 100%;
  overflow: hidden;
  display: block;
  padding-bottom: 7.5%;
  padding-top: 7%;
  background: url(../../static/slider/bg-news.jpg) no-repeat center top;
  background-size: 100% 100%;
  position: relative;
  z-index: 3;
}
.newsSecurity .banxin {
  width: 90%;
  margin: 0 auto;
}
.newsSecurity .banxin .news {
/*  float: left; */
/*  width: 68%; */
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
  background: url(../../static/slider/sec_bd.png) center center no-repeat;
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
  background: url(../../static/slider/sec_bg.jpg) no-repeat center center;
  background-size: 100% 100%;
  height: 62px;
  transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
  -webkit-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
  -moz-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
  -o-transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
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

	 a:hover {
		background-color:#298ada;
		color: white !important;
	}
	.new:hover {
		background-color:#2270b2;
		color: white !important;
	}
	.border:hover {
		background-color:#2270b2;
		color: white !important;
	}
	.bnew:hover {
		background-color:#2270b2;
		color: white !important;
	}
	>>>.el-carousel__arrow--left{
		/* display: block !important; */
		top:40%;
		left:0%;
		height:0px
	}
	>>>.el-carousel__arrow--right{
	/* 	display: block !important; */
		top:40%;
		right:2%;
		height:0px
	}
	>>>.el-icon-arrow-left{
		/* background: url(../../static/slider/banner_left_button.png) no-repeat center center; */
		font-size:70px;
		/* color:#2270b2; */
	}
	>>>.el-icon-arrow-right{
		/* background: url(../../static/slider/banner_left_button.png) no-repeat center center; */
		font-size:70px;
		/* color:#2270b2; */
	}
</style>