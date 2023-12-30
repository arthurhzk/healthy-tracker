import axios from "axios";
import { ref } from "vue";

export const useFetchReceipe = () => {
  const receipes = ref<any[]>([]);
  const fetchReceipe = async function () {
    const apiUrl = `https://api.spoonacular.com/recipes/findByNutrients`;

    try {
      const response = await axios.get(apiUrl, {
        params: {
          apiKey: "d8f3d20e8bb5431cb41b7366c61ae218",
          maxCalories: 150,
          minCalories: 100,
        },
      });
      receipes.value = response.data.slice(0, 9);
    } catch (error) {
      console.log(error);
    }
  };

  fetchReceipe();

  return { receipes };
};
