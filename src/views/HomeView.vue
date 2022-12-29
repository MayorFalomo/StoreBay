<template>
  <div class="home">
    <Hero />
    <Collection />
    <Bestfashion />
    <Seller />
    <Product />
  </div>
</template>

<script>
import Hero from "../components/Hero/Herosection.vue";
import Collection from "../components/Collections/Collection.vue";
import Bestfashion from "../components/Fashion/Best.vue";
import Seller from "../components/Seller/Seller.vue";
import Product from "../components/Products/Products.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Hero,
    Collection,
    Bestfashion,
    Seller,
    Product,
  },
  // data() {
  //   return {
  //     stores: [],
  //     errors: [],
  //   };
  // },
  // async mounted() {
  //   await axios
  //     .get(`https://api.escuelajs.co/api/v1/categories/1/products`)
  //     .then((res) => {
  //       this.stores = res.data;
  //       console.log(this.stores);
  //     })
  //     .catch((e) => {
  //       console.log(this.errors.push(e));
  //     });
  // },
  // setup() {},
};
</script>
