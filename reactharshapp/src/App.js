import React from 'react'
import ResturantMap from "./Parent/Child/ResturantMap"
import PaymentPage from "./Pages/PaymentPage"
//import UseStateDemo from "./Parent/Hooks/UseStateDemo"
//import UseEffectDemo from './Parent/Hooks/UseEffectDemo';
//import UseReducerDemo from './Parent/Hooks/UseReducerDemo';
import { HashRouter, Routes, Route } from "react-router-dom";

  
const App = () => {  

  return(
    

      <HashRouter>
      <Routes> 

         {/* This shows Resturant page at the root ("/") */}
          <Route path='/' element={<ResturantMap />} />
        <Route path="/payment" element={<PaymentPage />} /> 




      </Routes>
    </HashRouter> 

  )
}

export default App





