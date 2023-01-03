<template>
  <nav class="bg-heroColor">
    <div class="flex justify-between items-center mx-auto p-10">
      <router-link to="/" ><h1 class="text-4xl">StoreBay</h1></router-link>
      <div class="flex items-center gap-3">
        <router-link class="text-xl max-nav:hidden" to="/">Home</router-link>
        <router-link class="text-xl max-nav:hidden" to="/clothes">Clothes</router-link>
        <router-link class="text-xl max-nav:hidden" to="/shoes">Shoes</router-link>
        <router-link class="text-xl max-lg:hidden" to="/furniture"
          >Furniture
        </router-link>
        <router-link class="text-xl max-lg:hidden" to="/others"
          >Others</router-link
        >
      </div>
      <div class="flex gap-3">
        <button 
          class="text-xl border-none shadow-lg p-4 rounded-xl bg-heroColor max-sm:hidden"
        >
          Login
        </button>
        <router-link to="/" ><button class="text-xl shadow-lg p-4 rounded-xl bg-btnColor">
          Sign Up
        </button></router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  /* background-color: #fae3b6; */
  overflow: hidden;
}
</style>
