<template>
  <div class="bg-black text-white p-28" >
    <div class="flex gap-8 items-center justify-center flex-wrap mb-3" >
    <router-link class="text-2xl" to="/">Clothes</router-link>
        <router-link class="text-2xl" to="/shoes">Shoes</router-link>
        <router-link class="text-2xl" to="/electronics">Electronics</router-link>
        <router-link class="text-xl" to="/furniture">Furniture</router-link>
        <router-link class="text-xl max-lg:hidden" to="/others">Others</router-link>
    </div>
        <p class="text-center text-xl min-w-full" >Copyright StoreCity. All Right Reserved</p> 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>