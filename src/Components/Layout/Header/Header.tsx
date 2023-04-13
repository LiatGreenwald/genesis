import React, { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import GenesisLogo from "../../../Assets/Image/GenesisLogo.jpg";
import "./Header.css";
import { useDispatch } from "react-redux";
import { filterMoviesAction } from "../../../Redux/FilterAppState";

function Header(): JSX.Element {
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filterText = e.target.value;
    dispatch(filterMoviesAction(filterText));
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Dispatch the filterMoviesAction with the search query value
  };

  return (
    <header className="Header">
      <div className="Header-container">
        {/* <img src={GenesisLogo}/> */}
        <nav className="Header-nav">
          <Link to="/movie" className="Header-link">
            Movies
          </Link>
          <Link to="/booking" className="Header-link">
            Booking
          </Link>
        </nav>
        <form className="Header-search" onSubmit={handleSearch}>
          <input type="text" onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
