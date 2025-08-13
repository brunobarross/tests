<template>
  <div class="min-h-dvh flex items-center flex-col justify-center">
    <div class="max-w-[960px] mx-auto w-full">
      <ScheduleCalendar/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ScheduleCalendar from '~/components/schedule-calendar/ScheduleCalendar.vue';


// const data = ref(null)

// async function getSchedules() {
//   const response = await $fetch('http://localhost:8080/schedules')
//   data.value = response
// }


// onMounted(() => {
//   getSchedules()
// })



</script>
