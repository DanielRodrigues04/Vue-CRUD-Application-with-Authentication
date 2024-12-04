<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const drawer = ref(true)
const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" permanent>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        :title="authStore.user?.username"
      />

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-account-group"
          title="Users"
          to="/"
          value="users"
        />
      </v-list>

      <template v-slot:append>
        <v-divider />
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-logout"
            title="Logout"
            @click="handleLogout"
          />
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>