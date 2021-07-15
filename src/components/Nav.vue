<template>
  <nav id="nav">
   <div class="container mt-3">
      <router-link :to="{ name: 'Home' }" class="is-size-5 has-text-weight-semibold">Home</router-link> | 
      <router-link :to="{ name: 'Create' }" class="is-size-5 has-text-weight-semibold">Create</router-link> 
    </div>
</nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>
