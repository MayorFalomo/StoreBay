<template>
  <div class="grid grid-cols-3 gap-5">
    <!-- <div v-for="store in stores" :key="store.category.id"> -->
    <div class="max-w-xl h-auto">
      <!-- <img :src="store.images[0]" alt="img" /> -->
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    // await axios
    //   .get(`https://api.escuelajs.co/api/v1/categories/1/products`)
    //   .then((res) => {
    //     this.stores = res.data;
    //     console.log(this.stores);
    //   })
    //   .catch((e) => {
    //     console.log(this.errors.push(e));
    //   });
  },
};
</script>

<style></style>
