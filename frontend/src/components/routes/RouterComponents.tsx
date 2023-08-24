import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeComponents from '../home/HomeComponents'
import AboutComponent from '../pages/AboutComponent'
import ClassesComponent from '../pages/ClassesComponent'
import ContactComponent from '../pages/ContactComponent'

function RouterComponents() {
  return (
    <React.Fragment>
      
        <Routes>
        <Route path="/" element={<HomeComponents/>}/>
        <Route path="/about" element={<AboutComponent />}/>
        <Route path="/classes" element={<ClassesComponent />}/>
        <Route path="/contactus" element={<ContactComponent />}/>

        </Routes>
        </React.Fragment>
  )
}

export default RouterComponents