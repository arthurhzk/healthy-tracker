import { supabase } from "@/lib/supabase";
import { ref, computed } from "vue";
const massMonitoring = ref<null | any[]>(null);
export function useFetchMassData() {
  const fetchMassData = async () => {
    try {
      const { data, error } = await supabase.from("mass_monitoring").select();
      massMonitoring.value = data;
      console.log(massMonitoring);
    } catch (error) {
      console.log(error);
    }
  };

  fetchMassData();

  const getLastHeight = computed(() => {
    if (massMonitoring.value) {
      return massMonitoring.value[massMonitoring.value.length - 1].height;
    }
  });

  const getLastWeight = computed(() => {
    if (massMonitoring.value) {
      return massMonitoring.value[massMonitoring.value.length - 1].weight;
    }
  });

  return { fetchMassData, massMonitoring, getLastWeight, getLastHeight };
}
