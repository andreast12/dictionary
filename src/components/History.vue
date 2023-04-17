<template>
  <h2>History</h2>
  <v-list density="compact" class="bg-grey-lighten-2">
    <v-list-item v-for="item in historyStore.history">
      <router-link
        :to="`/search?word=${item}`"
        class="text-black text-decoration-none"
        >{{ item }}</router-link
      >
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useHistoryStore } from "@/store/history";

const historyStore = useHistoryStore();
</script>
