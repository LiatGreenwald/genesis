import { Route, Routes } from "react-router-dom";
import Booking from "../../Movie/Booking/Booking";
import MovieList from "../../Movie/MovieList/MovieList";
import Home from "../../Pages/Home/Home";
import "./Routing.css";
import Page404 from "../../Pages/Page404/Page404";
import App from "../../../App";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
		<Routes>
			<Route path="/" element={<App/>}/>
                <Route path="home" element={<Home />}/>
                <Route index element={<Home />}/>
                <Route path="movie" element={<MovieList/>}/>
                {/* <Route path="about" element={<About/>}/> */}
                <Route path="*" element={<Page404/>} />
                <Route path="booking" element={<Booking/>}/>
                </Routes>	
        </div>
    );
}

export default Routing;
