<template>
  <div class="flex flex-col items-center mt-8">
    <UForm :state="models" data-test="whatsapp-form" @submit.prevent="handleSubmit">
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
  </div>
</template>
<script setup lang="ts">
interface models {
  whatsapp: string;
}

const models = ref<models>({
  whatsapp: "",
});

const handleSubmit = () => {
  if (models.value.whatsapp) {
    const whatsappNumber = models.value.whatsapp.replace(/\D/g, "");
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá, gostaria de agendar um horário.`;
    window.open(url, "_blank");
  } else {
    alert("Por favor, insira um número de WhatsApp válido.");
  }
};
</script>
