<template>
    <Modal
      v-model="modal"
      title="规划设备阶段">
      <li>请拖动需要排程的设备至右边设备框中</li>
      <li>每种设备数量不限，但请合理规划！</li>
      <li>为节约计算资源，默认为总设备数为36</li>
      <li>拖动完毕后点击Process进行排程规划</li>
      <Paragraph type="danger">对于参数选择，默认为无参模式，有参模式下，每一次拖动均要求您设置对象参数，以便后续步骤规划使用！</Paragraph>
    </Modal>
    <!-- <Steps :current="1" direction="vertical">
        <Step title="已完成" content=""></Step>
        <Step title="进行中" content=""></Step>
        <Step title="待进行" content=""></Step>
        <Step title="待进行" content=""></Step>
    </Steps> -->
    <div id="building"></div>
    <div id="myshape">
    <div class="parent">
      <DraggableContainer>
        <!--垃圾处理-->
        <Trash ref = "ah" :balue="model"></Trash>
        <Trash ref = "ai" :balue="model"></Trash>
        <Trash ref = "aj" :balue="model"></Trash>
        <!--极小型数字条码读取器-->
        <Digital ref = "ae"></Digital>
        <Digital ref = "af"></Digital>
        <Digital ref = "ag"></Digital>
        <!--生物板巢-->
        <BioCest ref = "ab"></BioCest>
        <BioCest ref = "ac"></BioCest>
        <BioCest ref = "ad"></BioCest>
        <!--美谷分子仪-->
        <molecule ref = "y"></molecule>
        <molecule ref = "z"></molecule>
        <molecule ref = "aa"></molecule>
        <!--微孔热封膜机-->
        <SmallMac ref = "v"></SmallMac>
        <SmallMac ref = "w"></SmallMac>
        <SmallMac ref = "x"></SmallMac>
        <!--自动除板密封机-->
        <AutoMiss ref = "s"></AutoMiss>
        <AutoMiss ref = "t"></AutoMiss>
        <AutoMiss ref = "u"></AutoMiss>
        <!--试剂分液器-->
        <reagent ref = "p"></reagent>
        <reagent ref = "q"></reagent>
        <reagent ref = "r"></reagent>
        <!--ATS-100-->
        <ATS ref = "m"></ATS>
        <ATS ref = "n"></ATS>
        <ATS ref = "o"></ATS>
        <!--全自动液体工作站-->
        <fliud ref = "j"></fliud>
        <fliud ref = "k"></fliud>
        <fliud ref = "l"></fliud>
        <!--通用孔板存储-->
        <CommonStore ref = "g"></CommonStore>
        <CommonStore ref = "h"></CommonStore>
        <CommonStore ref = "i"></CommonStore>
        <!--LiCONic存储-->
        <LiCoNic ref = "d"></LiCoNic>
        <LiCoNic ref = "e"></LiCoNic>
        <LiCoNic ref = "f"></LiCoNic>
        <!--机械手 3个-->
        <arm ref = "a"></arm>
        <arm ref = "b"></arm>
        <arm ref = "c"></arm>
      </DraggableContainer>
      <Button @click="Cal()" type="primary" size="large">计算当前设备数量</Button>
      <h2>当前已用设备池中设备数量:<Text type="danger">{{ Count }}</Text></h2>
    </div>
  </div>
  <div class="StyleOne">
    <card>
      <div style="min-height: 500px;">
        <Typography>
          <Title :level="2">可用设备：
          <Button @click="Value = true" type="primary" size="large">设备介绍</Button>
          <Select v-model="model" style="width:200px" placement="top" placeholder="请选择参数模式">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Drawer title="设备介绍" :closable="false" v-model="Value">
            <Typography>
              <Title :level="2">机械臂</Title>
              <Paragraph>
                负责在实验室中在设备之间搬运工件，<Text strong>为单板设备</Text>
              </Paragraph>
              <Title :level="2">LiCONic存储</Title>
              <Paragraph>
                由LiCONiC制造的全自动化培养箱，LiCONiC公司现已经停业，但其设备仍然以其优秀被业界采用。<Text strong>为多板设备</Text>
              </Paragraph>
              <Title :level="2">通用孔板存储</Title>
              <Paragraph>
                针对于孔板特殊设计的孔板存储器<Text strong>为多板设备</Text>
              </Paragraph>
              <Title :level="2">全自动液体工作站</Title>
              <Paragraph>
                实验室核心设备之一，可以在其上进行液体之间的多种操作，造价昂贵<Text strong>为多板设备</Text>
              </Paragraph>
              <Title :level="2">微孔热封膜机</Title>
              <Paragraph>
                防止各种微孔板（PCR板、深孔贮存板、酶标板以及细胞培养板）在检测过程中的蒸发、泄漏引起的样品损失及空间交叉污染的封膜仪器。<Text strong>为单板设备</Text>
              </Paragraph>
              <Title :level="2">自动除板密封机</Title>
              <Paragraph>
                和前面的设备类似，更为精细，消除板盖的需要，从而提高了样品的完整性<Text strong>为单板设备</Text>
              </Paragraph>
              <Title :level="2">试剂分液器</Title>
              <Paragraph>
                顾名思义，进行分液。该分液器具备出色的灵活性和优异的分液性能，且易于使用，满足药物研发和生物技术实验室的各种分液需求。它结合了最灵活的分液方式和最优异的分液性能，用于药物研发和基因组、蛋白质组学的研究。<Text strong>为单板设备</Text>
              </Paragraph>
              <Title :level="2">极小型数字条码读取器</Title>
              <Paragraph>
                每秒扫描 1300 次同时兼备准确解码速率,且引用全新数字处理技术能读取质量很低的条码<Text strong>为单板设备</Text>
              </Paragraph>
            </Typography>
          </Drawer>
          </Title>
        </Typography>
      </div>
    </card>
    <Button @click="Cal()" type="primary" size="large">计算剩余设备数量</Button>
      <h2>当前可用设备池中设备数量:<Text type="danger">{{ 36-Count }}</Text></h2>
  </div>
  
