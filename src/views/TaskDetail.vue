<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const handlePrepiousPage = () => {
  router.back()
}

const handleHomepage = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="row">
    <h1 class="text-center">Hello Task Details</h1>
    <h2>Task ID: {{ route.params.id }}</h2>
    <div class="col-md-4 d-flex justify-content-between mt-5">
      <button @click="handlePrepiousPage" class="btn btn-info">Back</button>
      <button @click="handleHomepage" class="btn btn-success">Go Home</button>
    </div>
  </div>
</template>

<style scoped></style>
