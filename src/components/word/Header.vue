<template>
  <v-btn
    class="bg-grey-darken-4 mb-3"
    prepend-icon="mdi-arrow-left-thick"
    @click="$router.push('/')"
    >Back</v-btn
  >
  <h1>{{ word }}</h1>

  <div class="d-flex" v-if="!notFound">
    <div v-for="(item, index) in data" class="mr-1">
      <v-btn
        icon="mdi-volume-high"
        variant="text"
        density="compact"
        @click="playAudio(index)"
      ></v-btn>
      <span>{{ item.text }}</span>
      <audio :id="`audio${index}`">
        <source :src="item.audio" type="audio/mpeg" />
      </audio>
    </div>
  </div>

  <v-divider
    :thickness="3"
    class="border-opacity-75 text-grey-darken-4 my-4"
  ></v-divider>
</template>

<script setup>
const props = defineProps({
  word: String,
});

let notFound = false;
let data;
const res = await fetch(
  `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`
);
if (res.status === 404) notFound = true;
else {
  data = (await res.json())[0].phonetics;
  data = data.filter((item) => item.audio !== "");
}

function playAudio(index) {
  const audioElement = document.querySelector(`#audio${index}`);
  audioElement.play();
}
</script>
