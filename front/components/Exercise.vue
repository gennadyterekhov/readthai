<script setup>
const props = defineProps({
  t: {type: String, required: true},//text
  e: {type: Array, required: false, default: []},//expected
})
const inputRef = ref('')

const resultRef = ref('')

function check(word) {
  console.log('check', inputRef.value)
  if (props.e.includes(inputRef?.value?.trim())) {
    resultRef.value = '✅'
  } else {
    resultRef.value = '❌'
  }
}

</script>

<template>
  <span>{{ t }}</span>
  <input v-model="inputRef" class="exercise-input" @keydown.enter="check">
  <button @click="check()">Check</button>
  {{ resultRef }}
  <br>
</template>

<style scoped>
.exercise-input {

  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}
</style>