<template>
    <div class="name">{{post.title}}</div>
    <div class="author">{{post.author}}</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'page-home',
    data() {
        return {
            post: {}
        }
    },
    mounted() {
        this.exec();
    },
    methods: {
        async exec() {
            const response = await axios.get(`${this.env}/posts/1`);
            this.post = response.data;
        }
    }
}
</script>

<style lang="less" scoped>

</style>