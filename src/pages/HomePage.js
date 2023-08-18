import Header from "../components/Header";
import axios from 'axios';
import React, {useEffect,useState} from "react";
import ProductList from "../components/Product-list";
import Footer from "../components/Footer";


const HomePage = () => {
    const [meals,setMeals] = useState( [])

    useEffect( () =>{
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(res => setMeals(res.data.meals))
    }, [])
    console.log(meals)
    return (
        <>
        <Header />
        <div className={'container'}>
            <h2>Lorem </h2>
            <ProductList  meals={meals}/>
        </div>
            <Footer/>
        </>
    )
}
export default HomePage