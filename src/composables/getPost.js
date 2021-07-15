import { ref } from 'vue'
import { db } from '../firebase/config'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {

    // simulate delay
    await new Promise(resolve =>{
      setTimeout(resolve, 2000)
    })

    try {
      let res = await db.collection('posts').doc(id).get()
      
      if (!res.exists){
        throw Error('That post does not exist')
      }
      post.value = { ...res.data(), id: res.id }

     /*  let data = await fetch('http://localhost:3000/posts/' + id)
      if(!data.ok) {
        throw Error('unable to retrieve post')
      }
      post.value = await data.json() */
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load }
}

export default getPost