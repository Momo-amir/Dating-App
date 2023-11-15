import { ref, onMounted } from "vue";
import axios from "axios";

export function useGender() {
 const gender = ref([]);

 onMounted(async () => {
   try {
     const response = await axios.get('http://localhost:5000/api/gender');
     gender.value = response.data;
   } catch (error) {
     console.error(error);
   }
 });

 return { gender };
}
