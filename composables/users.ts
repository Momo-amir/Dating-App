import { ref, onMounted } from "vue";
import axios from "axios";

export function useUsers() {
 const users = ref([]);

 onMounted(async () => {
   try {
     const response = await axios.get('http://localhost:5000/api/users');
     users.value = response.data;
   } catch (error) {
     console.error(error);
   }
 });

 return { users };
}
