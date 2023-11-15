import { ref, onMounted } from "vue";
import axios from "axios";

export function useOldMessages() {
 const oldMessages = ref([]);

 onMounted(async () => {
   try {
     const response = await axios.get('http://localhost:5000/api/oldmessages');
     oldMessages.value = response.data;
   } catch (error) {
     console.error(error);
   }
 });

 return { oldMessages };
}
