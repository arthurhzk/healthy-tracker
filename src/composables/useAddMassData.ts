import { supabase } from "@/lib/supabase";
import { ref } from "vue";

export function useAddMassData() {
  const initialState = {
    weight: undefined,
    height: undefined,
    imc_value: null || 0,
    created_at: new Date(),
  };

  const massState = ref(initialState);
  const isLoading = ref<boolean>(false);

  const calculateIMC = async () => {
    if (massState.value.weight && massState.value.height) {
      const weight = massState.value.weight;
      const height = massState.value.height / 100;
      const imc = weight / (height * height);
      massState.value.imc_value = imc;
      const { error } = await supabase.from("mass_monitoring").insert(imc);
    }
  };

  const addMassData = async () => {
    isLoading.value = true;
    try {
      calculateIMC();
      const { error } = await supabase
        .from("mass_monitoring")
        .upsert(massState.value);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    addMassData,
    massState,
    isLoading,
  };
}
