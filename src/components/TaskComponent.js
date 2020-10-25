import React from "react"
import "./TaskComponent.css"

const TaskComponent = ({color, letterColor, taskName, taskStartingTime, taskFinishingTime, index} ) => {
   return (
   <div  className="task-component" style={{borderBottom: `3px solid ${color}`, color: letterColor}}>
      <div className="first-block">
         <h1 className="div-number" style={{color: color}}>{index}</h1>
      </div>
      <div className="second-block">
         <h2>{taskName}</h2>
         <div className="divider"
            style={{borderTop: `3px solid ${color}`}}
         />
         <h2>De <span style={{color: color}}>{taskStartingTime}</span> a <span style={{color: color}}>{taskFinishingTime}</span></h2>
      </div>
   </div>
   )
}

export default TaskComponent