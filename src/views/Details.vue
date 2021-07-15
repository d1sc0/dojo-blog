<template>
  <section class="details container is-fluid">
      <div v-if="error">{{ error }}</div>
        <div v-if="post" class="post">
          <h1 class="is-size-3 has-text-weight-semibold mt-4">{{ post.title }}</h1>
          <p class="content">{{ post.body }}</p>
        </div>
      <div v-else><Spinner /></div>
  </section>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Details',
  components: {Spinner},
  props: [ 'id' ],
  setup(props) {
    const {post, error, load} = getPost(props.id)

    load()

    return { post, error }
  }
}
</script>