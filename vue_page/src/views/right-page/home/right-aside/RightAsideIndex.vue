<template>
    <div class="container">
        <module-label/>
        <module-hot/>
        <module-comment/>
        <module-link/>
    </div>
</template>

<script>
    import ModuleLabel from "./ModuleLabel";
    import ModuleHot from "./ModuleHot";
    import ModuleComment from "./ModuleMessage";
    import ModuleLink from "./ModuleLink";

    export default {
        components: {
            ModuleLabel,
            ModuleHot,
            ModuleComment,
            ModuleLink
        }
    }
</script>

<style lang="less" scoped>
    .container {
        width: 27%;
        height: 100%;
        text-align: left;
        position: absolute;
        right: 10px;
        top: 10px;
    }


</style>