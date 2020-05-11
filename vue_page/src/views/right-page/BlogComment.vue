<template>
    <div class="blog-comments">
        <span class="blog-comments-msg">关于：目前有{{total===undefined?0:total}}条留言</span>
        <div v-for="comment of commentInfo" class="blog-comment">
            <span>{{comment['user_name']}}<b v-if="comment['parent_name']">回复{{comment['parent_name']}}</b>:发表于{{comment.ctime}}
            <a @click="$bus.$emit('reply',comment.user_name,comment.blog_id)" href="#send-comment-target">[回复]</a>
            </span>
            <div>{{comment.comments}}</div>
        </div>
        <!-- /.blog-comment -->
    </div>
</template>

<script>
    import {queryCommentsByBlogId} from "../../net/request";
    import {getCurrentTime} from "./utils";

    export default {
        name: "BlogComment",
        props: {
            bid: {
                type: String
            }
        },
        data() {
            return {
                total: 0,
                commentInfo: []
            }
        },
        methods: {
            getCommentsByBlogId() {
                queryCommentsByBlogId(this.bid).then(res => {
                    this.total = res.total;
                    res.data.forEach(item => {
                        item.ctime = getCurrentTime(item.ctime);
                        item.utime = getCurrentTime(item.utime);
                    })
                    this.commentInfo = res.data;
                })
            },
        },
        created() {
            this.getCommentsByBlogId()
        }
    }
</script>

<style lang="less" scoped>
    .blog-comments {
        width: 60%;
        margin-top: 20px;
        text-align: start;
        padding-left: 20px;
        background-color: #eee;
        box-shadow: 3px 4px 5px #889988;

        .blog-comments-msg {
            display: inline-block;
            width: 100%;
            font-weight: bolder;
            padding: 10px 0;
            color: #ff7700;
        }

        .blog-comment {
            padding: 5px;

            span {
                font-size: 16px;
                color: #2d2d2d;
            }

            div {
                font-size: 14px;
            }
        }
    }

</style>