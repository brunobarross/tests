<template>
  <div class="flex flex-col">
    <div class="flex items-center justify-between">
      <h2 class="text-xl">{{ currentMonthFromWeek }}</h2>
      <div class="flex items-center gap-2">
        <UButton class="mr-6" label="Esta semana" @click="goToday" />
        <UButton
          class="text-xl"
          icon="tabler:circle-arrow-left"
          @click="goToPreviousWeek"
        />
        <UButton
          class="text-xl"
          icon="tabler:circle-arrow-right"
          @click="goToNextWeek"
        />
      </div>
    </div>

    <div class="grid grid-cols-7 gap-2 mt-6">
      <ScheduleCalendarCard
        v-for="day of weekDays"
        :key="day?.toISOString()"
        :day="day"
        :selected-date="selectedDate"
        @update-selected-date="onSelectDate($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UButton } from "#components";
import { addDays, format, startOfWeek } from "date-fns";
import { ptBR } from "date-fns/locale";

const selectedDate = ref<Date>(new Date());
const currentWeekStart = ref(startOfWeek(new Date(), { weekStartsOn: 0 }));
const today = ref<Date>(new Date());

const weekDays = computed(() =>
  Array.from({ length: 7 }, (_, i) => {
    return addDays(currentWeekStart.value, i);
  })
);

const haveToday = computed(() => {
  return weekDays.value.some(
    (day) => format(day, "yyyy-MM-dd") === format(today.value, "yyyy-MM-dd")
  );
});

const currentMonthFromWeek = computed<string>(() =>
  format(currentWeekStart.value, "MMMM 'de' yyyy", { locale: ptBR })
);

function onSelectDate(date: Date) {
  selectedDate.value = date;
}

function goToPreviousWeek() {
  currentWeekStart.value = addDays(currentWeekStart.value, -7);
}

function goToNextWeek() {
  currentWeekStart.value = addDays(currentWeekStart.value, 7);
}

function goToday() {
  currentWeekStart.value = startOfWeek(new Date(), { weekStartsOn: 0 });
}
</script>
