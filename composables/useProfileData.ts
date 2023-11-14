import { ref } from "vue";

export function useProfileData() {
  const profileData = ref({
    email: "", // This should be filled with the signed in user's email
    firstName: "",
    lastName: "",
    aboutMe: "",
    city: "",
    interestedIn: "",
    birthday: "",
    gender: "", // New field for gender
    profilePicture: "",
  });

  return { profileData };
}
