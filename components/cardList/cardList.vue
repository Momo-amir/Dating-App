<template>
  <div class="flex flex-wrap gap-4">
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
  // Add more people data here
]);
</script>
