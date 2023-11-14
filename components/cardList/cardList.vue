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
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://source.unsplash.com/random/300x200",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Jane Smith",
    image: "https://source.unsplash.com/random/300x200",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Jane Smith",
    image: "https://source.unsplash.com/random/300x200",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Jane Smith",
    image: "https://source.unsplash.com/random/300x200",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more people data here
]);
</script>
