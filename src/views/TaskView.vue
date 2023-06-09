<script setup>
import { useTaskStore } from '@/stores/task'
import Tasklist from '@/components/Tasklist.vue'
import { ref } from 'vue'

const store = useTaskStore()
const taskPlaceHolder = ref('Add your task here')
</script>

<template>
  <div class="offset-4 col-6">
    <form @submit.prevent="store.submitTask">
      <div class="form-group mb-3">
        <label for="task" class="form-label">Task</label>
        <input
          v-model="store.task.title"
          type="text"
          class="form-control"
          :placeholder="taskPlaceHolder"
        />
      </div>
      <div class="form-group">
        <textarea v-model="store.task.description" rows="3" class="form-control"></textarea>
      </div>
      <button class="btn btn-primary mt-3 w-100">Submit</button>
    </form>
  </div>
  <br />
  <Tasklist />
</template>

<style scoped></style>
