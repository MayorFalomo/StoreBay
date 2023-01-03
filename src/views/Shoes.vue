<template>
<div v-if="stores.length" >
  <div class="grid grid-cols-3 gap-4 justify-items-center my-16 max-md:grid-cols-2">
    <div v-for="store in stores" :key="store.category.id" class="max-w-xl h-auto"  >
      <img :src="store.images[0]" alt="img"/>
        <p class="text-center text-2xl font-bold mt-3 ">${{store.price}}</p>
          <p class="text-center text-2xl mt-3 ">{{store.title}}</p>
  </div>
  </div>
      <Footer/>
</div>
<div  v-else class="flex justify-center mt-32 " >  
<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</div>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer/Footer.vue"

export default {
  data() {
    return {
      stores: [],
    }
  },
  async mounted() {
    await axios
      .get(`https://api.escuelajs.co/api/v1/categories/4/products`)
      .then((res) => {
        this.stores = res.data;
        console.log(this.stores);
      })
      .catch((e) => {
        console.log(this.errors.push(e));
      });
  },
  components: {
    Footer,
  },
};
</script>

<style></style>
