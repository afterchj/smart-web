<template>
  <div class="main">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a :href="url" @click.stop.self="click">{{value}}</a>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Main",
  components: {
    HelloWorld,
  },

  data() {
    return {
      url: "https://www.baidu.com",
      value: "baidu",
    };
  },
  methods: {
    click(e) {
      this.$emit("click", {
        title: this.value,
        url: this.url,
      });
      e.stopPropagation();
      return false;
    },
  },
};
</script>