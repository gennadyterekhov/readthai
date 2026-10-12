<script setup>
import PlaySound from "~/components/PlaySound.vue";

const props = defineProps({
  phoneme: { type: String, required: false, default: null },
  p: { type: String, required: false, default: null },
})

</script>

<template>
  <PlaySound v-if="p" :src="`/sounds/${p}.ogg`" :label="`🔊`" ></PlaySound>
  <PlaySound v-if="phoneme"  :src="`/sounds/${phoneme}.ogg`" :label="`🔊`" ></PlaySound>
</template>

<style scoped>
</style>