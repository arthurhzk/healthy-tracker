import { supabase } from "@/lib/supabase";

export function useDeleteSizeData() {
  const handleDeleteData = async (id: string) => {
    try {
      const { error } = await supabase
        .from("size_monitoring")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting data:", error);
      } else {
        console.log("Data with id", id, "deleted successfully");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return { handleDeleteData };
}