</template>

<script>
import Trash from '../components/垃圾处理.vue'
import Digital from '../components/极小型数字条码读取器.vue'
import BioCest from '../components/生物板巢.vue'
import molecule from '../components/美谷分子仪.vue'
import SmallMac from '../components/微孔热封膜机.vue'
import AutoMiss from '../components/自动除板密封机.vue'
import reagent from '../components/试剂分液器.vue'
import ATS from '../components/ATS-100.vue'
import fliud from '../components/全自动液体工作站.vue'
import arm from '../components/机械手.vue'
import LiCoNic from '../components/LiCONic存储.vue'
import CommonStore from '../components/通用孔板存储.vue'
import { defineComponent, toHandlers } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
export default defineComponent({
  components: { Vue3DraggableResizable,arm,LiCoNic,CommonStore,fliud,ATS,reagent,AutoMiss,SmallMac,molecule,BioCest,Digital,Trash },
  data() {
    return {
      cityList: [
                    {
                        value: 1,
                        label: '有参模式'
                    },
                    {
                        value: 0,
                        label: '无参模式'
                    },
                ],
      model: '',
      Count:0,
      Value:false,
      modal:true,
      active: false,
      fit: "FUCK",
      fitList: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://file.iviewui.com/images/image-demo-11.jpg'
    }
  },
  methods: {
    Cal() {
      this.Count = 0;
      this.Count += this.$refs.a.cal();
      this.Count += this.$refs.b.cal();
      this.Count += this.$refs.c.cal();
      this.Count += this.$refs.d.cal();
      this.Count += this.$refs.e.cal();
      this.Count += this.$refs.f.cal();
      this.Count += this.$refs.g.cal();
      this.Count += this.$refs.h.cal();
      this.Count += this.$refs.i.cal();
      this.Count += this.$refs.j.cal();
      this.Count += this.$refs.k.cal();
      this.Count += this.$refs.l.cal();
      this.Count += this.$refs.m.cal();
      this.Count += this.$refs.n.cal();
      this.Count += this.$refs.o.cal();
      this.Count += this.$refs.p.cal();
      this.Count += this.$refs.q.cal();
      this.Count += this.$refs.r.cal();
      this.Count += this.$refs.s.cal();
      this.Count += this.$refs.t.cal();
      this.Count += this.$refs.u.cal();
      this.Count += this.$refs.v.cal();
      this.Count += this.$refs.w.cal();
      this.Count += this.$refs.x.cal();
      this.Count += this.$refs.y.cal();
      this.Count += this.$refs.z.cal();
      this.Count += this.$refs.aa.cal();
      this.Count += this.$refs.ab.cal();
      this.Count += this.$refs.ac.cal();
      this.Count += this.$refs.ad.cal();
      this.Count += this.$refs.ae.cal();
      this.Count += this.$refs.af.cal();
      this.Count += this.$refs.ag.cal();
      this.Count += this.$refs.ah.cal();
      this.Count += this.$refs.ai.cal();
      this.Count += this.$refs.aj.cal();
      this.$Notice.success({
        title: '计算成功',
        desc: false ? '' : '现在允许你进行下一步Process'
      });
    },
  }
})
</script>

<style>
#building{
background:url("https://s1.ax1x.com/2023/03/18/ppJs891.jpg");
width:100%;
height:100%;
position:fixed;
background-size:100% 100%;
opacity: 0.5;
z-index: 0;
}
.parent {
  width: 700px;
  height: 531px;
  position: fixed;
  top: 130px;
  left: 750px;
  border: 0px solid rgb(0, 0, 0);
  user-select: none;
  z-index: 100;
  background:url("https://s1.ax1x.com/2023/03/19/ppY84Tf.jpg");
  background-size:100% 100%;
}
.StyleOne{
background:url("https://s1.ax1x.com/2023/03/18/ppJs891.jpg");
z-index: 10;
top: 130px;
left: 100px;
width: 500px;
height: 200px;
position: fixed;
}
</style>