"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueChartjs = require("vue-chartjs");

var reactiveProp = _vueChartjs.mixins.reactiveProp;
var _default = {
  "extends": _vueChartjs.Bar,
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
};
exports["default"] = _default;