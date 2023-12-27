import { supabase } from "@/lib/supabase";
import { ref, computed } from "vue";

export function useFetchSizeData() {
  const sizeMonitoring = ref<null | any[]>(null);

  const fetchSizeData = async () => {
    const { data, error } = await supabase.from("size_monitoring").select();
    sizeMonitoring.value = data;
    console.log(data);
  };

  const getLastChestValue = computed(() => {
    if (sizeMonitoring.value) {
      return sizeMonitoring.value[sizeMonitoring.value.length - 1].chest;
    }
    return null;
  });
  const getLastWaistValue = computed(() => {
    if (sizeMonitoring.value) {
      return sizeMonitoring.value[sizeMonitoring.value.length - 1].waist;
    }
    return null;
  });
  const getLastHipsValue = computed(() => {
    if (sizeMonitoring.value) {
      return sizeMonitoring.value[sizeMonitoring.value.length - 1].hips;
    }
    return null;
  });

  fetchSizeData();

  return {
    sizeMonitoring,
    getLastChestValue,
    getLastWaistValue,
    getLastHipsValue,
    fetchSizeData,
  };
}
