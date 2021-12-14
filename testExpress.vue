<template>
  <div>
    <button @click="testExpress">express</button>
    <button @click="getCustomer">getCustomer</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TestEchartsTestexpress",

  data() {
    return {};
  },

  mounted() {
    //在导入数据后需要对数据进行slaveId排序，然后对slotId排序
    const sloteDate = [
      {
        slaveId: 2,
        name: "mao",
        slotId: 4,
      },
      {
        slaveId: 3,
        name: "maomin",
        slotId: 1,
      },
      {
        slaveId: 2,
        name: "min",
        slotId: null,
      },
      {
        slaveId: 2,
        name: "eeee",
        slotId: 1,
      },
      {
        slaveId: 3,
        name: "maomin",
        slotId: null,
      },
      {
        slaveId: 6,
        name: "ma111o",
        slotId: 1,
      },
    ];

    const setArray = sloteDate.reduce((pre, cur) => {
      if (!pre.includes(cur.slaveId)) {
        pre.push(cur.slaveId);
      }
      return pre;
    }, []);
    // const slotNum = 1;
    console.log("setArray: ", setArray);

    // 3.排序
    sloteDate.sort((a, b) => {
      return a.slaveId - b.slaveId;
    });

    console.log("sloteDate: ", sloteDate);

    const res = setArray
      .sort((a, b) => {
        return a.slaveId - b.slaveId;
      })
      .reduce((pre, cur) => {
        const shan = sloteDate
          .filter((item) => item.slaveId === cur)
          .sort((a, b) => {
            return a.slotId - b.slotId;
          });
        return pre.concat(shan);
      }, []);
    sloteDate = [...res];

    // 2.感觉不需要进行分组；

    // setArray.forEach((item) => {
    //   const filterArray = sloteDate.filter(
    //     (slotItem) => slotItem.slaveId === item
    //   );

    // 1.新点位数小于旧点位数，进行删除数据；
    //   if (filterArray.length > slotNum) {
    //     for (let i = filterArray.length - 1; i >= slotNum; i--) {
    //       let index = sloteDate.findIndex((slotItem) =>slotItem.name === filterArray[i].name);
    //       sloteDate.splice(index, 1);
    //     }
    //   }
    // });

    // console.log('sloteDate: ', sloteDate);
  },

  methods: {
    findIndex() {},
    testExpress() {
      console.log("testExpress: ");
      axios.get("http://localhost:8080/getWord").then((res) => {
        console.log(res);
      });
    },
    getCustomer() {
      console.log("getCustomer: ");
      axios.get("http://localhost:8080/getCustomers").then((res) => {
        console.log("res: ", res);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
