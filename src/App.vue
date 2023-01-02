<template>
  <nav class="bg-heroColor">
    <div class="flex justify-between items-center mx-auto p-10">
      <h1 class="text-4xl">StoreCity</h1>
      <div class="flex items-center gap-3">
        <router-link class="text-xl max-nav:hidden" to="/">Clothes</router-link>
        <router-link class="text-xl max-nav:hidden" to="/about">Shoes</router-link>
        <router-link class="text-xl max-md:hidden" to="/about"
          >Electronics</router-link
        >
        <router-link class="text-xl max-lg:hidden" to="/about"
          >Furniture
        </router-link>
        <router-link class="text-xl max-lg:hidden" to="/about"
          >Others</router-link
        >
      </div>
      <div class="flex gap-3">
        <button
          class="text-xl border-none shadow-lg p-4 rounded-xl bg-heroColor"
        >
          Login
        </button>
        <button class="text-xl shadow-lg p-4 rounded-xl bg-btnColor">
          Sign Up
        </button>
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
