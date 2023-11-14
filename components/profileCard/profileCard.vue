<template>
  <div class="card card-image-cover">
    <img :src="person.image" alt="" />
    <div class="card-body">
      <h2 class="card-header">{{ person.name }}</h2>
      <p class="text-content2">{{ person.description }}</p>
      <div class="card-footer">
        <button class="btn-primary btn" @click="likePerson(person.id)">
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  person: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
}>();

const likePerson = (personId: number) => {
  console.log("Liked person with id: ", personId);
  //TODO - add code to like person
};
</script>
