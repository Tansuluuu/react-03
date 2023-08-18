import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h2>LOGO--MOGO</h2>
            <nav>
                <Link to={'./'}>Home</Link>
                <Link to={'./about'}>About</Link>
                <Link to={'./about'}>About</Link>
            </nav>
            <input/>
            <button>click</button>
        </header>
    )
}
export default Header