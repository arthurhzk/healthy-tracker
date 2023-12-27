import { supabase } from "@/lib/supabase";
import { ref } from "vue";

export function useAddSizeData() {
  const initialState = {
    chest: undefined,
    waist: undefined,
    hips: undefined,
    created_at: new Date(),
  };

  const sizeState = ref(initialState);
  const isLoading = ref<boolean>(false);

  const addSizeData = async () => {
    isLoading.value = true;

    try {
      const { error } = await supabase
        .from("size_monitoring")
        .upsert(sizeState.value);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    addSizeData,
    sizeState,
    isLoading,
  };
}
