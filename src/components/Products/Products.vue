<template>
  <div class="my-24">
    <h1 class="text-center text-4xl font-bold">Our Product</h1>
    <ul class="flex items-center justify-center gap-5 my-7">
      <li class="cursor-pointer text-xl" @click="handleClick(1)">Clothes</li>
      <li class="cursor-pointer text-xl" @click="handleClick(5)">Shoes</li>
      <li class="cursor-pointer text-xl" @click="handleClick(2)">Watches</li>
      <li class="cursor-pointer text-xl" @click="handleClick(4)">Furniture</li>
    </ul>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="store in stores" :key="store.category.id">
        <div class="max-w-xl h-auto">
          <img :src="store.images[0]" alt="img" />
        </div>
      </div>
    </div>
    <!-- <Clothes />
    <Shoes /> -->
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";

import Clothes from "../Products/Clothes.vue";
import Shoes from "../Products/Shoes.vue";
import axios from "axios";

export default {
  components: {
    Clothes,
    Shoes,
  },
  props: [],
  data() {
    return {
      stores: [],
      errors: [],
      product: 1,
    };
  },
  //This function inserts the number of params
  methods: {
    fetchProduct(params) {
      return axios
        .get(`https://api.escuelajs.co/api/v1/categories/${params}/products`)
        .then((res) => {
          this.stores = res.data;
          console.log(this.stores);
        })
        .catch((e) => {
          console.log(this.errors(e));
        });
    },

    handleClick(params) {
      this.product = params;
      this.fetchProduct(params);
      console.log(this.product);
    },
  },

  async created() {
    await this.fetchProduct(this.product);
  },

  //   setup() {
  //     const clothes = ref(true);
  //     const shoes = ref(false);
  //     const furniture = ref(false);
  //     const others = ref(false);

  //     const link = `https://api.escuelajs.co/api/v1/categories/1/products`;

  //     const current = 0;
  //     const active = 0;

  //     const handleClick = (params) => {
  //       current(params);
  //     };

  //     return {
  //       handleClick,
  //       clothes,
  //       shoes,
  //       furniture,
  //       others,
  //     };
  //   },
};
</script>

<style></style>
