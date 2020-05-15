<template>
    <div class="article" v-if="articleInfo!==null">
        <p class="title" v-html="articleInfo.title"/>
        <p v-html="articleInfo.content"/>
        <blog-comment :bid="`${$route.params.id}`" class="com"/>
        <send-comment/>
<!--        <right-aside-index/>-->
    </div>
    <!-- /.article -->
</template>

<script>
    import RightAsideIndex from "./home/right-aside/RightAsideIndex";
    import sendComment from "./SendComment";
    import BlogComment from "./BlogComment";
     import {queryArticleById,addViews} from '@/net/request'
    export default {
        name: "Article",
        data() {
            return {
              articleInfo:null
            }
        },
        components:{
            sendComment,
            RightAsideIndex,
            BlogComment
        },
        mounted() {
            addViews(this.$route.params.id);
            //添加访问人数
        },
        created() {
            queryArticleById(this.$route.params.id).then(res=>{
                if(res.status === 'success'){
                    this.articleInfo = res.data[0];
                }
            })
        }
    }
</script>

<style lang="less" scoped>
    .article{
        overflow: hidden;
        width:70%;
        background-color: #fff;
        box-shadow: 4px 5px 4px #888;
        padding:10px 50px;
        margin-left: 10px;
        box-sizing: border-box;
        .title{
            text-align: center;
        }
        .com{
            width:97%;
        }
        /*.prettyprint.linenums.prettyprinted{*/
        /*  background-color: #2d2d2d;*/
        /*    color:#fff;*/
        /*}*/
        .lineums{
            color:red;
        }
    }
</style>