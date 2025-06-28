<template>
  <div class="min-h-dvh flex items-center flex-col justify-center">
    <div class="max-w-[960px] mx-auto w-full">
      <h1 class="text-2xl lg:text-[2rem] font-semibold text-center">
        Digite o whatsapp da Barberia<br >
        que deseja fazer seu agendamento
      </h1>
      <div class="flex flex-col items-center mt-8">
        <UInput
          v-model="models.whatsapp"
          size="lg"
          class="w-80"
          placeholder="(99) 99999-9999"
        />
        <UButton label="Ir para agendamento" class="mt-6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface models {
  whatsapp: string;
}

const models = ref<models>({
  whatsapp: "",
});
</script>
