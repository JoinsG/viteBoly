<template>
  <div style="width: 1920px; height: 1080px;transform:scale(1);transform-origin: left top;">
    <itemNestVue :list="list"></itemNestVue>
  </div>
</template>

<script lang='ts'>
import itemNestVue from './itemNest.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'test',
  setup: () => {
    let list = ref([
    {
        "id": 13,
        "name": "chart14",
        "type": "wrap",
        "tasks": [
            {
                "id": 5,
                "name": "chart6",
                "type": "chart",
                "chartType": "lineSingle",
                "mode": "",
                "style": {
                    "width": "500px",
                    "height": "500px"
                },
                "chart": {
                    "color": [
                        "#0060FF",
                        "#1EE4DC",
                        "#FFD71A",
                        "#ff5A18",
                        "#362D78",
                        "#9270CA",
                        "#FF99C3",
                        "#8e7738",
                        "#269A99",
                        "#5B8FF9",
                        "#FF99C3",
                        "#DB6BCF",
                        "#BDD2FD",
                        "#5AD8A6",
                        "#BDEFDB",
                        "#5D7092",
                        "#C2C8D5",
                        "#F6BD16",
                        "#FBE5A2",
                        "#E8684A",
                        "#F6C3B7",
                        "#5B8FF9",
                        "#5AD8A6",
                        "#025DF4"
                    ],
                    "animationDurationUpdate": 500,
                    "grid": {
                        "containLabel": true,
                        "bottom": 60,
                        "left": "10%",
                        "right": "10%",
                        "top": 60
                    },
                    "legend": {
                        "show": true
                    },
                    "xAxis": [
                        {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ],
                            "axisLine": {
                                "onZero": false
                            }
                        },
                        {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ],
                            "axisLine": {
                                "onZero": false
                            }
                        }
                    ],
                    "yAxis": [
                        {
                            "type": "value",
                            "show": true,
                            "axisLine": {
                                "onZero": false
                            }
                        },
                        {
                            "type": "value",
                            "show": true,
                            "axisLine": {
                                "onZero": false
                            }
                        }
                    ],
                    "series": [
                        {
                            "name": "1",
                            "yAxisIndex": 0,
                            "data": [
                                150,
                                230,
                                224,
                                218,
                                135,
                                147,
                                260
                            ],
                            "type": "line",
                            "step": false,
                            "label": {
                                "fontSize": 12,
                                "color": "#000"
                            },
                            "lineStyle": {
                                "color": "red",
                                "type": "solid",
                                "width": "2"
                            },
                            "smooth": 0
                        },
                        {
                            "name": "2",
                            "yAxisIndex": 0,
                            "data": [
                                50,
                                130,
                                124,
                                118,
                                35,
                                47,
                                160
                            ],
                            "type": "line",
                            "step": false,
                            "label": {
                                "fontSize": 12,
                                "color": "#000"
                            },
                            "lineStyle": {
                                "color": "red",
                                "type": "solid",
                                "width": "2"
                            },
                            "smooth": 0
                        }
                    ]
                },
                "defineConfig": {
                    "style": [
                        {
                            "name": "宽高",
                            "children": [
                                {
                                    "name": "宽",
                                    "key": "width",
                                    "value": "500",
                                    "type": "input"
                                },
                                {
                                    "name": "高",
                                    "key": "height",
                                    "value": 500,
                                    "type": "input"
                                }
                            ],
                            "type": "next"
                        }
                    ],
                    "chart": [
                        {
                            "name": "图标网格",
                            "key": "grid",
                            "children": [
                                {
                                    "name": "上间",
                                    "key": "top",
                                    "value": "60",
                                    "type": "input"
                                },
                                {
                                    "name": "下间",
                                    "key": "bottom",
                                    "value": "60",
                                    "type": "input"
                                },
                                {
                                    "name": "右间",
                                    "key": "right",
                                    "value": "10%",
                                    "type": "input"
                                },
                                {
                                    "name": "左间",
                                    "key": "left",
                                    "value": "10%",
                                    "type": "input"
                                }
                            ]
                        },
                        {
                            "name": "Y轴",
                            "key": "yAxis",
                            "children": [
                                {
                                    "name": "Y左",
                                    "children": [
                                        {
                                            "name": "y1",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "value": "",
                                            "type": "input",
                                            "key": "name"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                },
                                {
                                    "name": "Y右",
                                    "children": [
                                        {
                                            "name": "y2",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "value": "",
                                            "type": "input",
                                            "key": "name"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                }
                            ],
                            "type": "yAxis"
                        },
                        {
                            "name": "X轴",
                            "key": "xAxis",
                            "children": [
                                {
                                    "name": "X下",
                                    "children": [
                                        {
                                            "name": "x1",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                },
                                {
                                    "name": "X上",
                                    "children": [
                                        {
                                            "name": "x2",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                }
                            ],
                            "type": "yAxis"
                        },
                        {
                            "name": "图例",
                            "key": "legend",
                            "children": [
                                {
                                    "name": "是否显示",
                                    "key": "show",
                                    "value": false,
                                    "type": "switch"
                                },
                                {
                                    "name": "左间距",
                                    "key": "left",
                                    "value": "auto",
                                    "type": "input"
                                },
                                {
                                    "name": "上间距",
                                    "key": "top",
                                    "value": "auto",
                                    "type": "input"
                                },
                                {
                                    "name": "图标宽",
                                    "key": "itemWidth",
                                    "value": 25,
                                    "type": "input"
                                },
                                {
                                    "name": "图标高",
                                    "key": "itemHeight",
                                    "value": 14,
                                    "type": "input"
                                },
                                {
                                    "name": "元素间距",
                                    "key": "itemGap",
                                    "value": 10,
                                    "type": "input"
                                },
                                {
                                    "name": "排列布局",
                                    "key": "orient",
                                    "value": "horizontal",
                                    "type": "select",
                                    "select": [
                                        {
                                            "name": "横向",
                                            "value": "horizontal"
                                        },
                                        {
                                            "name": "纵向",
                                            "value": "vertical"
                                        }
                                    ]
                                },
                                {
                                    "name": "图标类型",
                                    "key": "icon",
                                    "value": "circle",
                                    "type": "select",
                                    "select": [
                                        {
                                            "name": "圆形",
                                            "value": "circle"
                                        },
                                        {
                                            "name": "方形",
                                            "value": "rect"
                                        },
                                        {
                                            "name": "钝角",
                                            "value": "roundRect"
                                        },
                                        {
                                            "name": "三角形",
                                            "value": "triangle"
                                        },
                                        {
                                            "name": "钻石",
                                            "value": "diamond"
                                        },
                                        {
                                            "name": "箭头",
                                            "value": "arrow"
                                        },
                                        {
                                            "name": "无",
                                            "value": "none"
                                        }
                                    ]
                                },
                                {
                                    "name": "文字样式",
                                    "key": "textStyle",
                                    "children": [
                                        {
                                            "name": "大小",
                                            "key": "fontSize",
                                            "type": "input",
                                            "value": "12"
                                        },
                                        {
                                            "name": "颜色",
                                            "key": "color",
                                            "type": "color",
                                            "value": "#000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": 15,
                "name": "chart16",
                "type": "chart",
                "chartType": "lineSingle",
                "mode": "",
                "style": {
                    "width": "500px",
                    "height": "500px"
                },
                "chart": {
                    "color": [
                        "#0060FF",
                        "#1EE4DC",
                        "#FFD71A",
                        "#ff5A18",
                        "#362D78",
                        "#9270CA",
                        "#FF99C3",
                        "#8e7738",
                        "#269A99",
                        "#5B8FF9",
                        "#FF99C3",
                        "#DB6BCF",
                        "#BDD2FD",
                        "#5AD8A6",
                        "#BDEFDB",
                        "#5D7092",
                        "#C2C8D5",
                        "#F6BD16",
                        "#FBE5A2",
                        "#E8684A",
                        "#F6C3B7",
                        "#5B8FF9",
                        "#5AD8A6",
                        "#025DF4"
                    ],
                    "animationDurationUpdate": 500,
                    "grid": {
                        "containLabel": true,
                        "bottom": 60,
                        "left": "10%",
                        "right": "10%",
                        "top": 60
                    },
                    "legend": {
                        "show": true
                    },
                    "xAxis": [
                        {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ],
                            "axisLine": {
                                "onZero": false
                            }
                        },
                        {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ],
                            "axisLine": {
                                "onZero": false
                            }
                        }
                    ],
                    "yAxis": [
                        {
                            "type": "value",
                            "show": true,
                            "axisLine": {
                                "onZero": false
                            }
                        },
                        {
                            "type": "value",
                            "show": true,
                            "axisLine": {
                                "onZero": false
                            }
                        }
                    ],
                    "series": [
                        {
                            "name": "1",
                            "yAxisIndex": 0,
                            "data": [
                                150,
                                230,
                                224,
                                218,
                                135,
                                147,
                                260
                            ],
                            "type": "line",
                            "step": false,
                            "label": {
                                "fontSize": 12,
                                "color": "#000"
                            },
                            "lineStyle": {
                                "color": "red",
                                "type": "solid",
                                "width": "2"
                            },
                            "smooth": 0
                        },
                        {
                            "name": "2",
                            "yAxisIndex": 0,
                            "data": [
                                50,
                                130,
                                124,
                                118,
                                35,
                                47,
                                160
                            ],
                            "type": "line",
                            "step": false,
                            "label": {
                                "fontSize": 12,
                                "color": "#000"
                            },
                            "lineStyle": {
                                "color": "red",
                                "type": "solid",
                                "width": "2"
                            },
                            "smooth": 0
                        }
                    ]
                },
                "defineConfig": {
                    "style": [
                        {
                            "name": "宽高",
                            "children": [
                                {
                                    "name": "宽",
                                    "key": "width",
                                    "value": 500,
                                    "type": "input"
                                },
                                {
                                    "name": "高",
                                    "key": "height",
                                    "value": 500,
                                    "type": "input"
                                }
                            ],
                            "type": "next"
                        }
                    ],
                    "chart": [
                        {
                            "name": "图标网格",
                            "key": "grid",
                            "children": [
                                {
                                    "name": "上间",
                                    "key": "top",
                                    "value": "60",
                                    "type": "input"
                                },
                                {
                                    "name": "下间",
                                    "key": "bottom",
                                    "value": "60",
                                    "type": "input"
                                },
                                {
                                    "name": "右间",
                                    "key": "right",
                                    "value": "10%",
                                    "type": "input"
                                },
                                {
                                    "name": "左间",
                                    "key": "left",
                                    "value": "10%",
                                    "type": "input"
                                }
                            ]
                        },
                        {
                            "name": "Y轴",
                            "key": "yAxis",
                            "children": [
                                {
                                    "name": "Y左",
                                    "children": [
                                        {
                                            "name": "y1",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "value": "",
                                            "type": "input",
                                            "key": "name"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                },
                                {
                                    "name": "Y右",
                                    "children": [
                                        {
                                            "name": "y2",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "value": "",
                                            "type": "input",
                                            "key": "name"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                }
                            ],
                            "type": "yAxis"
                        },
                        {
                            "name": "X轴",
                            "key": "xAxis",
                            "children": [
                                {
                                    "name": "X下",
                                    "children": [
                                        {
                                            "name": "x1",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                },
                                {
                                    "name": "X上",
                                    "children": [
                                        {
                                            "name": "x2",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                }
                            ],
                            "type": "yAxis"
                        },
                        {
                            "name": "图例",
                            "key": "legend",
                            "children": [
                                {
                                    "name": "是否显示",
                                    "key": "show",
                                    "value": false,
                                    "type": "switch"
                                },
                                {
                                    "name": "左间距",
                                    "key": "left",
                                    "value": "auto",
                                    "type": "input"
                                },
                                {
                                    "name": "上间距",
                                    "key": "top",
                                    "value": "auto",
                                    "type": "input"
                                },
                                {
                                    "name": "图标宽",
                                    "key": "itemWidth",
                                    "value": 25,
                                    "type": "input"
                                },
                                {
                                    "name": "图标高",
                                    "key": "itemHeight",
                                    "value": 14,
                                    "type": "input"
                                },
                                {
                                    "name": "元素间距",
                                    "key": "itemGap",
                                    "value": 10,
                                    "type": "input"
                                },
                                {
                                    "name": "排列布局",
                                    "key": "orient",
                                    "value": "horizontal",
                                    "type": "select",
                                    "select": [
                                        {
                                            "name": "横向",
                                            "value": "horizontal"
                                        },
                                        {
                                            "name": "纵向",
                                            "value": "vertical"
                                        }
                                    ]
                                },
                                {
                                    "name": "图标类型",
                                    "key": "icon",
                                    "value": "circle",
                                    "type": "select",
                                    "select": [
                                        {
                                            "name": "圆形",
                                            "value": "circle"
                                        },
                                        {
                                            "name": "方形",
                                            "value": "rect"
                                        },
                                        {
                                            "name": "钝角",
                                            "value": "roundRect"
                                        },
                                        {
                                            "name": "三角形",
                                            "value": "triangle"
                                        },
                                        {
                                            "name": "钻石",
                                            "value": "diamond"
                                        },
                                        {
                                            "name": "箭头",
                                            "value": "arrow"
                                        },
                                        {
                                            "name": "无",
                                            "value": "none"
                                        }
                                    ]
                                },
                                {
                                    "name": "文字样式",
                                    "key": "textStyle",
                                    "children": [
                                        {
                                            "name": "大小",
                                            "key": "fontSize",
                                            "type": "input",
                                            "value": "12"
                                        },
                                        {
                                            "name": "颜色",
                                            "key": "color",
                                            "type": "color",
                                            "value": "#000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "style": {
            "width": "auto",
            "height": "auto",
            "border": "1px solid #fff",
            "padding": "10px 10px 10px 10px",
            "margin": "0px 30px 30px 0px",
            "backgroundColor": "#000"
        },
        "defineConfig": {
            "style": [
                {
                    "name": "宽高",
                    "children": [
                        {
                            "name": "宽",
                            "key": "width",
                            "value": "auto",
                            "type": "input"
                        },
                        {
                            "name": "高",
                            "key": "height",
                            "value": "auto",
                            "type": "input"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "边框",
                    "show": false,
                    "key": "border",
                    "children": [
                        {
                            "name": "宽度",
                            "key": "width",
                            "value": 0,
                            "type": "input"
                        },
                        {
                            "name": "样式",
                            "key": "style",
                            "value": "solid",
                            "type": "select",
                            "select": [
                                {
                                    "name": "直线",
                                    "value": "solid"
                                },
                                {
                                    "name": "虚线",
                                    "value": "dashed"
                                }
                            ]
                        },
                        {
                            "name": "颜色",
                            "key": "color",
                            "value": "#fff",
                            "type": "color"
                        },
                        {
                            "name": "圆角",
                            "key": "radius",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "间距",
                    "children": [
                        {
                            "name": "外间",
                            "key": "margin",
                            "value": [
                                0,
                                "30",
                                "30",
                                0
                            ],
                            "type": "Array"
                        },
                        {
                            "name": "内间",
                            "key": "padding",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "背景颜色",
                    "key": "backgroundColor",
                    "value": "#000",
                    "type": "color"
                }
            ],
            "draggableOptions": {
                "disabled": false
            }
        }
    },
    {
        "id": 19,
        "name": "chart20",
        "type": "wrap",
        "tasks": [
            {
                "name": "占位",
                "type": "zw",
                "class": [
                    "no-drag"
                ],
                "style": {
                    "width": "100px",
                    "border": "1px solid red",
                    "padding": "10px 10px 10px 10px"
                }
            }
        ],
        "style": {
            "width": "200px",
            "height": "200px",
            "border": "1px solid #fff",
            "padding": "10px 10px 10px 10px",
            "margin": "0 0 0 0",
            "backgroundColor": "#000"
        },
        "defineConfig": {
            "style": [
                {
                    "name": "宽高",
                    "children": [
                        {
                            "name": "宽",
                            "key": "width",
                            "value": 0,
                            "type": "input"
                        },
                        {
                            "name": "高",
                            "key": "height",
                            "value": 0,
                            "type": "input"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "边框",
                    "show": false,
                    "key": "border",
                    "children": [
                        {
                            "name": "宽度",
                            "key": "width",
                            "value": 0,
                            "type": "input"
                        },
                        {
                            "name": "样式",
                            "key": "style",
                            "value": "solid",
                            "type": "select",
                            "select": [
                                {
                                    "name": "直线",
                                    "value": "solid"
                                },
                                {
                                    "name": "虚线",
                                    "value": "dashed"
                                }
                            ]
                        },
                        {
                            "name": "颜色",
                            "key": "color",
                            "value": "#fff",
                            "type": "color"
                        },
                        {
                            "name": "圆角",
                            "key": "radius",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "间距",
                    "children": [
                        {
                            "name": "外间",
                            "key": "margin",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        },
                        {
                            "name": "内间",
                            "key": "padding",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "背景颜色",
                    "key": "backgroundColor",
                    "value": "#000",
                    "type": "color"
                }
            ],
            "draggableOptions": {
                "disabled": false
            }
        }
    },
    {
        "id": 11,
        "name": "chart12",
        "type": "wrap",
        "tasks": [
            {
                "id": 9,
                "name": "chart10",
                "type": "chart",
                "chartType": "pieSingle",
                "mode": "",
                "style": {
                    "width": "300px",
                    "height": "200px"
                },
                "chart": {
                    "color": [
                        "#0060FF",
                        "#1EE4DC",
                        "#FFD71A",
                        "#ff5A18",
                        "#362D78",
                        "#9270CA",
                        "#FF99C3",
                        "#8e7738",
                        "#269A99",
                        "#5B8FF9",
                        "#FF99C3",
                        "#DB6BCF",
                        "#BDD2FD",
                        "#5AD8A6",
                        "#BDEFDB",
                        "#5D7092",
                        "#C2C8D5",
                        "#F6BD16",
                        "#FBE5A2",
                        "#E8684A",
                        "#F6C3B7",
                        "#5B8FF9",
                        "#5AD8A6",
                        "#025DF4"
                    ],
                    "grid": {
                        "containLabel": true,
                        "bottom": 60,
                        "left": "10%",
                        "right": "10%",
                        "top": 60
                    },
                    "tooltip": {
                        "trigger": "item"
                    },
                    "legend": {
                        "itemWidth": 5,
                        "itemHeight": 5,
                        "left": 0,
                        "top": 0
                    },
                    "series": [
                        {
                            "name": "Access From",
                            "type": "pie",
                            "radius": [
                                "0%",
                                "75%"
                            ],
                            "roseType": "radius",
                            "data": [
                                {
                                    "value": 1048,
                                    "name": "Search Engine"
                                },
                                {
                                    "value": 735,
                                    "name": "Direct"
                                },
                                {
                                    "value": 580,
                                    "name": "Email"
                                },
                                {
                                    "value": 484,
                                    "name": "Union Ads"
                                },
                                {
                                    "value": 300,
                                    "name": "Video Ads"
                                }
                            ],
                            "emphasis": {
                                "itemStyle": {
                                    "shadowBlur": 10,
                                    "shadowOffsetX": 0,
                                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                                }
                            },
                            "label": {
                                "show": true,
                                "color": "#000",
                                "position": "outside"
                            }
                        }
                    ]
                },
                "defineConfig": {
                    "style": [
                        {
                            "name": "宽高",
                            "children": [
                                {
                                    "name": "宽",
                                    "key": "width",
                                    "value": "300",
                                    "type": "input"
                                },
                                {
                                    "name": "高",
                                    "key": "height",
                                    "value": "200",
                                    "type": "input"
                                }
                            ],
                            "type": "next"
                        }
                    ],
                    "chart": [
                        {
                            "name": "图标网格",
                            "key": "grid",
                            "children": [
                                {
                                    "name": "上间",
                                    "key": "top",
                                    "value": "60",
                                    "type": "input"
                                },
                                {
                                    "name": "下间",
                                    "key": "bottom",
                                    "value": "60",
                                    "type": "input"
                                },
                                {
                                    "name": "右间",
                                    "key": "right",
                                    "value": "10%",
                                    "type": "input"
                                },
                                {
                                    "name": "左间",
                                    "key": "left",
                                    "value": "10%",
                                    "type": "input"
                                }
                            ]
                        },
                        {
                            "name": "图例",
                            "key": "legend",
                            "children": [
                                {
                                    "name": "是否显示",
                                    "key": "show",
                                    "value": false,
                                    "type": "switch"
                                },
                                {
                                    "name": "左间距",
                                    "key": "left",
                                    "value": "0",
                                    "type": "input"
                                },
                                {
                                    "name": "上间距",
                                    "key": "top",
                                    "value": "0",
                                    "type": "input"
                                },
                                {
                                    "name": "图标宽",
                                    "key": "itemWidth",
                                    "value": "5",
                                    "type": "input"
                                },
                                {
                                    "name": "图标高",
                                    "key": "itemHeight",
                                    "value": "5",
                                    "type": "input"
                                },
                                {
                                    "name": "元素间距",
                                    "key": "itemGap",
                                    "value": 10,
                                    "type": "input"
                                },
                                {
                                    "name": "排列布局",
                                    "key": "orient",
                                    "value": "horizontal",
                                    "type": "select",
                                    "select": [
                                        {
                                            "name": "横向",
                                            "value": "horizontal"
                                        },
                                        {
                                            "name": "纵向",
                                            "value": "vertical"
                                        }
                                    ]
                                },
                                {
                                    "name": "图标类型",
                                    "key": "icon",
                                    "value": "circle",
                                    "type": "select",
                                    "select": [
                                        {
                                            "name": "圆形",
                                            "value": "circle"
                                        },
                                        {
                                            "name": "方形",
                                            "value": "rect"
                                        },
                                        {
                                            "name": "钝角",
                                            "value": "roundRect"
                                        },
                                        {
                                            "name": "三角形",
                                            "value": "triangle"
                                        },
                                        {
                                            "name": "钻石",
                                            "value": "diamond"
                                        },
                                        {
                                            "name": "箭头",
                                            "value": "arrow"
                                        },
                                        {
                                            "name": "无",
                                            "value": "none"
                                        }
                                    ]
                                },
                                {
                                    "name": "文字样式",
                                    "key": "textStyle",
                                    "children": [
                                        {
                                            "name": "大小",
                                            "key": "fontSize",
                                            "type": "input",
                                            "value": "12"
                                        },
                                        {
                                            "name": "颜色",
                                            "key": "color",
                                            "type": "color",
                                            "value": "#000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": 7,
                "name": "chart8",
                "type": "chart",
                "chartType": "barSingle",
                "mode": "",
                "style": {
                    "width": "200px",
                    "height": "200px"
                },
                "chart": {
                    "color": [
                        "#0060FF",
                        "#1EE4DC",
                        "#FFD71A",
                        "#ff5A18",
                        "#362D78",
                        "#9270CA",
                        "#FF99C3",
                        "#8e7738",
                        "#269A99",
                        "#5B8FF9",
                        "#FF99C3",
                        "#DB6BCF",
                        "#BDD2FD",
                        "#5AD8A6",
                        "#BDEFDB",
                        "#5D7092",
                        "#C2C8D5",
                        "#F6BD16",
                        "#FBE5A2",
                        "#E8684A",
                        "#F6C3B7",
                        "#5B8FF9",
                        "#5AD8A6",
                        "#025DF4"
                    ],
                    "grid": {
                        "containLabel": true,
                        "bottom": 60,
                        "left": "10%",
                        "right": "10%",
                        "top": 60
                    },
                    "xAxis": [
                        {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ],
                            "axisLine": {
                                "onZero": false
                            }
                        },
                        {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ],
                            "axisLine": {
                                "onZero": false
                            }
                        }
                    ],
                    "yAxis": [
                        {
                            "type": "value",
                            "show": true,
                            "axisLine": {
                                "onZero": false
                            }
                        },
                        {
                            "type": "value",
                            "show": true,
                            "axisLine": {
                                "onZero": false
                            }
                        }
                    ],
                    "series": [
                        {
                            "name": "名称",
                            "yAxisIndex": 0,
                            "xAxisIndex": 0,
                            "data": [
                                150,
                                230,
                                224,
                                218,
                                135,
                                147,
                                260
                            ],
                            "type": "bar",
                            "label": {
                                "fontSize": 12,
                                "color": "#000"
                            },
                            "showBackground": false,
                            "backgroundStyle": {
                                "borderColor": "#fff",
                                "color": "#000",
                                "borderWidth": 0,
                                "borderRadius": 0
                            }
                        }
                    ],
                    "animationDuration": 300,
                    "animationDurationUpdate": 300
                },
                "defineConfig": {
                    "style": [
                        {
                            "name": "宽高",
                            "children": [
                                {
                                    "name": "宽",
                                    "key": "width",
                                    "value": "200",
                                    "type": "input"
                                },
                                {
                                    "name": "高",
                                    "key": "height",
                                    "value": "200",
                                    "type": "input"
                                }
                            ],
                            "type": "next"
                        }
                    ],
                    "chart": [
                        {
                            "name": "图标网格",
                            "key": "grid",
                            "children": [
                                {
                                    "name": "上间",
                                    "key": "top",
                                    "value": "60",
                                    "type": "input"
                                },
                                {
                                    "name": "下间",
                                    "key": "bottom",
                                    "value": "60",
                                    "type": "input"
                                },
                                {
                                    "name": "右间",
                                    "key": "right",
                                    "value": "10%",
                                    "type": "input"
                                },
                                {
                                    "name": "左间",
                                    "key": "left",
                                    "value": "10%",
                                    "type": "input"
                                }
                            ]
                        },
                        {
                            "name": "Y轴",
                            "key": "yAxis",
                            "children": [
                                {
                                    "name": "Y左",
                                    "children": [
                                        {
                                            "name": "y1",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "value": "",
                                            "type": "input",
                                            "key": "name"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                },
                                {
                                    "name": "Y右",
                                    "children": [
                                        {
                                            "name": "y2",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "value": "",
                                            "type": "input",
                                            "key": "name"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                }
                            ],
                            "type": "yAxis"
                        },
                        {
                            "name": "X轴",
                            "key": "xAxis",
                            "children": [
                                {
                                    "name": "X下",
                                    "children": [
                                        {
                                            "name": "x1",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                },
                                {
                                    "name": "X上",
                                    "children": [
                                        {
                                            "name": "x2",
                                            "value": true,
                                            "type": "switch",
                                            "key": "show"
                                        },
                                        {
                                            "name": "单位",
                                            "key": "name",
                                            "value": "",
                                            "type": "input"
                                        },
                                        {
                                            "name": "是否两边留白",
                                            "key": "boundaryGap",
                                            "value": false,
                                            "type": "switch"
                                        },
                                        {
                                            "name": "最小值",
                                            "key": "min",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "最大值",
                                            "key": "max",
                                            "value": 0,
                                            "type": "input"
                                        },
                                        {
                                            "name": "分割段数",
                                            "key": "splitNumber",
                                            "value": 5,
                                            "type": "input",
                                            "info": "只在数值轴或时间轴中（type: value 或time）有效。"
                                        },
                                        {
                                            "name": "坐标轴轴线",
                                            "key": "axisLine",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴刻度",
                                            "key": "axisTick",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "坐标轴标签",
                                            "key": "axisLabel",
                                            "children": [
                                                {
                                                    "name": "是否显示",
                                                    "key": "show",
                                                    "type": "switch",
                                                    "value": true
                                                },
                                                {
                                                    "name": "颜色",
                                                    "key": "color",
                                                    "type": "color",
                                                    "value": "#000"
                                                },
                                                {
                                                    "name": "大小",
                                                    "key": "fontSize",
                                                    "type": "input",
                                                    "value": 12
                                                },
                                                {
                                                    "name": "角度",
                                                    "key": "rotate",
                                                    "type": "silder",
                                                    "value": 0,
                                                    "bind": {
                                                        "step": 1,
                                                        "max": 180,
                                                        "min": 0
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "s": "yAxis"
                                }
                            ],
                            "type": "yAxis"
                        },
                        {
                            "name": "图例",
                            "key": "legend",
                            "children": [
                                {
                                    "name": "是否显示",
                                    "key": "show",
                                    "value": false,
                                    "type": "switch"
                                },
                                {
                                    "name": "左间距",
                                    "key": "left",
                                    "value": "auto",
                                    "type": "input"
                                },
                                {
                                    "name": "上间距",
                                    "key": "top",
                                    "value": "auto",
                                    "type": "input"
                                },
                                {
                                    "name": "图标宽",
                                    "key": "itemWidth",
                                    "value": 25,
                                    "type": "input"
                                },
                                {
                                    "name": "图标高",
                                    "key": "itemHeight",
                                    "value": 14,
                                    "type": "input"
                                },
                                {
                                    "name": "元素间距",
                                    "key": "itemGap",
                                    "value": 10,
                                    "type": "input"
                                },
                                {
                                    "name": "排列布局",
                                    "key": "orient",
                                    "value": "horizontal",
                                    "type": "select",
                                    "select": [
                                        {
                                            "name": "横向",
                                            "value": "horizontal"
                                        },
                                        {
                                            "name": "纵向",
                                            "value": "vertical"
                                        }
                                    ]
                                },
                                {
                                    "name": "图标类型",
                                    "key": "icon",
                                    "value": "circle",
                                    "type": "select",
                                    "select": [
                                        {
                                            "name": "圆形",
                                            "value": "circle"
                                        },
                                        {
                                            "name": "方形",
                                            "value": "rect"
                                        },
                                        {
                                            "name": "钝角",
                                            "value": "roundRect"
                                        },
                                        {
                                            "name": "三角形",
                                            "value": "triangle"
                                        },
                                        {
                                            "name": "钻石",
                                            "value": "diamond"
                                        },
                                        {
                                            "name": "箭头",
                                            "value": "arrow"
                                        },
                                        {
                                            "name": "无",
                                            "value": "none"
                                        }
                                    ]
                                },
                                {
                                    "name": "文字样式",
                                    "key": "textStyle",
                                    "children": [
                                        {
                                            "name": "大小",
                                            "key": "fontSize",
                                            "type": "input",
                                            "value": "12"
                                        },
                                        {
                                            "name": "颜色",
                                            "key": "color",
                                            "type": "color",
                                            "value": "#000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "style": {
            "width": "100%",
            "height": "auto",
            "border": "1px solid #fff",
            "padding": "10px 10px 10px 10px",
            "margin": "0px 0px 30px 0px",
            "backgroundColor": "#000"
        },
        "defineConfig": {
            "style": [
                {
                    "name": "宽高",
                    "children": [
                        {
                            "name": "宽",
                            "key": "width",
                            "value": "100%",
                            "type": "input"
                        },
                        {
                            "name": "高",
                            "key": "height",
                            "value": "auto",
                            "type": "input"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "边框",
                    "show": false,
                    "key": "border",
                    "children": [
                        {
                            "name": "宽度",
                            "key": "width",
                            "value": 0,
                            "type": "input"
                        },
                        {
                            "name": "样式",
                            "key": "style",
                            "value": "solid",
                            "type": "select",
                            "select": [
                                {
                                    "name": "直线",
                                    "value": "solid"
                                },
                                {
                                    "name": "虚线",
                                    "value": "dashed"
                                }
                            ]
                        },
                        {
                            "name": "颜色",
                            "key": "color",
                            "value": "#fff",
                            "type": "color"
                        },
                        {
                            "name": "圆角",
                            "key": "radius",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "间距",
                    "children": [
                        {
                            "name": "外间",
                            "key": "margin",
                            "value": [
                                0,
                                0,
                                "30",
                                0
                            ],
                            "type": "Array"
                        },
                        {
                            "name": "内间",
                            "key": "padding",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "背景颜色",
                    "key": "backgroundColor",
                    "value": "#000",
                    "type": "color"
                }
            ],
            "draggableOptions": {
                "disabled": false
            }
        }
    },
    {
        "id": 17,
        "name": "chart18",
        "type": "wrap",
        "tasks": [
            {
                "name": "占位",
                "type": "zw",
                "class": [
                    "no-drag"
                ],
                "style": {
                    "width": "100px",
                    "border": "1px solid red",
                    "padding": "10px 10px 10px 10px"
                }
            }
        ],
        "style": {
            "width": "200px",
            "height": "200px",
            "border": "1px solid #fff",
            "padding": "10px 10px 10px 10px",
            "margin": "0 0 0 0",
            "backgroundColor": "#000"
        },
        "defineConfig": {
            "style": [
                {
                    "name": "宽高",
                    "children": [
                        {
                            "name": "宽",
                            "key": "width",
                            "value": 0,
                            "type": "input"
                        },
                        {
                            "name": "高",
                            "key": "height",
                            "value": 0,
                            "type": "input"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "边框",
                    "show": false,
                    "key": "border",
                    "children": [
                        {
                            "name": "宽度",
                            "key": "width",
                            "value": 0,
                            "type": "input"
                        },
                        {
                            "name": "样式",
                            "key": "style",
                            "value": "solid",
                            "type": "select",
                            "select": [
                                {
                                    "name": "直线",
                                    "value": "solid"
                                },
                                {
                                    "name": "虚线",
                                    "value": "dashed"
                                }
                            ]
                        },
                        {
                            "name": "颜色",
                            "key": "color",
                            "value": "#fff",
                            "type": "color"
                        },
                        {
                            "name": "圆角",
                            "key": "radius",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "间距",
                    "children": [
                        {
                            "name": "外间",
                            "key": "margin",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        },
                        {
                            "name": "内间",
                            "key": "padding",
                            "value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "背景颜色",
                    "key": "backgroundColor",
                    "value": "#000",
                    "type": "color"
                }
            ],
            "draggableOptions": {
                "disabled": false
            }
        }
    }
])
    return {
        list
    }
  },
  components: {
    itemNestVue,
  },
})
</script>

<style scoped>

</style>