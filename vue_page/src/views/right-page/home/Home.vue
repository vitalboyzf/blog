<template>
    <div class="home">
        <every-day />
        <article-list />
        <content-right />
    </div>
    <!-- /.home -->
</template>

<script>
    import EveryDay from "./EveryDay";
    import ArticleList from "./ArticleList";
    import ContentRight from "./right-aside/RightAsideIndex";

    export default {
        name: "Home",
        components: {
            EveryDay,
            ArticleList,
            ContentRight
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../assets/font/iconfont.css";
    .home{
        height: 100%;
    }
</style>