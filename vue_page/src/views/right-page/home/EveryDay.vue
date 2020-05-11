<template>
    <div class="every-day">
        <span>每日一句</span>
        <i class="iconfont icon-xiaolaba" />
        <p v-html="getContent"/>
    </div>
</template>

<script>
    import {getQueryEveryDay} from '@/net/request';
    export default {
        name: "EveryDay",
        data() {
            return {
                content: "",
                author: "virtual"
            }
        },
        computed: {
            getContent() {
                return this.content;
            }
        },
        created() {
            getQueryEveryDay().then(res=>{
               this.content = res.content;
            })
        }
    }
</script>

<style lang="less" scoped>
    .every-day {
        color: green;
        background-color: #fff;
        width: 50%;
        border-radius: 5px;
        box-shadow: 3px 4px 3px #888888;
        text-align: left;
        padding: 5px 15px;

        span {
            i {
                font-family: laba;
            }
        }

        p {
            font-size: 15px;
            margin: 8px 0 0 0;
        }

        .author {
            text-align: right;
        }

    }
</style>