<template>
    <div class="module-label">
        <div class="auto-title">随机标签云</div>
        <div class="getAll" style="color:#f60"
             @click="$bus.$emit('getAllPage')">获取所有文章</div>
        <a @click.prevent="$bus.$emit('updatePage',tag.id)" :style="{
                color:getRandomColor(),
                fontSize:getRandomSize(),
                padding:'5px'
            }" v-for="tag in tags" :key="tag.id" href="/">{{tag.tag}}</a>
    </div>
</template>

<script>
    import {queryAllTags} from "@/net/request";

    export default {
        name: "module-label",
        data() {
            return {
                tags: ''
            }
        },
        methods: {
            getRandomColor() {
                const red = Math.floor(Math.random() * 255);
                const green = Math.floor(Math.random() * 255);
                const blue = Math.floor(Math.random() * 255);
                return `rgb(${red},${green},${blue})`
            },
            getRandomSize() {
                return Math.random() * 15 + 15 + "px"
            }
        },
        created() {
            queryAllTags().then(res => {
                this.tags = res.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    @keyframes changeColor {
        from {
            font-size: 15px;
            color: #666;
        }
        50% {
            font-size: 18px;
            color: #0f0;
        }
        75% {
            font-size: 21px;
            color: #f00;
        }
        100% {
            font-size: 25px;
            color: #00f;
        }
    }

    .getAll {
        height: 30px;
        animation: changeColor 2s ease-in-out infinite alternate;
    }

    .module-label {
        padding: 0px 15px 10px 15px;
        background-color: #1f1f1f;
        border-radius: 10px;
        margin-bottom: 20px;

        .auto-title {
            padding: 15px 15px 15px 0;
            color: dodgerblue;
        }

        a {
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            margin-right: 5px;
        }
    }
</style>