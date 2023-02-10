<template>
  <div  >
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
	  			<li class="on" @click="initallproject(1)"><a >电影</a></li>
	  			<li class=""  @click="initallproject(2)"><a >电视剧</a></li>
				<li @click="initallproject(4)"><a>综艺节目</a></li>
				<li class=""  @click="initallproject(3)"><a >广告</a></li>
	  		</ul>
	  		<div class="ovh crumbs">
	  			<a href="/">首页<span>&gt;&gt;</span></a>
	  			<a href="/#/fashionList">产业项目<span>&gt;&gt;</span></a>
	  			<p>{{tagName}}</p>
	  		</div>
	  	</div>
		<div class="ovh proj-con">
			<div class="ovh container">
				<ul class="ovh proj-list">    
								 <li class="ovh" v-for="itemimg in data" :key="itemimg.id">
									<a :href="'/#/fashion?id='+itemimg.id" class="ovh">
										<i><img :src="itemimg.imageUrl"></i>
										<p>{{itemimg.projectName}}</p>
										</a>
									<div class="pv-bg"><img src="../../static/slider/cyxm_list_bg.png"></div>
								</li>
                             
				</ul>
			</div>
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
import redimg from '../../static/slider/q1.jpg'
import {  allproject,} from "../services/services";
	export default {
		data() {
			return {
				tagName:'电影',
				redimg: redimg,
				page: {
          			pageSize: 12,
          			currentPage: 1,
          			total: 1
        		},
        		selectionList: [],
				selection: 1,
        		data: [{id:"1"}]
			}
		},
		mounted(){
			 this.initallproject(1);
			 $('.category li').click(function(e){
			        // swiperWrapper.style.transform="translate3d(-"+($(this).index()+1)*$('.projects_bottom').width()+"px,0px,0px)"
			        // swiperWrapper.style.transitionDuration='0.3s';
			        $(this).addClass('cur on').siblings().removeClass('cur on');
			 
			        /**- 20180706 start -**/
			        cmore();
			        /**- 20180706 end -**/
			 
			    })
		},
		methods: {
			initallproject(item) {
				this.selection = item;
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
				allproject({
					pageSize: this.page.pageSize,
					pageNum: this.page.currentPage,
					type: item,
				}).then((res) => {
						this.data = res.rows;
					    this.page.total =  res.total;
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
	        //this.onLoad(this.page);
	      },
	      searchChange(params, done) {
	        this.query = params;
	        this.page.currentPage = 1;
	       // this.onLoad(this.page, params);
	        done();
	      },
	      selectionClear() {
	        this.$refs.crud.toggleSelection();
	      },
	      currentChange(currentPage) {
	        this.page.currentPage = currentPage;
			this.initallproject(this.selection );
	      },
	      sizeChange(pageSize) {
	        this.page.pageSize = pageSize;
	      },
	      refreshChange() {
	        //this.onLoad(this.page, this.query);
	      },
	      // //分页接口
	      // onLoad(page, params = {}) {
	      //   this.loading = true;
	      //   getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
	      //     const data = res.data.data;
	      //     this.page.total = data.total;
	      //     this.data = data.records;
	      //     this.loading = false;
	      //     this.selectionClear();
	      //   });
	      // }
      
    },
	}
</script>
