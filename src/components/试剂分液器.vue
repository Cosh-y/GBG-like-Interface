<script>
import { defineComponent } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
export default defineComponent({
  components: { Vue3DraggableResizable },
  data() {
    return {
      modal:true,
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
        if ( this.x6 > 0 && this.y6 > 0) {
            return 1;
        } else {
            return 0;
        }
    }
  }
})
</script>


<template>
      <Vue3DraggableResizable
        :initW="100"
        :initH="100"
        v-model:x="x6"
        v-model:y="y6"
        v-model:w="w6"
        v-model:h="h6"
        v-model:active="active"
        :draggable="true"
        :resizable="true"
        >
        <Image src="https://s1.ax1x.com/2023/03/18/ppJXUr8.png" fit="contain" width="100px" height="100px" alt="cover" />
        <Paragraph class="ivu-text-center" type="danger">试剂分液器</Paragraph>
      </Vue3DraggableResizable>
</template>