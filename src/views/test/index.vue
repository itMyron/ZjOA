<template>
	<div>
			<el-table
	    :data="tableData"
	    style="width: 100%">
	    <el-table-column
	      label="日期"
	      width="180">
	      <template slot-scope="scope">
	        <i class="el-icon-time"></i>
	        <span style="margin-left: 10px">{{ scope.row.date }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="姓名"
	      width="180">
	      <template slot-scope="scope">
	        <el-popover trigger="hover" placement="top">
	          <p>姓名: {{ scope.row.name }}</p>
	          <p>住址: {{ scope.row.address }}</p>
	          <div slot="reference" class="name-wrapper">
	            <el-tag size="medium">{{ scope.row.name }}</el-tag>
	          </div>
	        </el-popover>
	      </template>
	    </el-table-column>
	    <el-table-column label="操作">
	      <template slot-scope="scope">
	        <el-button
	          size="mini"
	          @click.stop="handleEdit(scope.$index, scope.row)">留言</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
		<Message></Message>  		
	</div>
  
</template>

<script>
	import Message from '../components/message/index';
  export default {
  	components:{
			"Message" : Message
		},
    data() {
      return {
      	isTurn : false ,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
      		console.log(1)
        	const self = this ;
        	self.$store.dispatch("message/changeTurn",true) ;
      },
    },
    mounted(){
    		const self = this ;
    		window.onclick = function(){
    				console.log(2)
    				self.$store.dispatch("message/changeTurn",false) ;
    		}
    }
  }
</script>
<style lang="scss" scoped type="text/css">
	
		
</style>