<template>
  <div class="bg-black text-white p-28" >
    <div class="flex gap-8 items-center justify-center flex-wrap mb-3" >
    <router-link class="text-2xl hover:text-btnColor " to="/">Home</router-link>
    <router-link class="text-2xl hover:text-btnColor" to="/">Clothes</router-link>
        <router-link class="text-2xl hover:text-btnColor" to="/shoes">Shoes</router-link>
        <router-link class="text-2xl hover:text-btnColor" to="/electronics">Electronics</router-link>
        <router-link class="text-2xl hover:text-btnColor" to="/furniture">Furniture</router-link>
        <router-link class="text-xl hover:text-btnColor max-lg:hidden" to="/others">Others</router-link>
    </div>
        <p class="text-center text-xl min-w-full" > &copy; Copyright StoreBay, All Right Reserved.</p> 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>