import type { Component } from "vue";
import MonitoringChart from "@/components/MonitoringChart.vue";

interface SizesData {
  id: number;
  name: string;
  meter: string;
  value: number;
  chart: Component;
}

const sizesDataArray: SizesData[] = [
  {
    id: 1,
    name: "Peito",
    meter: "(in)",
    value: 80,
    chart: MonitoringChart,
  },
  {
    id: 2,
    name: "Cintura",
    meter: "(in)",
    value: 120,
    chart: MonitoringChart,
  },
  {
    id: 3,
    name: "Quadril",
    meter: "(in)",
    value: 120,
    chart: MonitoringChart,
  },
];

export default sizesDataArray;
