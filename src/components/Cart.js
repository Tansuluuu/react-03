import React from "react";
const Cart = ({meal}) =>{
    return(
          <div className={'cart'}>
              <img width={'300px'} src={meal.strMealThumb} alt={meal.strMeal}/>
              <h3>{meal.strMeal}</h3>
          </div>
    )
}
export default Cart