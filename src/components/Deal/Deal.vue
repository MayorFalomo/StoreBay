<template>
  <div class="flex justify-around gap-6 bg-heroColor py-12 max-lg:flex-col " >
    <div class="text-start w-1/2 p-4 max-lg:w-full text-center ml-3" >
    <div>
    <h1 class="text-5xl font-bold max-lg:text-center " >Deal Of The Day</h1>
    <p class="text-2xl text-left font-semibold my-3" > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eius ducimus velit error temporibus veniam, at autem maxime tempora ratione aliquid nemo sapiente, reiciendis iusto earum tempore consequatur ipsa natus labore voluptate consectetur perspiciatis magnam! Eum facere in consequuntur sint! </p>
    </div>
  <Countdown/>
  <div class="mx-auto" >
  <button class="py-4 px-10 my-3 bg-black text-white shadow-xl rounded-xl max-lg:flex justify-center mx-auto">
            SHOP NOW
          </button>
  </div>
    </div>
    <img class="max-lg:w-1/2 mx-auto" src="../../assets/jacketgirl.svg"/>
  </div>
</template>

<script>
import Countdown from './Countdown.vue'
export default {
    components: {
        Countdown
    }
}
</script>

<style>

</style>