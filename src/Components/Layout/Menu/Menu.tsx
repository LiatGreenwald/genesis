import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
		            <Link to="home">Home</Link>
             <Link to="about">About</Link>
            <Link to="movie">Movies</Link>
            <Link to="Booking">Booking</Link>
        </div>
    );
}

export default Menu;
