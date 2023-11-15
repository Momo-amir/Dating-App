import { ref, onMounted } from "vue";
import axios from "axios";

export function useUserProfile() {
 const userProfile = ref([]);

 onMounted(async () => {
   try {
     const response = await axios.get('http://localhost:5000/api/userprofile');
     userProfile.value = response.data;
   } catch (error) {
     console.error(error);
   }
 });

 return { userProfile };
}
