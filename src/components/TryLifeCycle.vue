<template>
  <h1>try lifecycle</h1>
</template>

<script>
export default {
  beforeUnmount() {
    console.log('beforeUnmount')
  }, unmounted() {
    console.log('unmounted')
  }
}
</script>