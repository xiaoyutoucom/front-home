<template>
	<div class="ovh project-con">
		<div class="ovh ban-info"  :style ='{backgroundImage: "url("+ redimg+")"}'>
				  <div class="ovh main">
				  		<div class="ovh container">
				  	<i><img src="../../static/slider/tit-resources.png"></i>
				  		</div>
				  	</div>
		</div>
		<div class="ovh container">
			<ul class="category">
			<!-- 	<li class="on"><a >{{tagName}}</a></li> -->
<!-- 				<li ><a href="/director/index">导演</a></li>
				<li><a href="/screenwriter/index">编剧</a></li>
				<li><a href="/producer/index">制片人</a></li>
				<li><a href="/star/index">明星演员</a></li> -->
			</ul>
			<div class="ovh crumbs">
				<a href="/">首页<span>&gt;&gt;</span></a>
				<a href="/#/comList">产业资源<span>&gt;&gt;</span></a>
			<!-- 	<a>{{tagName}}<span>&gt;&gt;</span></a> -->
				<a>详情</a>
			</div>
		</div>
		<div class="ovh proj-con">
				<div class="container">
					<div class="ovh pv-con" >
						<img :src="data.imageUrl">>
						<div class="pv-info">
							<h4>{{data.projectName}}</h4>
							<p>职务：{{data.type}}</p>
							<p>简介：{{data.synopsis}}</p>
							<p>主要作品：
							<span v-html="data.mainWorks">
							</span>
					<!-- 			<p>监制作品（电影）：<br> -->
		<!-- 					{{data.movie}} -->
							</p>
					<!-- 		<p class="pv-pro" style="padding-left:0"><span>主要成就：</span>	{{data.director_works}}</p>			 -->
								</div>
					</div>
				<!-- 	<div class="ovh pv-con" v-if="data.type==2">
						<img :src="data.imageUrl">>
						<div class="pv-info">
							<h4>{{data.projectName}}</h4>
							<p>简介：{{data.synopsis}}</p>
							<p>主要作品：{{data.mainWorks}}<br>
								<p>导演作品：<br>
							{{data.directorWorks}}
							</p>
								</div>
					</div>
					<div class="ovh pv-con" v-if="data.type==3">
						<img :src="data.imageUrl">>
						<div class="pv-info">
							<h4>{{data.projectName}}</h4>
							<p>简介：{{data.synopsis}}</p>
							<p>主要作品：{{data.mainWorks}}<br>
							</p>
								</div>
					</div>
					<div class="ovh pv-con" v-if="data.type==4">
						<img :src="data.imageUrl">>
						<div class="pv-info">
							<h4>{{data.projectName}}</h4>
							<p>简介：{{data.synopsis}}</p>
							<p>主要作品：{{data.mainWorks}}<br>
							</p>
								</div>
					</div>
					<div class="ovh pv-con" v-if="data.type=5">
						<img :src="data.imageUrl">>
						<div class="pv-info">
							<h4>{{data.projectName}}</h4>
							<p>简介：{{data.synopsis}}</p>
							<p>电视剧：{{data.series}}</p>
							<p>主要作品：{{data.mainWorks}}<br>
							</p>
								</div>
					</div> -->
					<div class="pv-bg pcshow"><img src="../../static/slider/dy_cont_bg.png"></div>
				</div>
			</div>
	</div>

</template>
<script>
	import redimg from '../../static/slider/q1.jpg'
import {  resources,} from "../services/services";
export default {
		data() {
			return {
				tagName:'电影',
	redimg: redimg,
        		selectionList: [],
				selection: 1,
        		data: {id:"1"}
			}
		},
		mounted(){
			 this.initallproject();

		},
		methods: {
			initallproject() {
				resources({
					id: this.$route.query.id
				}).then((res) => {
					debugger
						this.data = res.data;
						var item =this.data.type;
						if(item==1)
						{
							this.tagName='顾问'
						}
						else if(item==2)
						{
							this.tagName='导演'
						}else if(item==3)
						{
							this.tagName='编剧'
						}
						else if(item==4)
						{
							this.tagName='制片人'
						}
						else if(item==5)
						{
							this.tagName='明星演员'
						}
				});				
			},
		      
    },
	}
</script>

<style scoped>
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  .img{
    height:500px;
    width:100%;
  }
  .font_size_24 {
      font-size: 1.7em;
  	padding-left: 7%;
  }
</style>