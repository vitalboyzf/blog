<template>
    <div class="send-detail">
        <span id="send-comment-target">发表评论</span>
        <div class="send-user-info">
            <input type="hidden" ref="reply" value="-1">
            <input type="hidden" ref="reply_name" value="0">
            <input type="text" placeholder="昵称" ref="comment-name">
            <input type="text" placeholder="邮箱(评论被回复你能收到通知)" ref="comment-email">
        </div>
        <div class="send-content">
            <textarea ref="comment-content" cols="100" rows="10" placeholder="无意义的内容我可能不会回复你"></textarea>
            <!-- /# -->
        </div>
        <div class="send-code">
            <input type="text" ref="vCode" placeholder="请输入验证码(区分大小写)" id="comment-code">
            <i v-if="svgCode!==''" v-html="svgCode" @click="getRandomCode" />
        </div>
        <button @click="sendComment">提交留言</button>
    </div>
    <!-- /.send-detail -->
</template>

<script>
    import {queryRandomCode, sendComment} from '@/net/request'

    export default {
        name: "sendComment",
        data() {
            return {
                svgCode: "",
                textCode: "",
                replyName: "",
            }
        },
        methods: {
            sendComment() {
                 let bid = location.pathname.match(/\d+/g)[0];
                const content = this.$refs['comment-content'].value;
                const name = this.$refs['comment-name'].value;
                const email = this.$refs['comment-email'].value;
                const vCode = this.$refs['vCode'].value;
                const reply = this.$refs['reply'].value;
                const reply_name = this.replyName;
                // const reply_name = this.$refs['reply_name'].value;
                if (this.validator(email, vCode)) {
                    if (name === "" || content === "") {
                        if (name === "") alert("请输入用户名");
                        if (content === "") alert("请输入评论内容");
                        return;
                    }
                    sendComment(bid, name, email, content, reply, reply_name).then(res => {
                        alert("评论成功");
                        this.$refs['comment-content'].value = "";
                        this.$refs['comment-name'].value = "";
                        this.$refs['comment-email'].value = "";
                        this.$refs['vCode'].value = "";
                        this.replyName = "";
                        this.$forceUpdate();
                    })
                }
            },
            getRandomCode() {
                queryRandomCode().then(res => {
                    // console.log(res.data.data);
                    if (res.status === 'success') {
                        this.svgCode = res.data.data;
                        this.textCode = res.data.text;
                    }
                })
            },
            validator(email, textCode) {
                const ValidatorEmail = /^\w+@[a-z0-9]+\.[a-z]+$/i;
                const ValidatorCode = this.textCode;
                if (!ValidatorEmail.test(email)) {
                    alert('邮箱不合法');
                    return false;
                }
                if (ValidatorCode !== textCode) {
                    alert("验证码错误，请重新验证");
                    this.getRandomCode();
                    return false;
                }
                return true;
            }
        },
        created() {
            this.getRandomCode();
            this.$bus.$on('reply', (reply_name) => {
                this.replyName = reply_name;
                alert("请在评论框输入你要回复的消息吧");
            });
        },
    }
</script>

<style lang="less" scoped>
    .send-detail {
        margin: 30px 10px;
        padding: 10px;
        background-color: #eee;
        box-shadow: 3px 4px 3px #889988;
        width: 95%;

        span {
            display: inline-block;
            width: 100%;
            padding: 10px 0;
            text-align: center;
        }

        i {
            display: inline-block;
            margin-left: 5px;
        }

        .send-user-info {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin: 10px 0;

            input {
                text-align: center;
                width: 45%;
                height: 30px;
            }
        }

        .send-content {
            margin-left: 18px;
            overflow: hidden;

            textarea {
                padding: 10px;
                box-sizing: border-box;
            }
        }

        .send-code {
            margin-left: 18px;
        }

        button {
            margin: 8px 18px;
            width: 80px;
            height: 30px;
        }
    }
</style>