import { defineStore } from "pinia";
import { ref } from "vue";

export const useHistoryStore = defineStore("history", () => {
  const history = ref(JSON.parse(localStorage.getItem("history")));
  if (history.value === null) {
    history.value = [];
    localStorage.setItem("history", JSON.stringify(history.value));
  }

  function addItem(word) {
    // remove if older instance exists
    history.value = history.value.filter((item) => item !== word);

    history.value.unshift(word);
    localStorage.setItem("history", JSON.stringify(history.value));
  }

  return { history, addItem };
});
