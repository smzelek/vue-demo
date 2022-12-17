<template>
  <div class="about">
    <h1>This is a page that loads data</h1>
    <div v-for="p in post" :key="p.id">
      <h2>{{ p.id }} - {{ p.title }}</h2>
      <p>{{ p.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: []
    }
  },
  methods: {
    getPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(data => this.post = data)
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>

<style scoped>

</style>
