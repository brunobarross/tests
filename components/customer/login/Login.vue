<template>
  <UForm
    :state="models"
    data-test="whatsapp-form"
    class="flex flex-col items-center mt-8"
    @submit="handleSubmit"
  >
    <UInput
      v-model="models.whatsapp"
      data-test="whatsapp-input"
      size="lg"
      class="w-80"
      placeholder="(99) 99999-9999"
    />
    <UButton
      label="Ir para agendamento"
      class="mt-6"
      type="submit"
      data-test="whatsapp-btn"
    />
  </UForm>
</template>
<script setup lang="ts">
interface models {
  whatsapp: string;
}

const models = ref<models>({
  whatsapp: "",
});

const handleSubmit = () => {
  const whatsappNumber = models.value.whatsapp.replace(/\D/g, "");
  const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá, gostaria de agendar um horário.`;
  window.open(url, "_blank");
};
</script>
