
<template>
  <div>
Salom TypeScript, Vite va Vue
<header>
  <img src="./assets/vue.svg" alt="">
  <h1>Pinya Tasks</h1>
  <p></p>
</header>

<!-- task list -->
 <div class="task-list">
  <p>all tasks</p>
  <div v-for="task in taskStore.tasks" :key="task"> <!-- `taskStore.tasks` bu Array qaytaradi -->
    <TaskDetails :task="task"/>
  </div>
 </div>
 <div class="task-list">
  <p>fav tasks</p>
  <div v-for="task in taskStore.favs" :key="task">
    <TaskDetails :task="task"/>
  </div>

  <p>{{ taskStore.doubleCount }}</p>
  <button @click="taskStore.incrementCount">bos</button>

</div>
  </div>
</template>
<script setup>
import TaskDetails from './components/TaskDetails.vue'
import {useTaskStore} from './stores/TaskStore'

const taskStore = useTaskStore() /// `taskStore` bu OBJ.

</script>

<style>
</style>