<template>
    <div class="right-content">
            <router-view />
    </div>
    <!-- /.right-content -->
</template>

<script>
    export default {
        name: "RightContent"
    }
</script>

<style scoped>
    .right-content {
        overflow: scroll;
        width: calc(100% - 200px);
        background-color: #ddd;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        padding: 10px 10px;
        box-sizing: border-box;
    }
</style>