<template>
  <br>
  <br>
  <br>
  <div id="build"></div>
  <Row>
    <Col span="22" offset="1">
      <Crad>
        <div>
          <g-gantt-chart
      chart-start="2023-03-29 14:20"
      chart-end="2023-03-29 16:10"
      precision="hour"
      bar-start="myBeginDate"
      bar-end="myEndDate"
      color-scheme = "sky"
    >
      <g-gantt-row
        label="P1"
        :bars="row1BarList"
      />
      <g-gantt-row
        label="P1-冰箱1"
        :bars="row2BarList"
      />
      <g-gantt-row
        label="P1-机械臂1"
        :bars="row3BarList"
      />
      <g-gantt-row
        label="P1-撕膜机1板位"
        :bars="row4BarList"
      />
      <g-gantt-row
        label="P1-撕膜机1工作资源"
        :bars="row5BarList"
      />
      <g-gantt-row
        label="P1-液体工作站板位1"
        :bars="row6BarList"
      />

      <g-gantt-row
        label="P2"
        :bars="row7BarList"
      />
      <g-gantt-row
        label="P2-冰箱2"
        :bars="row8BarList"
      />
      <g-gantt-row
        label="P2-机械臂1"
        :bars="row9BarList"
      />
      <g-gantt-row
        label="P2-封膜机1板位"
        :bars="row10BarList"
      />
      <g-gantt-row
        label="P2-封膜机1工作资源"
        :bars="row11BarList"
      />
      <g-gantt-row
        label="P2-液体工作站板位2"
        :bars="row12BarList"
      />
      <g-gantt-row
        label="液体工作站工作资源"
        :bars="row13BarList"
      />
    </g-gantt-chart>
        </div>
  </Crad>
    </Col>
  </Row>

  <br>
  <br>
  <Row>
    <Col span="10" offset="1">
      <Card>
        <div id="main" style="background: #ffffff; width: 100%; height: 500px" ></div>
      </Card>
    </Col>
    <Col span="11" offset="1">
      <Card>
        <div id="two" style="background: #ffffff; width: 100%; height: 500px"></div>
      </Card>
    </Col>
  </Row>
  <br>
  <br>
  <br>
  <Row>
    <Col span="22" offset="1">
      <Card>
        <div id="three" style="background: #ffffff; width: 100%; height: 500px"></div>
      </Card>
    </Col>
  </Row>



  </template>

  <script setup>

  import {onMounted, ref} from "vue"
  import * as echarts from 'echarts';

  let showElement = 0

  onMounted(
      () => {
        initData()
        initOne()
        initTwo()
        initThree()
      }
  )

  function initTwo() {
    var myChart = echarts.init(document.getElementById('two'));
    var option = {
      title: [
      {
        left: "center",
        text: '计算时间（GBG由预测模型给出）'
      }
    ],
      xAxis: {
      type: 'category',
      data: ['GBGCommonStimulate', 'GBGFastStimulate', 'Our algorithm']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          {
            value: 85,
            itemStyle: {
              color: '#52a139'
            }
          },
          {
            value: 72,
            itemStyle: {
              color: '#a90000'
            }
          },
          1
        ],
        type: 'bar'
      }
    ]
  };
     myChart.setOption(option);
  }


  function addShowElement() {
    showElement = (showElement + 1) % 3
    console.log(showElement)
  }

  let base = 0;
  let oneDay = 0.0001;
  let date = [];
  let data = [Math.random() * 90];
  function initData() {
    for (let i = 1; i < 20000; i++) {
      var now = base += oneDay;
      date.push(now);
      var tmp = Math.round((Math.random()-0.53) * 20 + data[i - 1]);
      if (tmp < 0) {
        tmp = 0;
      }
      if (tmp >= 100) {
        tmp = Math.round((Math.random()-1) * 20 + data[i - 1]);
      }
      data.push(tmp);
    }
  }

  function initThree() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('three'));
    // 指定图表的配置项和数据
    var option = {
      tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
      title: {
      left: 'center',
      text: 'CPU占用率随时间变化示意'
    },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.1]
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10
    },
    {
      start: 0,
      end: 10
    }
  ],
  series: [
    {
      name: 'CPU占用率',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgb(255, 70, 131)'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 158, 68)'
          },
          {
            offset: 1,
            color: 'rgb(255, 70, 131)'
          }
        ])
      },
          data: data
        }
      ]
    };
    myChart.setOption(option);
  }


  function initOne() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));
  // 指定图表的配置项和数据
  var option = {
  title: [
    {
      left: "center",
      text: '设备利用率'
    }
  ],
  polar: {
    radius: [30, '80%']
  },
  angleAxis: {
    max: 0.9,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['机械臂', '液体工作站', '冰箱', '撕膜机', '封膜机']
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [
      {
        value:0.66,
        itemStyle: {
          color:'#7e7702'
        }
      },
      {
        value:0.82,
        itemStyle: {
          color:'#299381'
        }
      },
      {
        value:0.047,
        itemStyle: {
          color:'#91cc75'
        }
      },
      {
        value:0.12,
        itemStyle: {
          color:'#845da6'
        }
      },
      {
        value:0.14,
        itemStyle: {
          color:'#d96544'
        }
      },
    ],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  }
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


  const row1BarList = ref([         // Plate 1 整体
    {
      myBeginDate: "2023-03-29 14:36",
      myEndDate: "2023-03-29 15:53",
      ganttBarConfig: {    // each bar must have a nested ganttBarConfig object ...
        id: "Plate-1", // ... and a unique "id" property
        label: "whole process of plate 1",
        style: {
          fontSize:"20px",
          color:"white",
          background:"#573400"
        }
      }
    },
  ])
  const row2BarList = ref([         // Plate 1 冰箱1
    {
      myBeginDate: "2023-03-29 14:36",
      myEndDate: "2023-03-29 14:41",
      ganttBarConfig: {
        id: "refrigerator-1-1",
        hasHandles: true,
        label: "refrigerator 1",
        style: {     // arbitrary CSS styling for your bar
          background: "#3EBBB5",
          borderRadius: "20px",
          color: "black"
        }
      }
    },
    {
      myBeginDate: "2023-03-29 15:46",
      myEndDate: "2023-03-29 15:53",
      ganttBarConfig: {
        id: "refrigerator-1-2",
        hasHandles: true,
        label: "refrigerator 1",
        style: {     // arbitrary CSS styling for your bar
          background: "#3EBBB5",
          borderRadius: "20px",
          color: "black"
        }
      }
    }
  ])
  const row3BarList = ref([         // Plate 1 机械臂
    {
        myBeginDate: "2023-03-29 14:41",
        myEndDate: "2023-03-29 14:48",
        ganttBarConfig: {
        id: "manipulater-1-1",
        hasHandles: true,
        label: "manipulater 1",
        style: {     // arbitrary CSS styling for your bar
          background: "#A19D36",
          borderRadius: "20px",
          color: "black"
        }
      }
    },
    {
        myBeginDate: "2023-03-29 15:05",
        myEndDate: "2023-03-29 15:12",
        ganttBarConfig: {
            id: "manipulater-1-2",
            hasHandles: true,
            label: "manipulater 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#A19D36",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:22",
        myEndDate: "2023-03-29 15:29",
        ganttBarConfig: {
            id: "manipulater-1-4",
            hasHandles: true,
            label: "manipulater 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#A19D36",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:46",
        myEndDate: "2023-03-29 15:53",
        ganttBarConfig: {
            id: "manipulater-1-7",
            hasHandles: true,
            label: "manipulater 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#A19D36",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    ])
  const row4BarList = ref([         // Plate 1 撕膜机板位
    {
        myBeginDate: "2023-03-29 15:05",
        myEndDate: "2023-03-29 15:22",
        ganttBarConfig: {
            id: "peelPlace-1-1",
            hasHandles: true,
            label: "peelPlace 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#52A136",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
  ])
  const row5BarList = ref([         // Plate 1 撕膜机资源
    {
        myBeginDate: "2023-03-29 15:12",
        myEndDate: "2023-03-29 15:22",
        ganttBarConfig: {
            id: "peel-1-1",
            hasHandles: true,
            label: "peel 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#52A136",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
  ])
  const row6BarList = ref([     // Plate 1 液体工作站板位1
    {
        myBeginDate: "2023-03-29 14:41",
        myEndDate: "2023-03-29 15:05",
        ganttBarConfig: {
            id: "stationPlace-1-1",
            hasHandles: true,
            label: "stationPlace 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#7E3399",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:22",
        myEndDate: "2023-03-29 15:46",
        ganttBarConfig: {
            id: "stationPlace-1-2",
            hasHandles: true,
            label: "stationPlace 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#7E3399",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:22",
        myEndDate: "2023-03-29 15:46",
        ganttBarConfig: {
            id: "stationPlace-1-2",
            hasHandles: true,
            label: "stationPlace 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#7E3399",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
  ])

  const row7BarList = ref([     // Plate 2 整体
  {
      myBeginDate: "2023-03-29 14:36",
      myEndDate: "2023-03-29 16:00",
      ganttBarConfig: {    // each bar must have a nested ganttBarConfig object ...
        id: "Plate-2", // ... and a unique "id" property
        label: "whole process of plate 2",
        style: {
          fontSize:"20px",
          color:"white",
          background:"#573400"
        }
      }
    },
  ])
  const row8BarList = ref([     // Plate 2 冰箱2
    {
        myBeginDate: "2023-03-29 14:36",
        myEndDate: "2023-03-29 14:48",
        ganttBarConfig: {
            id: "refrigerator-2-1",
            hasHandles: true,
            label: "refrigerator 2",
            style: {     // arbitrary CSS styling for your bar
            background: "#99336F",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:53",
        myEndDate: "2023-03-29 16:00",
        ganttBarConfig: {
            id: "refrigerator-2-2",
            hasHandles: true,
            label: "refrigerator 2",
            style: {     // arbitrary CSS styling for your bar
            background: "#99336F",
            borderRadius: "20px",
            color: "black"
            }
        }
    }
  ])
  const row9BarList = ref([    // Plate 2 机械臂1
    {
        myBeginDate: "2023-03-29 14:48",
        myEndDate: "2023-03-29 14:55",
        ganttBarConfig: {
            id: "manipulater-1-3",
            hasHandles: true,
            label: "manipulater 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#C4E2A7",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:12",
        myEndDate: "2023-03-29 15:19",
        ganttBarConfig: {
            id: "manipulater-1-5",
            hasHandles: true,
            label: "manipulater 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#C4E2A7",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:29",
        myEndDate: "2023-03-29 15:36",
        ganttBarConfig: {
            id: "manipulater-1-6",
            hasHandles: true,
            label: "manipulater 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#C4E2A7",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:53",
        myEndDate: "2023-03-29 16:00",
        ganttBarConfig: {
            id: "manipulater-1-8",
            hasHandles: true,
            label: "manipulater 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#C4E2A7",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
  ])
  const row10BarList = ref([    // Plate 2 封膜机板位
    {
        myBeginDate: "2023-03-29 15:12",
        myEndDate: "2023-03-29 15:29",
        ganttBarConfig: {
            id: "sealPlace-1-2",
            hasHandles: true,
            label: "sealPlace 2",
            style: {     // arbitrary CSS styling for your bar
            background: "#D890DA",
            borderRadius: "20px",
            color: "black"
            }
        }
    }
  ])
  const row11BarList = ref([    // Plate 2 封膜机资源
    {
        myBeginDate: "2023-03-29 15:19",
        myEndDate: "2023-03-29 15:29",
        ganttBarConfig: {
            id: "seal-1-2",
            hasHandles: true,
            label: "seal 2",
            style: {     // arbitrary CSS styling for your bar
            background: "#988CD9",
            borderRadius: "20px",
            color: "black"
            }
        }
    }
  ])
  const row12BarList = ref([    // Plate 2 液体工作站板位2
    {
        myBeginDate: "2023-03-29 14:48",
        myEndDate: "2023-03-29 15:12",
        ganttBarConfig: {
            id: "stationPlace-2-1",
            hasHandles: true,
            label: "stationPlace 2",
            style: {     // arbitrary CSS styling for your bar
            background: "#85D6BF",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:29",
        myEndDate: "2023-03-29 15:53",
        ganttBarConfig: {
            id: "stationPlace-2-2",
            hasHandles: true,
            label: "stationPlace 2",
            style: {     // arbitrary CSS styling for your bar
            background: "#85D6BF",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
  ])
  const row13BarList = ref([    //液体工作站资源
    {
        myBeginDate: "2023-03-29 14:55",
        myEndDate: "2023-03-29 15:05",
        ganttBarConfig: {
            id: "station-1-1",
            hasHandles: true,
            label: "station",
            style: {     // arbitrary CSS styling for your bar
              background: "#85D6BF",
              borderRadius: "20px",
              color: "black"
            }
        }
    },
    {
        myBeginDate: "2023-03-29 15:36",
        myEndDate: "2023-03-29 15:46",
        ganttBarConfig: {
            id: "station-1-2",
            hasHandles: true,
            label: "station",
            style: {     // arbitrary CSS styling for your bar
              background: "#85D6BF",
              borderRadius: "20px",
              color: "black"
            }
        }

    },
  ])
  </script>

<style>
#build{
background:url("https://s1.ax1x.com/2023/04/10/ppbqWeU.jpg");
width:100%;
height:100%;
position:fixed;
background-size:100% 100%;
opacity: 0.3;
z-index: 0;
}
</style>