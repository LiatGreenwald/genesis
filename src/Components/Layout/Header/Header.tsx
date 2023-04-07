import React from "react";
import { Link } from "react-router-dom";
import GenesisLogo from "../../../Assets/Image/GenesisLogo.jpg";
import "./Header.css";

type HeaderProps = {
  onSearch: (query: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = event.currentTarget.search.value;
    onSearch(query);
  };

  return (
    <header className="Header">
      <div className="Header-container">
       <img src={GenesisLogo}/>
            <nav className="Header-nav">
          <Link to="/movies" className="Header-link">
            Movies
          </Link>
          <Link to="/booking" className="Header-link">
            Booking
          </Link>
        </nav>
        <form className="Header-search" onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Search for movies" />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;