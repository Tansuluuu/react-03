import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MealInfo from "./pages/MealInfo";
import IngredientPage from "./pages/IngredientPage";
import SearchPage from "./pages/IngredientPage";
const App = () => {
  return (
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/meal/:id' element={<MealInfo />}/>
          <Route path='/search' element={<SearchPage />}/>
          <Route path='/ingredient/:name' element={<IngredientPage />}/>
      </Routes>
  )
}

export default App;
