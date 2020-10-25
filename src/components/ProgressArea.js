import React from "react"
import "./ProgressArea.css"
import {makeStyles} from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import {connect} from "react-redux"

const useStyles = makeStyles((theme) =>({
   pendingProgress:{
      color: '#fce305'
   },
   completedProgress:{
      color: '#0DE756'
   },
   failedProgress:{
      color: '#ff416c',   
   },
   zero: {
      color: "#C8C8D0"
   }
}))


const ProgressArea = ({pendingTaskList, taskList, completedTaskList, failedTaskList}) =>{

   const classes = useStyles()

   return (
      taskList ? 
   (<div className="area">
      <h1 className="title-text input-title">Tu progreso.</h1>
      <hr className="horizontal-rule"/>
      <div className="progress-area">
         <div className="progress pending-area">
         <h1 className="progress-title">Tareas Pendientes</h1>
            <Box position="relative">
               <CircularProgress variant="static" value={pendingTaskList ? (pendingTaskList / taskList)*100 : 100} thickness={5} size="30vh" className={pendingTaskList ? classes.pendingProgress : classes.zero}/>
               <Box top={0} left={0}bottom={0}right={0}position="absolute"display="flex"alignItems="center"justifyContent="center">
                     <Typography variant="h3" component="div" color="textSecondary">{`${((pendingTaskList / taskList)*100).toFixed(1)}%`}</Typography>
               </Box>
            </Box>   
            <h1 className={`progress-title ${classes.pendingProgress}`}>{`${pendingTaskList}/${taskList}`}</h1>
            
         </div>
         <div className="progress completed-area">
         <h1 className="progress-title">Tareas Completadas</h1>
            <Box position="relative">
               <CircularProgress variant="static" value={completedTaskList ? (completedTaskList / taskList)*100 : 100} thickness={5} size="30vh" className={completedTaskList ? classes.completedProgress : classes.zero}/>
               <Box top={0} left={0}bottom={0}right={0}position="absolute"display="flex"alignItems="center"justifyContent="center">
                     <Typography variant="h3" component="div" color="textSecondary">{`${((completedTaskList/ taskList)*100).toFixed(1)}%`}</Typography>
               </Box>
            </Box>
            
            <h1 className={`progress-title ${classes.completedProgress}`}>{`${completedTaskList}/${taskList}`}</h1>
            
         </div>
         <div className="progress failed-area">
            <h1 className="progress-title">Tareas Falladas</h1>
            <Box position="relative">
               <CircularProgress variant="static" value={failedTaskList ? (failedTaskList / taskList)*100 : 100} thickness={5} size="30vh" className={failedTaskList ? classes.failedProgress : classes.zero}/>
               <Box top={0} left={0}bottom={0}right={0}position="absolute"display="flex"alignItems="center"justifyContent="center">
                     <Typography variant="h3" component="div" color="textSecondary">{`${((failedTaskList / taskList)*100).toFixed(1)}%`}</Typography>
               </Box>
            </Box>
            <h1 className={`progress-title ${classes.failedProgress}`} >{`${failedTaskList}/${taskList}`}</h1>
            
         </div>
      </div>
   </div>) : null
   )
}

const mapStateToProps = (state) =>{
   return {
      taskList: state.taskList.length,
      pendingTaskList:state.pendingTaskList.length,
      completedTaskList: state.completedTaskList.length,
      failedTaskList: state.failedTaskList.length
   }
}

export default connect(mapStateToProps)(ProgressArea)