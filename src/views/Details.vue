<template>
  <section class="details container is-fluid">
      <div v-if="error">{{ error }}</div>
        <div v-if="post" class="post">
          <h1 class="is-size-3 has-text-weight-semibold mt-4">{{ post.title }}</h1>
          <p class="content">{{ post.body }}</p>
          <button class="button" @click="handleClick">Delete Post</button>
        </div>
      <div v-else><Spinner /></div>
  </section>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { db } from '../firebase/config'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'Details',
  components: {Spinner},
  props: [ 'id' ],
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const {post, error, load} = getPost(props.id)

    load()

    const handleClick = async () => {
      await db.collection('posts')
      .doc(props.id)
      .delete()

    router.push({name: 'Home'})
    }

    return { post, error, handleClick }
  }
}
</script>