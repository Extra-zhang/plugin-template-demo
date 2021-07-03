<template>
  <div class="nj-plugin">{{ title }}</div>
</template>
<script>
// import Vue from 'vue'
export default {
  name: 'vnjPaun',
  data () {
    return {
      title: 'demo + hello + word'
    }
  }
}
</script>
<style lang="css" scoped>
.nj-plugin {
  font-size: 32px;
  color: red;
}
</style>