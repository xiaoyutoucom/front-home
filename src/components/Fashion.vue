<template>
	<div :style ='{backgroundImage: "url("+ redimg+")"}' style="background-repeat:no-repeat;width: 100%;height: 100%;">
		<div style="text-align: left;color: aliceblue;margin-bottom: 1rem;" class="font_size_24">
		   <span style="font-size:40px;color:#FF3939;"><strong>G</strong></span> 关于我们
		</div>
<FashionList>
</FashionList>
</div>
</template>
<script>
	import FashionList from './FashionList.vue'
	import redimg from '../../static/slider/q1.jpg'
    export default {
        name: 'Fashion',
		components: {
		FashionList
		},
       data() {
             return {
               tabPosition: 'left',
			   redimg: redimg,
             };
           },
		   mounted() {
	
		   },
		 methods: { 
			 getActiveName(ticketsIndex){
				var name = this.$route.query
			 				// 默认选择第一项
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
  .img{
    height:500px;
    width:100%;
  }
  .font_size_24 {
      font-size: 1.7em;
  	padding-left: 7%;
  }
</style>