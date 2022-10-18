<template>
    <div class="hello">lu</div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
    name: "HelloWorld",
    async setup() {
        await new Promise((r) => setTimeout(r, 2000));
        const env = "http://localhost:8000";
        const data = ref(null);
        const response = await axios.get(`${env}/posts/1`);
        data.value = response.data;
        return {
            data,
        };
    },
};
</script>

<style scoped></style>
