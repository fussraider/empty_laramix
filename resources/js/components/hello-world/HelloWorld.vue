<template>
    <div class="hello-world">
        <h1>Hello World!</h1>
        <div class="text">
            It's Works!
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld"
    }
</script>

<style scoped lang="scss">

    .hello-world {
        position: absolute;
        top: 40%;
        left: 20%;

        h1 {
            text-align: left;
            font-size: 48px;
            color: #fff;
            font-weight: normal;
            margin: 0;
            line-height: 24px;
        }

        .text {
            text-align: right;
            font-size: 16px;
            color: #fff;
            line-height: 24px;
            padding-right: 3px;
        }
    }
</style>