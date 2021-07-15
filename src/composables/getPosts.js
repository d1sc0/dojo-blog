import { ref } from 'vue'
import { db } from '../firebase/config'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {

 // simulate delay
    await new Promise(resolve =>{
      setTimeout(resolve, 1000)
    })

    try {
      const res = await db.collection('posts').get()
      posts.value = res.docs.map( doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
/*     try {
      let data = await fetch('http://localhost:3000/posts')
      if(!data.ok) {
        throw Error('cannot retrieve posts')
      }
      posts.value = await data.json()
} */
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts