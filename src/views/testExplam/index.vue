<template>
  <div>
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
        "id": 9,
        "name": "chart10",
        "type": "chart",
        "mode": "barSingle",
        "style": {
            "width": "500px",
            "height": "500px"
        },
        "chart": {
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
                    "type": "bar",
                    "label": {
                        "fontSize": 12,
                        "color": "#000"
                    }
                },
                {
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
                    "type": "bar",
                    "label": {
                        "fontSize": 12,
                        "color": "#000"
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
                                                "max": 360,
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
                                                "max": 360,
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
                                                "max": 360,
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
                                                "max": 360,
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
                                    "type": "type",
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
        "mode": "pieSingle",
        "style": {
            "width": "500px",
            "height": "500px"
        },
        "chart": {
            "grid": {
                "containLabel": true,
                "bottom": 60,
                "left": "10%",
                "right": "10%",
                "top": 60
            },
            "title": {
                "text": "Referer of a Website",
                "subtext": "Fake Data",
                "left": "center"
            },
            "tooltip": {
                "trigger": "item"
            },
            "legend": {},
            "series": [
                {
                    "name": "Access From",
                    "type": "pie",
                    "radius": [
                        "0%",
                        "50%"
                    ],
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
                                    "type": "type",
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
        "id": 5,
        "name": "chart6",
        "type": "chart",
        "mode": "lineSingle",
        "style": {
            "width": "500px",
            "height": "500px"
        },
        "chart": {
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
                    }
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
                                                "max": 360,
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
                                                "max": 360,
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
                                                "max": 360,
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
                                                "max": 360,
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
                                    "type": "type",
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