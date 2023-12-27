import { supabase } from "@/lib/supabase";

export function useDeleteMassData() {
  const handleDeleteData = async (id: string) => {
    try {
      const { error } = await supabase
        .from("mass_monitoring")
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
