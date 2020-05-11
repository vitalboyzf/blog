<template>
    <div class="module-hot">
        <div class="hot-title">最近热门</div>
        <ul>
            <li v-for="(title,index) in titleList" :key="index">
                <a @click="changePage(title.id)">{{title.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {queryHotByViews} from "../../../../net/request";

    export default {
        name: "module-hot",
        data() {
            return {
                titleList: []
            }
        },
         update:false,
        methods: {
            changePage(id) {
                this.$router.push('/article/' + id);
                this.update = Math.random()*10;
            }
        },
        created() {
            queryHotByViews().then(res => {
                this.titleList = res.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .module-hot {
        padding: 0px 15px 10px 15px;
        background-color: #1f1f1f;
        border-radius: 10px;
        margin-bottom: 20px;

        .hot-title {
            padding: 15px 15px 15px 0;
            color: dodgerblue;
        }

        li {
            padding: 8px 0px;
            border-bottom: 1px solid #292929;

            a {
                font-size: 14px;
                color: #fff;
            }
        }
    }
</style>