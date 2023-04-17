<template>
  <v-form action="/search" @submit="preventEmpty">
    <v-row justify="center">
      <v-col cols="10" sm="9">
        <v-text-field
          placeholder="Search a word"
          name="word"
          v-model="word"
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

const word = ref("");

function preventEmpty(e) {
  e.preventDefault();
  if (word.value.trim() === "") return;
  e.target.submit();
}
</script>
