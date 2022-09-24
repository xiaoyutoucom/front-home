<template>
    <div id="app" style="background-color:#c8000a ;">
        <div class="header">
            <div class="logo_img" @click="logoClick" >
                <div style="display:flex; align-items: center; float:left; height: 65px;">
                    <div class="header-logo">
                        <!-- <img id="header-img" src="../assets/logo1.png" > -->
                    </div>
                </div>
<!--                <div style="display:flex; float:left; height: 65px;">
                    <div class="header-important">
                        <div class="company_name" style="font-size: 25px;color: red;">大幕影音</div>
                        <div class="header-title company_name">fastice-tech.com</div> 
                    </div>
                </div> -->
            </div>
            <div id="menu_index" >
                <!-- web端菜单导航 -->
                <el-menu v-if="seen" :default-active="activeIndex" class="el-menu-demo" menu-trigger="click" text-color="rgb(209, 209, 209)" style="height: 65px; border:0;margin-left: 20%;" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1" class="header-title">首页</el-menu-item>
					 <el-menu-item index="2" class="header-title">关于我们</el-menu-item>
					  <el-menu-item index="3" class="header-title">企业业务</el-menu-item>
                    <!-- <el-submenu index="2">
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
					</el-submenu> -->
                    <el-menu-item index="About" class="header-title">联系我们</el-menu-item>
                </el-menu>
                <!-- 手机端菜单导航 v-bind:style="{backgroundColor:'#409EFF'}" -->
                <el-menu v-if="!seen" :default-active="activeIndex" class="el-menu-demo" menu-trigger="click" text-color="rgb(153, 153, 153)" style="height: 65px; border:0;" mode="horizontal" @select="handleSelectMobile">
                    <el-submenu index="1" class="header-title mobile_menu">
                        <template slot="title">{{currentMenu}}</template>
                        <el-menu-item index="1" class="header-title">首页</el-menu-item>
                        <el-menu-item index="3" class="header-title">关于我们</el-menu-item>
                        <el-menu-item index="4" class="header-title">企业业务</el-menu-item>
                        <el-menu-item index="About" class="header-title">联系我们</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
<!--            <div v-if="seen" style="float: right; display: flex;align-items: center; height: 100%;">
                <el-button type="text" style="margin-right: 20px;" class="header-title" @click="login">登录</el-button>
                <el-button type="primary" class="header-title" @click="register" round>注册</el-button>
            </div> -->
        </div>
        <div class="container" style="background-color:#FFFFFF;clear: both;">
            <router-view></router-view>
        </div>

        <div style="width: 90%;margin: 20px auto;">
            <div style="height:1px;padding:0;background-color:#999;">
            </div>
        </div>
        <div style="width: 90%;margin: 20px auto;color: rgb(153, 153, 153);">
            <el-row :gutter="20">
				<el-col :xs="24" :sm="12">
				    <div><img :src="company.qrcode" style="width: 100px;height: 100px;border: 0"/></div>
				    <div class="footer_font">关注大幕影业</div>
				</el-col>
                <el-col :xs="24" :sm="12">
                    <p class="footer_font">邮箱：jb_technology@163.com</p>
                    <div style="margin: auto;" class="footer_font">
                        互联网ICP备案：鄂ICP备19029919号-1
                    </div>
                    <div style="margin: auto;" class="footer_font">
                        ©fastice-tech.com 大幕影业
                    </div>
                </el-col>

            </el-row>
        </div>
        <div id="back_to_top" ref="btn" @click="backTop" style="display: none;">
            <p style="font-size: 0.625em; font-weight: bold;color: red;">TOP▲</p>
            <img src="../assets/other/launch.png" style="height: 45px;width: 35px" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        data() {
            return {
                activeIndex: '1',
                company:{
                    qrcode: require("../../static/other/公众号二维码.jpg"),
                },
                scroll: '',
                timer: '',
                seen: true,
                currentMenu:'首页'
            };
        },
        methods: {
            handleSelect(key) {
                switch (key){
                    case '1':
                        this.$router.push({name: "Index"});
                        break;
                    case 'About':
                        this.$router.push({name: "About"});
                        break;
                    case '3':
                        this.$router.push({name: "Fashion"});
                        break;
					case '4':
					    this.$router.push({name: "Fashion"});
					    break;
                    // case '3':
                    //     this.$router.push({name: "Index"});
                    //     window.location.hash = "#产品特点";
                    //     break;
                    // case '4':
                    //     this.$router.push({name: "Index"});
                    //     window.location.hash = "#合作伙伴";
                    //     break;
                    // case '5':
                    //     this.$router.push({name: "Index"});
                    //     window.location.hash = "#关于我们";
                    //     break;
                }
            },
            handleSelectMobile(key) {
                switch (key){
                    case '1':
                        this.$router.push({name: "Index"});
                        this.currentMenu='首页';
                        break;
                    case '2-1':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#产品微观";
                        this.currentMenu='首页';
                        break;
                    case '2-2':
                        this.$router.push({name: "Fruit"});
                        this.currentMenu='生鲜果蔬';
                        break;
                    case '2-3':
                        this.$router.push({name: "Fashion"});
                        break;
                    case '3':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#产品特点";
                        this.currentMenu='首页';
                        break;
                    case '4':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#合作伙伴";
                        this.currentMenu='首页';
                        break;
                    case '5':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#关于我们";
                        this.currentMenu='首页';
                        break;
                }
            },
            handleScroll(){
                this.scroll = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
                if( this.scroll >600 ){  //判断滚动后高度超过400px,就显示
                    this.$refs.btn.style.display = 'block';
                }else{
                    this.$refs.btn.style.display = 'none'
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
        cursor: pointer
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
        width: 90%;
        height: 65px;
        /*background: #F56C6C;*/
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
        margin: 10px auto;
        width: 90%;
    }
	.el-menu{
		background-color: #c8000a;
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