<template>
  <div class="modal-content flex w-full flex-col gap-5 p-7">
    <div class="flex flex-col gap-2">
      <h2 class="text-center text-2xl font-semibold">Profile</h2>
      <p class="mx-auto max-w-xs text-sm text-content2">
        Update your profile information.
      </p>
    </div>

    <section>
      <div class="form-group">
        <div class="form-field">
          <label class="form-label">Email address</label>
          <input
            v-model="profileData.email"
            type="email"
            class="input max-w-full"
            disabled />
        </div>

        <div class="form-field">
          <label class="form-label">About Me</label>
          <textarea
            v-model="profileData.aboutMe"
            class="input max-w-full"></textarea>
        </div>

        <div class="form-field">
          <label class="form-label">City</label>
          <input
            v-model="profileData.city"
            type="text"
            class="input max-w-full" />
        </div>

        <div class="form-field">
          <label class="form-label">Interested In</label>
          <select v-model="profileData.interestedIn" class="input max-w-full">
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="all">All</option>
          </select>
        </div>

        <div class="form-field">
          <label class="form-label">Height</label>
          <input
            v-model="profileData.height"
            type="number"
            class="input max-w-full" />
        </div>

        <div class="form-field">
          <label class="form-label">Birthday</label>
          <input
            v-model="profileData.birthday"
            type="date"
            class="input max-w-full" />
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

const profileData = ref({
  email: "", // This should be filled with the signed in user's email
  aboutMe: "",
  city: "",
  interestedIn: "",
  height: "",
  birthday: "",
});

const handleProfileUpdate = () => {
  console.log(profileData.value);
  // Here you can add code to send the updated profile data to your backend
};
</script>
