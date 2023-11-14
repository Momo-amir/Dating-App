<template>
  <div class="modal-content flex w-full flex-col gap-5 p-7">
    <div class="flex flex-col gap-2">
      <h2 class="text-center text-2xl font-semibold">Profile</h2>
      <p class="mx-auto max-w-xs text-sm text-content2">
        Your profile information.
      </p>
    </div>

    <section>
      <div class="form-group">
        <div class="form-field">
          <label class="form-label"></label>
          <img
            :src="profileData.profilePicture"
            class="w-32 h-32 rounded-full mx-auto" />
          <div
            class="text-center hover:underline text-blue-500 cursor-pointer"
            @click="handlePictureChange">
            Change Picture
          </div>
        </div>

        <div class="form-field">
          <label class="form-label">Name</label>
          <p>{{ fullName }}</p>
        </div>
        <div class="form-field">
          <label class="form-label">Identify as</label>
          <p>{{ profileData.gender }}</p>
        </div>
        <div class="form-field">
          <label class="form-label">Email address</label>
          <p>{{ profileData.email }}</p>
        </div>

        <div class="form-field">
          <label class="form-label">About Me</label>
          <p>{{ profileData.aboutMe }}</p>
        </div>

        <div class="form-field">
          <label class="form-label">City</label>
          <p>{{ profileData.city }}</p>
        </div>

        <div class="form-field">
          <label class="form-label">Interested In</label>
          <p>{{ profileData.interestedIn }}</p>
        </div>

        <div class="form-field">
          <label class="form-label">Birthday</label>
          <p>{{ profileData.birthday }}</p>
        </div>

        <div class="form-field pt-5">
          <div class="form-control justify-between">
            <button
              @click="handleProfileUpdate"
              type="button"
              class="btn btn-primary w-full">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProfileData } from "@/composables/useProfileData";

const { profileData } = useProfileData();

const fullName = computed(() => {
  return `${profileData.value.firstName} ${profileData.value.lastName}`;
});
const handleProfileUpdate = () => {
  // Here you can add code to open the profile update form
};

const handlePictureChange = () => {
  // Here you can add code to handle profile picture change
};
</script>
