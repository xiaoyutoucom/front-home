<template>
<div id="videoList">
		<div class="ovh ban-info"  :style ='{backgroundImage: "url("+ redimg+")"}'>
			<div class="ovh main">
				<div class="ovh container">
					<i><img src="../../static/slider/tit-projects.png"></i>
				</div>
			</div>
		</div>
<div class="ovh project-con">
	<div class="ovh container">
		<ul class="category">
			<li class="on"><a >视频</a></li>
		</ul>
		<div class="ovh crumbs">
			<a href="/">首页<span>&gt;&gt;</span></a>
			<p>视频</p>
		</div>
	</div>
	<div class="ovh proj-con">
			<div class="ovh container">
				<div class="ovh news-vlist news-vtop">
					<a href="/news/detail/id/449" class="ovh news-vimg">
						<div class="ovh news-vpic"><img src="/upfile/news/202209/1664439890_7325.jpg"></div>
						<div class="pv-bg"><img src="/images/dy_cont_bg.png"></div>
					</a>
					<div class="ovh news-vcon">
						<a href="/news/detail/id/449" class="ovh news-vtit">央视领导一行莅临北京文化参观指导</a>
						<span class="ovh news_vdate">2022/09/29</span>
						<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;9月15日下午，CCTV中广影视卫星有限责任公司党委书记、董事长、总经理黄瑞刚一行莅临北京文化参观指导，北京文化总裁严雪峰先生、副总裁晏晶女士热情接待。双方本着“优势互补、真诚合作”的原则，在会上进行了友好的交谈，并对未来深度合作交换了意见。&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;会上北京文化总裁严雪峰...</p>
						<a href="/news/detail/id/449" class="ovh news-vmore">详细内容</a>
					</div>
					<i></i>
				</div>
				<ul class="ovh news-vlist">
	                    
	    			    				<li class="ovh">
	    					<a href="/news/detail/id/450" class="ovh news-vimg">
	    						<div class="ovh news-vpic"><img src="/upfile/news/202209/1664524298_8745.jpg"></div>
	    						<div class="pv-bg"><img src="/images/dy_cont_bg.png"></div>
	    					</a>
	    					<div class="ovh news-vcon">
	    						<a href="/news/detail/id/450" class="ovh news-vtit">北京文化组织学习《习近平谈治国理政（第四卷）》</a>
	    						<p>北京文化组织学习《习近平谈治国理政（第四卷）》</p>
	    						<a href="/news/detail/id/450" class="ovh news-vmore">详细内容</a>
	    					</div>
	    				</li>
	    						</ul>
		</div>
</div>
</div>
</template>
<script>
	import redimg from '../../static/slider/bg-projects.jpg'
    export default {
        name: 'videoList',
       data() {
             return {
               tabPosition: 'left',
			   redimg: redimg,
			   name:"公司介绍",
             };
           },
		mounted() {

		},
		 methods: { 
			 getActiveName(){
				// this.$parent.$parent.$refs.企业业务.$el.click()
				var name = this.$route.query=='[object Object]'?"广告":this.$route.query 				// 默认选择第一项
			 	return name;
			}
		 },  
    }
</script>

<style scoped>
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  >>>.el-tabs__item{
	  /* background-color: #fd9158; */
  }
  >>>.is-active{
	   
   }
>>>.is-left
{
	border-right:wheat !important;
}
>>>.el-tabs--left
{
	margin-bottom: 5rem !important;
}
/* el-tabs */
::v-deep .el-tabs__nav-scroll{
    background-color: #fff;
    padding: 20px 0;
}
::v-deep .el-tabs__nav {
  margin: 0 20px 0 0.625rem;
  /* 使用rpx没有效果 */
}
::v-deep .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px;
}
::v-deep .el-tabs--top .el-tabs__item.is-top:last-child {
  padding-right: 20px;
}
/*悬浮样式*/
::v-deep .el-tabs__item:hover {
  color: #e1251b;
}
/*选中样式*/
::v-deep .el-tabs__item.is-active {
  color: #fff;
  font-weight: bold;
  background-color: #e1251b;
}
/*隐藏tab下面的一横*/
::v-deep .el-tabs__active-bar {
  display: none;
}

</style>