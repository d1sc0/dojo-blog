<template>
<nav class="navbar is-primary p-4" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <h1><router-link :to="{ name: 'Home' }" class="title is-2 navbar-item">DojoBlog</router-link></h1> 
    </div>
    <div class="navbar-menu">
      <div class="navbar-start"
    ></div>
      <div class="navbar-end">
        <router-link :to="{ name: 'Home' }" class="navbar-item">Home</router-link>
        <router-link :to="{ name: 'Create' }" class="navbar-item">Create</router-link>
      </div>
    </div>
</nav>

</template>

<script>
export default {
  name: 'Nav',
}
</script>
