<template>
  <div class="amazing-home" v-wechat-title="this.title">
    <el-button @click="click">I can carry u</el-button>
  </div>
</template>

<script>
export default {
  name: 'AmazingHome',
  data () {
    return {
      title: 'AmazingHome'
    }
  },
  methods: {
    click () {
      this.$router.push({path: '/icancarryu'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
