<template>
	<div class="content">
		 <div id="allmap" ref="allmap"></div>  
	</div>
</template>
<script>  
export default {  
  name: 'App',  
  methods:{  
    map(){  
      let map =new BMap.Map(this.$refs.allmap); // 创建Map实例  
     map.centerAndZoom('杭州',5);
	var data_info = [
					 [120.1405982234,30.3017117165,"地址：浙江省杭州市拱墅区教工路552号403"],
					// [116.412222,39.912345,"地址：北京市东城区正义路甲5号"]
					];
	var opts = {
				width : 250,     // 信息窗口宽度
				height: 80,     // 信息窗口高度
				title : "杭州鑫火信息科技有限公司" , // 信息窗口标题
				enableMessage:true,//设置允许信息窗发送短息
			   };
	//默认打开的弹框
	var infoWindow1 = new BMap.InfoWindow("地址：浙江省杭州市拱墅区教工路552号403", opts); 
	var point1 = new BMap.Point(120.1405982234,30.3017117165);
	map.openInfoWindow(infoWindow1,point1); //开启信息窗口
	
	for(var i=0;i<data_info.length;i++){
		var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
		var content = data_info[i][2];
		map.addOverlay(marker);               // 将标注添加到地图中
		addClickHandler(content,marker);
		
	}
	function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)
		});
	}
	function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}
	
	
	(function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
   })()
    }  
  
  },  
  mounted(){  
    this.map()  
  
  }  
}  
</script>  
  
<style lang="scss" scoped type="text/css">

#allmap{  
  height: 100%;  
  overflow: hidden;  
  
}  
</style>