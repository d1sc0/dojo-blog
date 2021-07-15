<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
    <h2 class="title my-5">{{ post.title }}</h2>
    </router-link> 
    <div class="post-body content my-3">{{ snippet }}</div>
    <div class="post-tags">
    <span v-for="tag in post.tags" :key="tag">
      <div class="tag is-secondary mx-2">#{{ tag }}</div>
    </span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })
    return { snippet }
  }
}
</script>

<style>
</style>