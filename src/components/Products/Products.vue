<template>
  <div class="my-24">
    <h1 class="text-center text-4xl font-bold">Our Product</h1>
    <ul class="flex items-center justify-center gap-5 my-7">
      <li class="hover:text-btnColor cursor-pointer text-xl" @click="handleClick(1)">Clothes</li>
      <li class="hover:text-btnColor cursor-pointer text-xl" @click="handleClick(4)">Shoes</li>
      <li class="hover:text-btnColor cursor-pointer text-xl" @click="handleClick(2)">Watches</li>
      <li class="hover:text-btnColor cursor-pointer text-xl" @click="handleClick(3)">Furniture</li>
    </ul>
    <div v-if="stores.length">
    <div class="grid grid-cols-3 justify-items-center mx-auto gap-5 max-md:grid-cols-2 ">
      <div  v-for="item in stores.slice(0, seeMore)" :key="item.category.id" >
        <div class="max-w-xl h-auto">
          <img :src="item.images[0]" alt="img" />
        </div>
        <p class="text-center text-2xl font-bold mt-3" >${{item.price}}</p>
      </div>
    </div>
    </div>
    <div  v-else class="flex justify-center mt-32">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
     <div class="mx-auto" >
        <button v-if="seeMore == 18"  @click="handleSeeLess(6)" class="flex justify-center mx-auto py-4 px-10 my-3 bg-black text-white shadow-xl rounded-xl" >See Less</button>
      <button v-else
        class="hover:text-black hover:bg-white hover:border-solid border-2 border-black flex justify-center mx-auto py-4 px-10 my-5 text-xl bg-black text-white shadow-xl rounded-xl"
        @click="handleSeeMore(18)"
      >
        See More
      </button>
      </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import axios from "axios";

export default {
  components: {
  },
  props: [],
  data() {
    return {
      initialStore: [],
      stores: [],
      errors: [],
      product: 1,
      seeMore: 9,
      seeMoreImage: 18,
      seeLess: 6,
    };
  },
  //This function inserts the number of params
  methods: {
    async fetchProduct(params) {
      return await axios
        .get(`https://api.escuelajs.co/api/v1/categories/${params}/products`)
        .then((res) => {
          this.initialStore = res.data;
          this.stores = this.initialStore
          console.log("The see More", this.seeMore);
          // console.log(this.stores);
          // Slice 9 out of the stores array, start from 0 to 9.
        })
        .catch((e) => {
          console.log(this.errors(e));
        });
    },

    // Where params is representing a number handleClick takes in.
    handleClick(params) {
      // Making product which is initially set to 1 equal to params
      this.product = params;
      //when the handleClick function is activated onClick fetchProduct function takes in the params wahtever number it is.
      this.fetchProduct(params);
      // console.log(this.product);
    },
    handleSeeMore(param) {
      this.seeMore = this.seeMoreImage;
      console.log( "This is param",param);
    },
    handleSeeLess(param) {
      this.seeMore = this.seeLess;
      console.log( "This is param",param);
    },

  },

  async created() {
    await this.fetchProduct(this.product);
    console.log(this.seeMore);
    // this.handleSeeMore(this.seeMoreImage);
  },

  // setup() {
  //   const handleSeeMore = (params, seeMore) => {
  //     console.log(seeMore);
  //   };

  //   return {
  //     handleSeeMore,
  //   };
  // },
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
