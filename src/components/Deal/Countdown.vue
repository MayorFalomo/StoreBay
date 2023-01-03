<template>
  <div class="flex items-start gap-5 py-5 max-lg:justify-center" v-if="Object.keys(remaining).length > 0">
    <div class="flex flex-col text-center p-3 bg-white">
    <h1 class="text-3xl font-bold" >{{ remaining.days.toFixed(0) }}</h1>
    <p>Day</p>
    </div>
    <div class="flex flex-col text-center p-3 bg-white">
    <h1 class="text-3xl font-bold" >  {{ remaining.hours.toFixed(0) }} </h1>
    <p>Hour</p>
    </div>
    <div class="flex flex-col text-center bg-white p-3" >
    <h1 class="text-3xl font-bold">{{ remaining.minutes.toFixed(0) }} </h1>
    <p>Minute</p>
    </div>
    <div class="flex flex-col text-center bg-white p-3" >
    <h1 class="text-3xl font-bold">{{ remaining.seconds.toFixed(0) }} </h1>
    <p>Seconds</p>
    </div>
  </div>
</template>

<script>
import { createApp, onMounted, reactive } from 'vue'
import moment from 'moment'
export default {
data() {
  const remaining = reactive({})
  
  onMounted(() => {
    setInterval(() => {
        setTime()
    }, 1000)
    
    const eventTime = moment('2023.05.04 10:03:00', 'YYYY.MM.DD HH:mm:ss')
    
    function setTime() {
      let currenTime = moment()
      remaining.days = moment.duration(eventTime.diff(currenTime)).asDays()
      remaining.hours = moment.duration(eventTime.diff(currenTime)).get('hours')
      remaining.minutes = moment.duration(eventTime.diff(currenTime)).get('minutes')
      remaining.seconds = moment.duration(eventTime.diff(currenTime)).get('seconds')
    }
    
  })
    return {
      remaining
    }
  }
}
</script>

<style>

</style>