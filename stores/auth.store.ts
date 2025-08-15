interface AuthStoreInterface {
  token: string | null;
  credentials: {
    username: string;
    password: string;
  };
  authenticated: boolean;
  user: object;
}
export const useAuthStore = defineStore("authStore", {
  state: (): AuthStoreInterface => ({
    user: {},
    token: null,
    credentials: reactive({
      username: "altamiro",
      password: "123456",
    }),
    authenticated: false,
  }),
  actions: {
    async login() {
      try {
        const config = useRuntimeConfig();
        const token = useCookie("token");

        const response = await $fetch(`${config.public.baseUrl}/authenticate`, {
          method: "POST",
          body: this.credentials,
        });

        if (!response) {
          throw new Error("Usuário ou senha inválidos");
        }
        this.token = response as string;
        token.value = response as string;
        console.log(token)

        await navigateTo("/");
      } catch (error) {
        console.warn(error);
      }
    },
  },
});
