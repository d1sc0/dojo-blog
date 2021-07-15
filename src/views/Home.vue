<template>
  <section class="home mt-4">
    <div class="container">
      <h1 class="is-size-3 has-text-weight-semibold">Posts</h1>
        <div v-if="error">{{ error }}</div>
          <div v-if="posts.length">
            <PostList :posts="posts" />
          </div>
        <div v-else><Spinner /></div>
    </div>
  </section>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner },
  setup() { 
    const { posts, error, load } = getPosts()
    load()
    return { posts, error }
  },
}
</script>