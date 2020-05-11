<template>
    <div class="module-link">
        <div class="link-title">友情链接</div>
        <ul>
            <span><a href="http://blog.yuanjin.tech/">袁老师技术博客</a></span>
            <span><a href="http://47.95.14.227/">原生js版学生管理系统</a></span>
            <span><a href="http://47.95.14.227/vue-manage/">vue+css3版学生管理系统</a></span>
            <span><a href="http://47.95.14.227/bilibili/">vue哔哩哔哩移动端页面</a></span>
            <span><a href="http://47.95.14.227/coolpicture/">炫酷照片魔方</a></span>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ModuleLink"
    }
</script>

<style lang="less" scoped>


    .module-link {
        background-color: #1f1f1f;
        border-radius: 5px;
        padding: 2px 5px;
        overflow: hidden;

        .link-title {
            font-size: 14px;
            color: green;
            background-color: #011;
            width: 100%;
        }

        span {
            padding: 3px 8px;
            box-sizing: border-box;
            width: 50%;
            display: inline-block;

            a {
                color: #f80;
                font-size: 14px;
            }
        }
    }

</style>