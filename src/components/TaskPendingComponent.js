import React from "react"
import "./TaskPendingComponent.css"
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import {connect} from "react-redux";
import {completedTask, failedTask} from "../actions"
const useStyles = makeStyles((theme) => ({
   root:{
   '& > *': {
      margin: theme.spacing(1),
    },
   },
   fab: {
    backgroundColor: "#0DE756",
    textAlign: "center",
      fontSize: ".5rem",
    display: "block",
      margin: "15px"
  },
  fab2:{
    backgroundColor: "#F73F26",
    textAlign: "center",
    fontSize: ".5rem",
    display: "block",
      margin: "15px"
  },
}))

const TaskPendingComponent = ({  task, index, completedTask, failedTask} ) => {

   const classes = useStyles()

   return (
         <div  className="task-pending-component" >
      <div className="first-block-pending">
         <h1 className="div-number-pending" >{index}</h1>
      </div>
      <div className="second-block-pending">
         <h2 className="reg-pending-text">{task.taskName}</h2>
         <div className="pending-divider"/>
         <h2 className="reg-pending-text">De <span className="task-pending-span">{task.taskStart}</span> a <span className="task-pending-span">{task.taskEnd}</span></h2>
      </div>
      <div className="third-block-pending">
         <Fab size="small"color="primary" aria-label="done" className={classes.fab} onClick={()=>{completedTask(task)}}>
        <DoneIcon />
      </Fab>
      <Fab size="small" color="secondary" aria-label="failed" className={classes.fab2} onClick={()=>{failedTask(task)}}>
        <ClearIcon />
      </Fab>
      </div>
   </div>
   )
}

const mapStateToProps = (state) =>{
   return state
}

export default connect(mapStateToProps, {completedTask, failedTask})(TaskPendingComponent);
