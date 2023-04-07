import { ChangeEvent, useEffect, useState } from "react";
import "./MovieList.css";
import { MovieModel, TopModel } from "../../../Models/MovieModel";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

function MovieList(): JSX.Element {

    const [mov, setMov] = useState<MovieModel[]>([]);
    const [filtertext, setFiltertext] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFiltertext(e.target.value);
   };
   const filterMov = mov.filter((el) => {
    return (
        el.title.toLowerCase().includes(filtertext.toLowerCase()) ||
          el.actors.toLowerCase().includes(filtertext.toLowerCase())
             );
           });

   useEffect(() => {
    axios.get<TopModel>("https://raw.githubusercontent.com/LiatGreenwald/mycinema/main/filmlist")
      .then((res) => {
        setMov(res.data.movies)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return (
        <div className="MovieList">
		  <span>Filter by title: </span>
       <input type="text" onChange={handleChange} />
			<div className="cards-display">
                 {filterMov.map(c => <MovieCard key={'title' + c.id} movie={c} />)}	 
        </div>
        </div>
    );
}

export default MovieList;
