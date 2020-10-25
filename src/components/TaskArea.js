import React from "react";

import TaskComponent from "./TaskComponent"
import TaskPendingComponent from "./TaskPendingComponent"

const TaskArea = ({backgroundColor, title, lineColor, letterColor, list, isPending}) => {
   return (
      list.length ? (<div className="area" style={{backgroundColor: backgroundColor}}>
         <h1 className="title-text" style={{color:letterColor}} >{title}</h1>
         <hr style={{borderTop:`3px solid ${lineColor ? lineColor : "#ff416c"}`, borderBottom: "0"}}/>
         <div>             
            { !isPending ? list.map((el, i) => <TaskComponent color={lineColor ? lineColor : "#ff416c"} letterColor={letterColor}  taskName={el.taskName} taskStartingTime={el.taskStart} taskFinishingTime={el.taskEnd} key={i} index={i+1}/>) : list.map((el, i) => <TaskPendingComponent task={el} key={el.taskId} index={i+1}/>)}
         </div>
      </div>) : (null)
   )
}

export default TaskArea