<template>
    <div class="show-message">
        <div v-for="message in messageInfo" class="show-message-item">
            <div class="user-info">
                <span class="user">{{message.user_name}}:</span>
                <span class="time">{{message.ctime}}</span>
            </div>
            <p class="content">{{message.content}}</p>
        </div>
    </div>
    <!-- /.post-message -->
</template>

<script>
    import {queryAllMessage} from "@/net/request";
    import {getCurrentTime} from "../utils";

    export default {
        name: "GetMessage",
        data() {
            return {
                messageInfo: []
            }
        },
        created() {
            queryAllMessage().then(res => {
                ;
                res.data.forEach(item => {
                    item.ctime = getCurrentTime(item.ctime);
                })
                this.messageInfo = res.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .show-message {
        margin-top: 20px;
        background-color: greenyellow;
        width: 63%;
        padding: 3px 8px;

        .show-message-item {
            margin-top: 5px;
            background-color: #fff;
            box-shadow: 3px 4px 3px #888;
            padding: 3px 8px;

            .user-info {
                display: flex;
                justify-content: space-between;

                .time {
                    color: green;
                    font-size: 14px;
                }

                .user {
                    color: #13102b;
                    font-weight: bolder;
                }
            }

            .content {
                font-size: 15px;
                font-weight: bolder;
                color: #292929;
                text-decoration: underline;

                line-height: 30px;
            }
        }
    }
</style>