<template>
    <Row style="padding: 20px;">
        <Col span="4" offset="0">
          <p>
              请选择当前工作流程:

              <Select v-model="model" style="width:200px" @on-change="progressChoiceOn">
                  <Option v-for="item in progressData" :value="item.name" :key="item.name">{{ item.label }}</Option>
              </Select>
          </p>
        </Col>
        <Col span="11">
            <Card style="width:400px;">
                <p :gutter="100">
                    当前流程选项：
                    <Space wrap>
                        <Button type="primary" shape="circle" icon="md-add" @click="addProgress">Add</Button>
                        <Button type="primary" shape="circle" icon="md-close" @click="delProgress">Close</Button>
                        <Button type="primary" shape="circle" icon="md-build" @click="saveProgress">Build</Button>
                    </Space>
                </p>
            </Card>
        </Col>
    </Row>

    <Row :gutter="16">
        <Col span="5" id="device-col">
            <Collapse v-model="value" accordion>
                <Panel name="Plate Storage">
                    Plate Storage
                    <template #content>
                        <draggable
                            class="dragArea list-group"
                            :list="OperationUPS"
                            :group="{ name: 'device', pull: 'clone', put: false }"
                            @change="log"
                            item-key="function"
                            :sort="false"
                        >
                            <template #item="{ element }">
                                <div class="list-group-item">
                                    <p><img :src="element.picurl" class="img-device" /></p>
                                    {{ element.function }}
                                </div>
                            </template>
                      </draggable>
                    </template>
                </Panel>
                <Panel name="LiCONiC">
                    LiCONiC
                    <template #content>
                        <draggable
                            class="dragArea list-group"
                            :list="OperationLiCONiC"
                            :group="{ name: 'device', pull: 'clone', put: false }"
                            @change="log"
                            item-key="function"
                            :sort="false"
                        >
                            <template #item="{ element }">
                                <div class="list-group-item">
                                    <p><img :src="element.picurl" class="img-device" /></p>
                                    {{ element.function }}
                                </div>
                            </template>
                      </draggable>
                    </template>
                </Panel>
                <Panel name="Biomek">
                    Biomek
                    <template #content>
                        <draggable
                            class="dragArea list-group"
                            :list="OperationBiomek"
                            :group="{ name: 'device', pull: 'clone', put: false }"
                            @change="log"
                            item-key="function"
                            :sort="false"
                        >
                            <template #item="{ element }">
                                <div class="list-group-item">
                                    <p><img :src="element.picurl" class="img-device" /></p>
                                    {{ element.function }}
                                </div>
                            </template>
                      </draggable>
                    </template>
                </Panel>
                <Panel name="EDC">
                    EDC ATS-100
                    <template #content>
                        <draggable
                            class="dragArea list-group"
                            :list="OperationEDC"
                            :group="{ name: 'device', pull: 'clone', put: false }"
                            @change="log"
                            item-key="function"
                            :sort="false"
                        >
                            <template #item="{ element }">
                                <div class="list-group-item">
                                    <p><img :src="element.picurl" class="img-device" /></p>
                                    {{ element.function }}
                                </div>
                            </template>
                      </draggable>
                    </template>
                </Panel>
                <Panel name="TMC">
                    Multidrop Combi
                    <template #content>
                        <draggable
                            class="dragArea list-group"
                            :list="OperationTMC"
                            :group="{ name: 'device', pull: 'clone', put: false }"
                            @change="log"
                            item-key="function"
                            :sort="false"
                        >
                            <template #item="{ element }">
                                <div class="list-group-item">
                                    <p><img :src="element.picurl" class="img-device" /></p>
                                    {{ element.function }}
                                </div>
                            </template>
                      </draggable>
                    </template>
                </Panel>
                <Panel name="XPeel">
                    XPeel
                    <template #content>
                        <draggable
                            class="dragArea list-group"
                            :list="OperationXPeel"
                            :group="{ name: 'device', pull: 'clone', put: false }"
                            @change="log"
                            item-key="function"
                            :sort="false"
                        >
                            <template #item="{ element }">
                                <div class="list-group-item">
                                    <p><img :src="element.picurl" class="img-device" /></p>
                                    {{ element.function }}
                                </div>
                            </template>
                      </draggable>
                    </template>
                </Panel>
                <Panel name="Wasp">
                    Wasp
                    <template #content>
                        <draggable
                            class="dragArea list-group"
                            :list="OperationWasp"
                            :group="{ name: 'device', pull: 'clone', put: false }"
                            @change="log"
                            item-key="function"
                            :sort="false"
                        >
                            <template #item="{ element }">
                                <div class="list-group-item">
                                    <p><img :src="element.picurl" class="img-device" /></p>
                                    {{ element.function }}
                                </div>
                            </template>
                      </draggable>
                    </template>
                </Panel>
                <Panel name="ImageXPress">
                    ImageXPress
                    <template #content>
                        <draggable
                            class="dragArea list-group"
                            :list="OperationXPress"
                            :group="{ name: 'device', pull: 'clone', put: false }"
                            @change="log"
                            item-key="function"
                            :sort="false"
                        >
                            <template #item="{ element }">
                                <div class="list-group-item">
                                    <p><img :src="element.picurl" class="img-device" /></p>
                                    {{ element.function }}
                                </div>
                            </template>
                      </draggable>
                    </template>
                </Panel>
            </Collapse>
        </Col>

        <Col span="19">
            <div id="nav">
              <Card v-for="item in displayProgress.boards" class="cards">
                <p align="center">{{ item.name }}</p>
                <draggable
                    class="dragArea-list-group"
                    :list="item.content"
                    group="device"
                    @change="log"
                    item-key="function"
                >
                    <template #item="{ element }" class="dragArea list-group">
                        <div class="list-group-item">
                            <p><img :src="element.picurl" class="img-device" /></p>
                            {{ element.function }}
                            <Button shape="circle" icon="md-close" size="small" @click="removeAt(item.content, index)"></Button>
                        </div>
                    </template>

                </draggable>
              </Card>
                <Button type="primary" shape="circle" icon="md-add" size="large" style="margin-top:250px;" @click="addBoard">Add a new board</Button>
            </div>
        </Col>
    </Row>

