<template>
    <div class="map">
        <div class="title">张斐个人博客SiteMap</div>
        <!--        <div>-->
        <!--            <router-link to="/home">博客首页</router-link>-->
        <!--            <span>>>博客地图</span>-->
        <!--        </div>-->
        <div class="article">
            <span>最新文章</span>
            <ul class="content">
                <li><a href="">这是一篇文章很长很长</a></li>
                <li><a href="">这是一篇文章很长很长</a></li>
                <li><a href="">这是一篇文章很长很长</a></li>
                <li><a href="">这是一篇文章很长很长</a></li>
                <li><a href="">这是一篇文章很长很长</a></li>
                <li><a href="">这是一篇文章很长很长</a></li>
            </ul>
        </div>
    </div>
    <!-- /.map -->
</template>

<script>
    export default {
        name: "Map"
    }
</script>

<style lang="less" scoped>
    .map {
        width: 100%;

        .title {
            text-align: center;
            padding-bottom: 10px;
            border-bottom: 1px solid #888888;
            font-weight: bolder;
        }

        .article {
            margin-top: 40px;

            span {
                font-size: 20px;
                display: inline-block;
                margin-bottom: 20px;
                font-weight: bold;
            }

            .content {
                display: block;
                margin-left: 45px;
                font-size: 16px;

                li {
                    list-style: decimal;
                    a {
                        margin-top: 10px;
                        display: inline-block;
                        border-bottom: 1px solid;
                    }
                }
            }
        }

    }
</style>