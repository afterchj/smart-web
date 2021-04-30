<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="测试组件复用。" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "About",
  components: {
    HelloWorld,
  },
  beforeRouteEnter(to, from, next) {
    console.log("from", from.path, "to", to.path);
    next();
  },
};
</script>
