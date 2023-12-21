import { supabase } from "@/lib/supabase";
import { ref } from "vue";

export function useAddMassData() {
  const initialState = {
    weight: undefined,
    height: undefined,
    created_at: new Date(),
  };

  const massState = ref(initialState);
  const isLoading = ref<boolean>(false);

  const addMassData = async () => {
    isLoading.value = true;

    try {
      const { error } = await supabase
        .from("mass_monitoring")
        .upsert(massState.value);
    } catch (error) {
      console.log(error);
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
