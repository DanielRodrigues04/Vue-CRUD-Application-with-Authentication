<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUsersStore } from '../stores/users'

const usersStore = useUsersStore()

const dialog = ref(false)
const editingUser = ref<any>(null)
const newUser = ref({
  name: '',
  email: '',
  role: ''
})
const formTitle = computed(() => editingUser.value ? 'Edit User' : 'New User')

const openDialog = (user?: any) => {
  if (user) {
    editingUser.value = user
    newUser.value = { ...user }
  } else {
    editingUser.value = null
    newUser.value = { name: '', email: '', role: '' }
  }
  dialog.value = true
}

const handleSubmit = () => {
  if (editingUser.value) {
    usersStore.updateUser(editingUser.value.id, newUser.value)
  } else {
    usersStore.addUser(newUser.value)
  }
  dialog.value = false
}

const handleDelete = (id: number) => {
  if (confirm('Are you sure you want to delete this user?')) {
    usersStore.deleteUser(id)
  }
}

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role' },
  { title: 'Actions', key: 'actions', sortable: false }
]
</script>

<template>
  <v-card>
    <v-card-title class="d-flex align-center justify-space-between pa-4">
      <span>Users</span>
      <v-btn
        color="primary"
        prepend-icon="mdi-plus"
        @click="openDialog()"
      >
        Add User
      </v-btn>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="usersStore.users"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          icon
          variant="text"
          color="primary"
          size="small"
          @click="openDialog(item)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="text"
          color="error"
          size="small"
          @click="handleDelete(item.id)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newUser.name"
                  label="Name"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newUser.email"
                  label="Email"
                  required
                  type="email"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newUser.role"
                  label="Role"
                  required
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="error"
            variant="text"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="handleSubmit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>