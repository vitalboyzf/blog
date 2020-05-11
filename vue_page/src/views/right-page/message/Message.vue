<template>
    <div class="comment">
        <div class="about">
            <p>欢迎来到交流面板，有什么建议可以留言，博主一直在~</p>
            <p>大家努力学习哦</p>
            <p>谢谢支持</p>
        </div>
        <show-message />
        <post-message />
        <right-aside />
    </div>
    <!-- /.comment -->
</template>

<script>
    import RightAside from "../home/right-aside/RightAsideIndex";
    import BlogComment from "../BlogComment";
    import ShowMessage from "./ShowMessage";
    import PostMessage from "./PostMessage";

    export default {
        name: "comment",
        components: {
            RightAside,
            BlogComment,
            ShowMessage,
            PostMessage,
        }
    }
</script>

<style lang="less" scoped>
    .comment {

        width: 100%;

        .about {
            padding: 3px 8px;
            font-size: 15px;
            width: 60%;
            background-color: #fff;
            box-shadow: 4px 3px 4px #888;

            p {
                padding: 10px 0;
            }
        }
    }
</style>