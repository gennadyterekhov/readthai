<script setup lang="ts">
const {data: posts} = await useAsyncData('blog', () => queryCollection('content').all())
</script>

<template>
  <div>
    <h1>All Lessons</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <!--v-if="post.id !== 'content/index.md'" -->

        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
