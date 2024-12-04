import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  id: number
  name: string
  email: string
  role: string
}

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
  ])

  function addUser(user: Omit<User, 'id'>) {
    const newId = Math.max(...users.value.map(u => u.id)) + 1
    users.value.push({ ...user, id: newId })
  }

  function updateUser(id: number, updatedUser: Omit<User, 'id'>) {
    const index = users.value.findIndex(u => u.id === id)
    if (index !== -1) {
      users.value[index] = { ...updatedUser, id }
    }
  }

  function deleteUser(id: number) {
    users.value = users.value.filter(u => u.id !== id)
  }

  return {
    users,
    addUser,
    updateUser,
    deleteUser
  }
})