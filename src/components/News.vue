<template>
  <basic-container>
	  <div class="ovh ban-info"  :style ='{backgroundImage: "url("+ redimg+")"}'>
		  <div class="ovh main">
		  		<div class="ovh container">
		  			<i><img src="../../static/slider/tit-news.png"></i>
		  		</div>
		  	</div>
	  </div>
	  </div>
	  <div class="ovh project-con" >
	  	<div class="ovh container">
	  		<ul class="category">
	  			<li class="on"><a href="/#/newsList" >新闻中心</a></li>
	  		</ul>
	  		<div class="ovh crumbs" style="color: #0000EE;">
	  			<a href="/">首页<span>&gt;&gt;</span></a>
	  			<a href="/#/newsList">新闻中心<span>&gt;&gt;</span></a>
				<a >详情</a>
	  		</div>
	  	</div>
		<div class="ovh proj-con" style="color: white !important;">
				<div class="ovh container">
					<div class="ovh news-vlist news-vpro">
						<div class="ovh news-vcon">
							<a class="ovh news-vtit">{{data.name}}</a>
							<span class="ovh news_vdate">{{data.created}}</span>
							<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{{data.overview}}</p>
						</div>
						<div class="ovh news-vline">
							<a class="ovh news-vimg">
								<div class="ovh news-vpic"><img :src="data.url"></div>
								<div class="pv-bg"><img src="../../static/slider/dy_cont_bg.png"></div>
							</a>
							<p class="ovh news-vsource"></p>
						</div>
						<div class="ovh news-vcon" deep="4" v-html="data.detail">
							
						</div>
					</div>
				</div>
			</div>
	</div>
  </basic-container>
</template>
<style>

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
<script>
import redimg from '../../static/slider/bg-news.jpg'
import {	news,} from "../services/services";
	export default {
		data() {
			return {
			
				redimg: redimg,
				page: {
          			pageSize: 12,
          			currentPage: 1,
          			total: 0
        		},
        		selectionList: [],
        		data: [{id:"1"}]
			}
		},
		mounted(){
			 this.initallproject();
		
		},
		methods: {
			initallproject() {
				news({
					id: this.$route.query.id
				}).then((res) => {
					
						this.data = res.data;
				});				
			},
			
    },
	}
</script>
