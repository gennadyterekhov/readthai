<script setup>

const {data: home} = await useAsyncData(() => queryCollection('content').path('/').first())

const {data: posts} = await useAsyncData('blog', () => queryCollection('content').all())

const route = useRoute()
const lessonNumber = route.params.lessonNumber
console.log(lessonNumber)
useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>

  <div v-for="post in posts" :key="post.id">
    <div v-if="post.path.includes(lessonNumber)">
      <ContentRenderer v-if="post" :value="post" />
    </div>
  </div>



</template>