</template>

<script>

import draggable from "vuedraggable";

export default {
  name: 'Process',
  components: {
    draggable
  },
  setup() {
  },
  data() {
      return {
          progressData: [
              { name: 'process1', label: 'Process 1', BoardCount: 0, boards: [] },
              { name: 'process2', label: 'Process 2', BoardCount: 0, boards: [] },
              { name: 'process3', label: 'Process 3', BoardCount: 0, boards: [] }
          ],
          progressCount: 0,
          progressTotal: 3,
          displayProgress: { name: 'process3', label: 'Process 3', boards: [ { name: 'board1', content: [] } ], },
          model: '',
          device: [
            { name: 'Universal Plate Storage',  picurl: 'https://s1.ax1x.com/2023/03/18/ppJOSTH.png' },
            { name: 'LiCONiC Storage',          picurl: 'https://s1.ax1x.com/2023/03/18/ppJO091.png' },
            { name: 'Beckman Biomek',           picurl: 'https://s1.ax1x.com/2023/03/18/ppJOqEQ.png' },
            { name: 'EDC ATS-100',              picurl: 'https://s1.ax1x.com/2023/03/18/ppJOxg0.png' },
            { name: 'Thermo Multidrop Combi',   picurl: 'https://s1.ax1x.com/2023/03/18/ppJXUr8.png' },
            { name: 'Brooks XPeel',             picurl: 'https://s1.ax1x.com/2023/03/18/ppJXgMV.png' },
            { name: 'KBiosystems Wasp',         picurl: 'https://s1.ax1x.com/2023/03/18/ppJXTR1.png' },
            { name: 'Molecular Devices',        picurl: 'https://s1.ax1x.com/2023/03/18/ppJjWlt.png' }
          ],
          OperationUPS: [
            { function: 'Get from Hotel', id: 1, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOSTH.png' },
            { function: 'Put In Hotel',   id: 2, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOSTH.png' },
            { function: 'Get From Stack', id: 3, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOSTH.png' },
            { function: 'Put In Stack',   id: 4, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOSTH.png' },
            { function: 'Edit Content',   id: 5, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOSTH.png' },
            { function: 'Incubate',       id: 6, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOSTH.png' },
            { function: 'Hold',           id: 7, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOSTH.png' }        
          ],
          OperationLiCONiC: [
            { function: 'Get from Hotel',       id: 1, picurl: 'https://s1.ax1x.com/2023/03/18/ppJO091.png' },
            { function: 'Put in Hotel',         id: 2, picurl: 'https://s1.ax1x.com/2023/03/18/ppJO091.png' },
            { function: 'Edit Hotel Content',   id: 3, picurl: 'https://s1.ax1x.com/2023/03/18/ppJO091.png' },
            { function: 'Incubate',             id: 4, picurl: 'https://s1.ax1x.com/2023/03/18/ppJO091.png' },
            { function: 'Hold',                 id: 5, picurl: 'https://s1.ax1x.com/2023/03/18/ppJO091.png' }
          ],
          OperationBiomek: [
            { function: 'Run Sequence',   id: 1, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOqEQ.png' },
            { function: 'By Request',     id: 2, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOqEQ.png' },
            { function: 'Stage',          id: 3, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOqEQ.png' }
          ],
          OperationEDC: [
            { function: 'Data Directed Transfer', id: 1, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOxg0.png' },
            { function: 'Plate Replication',      id: 2, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOxg0.png' },
            { function: 'DRC with Intermediate',  id: 3, picurl: 'https://s1.ax1x.com/2023/03/18/ppJOxg0.png' }
          ],
          OperationTMC: [
            { function: 'Dispense',       id: 1, picurl: 'https://s1.ax1x.com/2023/03/18/ppJXUr8.png' },
            { function: 'Shake',          id: 2, picurl: 'https://s1.ax1x.com/2023/03/18/ppJXUr8.png' }
          ],
          OperationXPeel: [
            { function: 'Peel',           id: 1, picurl: 'https://s1.ax1x.com/2023/03/18/ppJXgMV.png' }
          ],
          OperationWasp: [
            { function: 'Seal Plate',     id: 1, picurl: 'https://s1.ax1x.com/2023/03/18/ppJXTR1.png' }
          ],
          OperationXPress: [
            { function: 'Image',          id: 1, picurl: 'https://s1.ax1x.com/2023/03/18/ppJjWlt.png' }
          ]
      }
  },
  methods: {
    removeAt(element, idx) {
      console.log(element);
      element.splice(idx, 1);
    },
    log: function(evt) {
      window.console.log(evt);
    },
    scrollInit() {
 	  // 获取要绑定事件的元素
      const scrollDiv = document.getElementById("nav");
      // document.addEventListener('DOMMouseScroll', handler, false)
      // 添加滚轮滚动监听事件，一般是用下面的方法，上面的是火狐的写法
      scrollDiv.addEventListener('mousewheel', handler, false)
      // 滚动事件的出来函数
      function handler(event) {
        // 获取滚动方向
        const detail = event.wheelDelta || event.detail;
        // 定义滚动方向，其实也可以在赋值的时候写
        const moveForwardStep = 1;
        const moveBackStep = -1;
        // 定义滚动距离
        let step = 0;
        // 判断滚动方向,这里的100可以改，代表滚动幅度，也就是说滚动幅度是自定义的
        if (detail < 0) {
          step = moveForwardStep * 100;
        } else {
          step = moveBackStep * 100;
        }
        // 对需要滚动的元素进行滚动操作
        scrollDiv.scrollLeft += step;
      }
    },

    // 变更当前流程，将下拉栏对应的progress赋给当前展示区存放的displayProgress
    progressChoiceOn(value) {
      let idx = "";
      this.progressData.map((item, index) => {
        if (item.name == value) {
          idx = index;
        }
      });
      this.displayProgress = this.progressData[idx];
      this.progressCount = Number(idx);
    },

    addProgress() {
      let nameHere = "progress" + (++this.progressTotal).toString();
      let labelHere = "Process " + (this.progressTotal).toString();
      this.progressData.push({
        name: nameHere,
        label: labelHere,
        BoardCount: 1,
        boards: [
          {
            name: 'board1',
            content: [

            ],
            testCode: labelHere
          }
        ]
      });
      
      this.progressChoiceOn(labelHere);
      this.displayProgress = this.progressData[(this.progressData.length-1)];
      this.progressCount = this.progressData.length;
      console.log(this.progressCount);
      //this.model = labelHere;
    },

    delProgress() {
      this.progressData = this.progressData.filter((o) => {
	      return o.name !== this.displayProgress.name
	    })
      this.displayProgress = this.progressData[(this.progressData.length-1)];
      this.progressCount = this.progressData.length;
      console.log(Number(this.progressCount));
      console.log((this.progressCount));
    },

    addBoard() {
      this.displayProgress.boards.push({
        name: 'board' + (++this.displayProgress.BoardCount).toString(),
        content: [

        ],
        testCode: 'board' + (this.displayProgress.BoardCount).toString() + 'here'
      });
      this.progressData.map((item, index) => {
        if (item.name == this.displayProgress.name) {
          idx = index;
        }
      });
      this.progressData[idx] = this.displayProgress;
    },

    saveProgress() {
      this.$router.push('./Run')
    }
  },
  mounted() {
  	// 调用初始化方法，这里一定是在DOM加载之后调用
    this.scrollInit()
  }
}
</script>

<style lang="less" scoped>

  #nav {
        width: 100%;
        height: 535px;
        overflow-x: auto;
        overflow-y: auto;
        white-space: nowrap;

        display: flex;
        flex-wrap: nowrap;
  }
  #device-col {
    height: 520px;
    overflow-y: auto;
  }
  .cards {
    width: 280px;
    height: 510px;
    margin-right: 10px;
    
    flex-shrink: 0;
  }
  .dragArea-list-group {
    width: 250px;
    height: 460px;
    margin-right: 10px;
    overflow:auto;
    flex-shrink: 0;
  }
  .list-group-item {
    height: 120px;
    padding: 6px;
    background-color: #fdfdfd;
    text-align: center;
    border: solid 1px #eee;
    margin-bottom: 10px;
    cursor: move;
  } 
  .list-group-item:hover {
    background-color: #f1f1f1;
    cursor: move;
  }
  .img-device {
    height: 80px;
  }

</style>
