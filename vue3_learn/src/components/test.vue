<template>
  <div class="container">
    <h4>{{ title }}</h4>
    {{ child }}

    <br />
    toChildNumber:{{ toChildNumber }}
    <button @click="() => { toChildNumber++ }">单向数据流:直接修改props的值,只有子组件中的值修改</button>
    <button @click="handlerBtn">单向数据流:通过调用父组件传来的方法修改父组件中的值</button>

  </div>
</template>

<script setup >
import { ref, reactive } from 'vue'
const child = ref(10)


// 调用父组件传来的方法
const emit = defineEmits(['updateChildNumber'])
const props = defineProps({
  title: String,
  toChildNumber: Number
})


const handlerBtn = () => {
  emit("updateChildNumber")
}

// 像 defineExpose 这样的编译器宏不需要导入
defineExpose({
  child
})

</script>

<style scoped></style>
