import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref<{ username: string } | null>(null)

  function login(username: string, password: string) {
    // In a real app, you would make an API call here
    if (username === 'admin' && password === 'admin') {
      isAuthenticated.value = true
      user.value = { username }
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
    user.value = null
  }

  return {
    isAuthenticated,
    user,
    login,
    logout
  }
})