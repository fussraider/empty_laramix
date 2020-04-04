<template>
    <div>
        <hello-world></hello-world>
    </div>
</template>

<script>
    import store from "./store";
    import HelloWorld from "../hello-world/HelloWorld";

    export default {
        name: "App",
        components: {HelloWorld},
        data() {
            return {
                namespace: 'app',
            }
        },

        computed: {
            state() {
                return this.$store.state[this.namespace];
            }
        },

        created() {
            this.$store.registerModule(this.namespace, store)
        },

        beforeDestroy() {
            this.$store.unregisterModule(this.namespace);
        }
    }
</script>

<style scoped>

</style>