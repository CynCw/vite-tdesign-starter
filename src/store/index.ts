export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: useLocalStorage('token', ''),
  }),
  getters: {
    token: state => state.token,
  },
  actions: {
    login() {
      this.token = 'cyncw'
    },
    logout() {
      this.token = ''
    },
  },
})
