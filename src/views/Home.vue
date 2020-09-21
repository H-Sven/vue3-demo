<template>
  <a-button type="primary" @click="showMessage">Primary</a-button>
</template>
<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  ComponentInternalInstance
  // inject
} from 'vue'
import { message } from 'ant-design-vue'
type Instance = ComponentInternalInstance & { ctx: any };
export default defineComponent({
  setup() {
    // const text = inject('$message')
    const { ctx } = getCurrentInstance() as Instance // 获取上下文，类似原来的this
    const showMessage = () => {
      message.success('路由跳转')
      ctx.$router.push({ path: '/about' })
    }
    return {
      showMessage
    }
  }
})
</script>
