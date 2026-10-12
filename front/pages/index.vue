<script setup>

const {data: home} = await useAsyncData(() => queryCollection('content').path('/').first())
useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>

  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found
  </div>


  <br>
  <!--  <div>Welcome to Thai reading course</div>-->
  <!--  <div>Choose Level</div>-->
  <!--  # Welcome to Thai reading course-->

  <!--  # Choose Level-->

  <!--  <ul>-->
  <!--    <li>-->
  <!--      <a href="lessons/01">If You know 0-10 letters, go to beginners' section</a>-->
  <!--    </li>-->
  <!--    <li>-->
  <!--      <a href="lessons/05">If You know 0-10 thai words, go to the intermediate section</a>-->
  <!--    </li>-->
  <!--    <li>-->
  <!--      <a href="lessons/10">If you read thai with ease and want to expand the vocabulary, go to advanced section</a>-->
  <!--    </li>-->
  <!--  </ul>-->


</template>