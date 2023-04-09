<template>
    <g-gantt-chart
      chart-start="2023-03-29 14:20"
      chart-end="2023-03-29 16:20"
      precision="hour"
      bar-start="myBeginDate"
      bar-end="myEndDate"
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
  </template>
  
  <script setup>
  
  import { ref } from "vue"
  
  const row1BarList = ref([         // Plate 1 整体
    {
      myBeginDate: "2023-03-29 14:36",
      myEndDate: "2023-03-29 15:53",
      ganttBarConfig: {    // each bar must have a nested ganttBarConfig object ...
        id: "Plate-1", // ... and a unique "id" property
        label: "whole process of plate 1"
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
          background: "#e09b69",
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
          background: "#e09b69",
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
          background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
        label: "whole process of plate 2"
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            background: "#e09b69",
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
            //hasHandles: true,
            label: "station",
            // style: {     // arbitrary CSS styling for your bar
            // background: "#e09b69",
            // borderRadius: "20px",
            // color: "black"
            }
        
    },
    {
        myBeginDate: "2023-03-29 15:36",
        myEndDate: "2023-03-29 15:46",
        ganttBarConfig: {
            id: "station-1-2",
            //hasHandles: true,
            label: "station",
            // style: {     // arbitrary CSS styling for your bar
            // background: "#e09b69",
            // borderRadius: "20px",
            // color: "black"
            }
        
    },
  ])
  </script>