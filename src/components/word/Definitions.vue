<template>
  <h4 v-if="notFound">No definitions found</h4>
  <ul v-else>
    <li v-for="(item, index) in data">
      <ol>
        <li v-for="meaning in item.meanings" class="ml-5">
          <h5>{{ meaning.partOfSpeech }}</h5>
          <ul>
            <li v-for="definition in meaning.definitions" class="ml-5">
              {{ definition.definition }}
            </li>
          </ul>
        </li>
      </ol>
      <v-divider
        v-if="index < data.length - 1"
        class="border-opacity-25 my-4"
      ></v-divider>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  word: String,
});

let notFound = false;
const res = await fetch(
  `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`
);
if (res.status === 404) notFound = true;
const data = await res.json();
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
