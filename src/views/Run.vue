<template>
    <g-gantt-chart
      chart-start="2023-03-19 08:10"
      chart-end="2023-03-19 09:40"
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
        label="P1-封膜机1板位"
        :bars="row6BarList"
      />
      <g-gantt-row
        label="P1-封膜机1工作资源"
        :bars="row7BarList"
      />

      <g-gantt-row
        label="P2"
        :bars="row8BarList"
      />
      <g-gantt-row
        label="P2-冰箱2"
        :bars="row9BarList"
      />
      <g-gantt-row
        label="P2-机械臂1"
        :bars="row10BarList"
      />
      <g-gantt-row
        label="P2-撕膜机1板位"
        :bars="row11BarList"
      />
      <g-gantt-row
        label="P2-撕膜机1工作资源"
        :bars="row12BarList"
      />
      <g-gantt-row
        label="P2-封膜机1板位"
        :bars="row13BarList"
      />
      <g-gantt-row
        label="P2-封膜机1工作资源"
        :bars="row14BarList"
      />
    </g-gantt-chart>
  </template>
  
  <script setup>
  
  import { ref } from "vue"
  
  const row1BarList = ref([         // Plate 1 整体
    {
      myBeginDate: "2023-03-19 08:15",
      myEndDate: "2023-03-19 09:03",
      ganttBarConfig: {    // each bar must have a nested ganttBarConfig object ...
        id: "Plate-1", // ... and a unique "id" property
        label: "whole process of plate 1"
      }
    },
  ])
  const row2BarList = ref([         // Plate 1 冰箱1
    {
      myBeginDate: "2023-03-19 08:15",
      myEndDate: "2023-03-19 08:20",
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
      myBeginDate: "2023-03-19 08:56",
      myEndDate: "2023-03-19 09:03",
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
        myBeginDate: "2023-03-19 08:20",
        myEndDate: "2023-03-19 08:27",
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
        myBeginDate: "2023-03-19 08:37",
        myEndDate: "2023-03-19 08:44",
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
        myBeginDate: "2023-03-19 08:56",
        myEndDate: "2023-03-19 09:03",
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
    ])
  const row4BarList = ref([         // Plate 1 撕膜机板位
    {
        myBeginDate: "2023-03-19 08:20",
        myEndDate: "2023-03-19 08:37",
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
        myBeginDate: "2023-03-19 08:27",
        myEndDate: "2023-03-19 08:37",
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
  const row6BarList = ref([     // Plate 1 封膜机板位
    {
        myBeginDate: "2023-03-19 08:37",
        myEndDate: "2023-03-19 08:56",
        ganttBarConfig: {
            id: "sealPlace-1-1",
            hasHandles: true,
            label: "sealPlace 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#e09b69",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
  ])
  const row7BarList = ref([     // plate1 封膜机资源
    {
        myBeginDate: "2023-03-19 08:44",
        myEndDate: "2023-03-19 08:56",
        ganttBarConfig: {
            id: "seal-1-1",
            hasHandles: true,
            label: "seal 1",
            style: {     // arbitrary CSS styling for your bar
            background: "#e09b69",
            borderRadius: "20px",
            color: "black"
            }
        }
    },
  ])
  
  const row8BarList = ref([     // Plate 2 整体
  {
      myBeginDate: "2023-03-19 08:15",
      myEndDate: "2023-03-19 09:29",
      ganttBarConfig: {    // each bar must have a nested ganttBarConfig object ...
        id: "Plate-2", // ... and a unique "id" property
        label: "whole process of plate 2"
      }
    },
  ])
  const row9BarList = ref([     // Plate 2 冰箱2
  {
        myBeginDate: "2023-03-19 08:15",
        myEndDate: "2023-03-19 08:44",
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
        myBeginDate: "2023-03-19 09:22",
        myEndDate: "2023-03-19 09:29",
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
  const row10BarList = ref([    // Plate 2 机械臂1
    {
        myBeginDate: "2023-03-19 08:44",
        myEndDate: "2023-03-19 08:51",
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
        myBeginDate: "2023-03-19 09:03",
        myEndDate: "2023-03-19 09:10",
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
        myBeginDate: "2023-03-19 09:22",
        myEndDate: "2023-03-19 09:29",
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
  ])
  const row11BarList = ref([    // Plate 2 撕膜机板位
    {
        myBeginDate: "2023-03-19 08:44",
        myEndDate: "2023-03-19 09:03",
        ganttBarConfig: {
            id: "peelPlace-1-2",
            hasHandles: true,
            label: "peelPlace 2",
            style: {     // arbitrary CSS styling for your bar
            background: "#e09b69",
            borderRadius: "20px",
            color: "black"
            }
        }
    }
  ])
  const row12BarList = ref([    // Plate 2 撕膜机资源
    {
        myBeginDate: "2023-03-19 08:51",
        myEndDate: "2023-03-19 09:01",
        ganttBarConfig: {
            id: "peel-1-2",
            hasHandles: true,
            label: "peel 2",
            style: {     // arbitrary CSS styling for your bar
            background: "#e09b69",
            borderRadius: "20px",
            color: "black"
            }
        }
    }
  ])
  const row13BarList = ref([    // Plate 2 封膜机板位
    {
        myBeginDate: "2023-03-19 09:03",
        myEndDate: "2023-03-19 09:22",
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
    },
  ])
  const row14BarList = ref([    // Plate 2 封膜机资源
    {
        myBeginDate: "2023-03-19 09:10",
        myEndDate: "2023-03-19 09:22",
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
    },
  ])
  </script>