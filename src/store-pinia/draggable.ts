import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "draggable",
  state: () => {
    return {
      name: "user",
      chartWeak: new WeakMap(),//存放数据图形表格
      draggeDomWeak: new WeakMap(),//用来存放判断dom
      copyItem: {
        style: [],
        chart: [],
        data: [],
      },
      chooseAcItem: null,
      scaleNumber:1,
      totalTreeLists:[]
    };
  },
  getters: {
    getChartSeries: (state) => {
      return state?.chooseAcItem?.chart?.series ?? [];
    },
    getChooseChartItem: (state) => {
      return state?.chooseAcItem;
    },
    getScaleNumber: (state) => {
      return state?.scaleNumber;
    },
    getTotalTreeLists: (state) => {
      return state?.totalTreeLists;
    }
  },
  actions: {
    setScaleNumber(value){
      this.scaleNumber = value
    },
    setDraggeDom(value, el) {
      this.draggeDomWeak.set(el, value);
    },
    updateCopyItem({ style = [], chart = [], data = [] }) {
      this.copyItem = {
        style,
        chart,
        data,
      };
    },
    setWeakChart(value, elChart) {
      this.chartWeak.set(value.defineConfig.chart, elChart);
      this.chartWeak.set(value.defineConfig.style, elChart);
      value.defineConfig.data &&
        this.chartWeak.set(value.defineConfig.data, elChart);
    },
    setChooseChart(value) {
      if (this.chooseAcItem === value) {
        return;
      }
      let { style, chart, data } = value.defineConfig;
      this.chooseAcItem = value;
      this.updateCopyItem({ style, chart, data });
    },
    //增加数据
    addChartSeries(value) {
      this.chooseAcItem?.chart?.series.push(value);
    },
    //删除数据
    delChartSeries(index) {
      this.chooseAcItem?.chart?.series.splice(index, 1)
      let a = this.chooseAcItem.chart.series;
      this.chooseAcItem.chart.series = [];
      this.chooseAcItem.chart.series = a;
    },
  },
});
