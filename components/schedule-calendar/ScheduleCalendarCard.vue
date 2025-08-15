<template>
  <UCard
    class="transition-all duration-300 cursor-pointer"
    variant="subtle"
    :class="isSelected ? 'bg-primary ' : ''"
    @click="onSelectDate"
  >
    <p class="uppercase text-neutral-600">{{ dayName }}</p>

    <p class="text-xl font-semibold mt-2 text-neutral-600">
      {{ format(day, "d") }}
    </p>
    <p class="text-sm mt-2">{{ format(day, "d") }} / {{ format(day, "mM") }}</p>
  </UCard>
</template>

<script setup lang="ts">
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const emits = defineEmits(["update-selected-date"]);
const props = defineProps({
  day: {
    type: Date,
    required: true,
  },
  selectedDate: {
    type: Date,
    required: true,
  },
});

const dayName = computed(() => {
  const dayStr = format(props.day, "EEE", { locale: ptBR });
  return dayStr.slice(0, 3);
});

const isSelected = computed(() => {
  return (
    props.selectedDate &&
    format(props.selectedDate, "yyyy-MM-dd") === format(props.day, "yyyy-MM-dd")
  );
});

function onSelectDate() {
  emits("update-selected-date", props.day);
}
</script>
