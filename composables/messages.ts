import { ref, onMounted } from "vue";
import axios from "axios";

export function useMessages() {
 const messages = ref([]);

 onMounted(async () => {
   try {
     const response = await axios.get('http://localhost:5000/api/messages');
     messages.value = response.data;
   } catch (error) {
     console.error(error);
   }
 });

 return { messages };
}
