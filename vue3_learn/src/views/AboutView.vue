<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>使用pinia</h4>
    <br />
    countStore.name: {{ countStore.name }}


    <button @click="countStore.changeName">修改名称</button>
    <br />
    age:{{ countStore.age }}
    doubleAge:{{ countStore.doubleAge }}
    <button @click="countStore.changeAge">修改年龄</button>


  </div>
</template>


<script setup>
import useCountStore from "@/store/count";
const countStore = useCountStore()
console.log('countStore: ', countStore);


</script>
