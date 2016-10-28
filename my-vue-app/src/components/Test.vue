<template>
  <p>Hello, {{name}}. This is test component</p>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style scoped>
* { color: red; }
</style>
