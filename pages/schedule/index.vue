<template>
  <div class="min-h-dvh flex items-center flex-col justify-center">
    <div class="max-w-[960px] mx-auto w-full">
      <h1 class="text-2xl lg:text-[2rem] font-semibold text-center">
        Selecione a data e hora
      </h1>
      <div class="flex items-center">

        <UPopover>
          <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
            {{
              modelValue
                ? df.format(modelValue.toDate(getLocalTimeZone()))
                : "Select a date"
            }}
          </UButton>
  
          <template #content>
            <UCalendar v-model="modelValue" class="p-2" />
          </template>
        </UPopover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";

const df = new DateFormatter("en-US", {
  dateStyle: "medium",
});

const modelValue = shallowRef(new CalendarDate(2022, 1, 10));
</script>
