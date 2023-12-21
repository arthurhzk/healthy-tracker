import { supabase } from "@/lib/supabase";
import { ref } from "vue";

export function useAddMonitoringData() {
  const initialState = {
    glicemy: undefined,
    heart_beat: undefined,
    pressure: undefined,
    created_at: new Date(),
  };

  const monitoringState = ref(initialState);
  const isLoading = ref<boolean>(false);

  const addMonitoringData = async () => {
    isLoading.value = true;

    try {
      const { error } = await supabase
        .from("monitoring")
        .upsert(monitoringState.value);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    addMonitoringData,
    monitoringState,
    isLoading,
  };
}
