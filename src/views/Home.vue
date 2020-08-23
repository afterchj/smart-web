<template>
  <div class="home">
    <p v-if="seen">现在你看到我了</p>
    <h1>This is an home page</h1>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  }
}
</script>
<style scoped>
#app-4 {
  margin: 10px auto;
  width: 300px;
  height: 200px;
  border: 1px solid grey;
}
</style>
