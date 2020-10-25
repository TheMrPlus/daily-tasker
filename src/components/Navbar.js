import React from "react"
import "./Navbar.css"

const Navbar = () =>{
   const {date, days, months} = {
      date: new Date(),
      days: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
      months: ["Diciembre", "Enero", "Febrero","Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre","Noviembre"]
   }
   return (
   <nav>
      <h1 className="logo gradient-title">DAILY TASKER</h1>
      <h2 className="date">{`${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]}`}</h2>
   </nav>
   )
}

export default Navbar