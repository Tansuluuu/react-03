import {useParams} from "react-router-dom";

const IngredientPage = () => {
    const {name} = useParams();
    console.log(name)

    return(
        <div>
            <h3>Ingredient page </h3>
             
        </div>
    )
}
export default IngredientPage