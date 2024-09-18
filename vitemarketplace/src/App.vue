
<template>
  <div>
Salom TypeScript, Vite va Vue
<header>
  <img src="./assets/vue.svg" alt="">
  <h1>Pinya Tasks</h1>
</header>

<!-- task list -->
 <div class="task-list">
  <div v-for="task in taskStore.tasks" :key="task">
    <p>{{ task.title}}</p>
  </div>
 </div>
  </div>
</template>
<script>
import {useTaskStore} from './stores/TaskStore'

export default {

  setup () {
    debugger
   const taskStore = useTaskStore()

   return {taskStore}
  }
}
</script>

<style>
</style>