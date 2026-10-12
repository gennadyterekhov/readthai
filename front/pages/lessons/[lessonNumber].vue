<script setup>

const { data: posts } = await useAsyncData('blog', () => queryCollection('content').all())

const route = useRoute()
const lessonNumber = route.params.lessonNumber

// Find the current post index
const currentIndex = computed(() => {
  return posts.value?.findIndex(post => post.path.includes(lessonNumber)) ?? -1
})

const currentPost = computed(() => {
  if (currentIndex.value > 0) {
    return posts.value[currentIndex.value]
  }
  return null
})

// Get previous and next posts
const previousPost = computed(() => {
  if (currentIndex.value > 0) {
    return posts.value[currentIndex.value - 1]
  }
  return null
})

const nextPost = computed(() => {
  if (currentIndex.value >= 0 && currentIndex.value < posts.value.length - 1) {
    return posts.value[currentIndex.value + 1]
  }
  return null
})

useSeoMeta({
  title: currentPost?.value?.title,
  description: currentPost?.value?.description
})
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <div v-if="post.path.includes(lessonNumber)">
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </div>

    <nav class="post-navigation">
      <div class="nav-previous">
        <NuxtLink v-if="previousPost" :to="previousPost.path">
          ← Previous: {{ previousPost.title }}
        </NuxtLink>
      </div>
      <div class="nav-next">
        <NuxtLink v-if="nextPost" :to="nextPost.path">
          Next: {{ nextPost.title }} →
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.post-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  gap: 1rem;
}

.nav-previous,
.nav-next {
  flex: 1;
}

.nav-next {
  text-align: right;
}

.post-navigation a {
  text-decoration: none;
  color: inherit;
}

.post-navigation a:hover {
  text-decoration: underline;
}
</style>