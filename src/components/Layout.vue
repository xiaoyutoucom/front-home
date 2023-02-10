<template>
    <div id="app" style="background-color:#232323 ;">
        <div class="header hea-home" style="z-index: 99999999999;">
            <div class="logo_img" @click="logoClick" >
               <!-- <div style="display:flex; align-items: center; float:left; height: 65px;">
                    <div class="header-logo">
                        <img id="header-img" src="../assets/logo1.png" >
                    </div>
                </div> -->
<!--                <div style="display:flex; float:left; height: 65px;">
                    <div class="header-important">
                        <div class="company_name" style="font-size: 25px;color: red;">大幕影音</div>
                        <div class="header-title company_name">fastice-tech.com</div> 
                    </div>
                </div> -->
            </div>
            <div id="menu_index" class="" >
				<div class="nav" v-if="seen" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
							<a index="1" href="/" class="">官网首页<span style="bottom: -20px;">HOME PAGE</span></a>
							<a index="2" href="javascript:;" class="">公司介绍<span style="bottom: -20px;">ABOUT US</span></a>
							<a index="3" href="javascript:;" class="">产业项目<span style="bottom: -20px;">PROJECTS</span></a>
							<!-- <a index="4" href="javascript:;" class="">产业资源<span style="bottom: -20px;">RESOURCES</span></a> -->
							<a index="5" href="javascript:;" class="">新闻中心<span style="bottom: -20px;">NEWS CENTER</span></a>
							<a index="6" href="javascript:;" class="">公司视频<span style="bottom: -20px;">VIDEO</span></a>
							<a index="7" href="javascript:;" class="">联系我们<span style="bottom: -20px;">CONTACT US</span></a>
				</div>
                <!-- web端菜单导航 -->
               <!-- <el-menu v-if="seen" :default-active="activeIndex" class="el-menu-demo" menu-trigger="click" text-color="rgb(209, 209, 209)" style="height: 65px; border:0;margin-left: 20%;" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1" id="官网首页" class="header-title">首页</el-menu-item>
					 <el-menu-item index="2" ref="关于我们" class="header-title">关于我们</el-menu-item>
					  <el-menu-item index="3" ref="企业业务" class="header-title">企业业务</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">关于我们</template>
                        <el-menu-item index="xx">公司介绍</el-menu-item>
                        <el-menu-item index="xx">管理层介绍</el-menu-item>
                        <el-menu-item index="xx">公司战略</el-menu-item>
						<el-menu-item index="xx">公司动态</el-menu-item>
						<el-menu-item index="xx">人才引进</el-menu-item>
						<el-menu-item index="xx">公司片库</el-menu-item>
                    </el-submenu>
					<el-submenu index="3">
					    <template slot="title">企业业务</template>
					    <el-menu-item index="xx1">广告</el-menu-item>
					    <el-menu-item index="xx1">短剧</el-menu-item>
					    <el-menu-item index="xx1">宣传片</el-menu-item>
						<el-menu-item index="xx1">影视</el-menu-item>
						<el-menu-item index="xx1">建筑漫游&VR</el-menu-item>
						<el-menu-item index="xx1">动画</el-menu-item>
					</el-submenu> 
                    <el-menu-item index="5"  class="header-title">联系我们</el-menu-item>
                </el-menu> -->
                <!-- 手机端菜单导航 v-bind:style="{backgroundColor:'#409EFF'}" -->
                <el-menu v-if="!seen" :default-active="activeIndex" class="el-menu-demo" menu-trigger="click" text-color="rgb(209, 209, 209)" style="height: 65px; border:0;" mode="horizontal" @select="handleSelectMobile">
                    <el-submenu index="1" class="header-title">
                        <template slot="title"><div style="color:rgb(209, 209, 209);">{{currentMenu}}</div></template>
                        <el-menu-item index="1" href="/" class="header-title">官网首页</el-menu-item>
                        <el-menu-item index="2" class="header-title">公司介绍</el-menu-item>
                        <el-menu-item index="3" class="header-title">产业项目</el-menu-item>
						<!-- <el-menu-item index="4" class="header-title">产业资源</el-menu-item> -->
                        <el-menu-item index="5" class="header-title">新闻中心</el-menu-item>
						<el-menu-item index="6" class="header-title">公司视频</el-menu-item>
						<el-menu-item index="7" class="header-title">联系我们</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
