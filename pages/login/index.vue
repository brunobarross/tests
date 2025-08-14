<template>
  <div class="flex flex-col min-h-screen justify-center">
    <form class="flex flex-col max-w-[300px] w-full mx-auto" @submit.prevent="login">
        <UInput v-model="credentials.username" placeholder="Usuário" size="lg" />
        <UInput v-model="credentials.password" placeholder="Senha" class="mt-6" size="lg" />

      <UButton type="submit" label="Entrar" class="mt-6" size="lg" :disabled="!credentials.username || !credentials.password" @click="login" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { UButton } from "#components";

// const { loggedIn} = useUserSession();
const credentials = reactive({
  username: "",
  password: "",
});

async function login() {
  try {
    const config = useRuntimeConfig();
    const response = await $fetch(`${config.public.baseUrl}/authenticate/`, {
      method: "POST",
      body: credentials,
    });
    console.log(response);
  } catch (error) {
    console.warn(error);
  }
}
</script>
