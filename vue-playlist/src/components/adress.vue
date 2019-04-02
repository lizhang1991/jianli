<template>
    <div class="adress">
    <div id="container" style="width: 500px;height: 300px"></div>
    </div>
</template>

<script  type="text/javascript">
import AMap from "AMap"
export default {
    name:"adress",
    data(){
        return{
            map:[],
            marker:[],
            title:'居住地<span style="font-size:11px;color:#F00;">大兴</span>',
            content:["<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市大兴区旧宫","电话：15122063285"],
            infoWindow:[],
     



     } 
       },
        mounted() {
            this.init()
            this.addMarker()
           
            // console.log(this. createInfoWindow(this.title,this.content))
            // console.log(this.infoWindow)
            // console.log(this.map)
        },
        methods: {
            init:function(){
                this.map=new AMap.Map("container", {
                resizeEnable: true,
                center: [116.4595, 39.8058],
                zoom: 16
});
                this.infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                content: this.createInfoWindow(this.title, this.content),
                 offset: new AMap.Pixel(16, -45)
});
                
            },
            addMarker:function(){
                 this.map.clearMap();
                 this.marker = new AMap.Marker({
                      map:this.map,
                    position: [116.4595, 39.8058]
    });
    console.log(this.marker)
    // this.map.add(this.marker)
    // 鼠标点击marker弹出自定义的信息窗体
   
            // AMap.event.addListener(this.marker, 'click', function () {
// console.log(AMap.infoWindow)
// console.log(this.marker)
                //    infoWindow.open(this.map, this.marker.getPosition());
    // });

            },
            createInfoWindow:function(title,content){
                  var info = document.createElement("div");
                  info.className = "custom-info input-card content-window-card";

                 //可以通过下面的方式修改自定义窗体的宽高
                //info.style.width = "400px";
                  // 定义顶部标题
                var top = document.createElement("div");
                var titleD = document.createElement("div");
                var closeX = document.createElement("img");
                top.className = "info-top";
                titleD.innerHTML = title;
                closeX.src = "https://webapi.amap.com/images/close2.gif";
                closeX.onclick = this.closeInfoWindow;

                top.appendChild(titleD);
                top.appendChild(closeX);
                info.appendChild(top);

                // 定义中部内容
                var middle = document.createElement("div");
                middle.className = "info-middle";
                middle.style.backgroundColor = 'white';
                middle.innerHTML = content;
                info.appendChild(middle);

                // 定义底部内容
                var bottom = document.createElement("div");
                bottom.className = "info-bottom";
                bottom.style.position = 'relative';
                bottom.style.top = '0px';
                bottom.style.margin = '0 auto';
                var sharp = document.createElement("img");
                sharp.src = "https://webapi.amap.com/images/sharp.png";
                bottom.appendChild(sharp);
                info.appendChild(bottom);
                return info;

         } },
           closeInfoWindow:function(){
               this.map.clearInfoWindow();
           },




        }

    

</script>
<style scoped>

html, body, #container {
            height: 100%;
            width: 100%;
        }

        .content-window-card {
            position: relative;
            box-shadow: none;
            bottom: 0;
            left: 0;
            width: auto;
            padding: 0;
        }

        .content-window-card p {
            height: 2rem;
        }

        .custom-info {
            border: solid 1px silver;
        }

        div.info-top {
            position: relative;
            background: none repeat scroll 0 0 #F9F9F9;
            border-bottom: 1px solid #CCC;
            border-radius: 5px 5px 0 0;
        }

        div.info-top div {
            display: inline-block;
            color: #333333;
            font-size: 14px;
            font-weight: bold;
            line-height: 31px;
            padding: 0 10px;
        }

        div.info-top img {
            position: absolute;
            top: 10px;
            right: 10px;
            transition-duration: 0.25s;
        }

        div.info-top img:hover {
            box-shadow: 0px 0px 5px #000;
        }

        div.info-middle {
            font-size: 12px;
            padding: 10px 6px;
            line-height: 20px;
        }

        div.info-bottom {
            height: 0px;
            width: 100%;
            clear: both;
            text-align: center;
        }

        div.info-bottom img {
            position: relative;
            z-index: 104;
        }

        span {
            margin-left: 5px;
            font-size: 11px;
        }

        .info-middle img {
            float: left;
            margin-right: 6px;
        }
</style>
