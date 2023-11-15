import { ref, onMounted } from "vue";
import axios from "axios";

export function useProfilePictures() {
  const profilePictures = ref([]);

  onMounted(async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/profilepictures"
      );
      profilePictures.value = response.data;
    } catch (error) {
      console.error(error);
    }
  });

  return { profilePictures };
}
