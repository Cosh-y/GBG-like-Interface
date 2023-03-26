<script>
import LayOut from "./LayOut.vue";
import Process from "./Process.vue";
export default {
  components: {
    LayOut,
    Process,
  },
  data() {
    return {
      machineNum: [],
      machineName: [],
    };
  },
  methods: {
      handleData(arr1, arr2) {
          // 处理传递的数据
          console.log("接受数据");
          this.machineName = arr1;
          this.machineNum = arr2;
      },
  }
};
</script>


<template>
    <div>
      <p>Hello!</p>
      <LayOut @data="handleData"></LayOut>
      <Process :machineName="machineName" :machineNum="machineNum"></Process>
    </div>
  </template>
  
 
  