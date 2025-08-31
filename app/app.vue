<template>
  <div>
    <div v-if="loading" class="loading-screen">
      <div class="spinner"></div>
    </div>
    <div v-else>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

// This enables smooth scrolling for the entire app
useHead({
  htmlAttrs: {
    style: 'scroll-behavior: smooth;'
  }
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* Pretty spinner */
.spinner {
  width: 80px;
  height: 80px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #202020; /* Accent color */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
