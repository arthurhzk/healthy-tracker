import type { Component } from "vue";
import BloodSugar from "@/assets/icons/BloodSugar.vue";
import HeartCheck from "@/assets/icons/HeartCheck.vue";
import BloodPressure from "@/assets/icons/BloodPressure.vue";
import MonitoringChart from "@/components/MonitoringChart.vue";
import { useFetchMonitoringData } from "@/composables/useFetchMonitoringData";

const { getLastGlicemyValue, getLastHeartBeatValue, getLastPressureValue } =
  useFetchMonitoringData();

interface MonitoringData {
  id: number;
  name: string;
  meter: string;
  value: any;
  status: string;
  icon: Component;
  chart: Component;
}

const monitoringDataArray: MonitoringData[] = [
  {
    id: 1,
    name: "Glicemia no Sangue",
    meter: "mg/dL",
    value: getLastGlicemyValue,
    status: "Normal",
    icon: BloodSugar,
    chart: MonitoringChart,
  },
  {
    id: 2,
    name: "Batimentos cardíacos",
    meter: "bpm",
    value: getLastHeartBeatValue,
    status: "Normal",
    icon: HeartCheck,
    chart: MonitoringChart,
  },
  {
    id: 3,
    name: "Pressão arterial",
    meter: "mmhg",
    value: getLastPressureValue,
    status: "Normal",
    icon: BloodPressure,
    chart: MonitoringChart,
  },
];

export default monitoringDataArray;
