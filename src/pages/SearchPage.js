import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import React from "react";
import {setNpm} from "npm/lib/utils/exit-handler";
import ProductList from "../components/Product-list";

const SearchPage = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [meals, setMeals] = React.useState([]);
    const navigate = useNavigate()

    useEffect( () => {
        axios(`https://www.themealdb.com/api/json/v2/1/search.php?s=${searchParams.get('name')}`)
            .then(res => setMeals(res.data.meals))
    },[searchParams])
    return(
        <div>
            <button onClick={() => navigate(-1)} >Back</button>
            <ProductList meals={meals}/>
        </div>
    )
}
export default SearchPage