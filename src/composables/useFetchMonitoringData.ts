import { supabase } from "@/lib/supabase";
import { ref, computed } from "vue";

export function useFetchMonitoringData() {
  const monitoring = ref<null | any[]>(null);

  const fetchMonitoringData = async () => {
    const { data, error } = await supabase.from("monitoring").select();
    monitoring.value = data;
    console.log(data);
  };

  const getLastGlicemyValue = computed(() => {
    if (monitoring.value) {
      return monitoring.value[monitoring.value.length - 1].glicemy;
    }
    return null;
  });
  const getLastHeartBeatValue = computed(() => {
    if (monitoring.value) {
      return monitoring.value[monitoring.value.length - 1].heart_beat;
    }
    return null;
  });
  const getLastPressureValue = computed(() => {
    if (monitoring.value) {
      return monitoring.value[monitoring.value.length - 1].pressure;
    }
    return null;
  });

  fetchMonitoringData();

  return {
    monitoring,
    getLastGlicemyValue,
    getLastHeartBeatValue,
    getLastPressureValue,
    fetchMonitoringData,
  };
}
