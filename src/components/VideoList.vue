<template>
  <basic-container>
	  <div class="ovh ban-info"  :style ='{backgroundImage: "url("+ redimg+")"}'>
		  <div class="ovh main">
		  		<div class="ovh container">
		  			<i><img src="../../static/slider/tit-video.png"></i>
		  		</div>
		  	</div>
	  </div>
	  <div class="ovh project-con">
	  	<div class="ovh container">
	  		<ul class="category">
	  			<li class="on"><a>视频</a></li>
	  		</ul>
	  		<div class="ovh crumbs">
	  			<a href="/">首页<span>&gt;&gt;</span></a>
	  			<p>视频</p>
	  		</div>
	  	</div>
		<div class="ovh proj-con">
			<div class="ovh container">
				<ul class="ovh proj-list video-list">                                 
		                        <li class="ovh"  v-for="item in data" :key="item.id" @click="vclick(item.url,item.img)">
		        					<!-- 20180708 start   添加id  去掉data-embed -->
		        					<a class="ovh" id="video_1">
		        						<img :src="item.img">
		        						<p><img src="../../static/slider/playBtn.png">{{item.name}}</p>
		        					</a>
									<div class="pv-bg"><img src="../../static/slider/dy_cont_bg.png"></div>
		        				</li>                                   
				</ul>
			</div>
			<!-- 分页 -->
			<div class="blockPage" style="text-align: center;padding-bottom: 0rem;">
			  <el-pagination
			    @size-change="sizeChange"
			    @current-change="currentChange"
			    :page.sync="page"
			    :pager-count="10"
			    :page-sizes="[4,24,36,48]"
			    :page-size="page.pageSize"
			  background
			    layout="prev, pager, next"
			    :total="page.total">
			  </el-pagination>
			</div>
			<el-dialog
			  title="预览视频"
			  :visible.sync="dialogVisible"
			  width="50%"
			  :before-close="handleClose">
			  <video  id="video"  :preload="preload"
			          :poster="videoImg" height="100%" width="100%" align="center" style="padding: 0px!important;" :controls="controls"  :autoplay="autoplay">
			    <source :src="videoSrc" type="video/mp4">
			  </video>
			</el-dialog>
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
import redimg from '../../static/slider/q1.jpg'
import {
allvideos} from "../services/services";
	export default {
		data() {
			return {
				videoSrc: '',
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

				 dialogVisible: false,
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
			 this.initallvideos();
		},
		methods: {
			initallvideos() {
				allvideos({
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
      		
		vclick(url,img) {
	        this.dialogVisible = true
			this.videoSrc = url;	this.videoImg = img;
			document.getElementById("video").load();
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
			this.initallproject(this.selection );
	      },
	      sizeChange(pageSize) {
	        this.page.pageSize = pageSize;
			this.initallproject(this.selection );
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
