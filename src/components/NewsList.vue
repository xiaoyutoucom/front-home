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
	  <div class="ovh project-con">
	  	<div class="ovh container">
	  		<ul class="category">
	  			<li class="on"><a>新闻中心</a></li>
	  		</ul>
	  		<div class="ovh crumbs">
	  			<a href="/">首页<span>&gt;&gt;</span></a>
	  			<p>新闻中心</p>
	  		</div>
	  	</div>
		<div class="ovh proj-con" s>
					<div class="ovh container">
						<ul class="ovh news-vlist" v-for="(item, index) in data" :key="item.id" >
								 <div v-if="index==0" class="ovh news-vlist news-vtop">
									<a :href="'/#/news?id='+item.id" class="ovh news-vimg">
										<div class="ovh news-vpic"><img :src="item.url"></div>
										<div class="pv-bg"><img src="../../static/slider/dy_cont_bg.png"></div>
									</a>
									<div class="ovh news-vcon" >
										<a :href="'/#/news?id='+item.id" class="ovh news-vtit">{{item.name}}</a>
										<span class="ovh news_vdate">{{item.created}}</span>
										<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{{item.overview}}</p>
										<a :href="'/#/news?id='+item.id" class="ovh news-vmore" style="cursor:pointer !important;" >详细内容</a>
									</div>
									<i></i>
								 </div>               
			    			    	<li class="ovh" v-if="index!=0">
			    					<a :href="'/#/news?id='+item.id" class="ovh news-vimg">
			    						<div class="ovh news-vpic"><img :src="item.url"></div>
			    						<div class="pv-bg"><img src="../../static/slider/dy_cont_bg.png"></div>
			    					</a>
			    					<div class="ovh news-vcon">
			    						<a :href="'/#/news?id='+item.id" class="ovh news-vtit">{{item.name}}</a>
			    					<span class="ovh news_vdate">{{item.created}}</span>
			    					<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{{item.overview}}</p>
			    					<a :href="'/#/news?id='+item.id" class="ovh news-vmore" style="cursor:pointer !important;" >详细内容</a>
			    					</div>
			    				</li>
			    		</ul>
						<!-- 分页 -->
						<div class="blockPage" style="text-align: center;padding-bottom: 0rem;">
						  <el-pagination
						    @size-change="sizeChange"
						    @current-change="currentChange"
						    :page.sync="page"
						    :pager-count="11"
						    :page-sizes="[4,24,36,48]"
						    :page-size="page.pageSize"
						  background
						    layout="prev, pager, next"
						    :total="page.total">
						  </el-pagination>
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
import {  allimages,allproject,allresources,allnews,allvideos} from "../services/services";
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
			 this.initallnews();
		},
		methods: {
			initallnews() {
				allnews({
					pageSize: this.page.pageSize,
					pageNum: this.page.currentPage,
				}).then((res) => {					
					this.data = res.rows;
				});				
			},
			//获取数组中数值的下标
			indexOf(val,ids) {
        		for (let i = 0; i < ids.length; i++) {
        			//获取当前值的下标
          			if (ids[i] === val)
            			return i;
        		}
        		return -1;
      		},
      		//多选赋值ids
      		ids(val) {
        		let ids = this.selectionList;
        		//检索下标,判断当前值(或对象是否在数组中); 在则返回下标,不在则返回-1
        		let index = this.indexOf(val,ids);
        		if (ids.length >0 && index > -1) {
        			//删除数组中的某个元素(在取消勾选时,删除数组中的值)
          			ids.splice(index,1);
        		}else {
        			//添加到数组中
          			ids.push(val);
          			//用逗号隔开
          			ids.join(",");
        		}
      		},
      		

	      searchReset() {
	        this.query = {};
	        this.onLoad(this.page);
	      },
	      searchChange(params, done) {
	        this.query = params;
	        this.page.currentPage = 1;
	        this.onLoad(this.page, params);
	        done();
	      },
	      selectionClear() {
	        this.$refs.crud.toggleSelection();
	      },
	      currentChange(currentPage) {
	        this.page.currentPage = currentPage;
	      },
	      sizeChange(pageSize) {
	        this.page.pageSize = pageSize;
	      },
	      refreshChange() {
	        this.onLoad(this.page, this.query);
	      },
	      //分页接口
	      onLoad(page, params = {}) {
	        this.loading = true;
	        getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
	          const data = res.data.data;
	          this.page.total = data.total;
	          this.data = data.records;
	          this.loading = false;
	          this.selectionClear();
	        });
	      }
      
    },
	}
</script>
