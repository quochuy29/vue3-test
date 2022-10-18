<template>
  <router-link to="/haha">home</router-link>

  <router-view v-slot="{ Component }">
    <suspense timeout="0">
      <template #default>
        <component :is="Component" />
      </template>
      <template #fallback> 
        <div class="load">
          <img src="./gif/dance.gif" alt=""></div>
      </template>
    </suspense>
  </router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="less">
.load {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  img {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
</style>
