<template>
    <section class="tags container is-fluid">
        <div v-if="error">{{ error }}</div>
          <div v-if="posts.length">
            <h2 class="is-size-6 has-text-weight-semibold my-3">Tagged Posts</h2>
            <PostList :posts="postsWithTag" />
          </div>
        <div v-else><Spinner /></div>
    </section>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'Tag',
  components: { PostList, Spinner },
  setup() { 
    const route = useRoute()
    const { posts, error, load } = getPosts()
    load()
    const postsWithTag = computed(() => {
      return posts.value.filter( (p) => p.tags.includes(route.params.tag) )
    })
    return {error, posts, postsWithTag}
  },
}
</script>