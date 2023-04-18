<template>
  <h2>History</h2>
  <ul>
    <li
      v-for="word in historyStore.history"
      class="d-flex justify-space-between bg-grey-lighten-2 pa-2 mb-1"
      @click="(e) => clickItem(e, word)"
    >
      <p>{{ word }}</p>
      <v-icon icon="mdi-delete" color="red"></v-icon>
    </li>
  </ul>
</template>

<script setup>
import { useHistoryStore } from "@/store/history";
import { useRouter } from "vue-router";

const historyStore = useHistoryStore();
const router = useRouter();

function clickItem(e, word) {
  // If click on delete icon
  if (e.target.tagName === "I") {
    historyStore.deleteItem(word);
  } else {
    // Open the corresponding page
    router.push(`/search/${word}`);
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
