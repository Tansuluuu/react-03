import Cart from "./Cart";
import {Link} from 'react-router-dom';

const productList = ({meals}) => {
    return(
        <div className={'row'}>
            {
                meals.map(meal => {
                    return(
                        <div className={'col-4'} key={meal.idMeal} onClick={() => console.log(meal)}>
                           <Link to={`/meal/${meal.idMeal}`}>
                               <Cart meal={meal}  />
                           </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default productList