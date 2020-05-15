<template>
    <div class="container">
        <div class="about">
            <div class="about-me">
                <div class="title">关于我</div>
                <p>大一开始接触编程，接触过c语言，java</p>
                <p>2019年8月11日加入前端大家庭</p>
                <p>数据结构很重要哒！</p>
                <p>vr前端未来可期</p>
                <p>努力学习中^&^灬</p>
            </div>
            <div class="about-blog">
                <div class="title">关于博客</div>
                <p>2020年5月11日博客系统初建成</p>
                <p>今后会不断用所学技术完善博客</p>
                <p>拓展视野，展望未来</p>
                <p>一起努力吧！</p>
                <p>嘿嘿嘿&&</p>
            </div>

        </div>
        <!--      <blog-comment/>-->
        <right-aside />
        <!-- /.about -->
    </div>
    <!-- /.container -->
</template>

<script>
    import RightAside from "./home/right-aside/RightAsideIndex";

    export default {
        name: "About",
        components: {
            RightAside,
            // BlogComment
        }
    }
</script>

<style lang="less" scoped>
    .about {
        width: 45%;
        padding: 10px 5%;
        margin-left: 20px;
        background-color: #fff;
        box-shadow: 3px 4px 3px #888888;

        .title {
            font-size: 20px;
            font-weight: bold;
            margin: 5px 0;
        }

        .about-me {
            padding-bottom: 5px;
            border-bottom: 1px solid #2d2d2d;
        }

        p {
            font-size: 15px;
        }

    }

</style>