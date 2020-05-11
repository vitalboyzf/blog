<template>
    <div id="app">
        <left-main />
        <right-content />
    </div>
</template>

<script>
    import LeftMain from "./views/LeftMain";
    import RightContent from "./views/RightContent";

    export default {
        components: {
            LeftMain,
            RightContent
        }
    }
</script>
<style lang="less">
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
    }

    :root {
        user-select: none;
        height: 100%;
        overflow: hidden;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100%;

        #app {
            height: 100%;
        }
    }
</style>