<!--            <div v-if="seen" style="float: right; display: flex;align-items: center; height: 100%;">
                <el-button type="text" style="margin-right: 20px;" class="header-title" @click="login">登录</el-button>
                <el-button type="primary" class="header-title" @click="register" round>注册</el-button>
            </div> -->
        </div>
        <div class="" style="clear: both;background-color:#FFFFFF ;">
            <router-view></router-view>
			
        </div>

			   <div class="footer" id="联系我们">
			   	<div class="top container" style="">
	<!-- 		   		<div class="left">
						
			   			<div class="left_text">
			                   <p class="title">战略、商务合作</p>

			                   <p>邮　箱：53414219@qq.com</p>
			               </div>

			   		</div> -->
			   		<div href="/">
			   			<!-- <img src="../../static/slider/footer_logo.png"> -->
						<img src="../assets/logo1.png" style="width:20rem;margin-left:30%">
			   		</div>
			   	</div>

			   </div>
			<div class="footer" style="height: 6rem !important;" >


			   	<div class="container center" @mouseleave="leave1()">
					<div class="dt_ceng1" v-show="flag1"><!-- style="display: none;"v-show="flag" -->
						<img src="../assets/dt.jpg" >
					</div>
			           <!-- <div class="wx_ewm_ceng" style="display: none;"><img src="../../static/slider/wx_ewm.jpg"></div>
			           <div class="wb_ewm_ceng" style="display: none;"><img src="../../static/slider/wb_ewm.jpg"></div> -->
			       	<span  >地址：浙江省杭州市拱墅区登云路518号西城时代商务中心2幢608&nbsp;</span><span class="dz_biao"><img  @mouseenter="enter1()"     
			:src="dimg"></span><span>邮编：310011</span> <span>&nbsp邮编：53414219@qq.com</span>
<!-- 			<div class="dt_ceng2"v-show="flag2" >
				<img src="../assets/logo1.png" >
			</div>
			<div class="dt_ceng3"v-show="flag3" >
				<img src="../assets/logo1.png" >
			</div> -->
			<span  @mouseleave="leave2()" class="ewm ewm1 dz_biao" @mouseenter="enter2()" style="padding-top:1.1rem !important"><img src="../../static/slider/wx_biao.png"></span>
			<span  @mouseleave="leave3()" class="ewm ewm2 dz_biao" @mouseenter="enter3()" ><img src="../../static/slider/wb_biao.png"></span>
			       <!-- 	<span class="ewm ewm1"><img src="../../static/slider/wx_biao.png"></span><span class="ewm ewm2"><img src="../../static/slider/wb_biao.png"></span> -->
			   	</div>
			   </div>
        <div style="width: 90%;margin: 20px auto;">
            <div style="height:1px;padding:0;background-color:#999;">
            </div>
			
        </div>
		
        <div style="width: 90%;margin: 20px auto;color: white;text-align: center; height: 5rem;">
          
                    <div><strong></strong>
                        互联网ICP备案：浙ICP备2022036255号
                    </div>
                    <div>
                        ©fastice-tech.com 大幕影业
                    </div>
                </el-col>


        </div>
        <div id="back_to_top" ref="btna" @click="backTop" style="display: none;">
            <p style="font-size: 0.625em; font-weight: bold;color: red;">TOP▲</p>
            <img src="../assets/other/launch.png" style="height: 45px;width: 35px" />
        </div>
    </div>
</template>

