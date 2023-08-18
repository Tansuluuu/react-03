import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from 'react-router-dom'

const MealInfo = () => {
    const [meal, setMeal] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(res => setMeal(res.data.meals[0]))
    }, [params.id])
    const youtube = meal?.strYoutube?.split('=')[1]
    return(
        <div className={'all-info'}>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>{meal.strMeal}</h2>
            <h3>{meal.strArea}</h3>
            <h3>{meal.strCategory}</h3>
            <img width={'250px'} src={meal.strMealThumb} alt={meal.strMeal}/>
            <p className={'info-next'}>{meal.strInstructions}</p>

            <iframe width="560"
                    height="315"
                    title={meal.strMeal}
                    src={`https://www.youtube.com/embed/${youtube}`}
                   ></iframe>
            <p>
                <Link to={`/ingredient/${meal.Ingredient1}`}>
                    <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`}/>
                </Link>
                {meal.strIngredient1}
            </p>
            <p>
                <Link to={`/ingredient/${meal.Ingredient2}`}>
                    <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient2}.png`}/>
                </Link>
                {meal.strIngredient2}
            </p>
            <p>
                <Link to={`/ingredient/${meal.Ingredient3}`}>
                    <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient3}.png`}/>
                </Link>
                {meal.strIngredient3}
            </p>
            <p>
                <Link to={`/ingredient/${meal.Ingredient4}`}>
                    <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient4}.png`}/>
                </Link>
                {meal.strIngredient4}
            </p>
            <p>
                <Link to={`/ingredient/${meal.Ingredient5}`}>
                    <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient5}.png`}/>
                </Link>
                {meal.strIngredient5}
            </p>
            <p>
                <Link to={`/ingredient/${meal.Ingredient6}`}>
                    <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient6}.png`}/>
                </Link>
                {meal.strIngredient6}
            </p>
        </div>
    )
}
export default MealInfo