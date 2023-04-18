<template>
  <v-form @submit="submitForm">
    <v-row justify="center">
      <v-col cols="10" sm="9">
        <v-text-field
          placeholder="Search a word"
          name="word"
          v-model="wordInput"
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="text-center">
        <v-btn type="submit" icon="mdi-magnify"></v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const wordInput = ref("");
const router = useRouter();

function submitForm(e) {
  e.preventDefault();
  const word = wordInput.value.toLowerCase().trim();
  if (word === "") return;
  router.push(`search/${word}`);
}
</script>
