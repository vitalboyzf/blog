<template>
  <div class="container">
        <div class="about">
        <div class="about-me">
            <div class="title">关于我</div>
            <p>这是一段话</p>
            <p>这是一段话</p>
            <p>这是一段话</p>
            <p>这是一段话</p>
            <p>这是一段话</p>
        </div>
        <div class="about-blog">
             <div class="title">关于博客</div>
            <p>这是一段话</p>
            <p>这是一段话</p>
            <p>这是一段话</p>
            <p>这是一段话</p>
            <p>这是一段话</p>
        </div>

    </div>
<!--      <blog-comment/>-->
        <right-aside />
    <!-- /.about -->
  </div>
  <!-- /.container -->
</template>

<script>
    import BlogComment from "./BlogComment";
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
        width:45%;
        padding: 10px 5%;
        margin-left: 20px;
        background-color: #fff;
        box-shadow: 3px 4px 3px #888888;
        .title{
            font-size: 20px;
            font-weight: bold;
            margin: 5px 0;
        }
        .about-me{
            padding-bottom: 5px;
            border-bottom: 1px solid #2d2d2d;
        }
        p{
            font-size: 15px;
        }

    }

</style>