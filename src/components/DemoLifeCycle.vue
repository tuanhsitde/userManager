<template>
  <h1>demo lifecycle component</h1>
  <input ref="myInput" type="text">
  <p>{{counter}}</p>
  <button @click="handleIncrement">Update</button>
  <try-life-cycle v-if="counter%2===0"></try-life-cycle>
</template>

<script>
import TryLifeCycle from './TryLifeCycle.vue'
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods : {
    handleIncrement () {
      this.counter = this.counter + 1
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this.counter)
  }, created() {
    console.log('created', this.counter)
    this.counter=5;
  }, beforeMount() {
    console.log('beforeMount', this.$refs.myInput)
  }, mounted() {
    console.log('mounted', this.$refs.myInput)
  }, beforeUpdate() {
    console.log('beforeUpdate')
  }, updated() {
    console.log('updated')
  }, components : {
    TryLifeCycle,
  }

}
</script>