import { v4 as uuidv4 } from 'uuid';
import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
  tasks: [],
  task: null,
  categories:['Основные задачи','Список покупок','Рабочие задачи'],
  filters: {showDone: true, showUndone: true, categories: ['Основные задачи','Список покупок','Рабочие задачи']}
})

export const mutations = {
  updateField,
  ADD_TASK (state, task) {
    state.tasks.push({
      ...task,
      id: uuidv4()
    })
  },
  EDIT_TASK(state, task){
    const element = state.tasks.find(e=>e.id===task.id)
    const index = state.tasks.indexOf(element)
    if(index!==-1){
      state.tasks.splice(index, 1,task )
    }

  },
  REMOVE_TASK (state,  id ) {
    const element = state.tasks.find(e=>e.id===id)
    const index = state.tasks.indexOf(element)
    if(index!==-1){
      state.tasks.splice(index, 1)
    }

  }
}

export const getters ={
  getField,

  getTask: (state) =>id =>state.tasks.find(e=>e.id===id)
}
