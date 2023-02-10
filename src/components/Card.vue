<template>
  <basic-container>
  	<el-row :gutter="12" v-loading="loading">
  	  <!-- date遍历循环的数据 -->
      <el-col :span="4" v-for="item in data" :key="item.id">
        <el-card shadow="hover"><!--style="background-color: #5daf34"  灰 #e1e1e1 绿 #5daf34-->
          <div>
          	 <img src="https://tvax4.sinaimg.cn/large/9cb59072gy1h3w43b8cerj20f00l040k.jpg" class="image">
          </div>
          </el-card>
      </el-col>
    </el-row>
    
    <!-- 分页 -->
    <div class="blockPage">
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :page.sync="page"
        :pager-count="10"
        :page-sizes="[4,24,36,48]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
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

	export default {
		data() {
			return {
				page: {
          			pageSize: 12,
          			currentPage: 1,
          			total: 0
        		},
        		selectionList: [],
        		data: [{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"}]
			}
		},
		
		methods: {
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
