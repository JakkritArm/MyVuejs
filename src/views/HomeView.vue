<script setup>
import { ref } from 'vue'
const myname = ref('Arm')
const bgColor = ref('text-bg-success')
const txtColor = ref('text-primary')
const favoriteFood = ref('')
const favPlaceHolder = ref('In put your favorite food here')
const foodList = ref([])

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const alertMyname = () => {
  alert('My name is ${myName}')
}

const submitForm = () => {
  foodList.value.push(favoriteFood.value)
}
</script>

<template>
  <main>
    <h1 :class="txtColor" @click="alertMyname">Hello {{ myname }}</h1>
    <h2 :class="bgColor">Hello World</h2>
    <hr />
    <div class="row">
      <div class="offset-md-4 col-md-6">
        <!--mb = margin button -->
        <button @click="increment" class="btn btn-primary">+</button>
        <span class="h3">{{ count }}</span>
        <button @click="decrement" class="btn btn-danger">-</button>
      </div>
    </div>
    <br />
    <div class="row" v-if="count > 5">
      <div class="alert alert-danger">Your Count Number is more than the limit</div>
    </div>
    <hr />

    <div class="row text-center">
      <div class="offset-md-4 col-md-3">
        <h3>Food List</h3>
        <form @submit.prevent="submitForm">
          <input
            type="text"
            v-model="favoriteFood"
            class="form-control"
            :placeholder="favPlaceHolder"
          />
          <br />
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br />
        <ul>
          <li v-for="(food, index) in foodList" :key="index">
            {{ food }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<style scoped>
button {
  width: 100px;
}

span {
  margin: 0px 10px;
  padding: 10px;
}

h1 {
  cursor: pointer;
}
</style>
