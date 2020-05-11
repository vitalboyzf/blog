<template>
    <div class="post-message">
        <span>留言板</span>
        <div class="post-info">
            <div>
                <input ref="name" placeholder="请输入您的大名" type="text">
            </div>
            <textarea ref="content" placeholder="来点建议吧^^^" name="" id="" cols="70" rows="10"></textarea>
            <div>
                <button @click="sendContent">发表留言</button>
            </div>
            <!-- /# -->
        </div>
        <!-- /.post-info -->
    </div>
    <!-- /.postMessage -->
</template>

<script>
    import {insertMessage} from "@/net/request";

    export default {
        name: "PostMessage",
        methods: {
            sendContent() {
                const name = this.$refs['name'].value;
                const content = this.$refs['content'].value;
                insertMessage(name, content).then(res => {
                    if (res.status === 'success') alert("评论成功");
                    this.$refs['name'].value = "";
                    this.$refs['content'].value = "";
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .post-message {
        margin-top: 120px;
        background-color: #eee;
        box-shadow: 3px 4px 3px #888;
        width: 63%;
        padding: 3px 8px;

        > span {
            width: 100%;
            margin-top: 10px;
            color: #2d2d2d;
            font-weight: bolder;
            display: inline-block;
            text-align: center;
        }

        div {
            margin: 10px 0;
        }

        textarea {
            padding: 10px;
            box-sizing: border-box;
        }
    }
</style>