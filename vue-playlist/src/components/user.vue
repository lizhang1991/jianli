<template>
  <div class="user">
       <!-- 导航 -->
          <nav class="navbar navbar-expand-md navbar-light bg-light ">
             <a class="navbar-brand" href="#">简历</a>
          <button class="navbar-toggler btn btn-sm" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
          </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                 <li class="nav-item active">
                      <a class="nav-link" href="#">{{ title_home }}<span class="sr-only">(current)</span></a>
                  </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#my">{{ title_my }}</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#jineng">{{ title_skill }}</a>
                 </li>
                  <li class="nav-item "><!--dropdown -->
                   <!-- <a class="nav-link dropdown-toggle" href="#zuopin" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
                     <a class="nav-link" href="#zuopin">
                      {{ title_project }}
                    </a>
                 <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <a class="dropdown-item" href="#">Action</a>
                   <a class="dropdown-item" href="#">Another action</a>
                   <div class="dropdown-divider"></div>
                   <a class="dropdown-item" href="#">Something else here</a>
        </div> -->
      </li>
    </ul>
  </div>
</nav>
         

<!-- 轮播图 -->
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/2.jpg" alt="First slide">
      <div class="carousel-caption d-none d-sm-block">
      <h5>{{ name }}</h5>
      <p>{{ msg }}</p>
</div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/3.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-sm-block">
      <h5>{{ email }}</h5>
      <p>{{ msg }}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/4.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-sm-block">
      <h5>{{ address }}</h5>
      <p>{{ msg }}</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- 关于我 -->
<div id="my" class="container-fluid w-100  d-none d-sm-block">
    <div class="jumbotron jumbotron-fluid  " style="background:url(../assets/5.jpg) no-repeat;" >
        <div class="container" style="width:100px;heigth:100px; ">
           <!-- <iframe src="../assets/1.mp3" frameborder="0" style="width:100px;heigth:100px" class=" rounded-circle"> -->
             <img src="../assets/6.jpg" style="width:100px;heigth:100px" alt=""  class=" rounded-circle d-none d-sm-block">
           <!-- </iframe>  -->
            <!-- <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=26112579&auto=1&height=66"></iframe> -->
        </div>
            <div class="container">
        <p class="text-light" style="main;">{{ my_msg }}</p>  
    </div>
  </div>
</div>
<div class="jumbotron  d-md-none d-lg-none d-xl-none d-sm-none">
  <div class="container">
  <h5 >{{ title_my }}</h5>

        <p  style="main;">{{ my_msg }}</p>  
</div>
</div>
<!-- 技能 -->
<div id="jineng" class="container-fluid w-100  d-none d-sm-block">
  <div class="jumbotron jumbotron-fluid" style="background:url(../assets/7.jpg) no-repeat;" >
    <div class="container">
        <p class="text-light" style="main;">{{ my_msg }}</p>  
    </div>
  </div>

</div>
<!-- - -->
<div class="jumbotron  d-md-none d-lg-none d-xl-none d-sm-none">
  <div class="container">
  <h5 >{{ title_skill }}</h5>

        <p  style="main;">{{ skill_msg1 }}<br>{{ skill_msg2 }}<br>{{ skill_msg3 }}<br>{{ skill_msg4 }}<br>{{ skill_msg5 }}<br>{{ skill_msg6 }}<br>{{ skill_msg7 }}<br>{{ skill_msg8 }}<br>{{ skill_msg9 }}<br>{{ skill_msg10 }}<br></p>  
</div>
</div>
<!-- 作品 -->
<div id="zuopin" class="container-fluid w-100" style="background-colo">
  <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="../assets/1.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title" target="_blank">简历</h5>
      <p class="card-text">此项目是基于vue开发，使用bootrap前端框架搭建响应式页面设计</p>
      <p class="card-text"><small class="text-muted">2019.3</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../assets/9.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"><a href="https://github.com/lizhang1991/weixin" target="_blank">微信小程序</a></h5>
      <p class="card-text">此项目基于微信平台的微信小程序开发，模仿B站写的一个小例子</p>
      <p class="card-text"><small class="text-muted">2019.1-2019.2</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../assets/8.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"><a href="https://github.com/lizhang1991/mall-project" target="_blank">商城前后端</a></h5>
      <p class="card-text">此项目为前后端分离项目，前台使用bootrap前端框架，主要分为登陆 首页 列表 详情页 我的个人中心等页面，后端使用django框架，主要分为登陆 会员管理 商品分类管理 订单管理等页面；</p>
      <p class="card-text"><small class="text-muted">2018.3-2018.5</small></p>
    </div>
  </div>
</div>

</div>



    
<!-- 底部 -->
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
<nav class="navbar fixed-bottom navbar-light bg-light">
  <a class="navbar-brand" href="/adress" target="_blank">address</a>
</nav>




</div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      msg: "life doesn't get easter, you just get stronger! ",
      email: "li_zhang1991@163.com",
      name: "web前端开发--张丽",
      address: "坐标--北京",
      my_msg:"您好，我叫张丽，坐标北京。 我并不是计算机专业,但对前端很感兴趣，所以自学前端，今后的职业规划是朝着全栈发展。 工作两年,本人在公司主要负责整个页面的前端开发，配合后台人员实现产品前端界面效果与功能。写过响应式页面，移动端页面，pc端页面。小的来说，商城，企业网站，视频，音频，评论，地图等都有涉及。不浮躁，喜欢前端，执行力，学习能力都棒棒哒！目前，能做点粗糙设计（比如本网站）。",
      title_my:"关于我",
      title_project:"我的作品",
      title_skill:"技能",
      skill_msg1:"1.热爱前端，喜欢用最扎实的代码做出效果上最炫，代码上最合理的页面，能够兼容主流各种浏览器，比如ie8以上, chrome,firefox,opera。",
      skill_msg2:"2.熟悉使用photoshop把设计的图片按照需要交互的要求进行效果实现。",
      skill_msg3:"3.熟悉各种Web前端技术，包括HTML、DIV、CSS、Javascript、jQuery、AJAX、JSON、Cookie等。",
      skill_msg4:"4.响应式布局,解决不同移动端设备的适配和兼容问题。",
      skill_msg5:"5.熟悉bootstrap,Jquery类库进行pc端项目快速开发, 熟练使用Swiper,sui等插件进行移动端项目的开发。",
      skill_msg6:"6.熟练使用github进行代码管理，使用git版本管理工具。",
      skill_msg7:"7.熟悉原生JS,熟悉JavaScript的面向对象编程，了解作用域以及闭包的原理。",
      skill_msg8:"8.熟练使用Chrome 、Firefox等主流浏览器的开发人员工具调试页面。",
      skill_msg9:"9.了解vue框架对模块化开发有着一定的理解。",
      skill_msg10:"10.了解python后台语言,了解mysql数据库，并对此有兴趣,期待向全栈方向发展",
      title_home:"我的主页",
       };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
    font-size: 12px;


}
#my{
    background:url(../assets/5.jpg) no-repeat;
    width: 100%;
    height:500px;
    background-size:100% auto;
}
#jineng{
    background:url(../assets/7.jpg) no-repeat;
    width: 100%;
    height:400px;
    background-size:100% auto;
}
.jumbotron{
  margin-bottom: 0px;
}
</style>