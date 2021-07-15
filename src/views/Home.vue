<template>
  <section class="home container is-fluid">
        <div v-if="error">{{ error }}</div>
          <div v-if="posts.length">
           <div class="columns">
            <div class="column is-three-quarters">
              <h2 class="is-size-6 has-text-weight-semibold my-3">All Posts</h2>
              <PostList :posts="posts" />
            </div>
            <div class="column">
              <h2 class="is-size-6 has-text-weight-semibold my-3">Tag Cloud</h2>
              <TagCloud :posts="posts" />
            </div>
          </div> 
          </div>
        <div v-else><Spinner /></div>
  </section>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() { 
    const { posts, error, load } = getPosts()
    load()
    return { posts, error }
  },
}
</script>