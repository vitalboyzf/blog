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
         .prettyprint.linenums.prettyprinted{
          background-color: #2d2d2d;
            color:#f70;
             padding:10px;
             .pln{
                 color:#f40;
             }
             .pun{
                 color:#ff9900;
             }
             .com{
                 color:#cccccc;
             }
             .str{
                 color:#f90;
             }
             .num{
                 color:yellow;
             }
             .kwd{
                 color:#00ff00;
             }
        }
    }
</style>
