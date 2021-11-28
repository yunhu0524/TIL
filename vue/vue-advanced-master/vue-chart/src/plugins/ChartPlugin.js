import Chart from "chart.js";
export default {
  install(Vue) {
    console.log(Vue.prototype);
    Vue.prototype.$_Chart = Chart;
  },
};
