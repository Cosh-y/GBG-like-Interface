<script>
import { defineComponent } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
export default defineComponent({
  components: { Vue3DraggableResizable },
  props:["balue"],
  data() {
    return {
      cityList: [
        {
          value: 'COM 3',
          label: 'COM 3'
        },
        {
          value: 'COM 4',
          label: 'COM 4'
        },
        {
          value: 'COM 5',
          label: 'COM 5'
        },
        {
          value: 'COM 6',
          label: 'COM 6'
        },
        {
          value: 'COM 7',
          label: 'COM 7'
        },
        {
          value: 'COM 8',
          label: 'COM 8'
        }
      ],
      model: '',
      modal:true,
      Value:false,
      value:false,
      x1: -620,
      y1: 70,
      h1: 120,
      w1: 120,
      x2: -520,
      y2: 70,
      h2: 120,
      w2: 120,
      x3: -420,
      y3: 70,
      h3: 120,
      w3: 120,
      x4: -320,
      y4: 70,
      h4: 120,
      w4: 120,
      x5: -320,
      y5: 220,
      h5: 120,
      w5: 120,
      x6: -420,
      y6: 220,
      h6: 120,
      w6: 120,
      x7: -520,
      y7: 220,
      h7: 120,
      w7: 120,
      x8: -620,
      y8: 220,
      h8: 120,
      w8: 120,
      x9: -620,
      y9: 370,
      h9: 120,
      w9: 120,
      x10: -520,
      y10: 370,
      h10: 120,
      w10: 120,
      x11: -420,
      y11: 370,
      h11: 120,
      w11: 120,
      x12: -320,
      y12: 370,
      h12: 120,
      w12: 120,
      active: false,
      fit: "FUCK",
      fitList: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://file.iviewui.com/images/image-demo-11.jpg'
    }
  },
  methods: {
    print(val) {
      console.log(val)
    },
    cal() {
        if ( this.x9 > 0 && this.y9 > 0) {
            return 1;
        } else {
            return 0;
        }
    },
    ValueChange() {
        console.log(this.balue)
        if(this.balue == 1) {
          this.Value = true;
        } else {
          this.Value = false;
        }
    },
    resetArmer() {
      this.x1= -620,
      this.y1= 70,
      this.x2= -520,
      this.y2= 70,
      this.x3= -420,
      this.y3= 70,
      this.x4= -320,
      this.y4= 70,
      this.x5= -320,
      this.y5= 220,
      this.x6= -420,
      this.y6= 220,
      this.x7= -520,
      this.y7= 220,
      this.x8= -620,
      this.y8= 220,
      this.x9= -620,
      this.y9= 370,
      this.x10= -520,
      this.y10= 370,
      this.x11= -420,
      this.y11= 370,
      this.x12= -320,
      this.y12= 370
    }
  }
})
</script>


<template>
      <Vue3DraggableResizable
        :initW="100"
        :initH="100"
        v-model:x="x9"
        v-model:y="y9"
        v-model:w="w9"
        v-model:h="h9"
        v-model:active="active"
        :draggable="true"
        :resizable="true"
        @click="ValueChange"
        >
        <Image src="https://s1.ax1x.com/2023/03/18/ppJjWlt.png" fit="contain" width="100px" height="100px" alt="cover" />
        <Paragraph class="ivu-text-center" type="danger">美谷分子仪</Paragraph>
      </Vue3DraggableResizable>
      <Drawer title="设备介绍" :closable="false" v-model="Value">
        <Space>
          <Switch v-model="value" @on-change="change" />
          <h3>是否启用</h3>
        </Space>
        <Paragraph></Paragraph>
        <h3>COM:</h3>
        <Select v-model="model" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Drawer>
</template>