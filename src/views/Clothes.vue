<template>
<div v-if="stores.length" >
  <div class="grid grid-cols-3 gap-4 justify-items-center my-16 max-md:grid-cols-2 max-sm:grid-cols-1">
    <div v-for="store in stores" :key="store.category.id" class="max-w-xl h-auto"  >
      <img :src="store.images[0]" alt="img"/>
        <p class="text-center text-2xl font-bold mt-3 ">{{store.price}}</p>
          <p class="text-center text-2xl mt-3 ">{{store.title}}</p>
  </div>
  </div>
      <Footer/>
</div>
<div v-else class="flex justify-center mt-32 " >  
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
      .get(`https://api.escuelajs.co/api/v1/categories/1/products`)
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

<style>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid red;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: red transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
