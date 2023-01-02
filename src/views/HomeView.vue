<template>
  <div class="home">
    <Hero />
    <Collection />
    <Bestfashion />
    <Seller />
    <Product />
    <Deal/>
    <Testimonial/>
    <Footer/>
  </div>
</template>

<script>
import Hero from "../components/Hero/Herosection.vue";
import Collection from "../components/Collections/Collection.vue";
import Bestfashion from "../components/Fashion/Best.vue";
import Seller from "../components/Seller/Seller.vue";
import Product from "../components/Products/Products.vue";
import Deal from '../components/Deal/Deal.vue'
import Testimonial from '../components/Testimonials/Testimonial.vue'
import Footer from '../components/Footer/Footer.vue'
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Hero,
    Collection,
    Bestfashion,
    Seller,
    Product,
    Deal,
    Testimonial,
    Footer,
  },
};
</script>
