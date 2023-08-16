import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom'

const MealInfo = () => {
    const [meal, setMeal] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(res => setMeal(res.data.meals[0]))
    }, [params.id])
    return(
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>{meal.strMeal}</h2>
            <h3>{meal.strArea}</h3>
            <h3>{meal.strCategory}</h3>
            <img width={'250px'} src={meal.strMealThumb} alt={meal.strMeal}/>
            <p>{meal.strInstructions}</p>
        </div>
    )
}
export default MealInfo