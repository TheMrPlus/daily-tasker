export const createTask = (task) =>{
   return{
      type: "CREATE_TASK",
      payload: task
   }
}

export const completedTask = (task) =>{
   return{
      type: "COMPLETED_TASK",
      payload: task
   }
}

export const failedTask = (task) =>{
   return {
      type: "FAILED_TASK",
      payload: task
   }
}