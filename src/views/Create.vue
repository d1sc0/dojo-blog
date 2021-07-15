<template>
  <section class="create container is-fluid">
    <h1 class="is-size-6 has-text-weight-semibold mt-4 mb-4">Create New Post</h1>
    <form @submit.prevent="handleSubmit">
     <div class="field">
      <label class="label">Title:</label>
      <input class="input" v-model="title" type="text" required>
     </div>
      
     <div class="field">
      <label class="label">Content:</label>
      <textarea class="textarea" v-model="body" required></textarea>
     </div>
      
     <div class="field">
      <label class="label">Tags (hit enter to add a tag):</label>
      <input 
        class="input"
        @keydown.enter.prevent="handleKeydown" 
        v-model="tag" 
        type="text"
      >
      </div>
      <div class="field">
       <div v-for="tag in tags" :key="tag" class="tag is-primary mx-2">
        #{{ tag }}
       </div>
      </div>
      <div class=field>
      <button class="button">Add Post</button>
      </div>
    </form>
  </section>
</template>


<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tags = ref([])
    const tag = ref('')
    const router = useRouter()

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g,'') // remove all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value
      }
      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(post)
      })
      // router.go(1)
      // router.go(-1)
      router.push({name: 'Home'})
    }
    return { body, title, tags, tag, handleKeydown, handleSubmit }
  },
}
</script>

<style>

</style>