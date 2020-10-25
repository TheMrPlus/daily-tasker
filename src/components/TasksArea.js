import React from "react"
import TaskArea from "./TaskArea"
import {connect} from "react-redux"

const TasksArea = ({completedTaskList, failedTaskList, pendingTaskList}) =>{
   return (
      <div>
            <TaskArea backgroundColor="#2F2F37" title="Tareas pendientes" letterColor="#FFF" list={pendingTaskList} isPending={true}/>
            <TaskArea backgroundColor="#FFF" title="Tareas completadas" lineColor="#0DE756"  letterColor="#383842" list={completedTaskList}/>
            <TaskArea backgroundColor="#FFF" title="Tareas falladas" lineColor="#F73F26" letterColor="#383842" list={failedTaskList}/>
      </div>
   )
}

const mapStateToProps = (state) =>{
   return {
      completedTaskList: state.completedTaskList,
      failedTaskList: state.failedTaskList,
      pendingTaskList: state.pendingTaskList
   }
}

export default connect(mapStateToProps)(TasksArea)