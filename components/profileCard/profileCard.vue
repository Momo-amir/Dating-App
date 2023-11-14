<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <profile-card v-for="person in people" :key="person.id" :person="person" />
  </div>
</template>

<script setup lang="ts">
const people = ref([
  {
    id: 1,
    name: "John Doe",
    image: "https://source.unsplash.com/random/300x200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "male", // New field for gender
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://source.unsplash.com/random/300x200",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gender: "female", // New field for gender
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: "https://source.unsplash.com/random/300x200",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gender: "non-binary", // New field for gender
  },
  {
    id: 4,
    name: "Taylor Brown",
    image: "https://source.unsplash.com/random/300x200",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    gender: "other", // New field for gender
  },
  {
    id: 5,
    name: "Jordan White",
    image: "https://source.unsplash.com/random/300x200",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "male", // New field for gender
  },
  // Add more people data here
]);
</script>
