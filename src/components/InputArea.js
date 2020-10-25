import React, {useState} from "react"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {connect} from "react-redux";
import {createTask} from "../actions"


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '24ch',
    },
    '& label.Mui-focused': {
      color: "#ff416c",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#ff416c",
    },
   },
   button: {
      margin: theme.spacing(1)
   }
}));


const InputArea = ({createTask, taskList}) =>{
   const classes = useStyles();
   const [taskName, setTaskName] = useState('')
   const [startTime, setStartTime] = useState('')
   const [finishTime, setFinishTime] = useState('')
   const onSubmit = (e) =>{
      e.preventDefault()
      createTask({
         taskName: taskName.length > 0 ? taskName : `Tarea #${taskList.length + 1}` ,
         taskStart: startTime ? startTime : "--:--",
         taskEnd: finishTime ? finishTime : "--:--", 
         taskId: taskList.length
      })
      setTaskName("")
      setStartTime("")
      setFinishTime("")
   }
   return <div className="area">
      <h1 className="title-text gradient-title">Agrega una nueva tarea.</h1>
      <hr className="horizontal-rule"/>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => {e.preventDefault()}}>
         <div>
            <TextField id="standard-name" label="Nombre de la tarea." value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
         </div>
         <div>
            <TextField id="time" label="Hora de inicio" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} InputLabelProps={{shrink:true}} inputProps={{step:300}}/>
            <TextField id="time" label="Hora de finalizacion" type="time" value={finishTime} onChange={(e) =>setFinishTime(e.target.value)} InputLabelProps={{shrink:true}} inputProps={{step:300}}/>
         </div>
         <div>
            {(taskName|| (startTime && finishTime)) ? (<Button variant="outlined" color="secondary" className={classes.button} startIcon={<AddIcon/>} onClick={onSubmit} >Agregar tarea</Button>) : (<Button variant="outlined" color="secondary" disabled className={classes.button} startIcon={<AddIcon/>}  >Agregar tarea</Button>) }
            
         </div>
      </form>
   </div>
}

const mapStateToProps = (state) =>{
   return {
      taskList: state.taskList,
      pendingTaskList: state.pendingTaskList
   }
}

export default connect(mapStateToProps, {createTask})(InputArea)