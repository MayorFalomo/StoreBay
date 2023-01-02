<template>
  <div class="bg-black text-white p-28" >
    <div class="flex gap-8 items-center justify-center mb-3" >
    <router-link class="text-2xl" to="/">Clothes</router-link>
        <router-link class="text-2xl" to="/about">Shoes</router-link>
        <router-link class="text-2xl" to="/about">Electronics</router-link>
        <router-link class="text-xl" to="/about">Furniture</router-link>
        <router-link class="text-xl max-lg:hidden" to="/about">Others</router-link>
    </div>
        <p class="text-center text-xl" >Copyright StoreCity. All Right Reserved</p> 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>