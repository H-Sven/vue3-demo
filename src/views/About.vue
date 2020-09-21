<template>
  <div ref="about" class="about">
    <h1 v-if="unmounted" @click="addNum">This is an about page{{ num }}</h1>
    <div v-for="(item, index) in list" :key="index">{{ item }}</div>
  </div>
</template>
<script>
import { ref, reactive, defineComponent, onMounted, onUnmounted } from 'vue'
export default defineComponent({
  setup() {
    const list = reactive([1, 2, 3])
    const num = ref(1)
    const unmounted = ref(true)
    const about = ref(null)
    onUnmounted(() => {
      console.log('组件卸载')
    })
    onMounted(() => {
      console.log(num)
      console.log(about.value)
    })
    const addNum = () => {
      num.value += 1
    }
    return {
      list,
      num,
      about,
      unmounted,
      addNum
    }
  }
})
</script>
