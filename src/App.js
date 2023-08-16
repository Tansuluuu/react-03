import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MealInfo from "./pages/MealInfo";


const App = () => {
  return (
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/meal/:id' element={<MealInfo />}/>
      </Routes>
  )
}

export default App;
