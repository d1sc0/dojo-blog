<template>
   <section class="realtime container is-fluid">
          <div v-if="posts.length">
           <div class="columns">
            <div class="column is-three-quarters">
              <h2 class="is-size-6 has-text-weight-semibold my-3">Realtime Post List</h2>
               <div v-for="post in posts" :key="post.id">
               <div>{{ post.title }}</div>
               </div>
            </div>
          </div> 
          </div>
  </section>
</template>

<script>
import { db } from '../firebase/config'
import { ref } from 'vue'
export default {
  setup() {
    const posts = ref([])
    db.collection('posts')
      .orderBy('createdAt', 'desc')  
      .onSnapshot(snap => {
        let docs = snap.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        posts.value = docs
      })
    return { posts }
  }
}
</script>

<style>
</style>