<script setup>
import {queryCollection} from "@nuxt/content/nitro";

const {data: home} = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>


  <!--  <ContentRenderer v-if="home" :value="home" />-->
  <!--  <div v-else>Home not found-->
  <!--  </div>-->


  <ul>
    <li>
      <a href="lessons/beginner">If You know 0-10 letters, go to beginners' section</a>
    </li>
    <li>
      <a href="lessons/intermediate">If You know 0-10 thai words, go to the intermediate section</a>
    </li>
    <li>
      <a href="lessons/advanced">If you read thai with ease and want to expand the vocabulary, go to advanced section</a>
    </li>
  </ul>

</template>