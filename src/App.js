import React from "react"
import Navbar from "./components/Navbar"
import InputArea from "./components/InputArea"
import TasksArea from "./components/TasksArea"
import {connect} from "react-redux"
import Footer from "./components/Footer"
import ProgressArea from "./components/ProgressArea"

const App = () =>{
   return <div>
      <div>
         <Navbar/>
      </div>
      <div className="input-area">
         <InputArea/>
      </div>
      <div >
         <TasksArea/>
      </div>
      <div>
         <ProgressArea/>
      </div>
      <Footer></Footer>
   </div>
}

const mapStateToProps = (state) => {
   return state 
}

export default connect(mapStateToProps)(App)