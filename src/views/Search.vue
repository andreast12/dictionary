<template>
  <Suspense>
    <Header :word="word" />
  </Suspense>
  <Suspense>
    <WordDetails :word="word" />
  </Suspense>
</template>

<script setup>
import WordDetails from "@/components/word/Definitions.vue";
import Header from "@/components/word/Header.vue";
import { useRoute } from "vue-router";
import { useHistoryStore } from "@/store/history";

const route = useRoute();
const historyStore = useHistoryStore();
const word = route.params.word;

historyStore.addItem(word);
</script>
