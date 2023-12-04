import React from 'react'
import Nevigation from './components/Nevigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import CreateAd from './components/CreateAd';



function App() {

  return (
  <>
  <Nevigation></Nevigation>
  
  <Routes>
    <Route path='/dash' element={<Dashboard/>}></Route>
    <Route path='/create' element={<CreateAd/>}></Route>
   </Routes>


  
  
  </>
  )
}

export default App