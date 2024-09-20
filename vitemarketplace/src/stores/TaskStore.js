import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore', {
   state: () => ({
    tasks: [
      {id: 1, title: "buy some milk", isFav: false},
      {id: 2, title: " some milk", isFav: true},
    ],
    count: 0
   }),
   /// `getters`

    doubleCount(state){
      debugger
      return state.count * 2
   },
   actions:{
    incrementCount(){
      // debugger
      console.log(this.count);
      // ++this.count
      this.count++
     console.log(this.count);

    }
   }
})