<template>
  <div class="min-h-dvh flex items-center flex-col justify-center">
    <div class="max-w-[960px] mx-auto w-full">
      <ScheduleCalendar />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ScheduleCalendar from "~/components/schedule-calendar/ScheduleCalendar.vue";
import type { ScheduleResponse } from "~/types";


definePageMeta({
  middleware: ["authenticated"],
});

const {schedules} = storeToRefs(useSchedulesStore());

async function getSchedules() {
  try {
    const response: ScheduleResponse = await $fetch(
      "http://localhost:8080/api/schedules",
      {
        headers: {
          Authorization: "Bearer " + useCookie("token").value,
        },
      }
    );
    schedules.value = response;
  } catch (error) {
    console.warn(error);
  }
}

onMounted(() => {
  getSchedules();
})
</script>
