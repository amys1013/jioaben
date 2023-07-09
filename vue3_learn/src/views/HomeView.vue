<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    1.定义响应式数据 obj.name:{{ obj.name }}
    <button @click="() => { obj.name = obj.name + '-' }">修改name</button>
    <br />

    number:{{ number }}
    <button @click="() => { number = number + 1 }">修改number</button>
    <br>

    2.计算属性 complexValue:{{ complexValue }}
    <br />
    <button @click="addChild">修改子组件的值</button>
    toChildNumber:{{ toChildNumber }}

    <br />
    countStore.name: {{ countStore.name }}


    <div>-----------------</div>

    <test ref="childRef" title="childComponent" :toChildNumber="toChildNumber" @update-child-number="updateChildNumber">
    </test>


  </div>
</template>
<script setup>
// @ is an alias to /src
import { ref, reactive, computed, watch, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, watchEffect } from 'vue';
import { onMounted } from 'vue';
import test from "@/components/test.vue"
import useCountStore from "@/store/count";
const countStore = useCountStore()


const childRef = ref(null)
let toChildNumber = ref(100)

const addChild = () => {
  childRef.value.child++
}

// 父组件传递给子组件修改父组件中数据的方法
const updateChildNumber = () => {
  toChildNumber.value++
}
onBeforeMount(() => {
  console.log("onBeforeMount");
})
onMounted(() => {
  console.log("onMounted");
  console.log('childRef.value: ', childRef.value.child);
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
})

onUpdated(() => {
  console.log("onUpdated");
})

onUnmounted(() => {
  console.log("onUnmounted");

})

const obj = reactive({
  name: "mao"
})
const number = ref(1);

//使用计算属性来描述依赖响应式状态的复杂逻辑
const complexValue = computed(() => { return obj.name + ':' + number.value })


// 监听一个ref
watch(number, (newValue) => {
  console.log('newValue: ', newValue);
})

// 监听一个proxy对象
watch(obj, (newValue) => {
  console.log('newValue111: ', newValue);
})

// 监听一个reactive的具体属性
watch(() => obj.name, (newValue) => {
  console.log('newValue: ', newValue);
})

// 多个来源组成的数组
watch([number, () => obj.name], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

watchEffect(() => {
  if (number.value > 1) {
    console.log("大于1了");
  }
})




</script>

<style scoped></style>
