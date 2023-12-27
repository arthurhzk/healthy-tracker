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

  const calculateIMC = computed(() => {
    const height = getLastHeight.value;
    const weight = getLastWeight.value;

    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      const fixedValue = bmi.toFixed(2);
      const valueToNumber = parseFloat(fixedValue);
      return valueToNumber;
    } else {
      return null;
    }
  });

  return {
    fetchMassData,
    massMonitoring,
    getLastWeight,
    getLastHeight,
    calculateIMC,
  };
}
