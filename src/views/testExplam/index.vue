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
        "id": 5,
        "name": "chart6",
        "type": "wrap",
        "tasks": [
            {
                "id": 9,
                "name": "chart10",
                "type": "wrap",
                "tasks": [
                    {
                        "id": 13,
                        "name": "chart14",
                        "type": "text",
                        "style": {
                            "width": "auto",
                            "height": "auto",
                            "border": "0px solid #fff",
                            "padding": "10px 10px 10px 10px",
                            "margin": "0 0 0 0",
                            "color": "#fff"
                        },
                        "defineConfig": {
                            "style": [
                                {
                                    "name": "宽高",
                                    "value": [
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
                                    "value": [
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
                                    "value": [
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
                                    "name": "颜色",
                                    "type": "next",
                                    "value": [
                                        {
                                            "key": "color",
                                            "value": "#fff",
                                            "type": "color"
                                        }
                                    ]
                                }
                            ],
                            "data": [
                                {
                                    "name": "内容",
                                    "value": [
                                        {
                                            "name": "文字",
                                            "key": "text",
                                            "value": "测试",
                                            "type": "input"
                                        }
                                    ],
                                    "type": "next"
                                }
                            ]
                        },
                        "data": {
                            "text": "测试"
                        }
                    }
                ],
                "style": {
                    "width": "200px",
                    "height": "200px",
                    "border": "1px solid #fff",
                    "padding": "10px 10px 10px 10px",
                    "margin": "0 0 0 0"
                },
                "defineConfig": {
                    "style": [
                        {
                            "name": "宽高",
                            "value": [
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
                            "value": [
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
                            "value": [
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
                "type": "text",
                "style": {
                    "width": "100px",
                    "height": "auto",
                    "border": "0px solid #fff",
                    "padding": "10px 10px 10px 10px",
                    "margin": "0 0 0 0",
                    "color": "#fff"
                },
                "defineConfig": {
                    "style": [
                        {
                            "name": "宽高",
                            "value": [
                                {
                                    "name": "宽",
                                    "key": "width",
                                    "value": "100",
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
                            "value": [
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
                            "value": [
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
                            "name": "颜色",
                            "type": "next",
                            "value": [
                                {
                                    "key": "color",
                                    "value": "#fff",
                                    "type": "color"
                                }
                            ]
                        }
                    ],
                    "data": [
                        {
                            "name": "内容",
                            "value": [
                                {
                                    "name": "文字",
                                    "key": "text",
                                    "value": "不知道",
                                    "type": "input"
                                }
                            ],
                            "type": "next"
                        }
                    ]
                },
                "data": {
                    "text": "不知道"
                }
            }
        ],
        "style": {
            "width": "100%",
            "height": "auto",
            "border": "1px solid #fff",
            "padding": "10px 10px 10px 10px",
            "margin": "0 0 0 0",
            "border-width": "2px",
            "border-style": "dashed",
            "border-color": "rgba(103, 2, 2, 1)"
        },
        "defineConfig": {
            "style": [
                {
                    "name": "宽高",
                    "value": [
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
                    "value": [
                        {
                            "name": "宽度",
                            "key": "width",
                            "value": "2",
                            "type": "input"
                        },
                        {
                            "name": "样式",
                            "key": "style",
                            "value": "dashed",
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
                            "value": "rgba(103, 2, 2, 1)",
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
                    "value": [
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
                }
            ],
            "draggableOptions": {
                "disabled": false
            }
        }
    },
    {
        "id": 7,
        "name": "chart8",
        "type": "text",
        "style": {
            "width": "100px",
            "height": "auto",
            "border": "0px solid #fff",
            "padding": "0px 20px 0px 0px",
            "margin": "0px 0px 0px 10px",
            "color": "rgba(214, 1, 189, 1)"
        },
        "defineConfig": {
            "style": [
                {
                    "name": "宽高",
                    "value": [
                        {
                            "name": "宽",
                            "key": "width",
                            "value": "100",
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
                    "value": [
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
                    "value": [
                        {
                            "name": "外间",
                            "key": "margin",
                            "value": [
                                0,
                                0,
                                0,
                                "10"
                            ],
                            "type": "Array"
                        },
                        {
                            "name": "内间",
                            "key": "padding",
                            "value": [
                                0,
                                "20",
                                0,
                                0
                            ],
                            "type": "Array"
                        }
                    ],
                    "type": "next"
                },
                {
                    "name": "颜色",
                    "type": "next",
                    "value": [
                        {
                            "key": "color",
                            "value": "rgba(214, 1, 189, 1)",
                            "type": "color"
                        }
                    ]
                }
            ],
            "data": [
                {
                    "name": "内容",
                    "value": [
                        {
                            "name": "文字",
                            "key": "text",
                            "value": "文字22222222",
                            "type": "input"
                        }
                    ],
                    "type": "next"
                }
            ]
        },
        "data": {
            "text": "文字22222222"
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