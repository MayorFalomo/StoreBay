<template>
  <div>
    <h1 class="text-4xl font-bold text-center mt-20">New Collection</h1>
    <p class="text-center text-xl my-5">Check Out All Our New Arrivals</p>
    <div class="relative flex items-start justify-evenly flex-wrap gap-12">
      <div class="relative z-10">
        <img class="relative z-0" src="../../assets/sweater.svg" alt="img" />
        <button
          class="absolute bottom-10 left-0 right-0 w-1/2 px-5 py-3 rounded-full ml-auto mr-auto z-10 bg-white shadow-lg"
        >
          Clothes
        </button>
      </div>
      <div class="relative">
        <img
          class="relative radius-lg z-0"
          src="../../assets/chair.svg"
          alt="img"
        />
        <button
          class="absolute bottom-10 left-0 right-0 w-1/2 px-5 py-3 rounded-full ml-auto mr-auto z-10 bg-white shadow-lg"
        >
          Furniture
        </button>
      </div>
      <div class="relative">
        <img
          class="relative radius-lg z-0 max-xl:"
          src="../../assets/sneaker.svg"
          alt="img"
        />
        <button
          class="absolute bottom-10 left-0 right-0 w-1/2 px-5 py-3 rounded-full ml-auto mr-auto z-10 bg-white shadow-lg"
        >
          Sneakers
        </button>
      </div>
      <img
        class="absolute -right-0 -bottom-20 -z-10"
        src="../../assets/Rect.svg "
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
