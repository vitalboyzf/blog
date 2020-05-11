<template>
    <div class="left-main">
        <div class="title">我的博客</div>
        <div class="logo">
            <img src="@/assets/logo.jpg" alt="">
            <p>聊聊技术,共同进步</p>
        </div>
        <!-- /.logo -->
        <div class="nav">
            <router-link tag="div" to="/home">首页</router-link>
            <router-link tag="div" to="/map">地图</router-link>
            <router-link tag="div" to="/about">关于</router-link>
            <router-link tag="div" to="/message">留言</router-link>
        </div>
<!--        <div class="search">-->
<!--            <input type="text" placeholder="输入关键字查找">-->
<!--            <input type="button" value="搜索"/>-->
<!--        </div>-->
        <!-- /.search -->
        <!-- /.nav -->
        <!-- /.title -->

    </div>
    <!-- /.left-main -->
</template>

<script>
    export default {
        name: "LeftMain"
    }
</script>

<style lang="less" scoped>
    .left-main {
        color:#fff;
        background-color: #191810;
        height: 100%;
        width: 200px;

        .title {
            color: greenyellow;
            width: 100%;
            text-align: center;
            padding-top: 20px;
        }
        .logo{
            width:100%;
            text-align: center;
            margin-top:20px;
            img{
                width:100px;
                border-radius: 50%;
            }
            p{
                font-size: 12px;
                color:#aaa;
                text-align: left;
                padding:0 47px;
            }
        }
        .nav {
            text-decoration: none;
            margin-top: 10px;

            div {
                color: #ccc;
                font-weight: bold;
                width: 100%;
                text-align: center;
                padding: 10px 0px;

                &:hover {
                    background-color: #1717;
                }
            }

            .active-class {
                color: #f70;
            }
        }
        .search{
            width:100%;
            text-align: center;
            margin-top: 50px;
            input{
                width:100px;
                vertical-align: text-bottom;
                margin-right:10px;
            }
            input[type=button]{
                font-size: 12px;
                width:40px;
            }
        }
    }
</style>