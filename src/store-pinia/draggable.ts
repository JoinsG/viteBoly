import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "draggable",
  state: () => {
    return {
      name: "user",
      chartWeak: new WeakMap(),
      draggeDomWeak: new WeakMap(),
      copyItem: {
        style: [],
        chart: [],
        data: [],
      },
      chooseAcItem: null,
    };
  },
  getters: {
    getChartSeries: (state) => {
      return state?.chooseAcItem?.chart?.series ?? [];
    },
  },
  actions: {
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
      this.updateCopyItem({style,chart,data})
    },
  },
});
