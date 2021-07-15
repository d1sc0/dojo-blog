<template>
    <div class="tags are-medium is-rounded my-3">
     <div v-for="tag in tags" :key="tag">
       <router-link :to="{ name: 'Tag', params: { tag }}">
        <span class="tag is-warning mx-2">#{{tag}}</span>
       </router-link>
     </div>
    </div>
</template>

<script>
import useTags from '../composables/getTags'
export default {
  setup(props) {
    const { tags } = useTags(props.posts)
    return { tags }
  },
  props: ['posts']
}
</script>

