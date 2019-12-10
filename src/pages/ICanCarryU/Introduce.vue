<template>
  <div>
    <introduce-doc class="markdown"></introduce-doc>
  </div>
</template>

<script>
import introduceDoc from "../../assets/introduce.md";
export default {
  name: "intro",
  components: {
    introduceDoc
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped>
</style>
