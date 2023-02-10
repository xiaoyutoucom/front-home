<template>
	<div >
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
	  			<li class="on"><a >{{tagName}}</a></li>
<!-- 	  			<li class=""  @click="initallproject(2)"><a >电视剧</a></li>
	  			<li class=""  @click="initallproject(3)"><a >网络剧</a></li> -->
	<!--  			<li @click="initallproject(1)"><a href="/variety/index">综艺节目</a></li> -->
	  		</ul>
	  		<div class="ovh crumbs">
	  			<a href="/">首页<span>&gt;&gt;</span></a>
	  			<a href="/#/fashionList">产业项目<span>&gt;&gt;</span></a>
	  			<a>{{tagName}}</a>
	  		</div>
	  	</div>
		<div class="ovh proj-con">
				<div class="container">
					<div class="ovh pv-con">
						<img :src="data.imageUrl">
							<div class="pv-info"v-if="data.type==1">
							<h4>{{data.projectName}}</h4>
							<p>导演：{{data.directorName}}</p>
							<!-- <p>主要作品：{{data.projectName}}</p> -->
							<p>编剧：{{data.writersName}}</p>
							<p>主演：{{data.starring}}</p>
							<p>上映时间：{{data.releaseTime}}</p>
							<p class="pv-pro" style="padding-left:0"><span>剧情梗概：</span>{{data.synopsis}}</p>			
							</div>
							<div class="pv-info" v-if="data.type==2">
								<h4>{{data.projectName}}</h4>
								<!-- <p>导演：{{data.directorName}}</p> -->
								<p>编剧：{{data.writersName}}</p>
								<p>主演：{{data.starring}}</p>
								<p>播放平台：{{data.platform}}</p>
								<p>上映时间：{{data.releaseTime}}</p>
								<p class="pv-pro" style="padding-left:0"><span>剧情梗概：</span>{{data.synopsis}}</p>
							</div>
							<div class="pv-info" v-if="data.type==3">
								<h4>{{data.projectName}}</h4>
								<p>导演：{{data.directorName}}</p>
								<p>播放平台：{{data.platform}}</p>
								<p>编剧：{{data.writersName}}</p>
								<p>主演：{{data.starring}}</p>
								<p>上映时间：{{data.releaseTime}}</p>
								<p class="pv-pro" style="padding-left:0"><span>剧情梗概：</span>{{data.synopsis}}</p>
							</div>
							<div class="pv-info" v-if="data.type==4">
								<h4>{{data.projectName}}</h4>
<!-- 								<p>导演：{{data.directorName}}</p> -->
								<p>播放平台：{{data.platform}}</p>
<!-- 								<p>编剧：{{data.writersName}}</p>
								<p>主演：{{data.starring}}</p> -->
								<p>播出时间：{{data.releaseTime}}</p>
								<p class="pv-pro" style="padding-left:0"><span>节目介绍：</span>{{data.synopsis}}</p>
							</div>
							
						</div>
					<div class="pv-bg pcshow"><img src="../../static/slider/dy_cont_bg.png"></div>
				</div>
			</div>
	</div>
</div>
</template>
<script>
	import redimg from '../../static/slider/q1.jpg'
import {  project,} from "../services/services";
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
				project({
					id: this.$route.query.id
				}).then((res) => {
					debugger
						this.data = res.data;
						var item =this.data.type;
						if(item==1)
						{
							this.tagName='电影'
						}
						else if(item==2)
						{
							this.tagName='电视剧'
						}else if(item==3)
						{
							this.tagName='网络剧'
						}
						else if(item==4)
						{
							this.tagName='综艺节目'
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