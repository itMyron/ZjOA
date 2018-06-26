<template>
<div>
<div class="content">
  <div class="imgBox">
    <label class="upload-b" v-if="uploadDisabled" :class="{default:!flag}">
      <input type="file" @change="upload($event)" />
      <i class="	fa fa-cloud-upload"></i>
      <b>上传图片</b>
    </label> 
    <div class="imgHover" v-else :class="{default:!flag}">
      <img :src="dialogImageUrl" />
      <div class="bg-view">
        <p class="wrap"></p>
        <p class="wrapIcon">
          <i class="el-icon-view icon-m" @click="checkView"></i>
          <label class="icon-m upload-s">
            <i class="fa fa-camera"></i>
            <input type="file" @change="upload($event)" />
          </label>
        </p>
      </div>
    </div>
  </div>
  <p class="title">{{title}}</p>
</div>
<el-dialog :title="title" :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>

</div>
</template>

<script>
  export default {
    data() {
      return {
        uploadDisabled: true ,
        dialogVisible: false ,
        //dialogImageUrl: ''

      };
    },
    props:{
        
        "flag" :{
          type:Boolean ,
          default:false
        },
        "dialogImageUrl" :{
          type:String ,
          default:false
        },
        "fileName":{
          type:String ,
          default:false
        },
        "fileType":{
          type:String ,
          default:false
        },
        "title" :{
          type:String ,
          default:false
        }

	},
    methods: {
      checkView(){
        const self = this ;
        self.dialogVisible = true ;
        console.log("试试")
      },
      upload(e){
        const self = this ;
        if(self.flag){
          self.uploadDisabled = false ;
         
          //self.$emit("url",666)
          let file = e.target.files[0];
          if(file){
            let formData = new FormData();
            //限制上传图片大小
            if(file.size>5*1024*1024) {
              
            }else{   
              //formData.append("fileImg", file); 
            }
            formData.append("fileImg", file); 
             console.log(self.$API.POST_SYS_UPLOADIMG)
            let xhr = new XMLHttpRequest();
            xhr.open("post",self.$API.POST_SYS_UPLOADIMG,true);
            xhr.send(formData);
            xhr.onload = function() {
                var str = xhr.responseText;
                var result = JSON.parse(str);
                if(result.code == "0") {
                  console.log("上传成功")
                    //let imgUrl = result.data.showUrl + result.data.fileName ;
                    self.dialogImageUrl = result.showUrl + result.fileName ;
                    self.$emit("url",{
                      "fileName" : result.fileName ,
                      "fileType" : self.fileType 
                    }) ;
                }
            };  
          }  //end --if






        }else{
          self.$message.error('暂不可以上传图片');
        }
        
        
      }
    },
    watch:{
        dialogImageUrl(){
            console.log("监听")
        }
    },
    created(){
        const self = this ;
        if(self.dialogImageUrl){
            self.uploadDisabled = false ;  
        }else{
            self.uploadDisabled = true ;  
        }
    }
  }
</script>
<style lang="scss" scoped type="text/css">


  .content{
    width:120px ;
    text-align: center ;
    margin:0 auto ;
  .imgBox{
      position: relative;
      display: inline-block ;
      border: 1px dashed #409EFF;
      width: 100px ;
      height: 120px ;
      border-radius: 3px ;
      overflow: hidden ;
      .upload-b{
        width: 100% ;
        height: 100%;
        display: block ;
        text-align: center ;
        input{
          display: none ;
        }
        i{
          margin:0 auto ;
          font-size: 30px;
          padding: 27px 0 ;
        }
        b{
          display: block ;
          text-align: center ;
        
        }
      }
      .imgHover{
        height: 100% ;
        img{
          width: 100% ;
          height: 100%;
        }
        .bg-view{
          display: none ;
          .wrap{
            position: absolute ;
            left: 0 ;
            top:0 ;
            width: 100% ;
            height: 100%;
            background: #000 ;
            opacity: 0.4;
          }
          .wrapIcon{
            position: absolute ;
            z-index: 100 ;
            left: 0 ;
            top:0 ;
            width: 100% ;
            height: 120px;
            line-height: 120px ;
            color: #fff ;
            text-align: center ;
            .icon-m{
              font-size: 16px;
              margin: 0 8px;
              input{
                display: none ;
              }
            }
          }
        }
      }
      .imgHover:hover{
        .bg-view{
          display: block ;
        }
      }
    }
    .title{
      width:100% ;
      text-align: center ;
      color: blue ;
    }
    .default{
      cursor: not-allowed ;
    }
  } 
</style>

