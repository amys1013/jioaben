/**
 * 这种使用更适合面向对象的方式，感觉，而且内部应该是做了单例模式的处理的。就跟类的设计一样。
 * 【选项式API】
 *
 */

// 1.引入函数  defineStore(唯一标识，配置对象)【返回的仍然是一个函数】
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 【1.选项式 - 结构会相对清楚，而且不用写return】
// 函数来创建一个store，返回钩子函数（其他组件的变量勾到当前这里，返回一个对象）
const useCountStore = defineStore("count", {
	state: () => ({
		// 2.state是一个函数，维护的数据以对象的形式进行返回，默认会包裹成响应式？
		name: "孙悟空",
		age: 18,
		info: {
			address: "花果山，水帘洞",
		},
	}),
	// 类似于computed计算属性
	getters: {
		doubleAge() {// 也可以传入state参数
			return this.age * 2;
		},
	},

	actions: {
		changeName() {
			this.name = this.name + "-";
		},
		changeAge() {
			this.age++;
		},
	},
});

//【2.组合式】
const useCountComposition = defineStore("countComposition", () => {
	let name = ref("孙悟空");
	let age = ref(10);

	let doubleAge = computed(() => age.value * 2);
	const changeName = () => {
		name = name.value + "-";
	};
	const changeAge = () => {
		age.value++;
	};
	return {
		name,
		age,
		doubleAge,
		changeName,
		changeAge,
	};
});

export default useCountComposition;
