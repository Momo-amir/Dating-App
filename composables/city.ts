import { ref, onMounted } from "vue";
import axios from "axios";

export function useCity() {
 const city = ref([]);

 onMounted(async () => {
   try {
     const response = await axios.get('http://localhost:5000/api/city');
     city.value = response.data;
   } catch (error) {
     console.error(error);
   }
 });

 return { city };
}
