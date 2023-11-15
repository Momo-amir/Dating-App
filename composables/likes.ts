import { ref, onMounted } from "vue";
import axios from "axios";

export function useLikes() {
 const likes = ref([]);

 onMounted(async () => {
   try {
     const response = await axios.get('http://localhost:5000/api/likes');
     likes.value = response.data;
   } catch (error) {
     console.error(error);
   }
 });

 return { likes };
}
