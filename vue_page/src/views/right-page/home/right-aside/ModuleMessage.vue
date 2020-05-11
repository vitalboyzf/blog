<template>
    <div class="module-comment">
        <div class="comment-title">最新留言</div>
        <ul>
            <li v-for="(comment,index) in commentList" :key="index">
                <div class="user">
                    <span>{{comment['user_name']}}</span>
                    <span>{{comment['ctime']}}</span>
                </div>
                <p>{{comment.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {queryNewMessage} from "@/net/request";
    import {getCurrentTime} from "../../utils";

    export default {
        name: "module-comment",
        data() {
            return {
                commentList: []
            }
        },
        created() {
            queryNewMessage().then(res => {
                 res.data.forEach(item=>{
                     item.ctime = getCurrentTime(item.ctime);
                 })
                this.commentList = res.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .module-comment {
        /*padding: 0px 15px 10px 15px;*/
        background-color: #1f1f1f;
        border-radius: 10px;
        margin-bottom: 20px;

        .comment-title {
            font-size: 14px;
            background-color: #111;
            padding: 2px 5px;
            border-radius: 5px;
            color: green;
            margin-bottom: 10px;
        }

        .user {
            display: flex;
            justify-content: space-between;
            padding: 0 15px 1px 15px;

            span {
                font-size: 14px;
                color: #fff;
            }
        }

        p {
            font-size: 15px;
            padding: 0 15px 5px 15px;
            color: #888888;
        }
    }
</style>