<script>
	import "@/assets/jquery-1.11.3.js"; //@代表的是你的项目根路径
	import "@/assets/style.css"; //@代表的是你的项目根路径
	import "@/assets/main.js"; //@代表的是你的项目根路径
	import "@/assets/index.js"; //@代表的是你的项目根路径
	import "@/assets/public.css"; //@代表的是你的项目根路径
	// import "@/assets/idangerous.swiper.css"; //@代表的是你的项目根路径
	import dimg from '../../static/slider/d.png'
	
    export default {
        name: "Layout",
        data() {
            return {
				flag1: false,flag2: false,flag3: false,
                activeIndex: '1',
                company:{
                    qrcode:null,
                },
                scroll: '',
				dimg:dimg,
                timer: '',
                seen: true,
                currentMenu:'首页'
            };
        },
        methods: {
			enter1() {
			            this.flag1 = true

			        },
			        leave1() {
			            this.flag1 = false
			        },
					enter2() {
					            this.flag2 = true
					
					        },
					        leave2() {
					            this.flag2 = false
					        },
							enter3() {
							            this.flag3 = true
							
							        },
							        leave3() {
							            this.flag3 = false
							        },
            handleSelect(key) {
                switch (key){
                    case '1':
				
                        this.$router.push({name: "/"});
                        break;
					case '6':
						  window.location.hash = "#视频中心";
						    //this.$router.push({name: "About"});
						    break;
                    case '7':
					     window.location.hash = "#联系我们";
                        //this.$router.push({name: "About"});
                        break;
                    case '2':
                       // this.$router.push({name: "Fashion"});
                        break;
					case '3':
					    //this.$router.push({name: "Com"});
					    break;
                    case '5':
                        //this.$router.push({name: "Index"});
                        
						// setTimeout(() =>{
						//    window.location.hash = "#联系我们";
						// },100);
                        break;
                }
            },
            handleSelectMobile(key) {
                switch (key){
					case '1':
					    this.$router.push({name: "/"});
					    break;
					case '6':
						  window.location.hash = "#视频中心";
						    //this.$router.push({name: "About"});
						    break;
					case '7':
					     window.location.hash = "#联系我们";
					    //this.$router.push({name: "About"});
					    break;
					case '3':
					    this.$router.push({name: "Com"});
					    break;
					case '5':
					    this.$router.push({name: "Index"});
					    setTimeout(() =>{
					       window.location.hash = "#联系我们";
					    },100);
					    break;
                }
            },
            handleScroll(){
                this.scroll = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
                if( this.scroll >600 ){  //判断滚动后高度超过400px,就显示
                    this.$refs.btna.style.display = 'block';
                }else{
                    this.$refs.btna.style.display = 'none'
                }
            },
            backTop(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
                this.timer = setInterval(() => {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    if (osTop === 0) {
                        clearInterval(this.timer)
                    }
                }, 30)
            },
            login(){
                window.open('https://admin.fastice-tech.com/login')
            },
            register(){
                window.open('https://admin.fastice-tech.com/registe')
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
            logoClick(){
                this.$router.push({name: "Index"});
                this.currentMenu='首页';
            }
        },
        mounted() {
            this.menuSeen()
            window.addEventListener('scroll', this.handleScroll)
        },
    }
</script>

<style scoped>
    .logo_img{
        float:left;
        width: 30%;
        cursor: pointer;
    }
    #back_to_top{
        position: fixed;
        bottom: 50px;
        right: 30px;
        cursor: pointer;
		z-index: 999999;
    }
    .header-title{
        font-size: 1em;
    }
    .company_name{
        font-weight: normal;
        font-size: 1em;
    }
    .footer_font{
        font-size: 1em;
    }
    #menu_index{
        float: left; width: 50%;height: 100%
    }
    .header{
        margin: auto;
        width: 100%;
        height: 61px;
        background: #2270b2;
		position:fixed;top:0;z-index:999;
    }
    @media screen and (max-device-width: 415px) {
        .logo_img{
            float:left;
            width: auto;
            cursor: pointer;
        }
        #back_to_top{
            position: fixed;
            bottom: 50px;
            right: 5px;
            cursor: pointer
        }
        .footer_font{
            font-size: 0.875em;
        }
        #menu_index{
            float: right;
            width: auto;
            height: 100%
        }
        .mobile_menu{

        }
    }
    #header-img{
        width: 150px;
        height: 50px;
        float: left;
        margin: auto;
    }
    .header-logo{
        height: 50px;
        width: 50px;
        align-self: center;
    }
    .header-important{
        float: left;
        margin-left: 6px;
        align-self: center;
    }

    .footer{
        display: flex;
        align-items: center;
       /* margin: 10px auto; */
        /* width: 90%; */
    }
	/**- footer -**/
	.footer {
	  width: 100%;
	  /* background: url(../../static/slider/bg_footer_top.jpg); */
	  background-size: 100% 100%;
	  position: relative;
	  /* z-index: 99999990; */
	}
	.footer .container {
	 /* width: 51%; */
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
	  font-size: 20px;
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
	.footer .center .dt_ceng1 {
	  position: absolute;
	  bottom: 98px;
	  width: 55%;
	  left: 26px;
	  z-index: 999;

	  cursor: pointer;
	}
	/* .footer .center .dt_ceng .de-close {
	  position: absolute;
	  padding: 15px 15px 15px 15px;
	  top: 0px;
	  right: 0px;
	}
	.footer .center .dt_ceng .de-close img {
	  width: 28px;
	  height: 28px;
	} */
	.footer .center .dt_ceng2 {
	  position: absolute;
	  bottom: 98px;
	  width: 10%;
	  left: 40%;
	  z-index: 999;
	/*  display: none; */
	  cursor: pointer;
	}
	.footer .center .dt_ceng3 {
	  position: absolute;
	  bottom: 98px;
	  width: 10%;
	  left: 45%;
	  z-index: 999;
	/*  display: none; */
	  cursor: pointer;
	}
	.footer .center .dt_ceng2 .de-close {
	  position: absolute;
	  padding: 15px 15px 15px 15px;
	  top: 0px;
	  right: 0px;
	}
	.footer .center .dt_ceng2 .de-close img {
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
		color:#2270b2;
	}
	.el-menu{
		background-color: #2270b2;
	}
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover
	{
		background-color: rgb(255, 57, 57);
	}
	.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
		background-color: rgb(255, 57, 57) !important;
	}

	
	.el-menu--horizontal>.el-menu-item.is-active{
		color: #FFF !important;
	}
    a{text-decoration: none;}
    a:visited{text-decoration: none;}
    a:hover {text-decoration: none;}
    a:active{text-decoration:none;}
</style>