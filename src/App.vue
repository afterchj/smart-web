<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Main">Main</router-link>|
      <router-link to="/home">Home</router-link>|
      <!-- <router-link to="/about?id=1">About</router-link> -->
      <router-link :to="{ name: 'About', query: { id: this.resData.id } }"
        >点击按钮</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tid: { id: 1 },
      resData: {},
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    add() {
      this.resData = { id: 1 };
      return this.resData;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
