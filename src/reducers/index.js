import {combineReducers} from "redux"

const pendingTasksListReducer = (pendingTaskList =[], action) => {
   if(action.type === "CREATE_TASK"){
      return [...pendingTaskList, action.payload]
   } else if(action.type === "COMPLETED_TASK" || action.type ==="FAILED_TASK"){
      return pendingTaskList.filter((el) => el.taskId !== action.payload.taskId)
   } else{
      return pendingTaskList
   }
}

const taskListReducer = (taskList=[], action) => action.type === "CREATE_TASK" ? [...taskList, action.payload] : taskList
const completedTaskListReducer = (completedTaskList = [], action) => action.type === "COMPLETED_TASK" ? [...completedTaskList, action.payload] : completedTaskList
const failedTaskListReducer = (failedTaskList = [], action) => action.type === "FAILED_TASK" ? [...failedTaskList, action.payload] : failedTaskList 

export default combineReducers({
   taskList: taskListReducer,
   pendingTaskList: pendingTasksListReducer,
   completedTaskList: completedTaskListReducer,
   failedTaskList: failedTaskListReducer
})
