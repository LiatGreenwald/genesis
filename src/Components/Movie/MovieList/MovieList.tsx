
import { ChangeEvent, useEffect, useState } from "react";
import "./MovieList.css";
import { MovieModel, TopModel } from "../../../Models/MovieModel";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

function MovieList(): JSX.Element {

    const [mov, setMov] = useState<MovieModel[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<MovieModel | undefined>();
    const [filtertext, setFiltertext] = useState<string>("");
    

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        const movie = mov.find(m => m.id.toString() === selectedId);
        setSelectedMovie(movie);
    };

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
            <label htmlFor="movie-select">Select a movie:</label>
            <select id="movie-select" onChange={handleSelectChange}>
                <option value="">-- Please select --</option>
                {mov.map(movie => <option key={movie.id} value={movie.id}>{movie.title}</option>)}
            </select>
            {/* <span>Search for a movie: </span>
            <input type="text" onChange={handleChange} /> */}
            <div className="cards-display">
                {selectedMovie ? (
                    <MovieCard key={'title' + selectedMovie.id} movie={selectedMovie} />
                ) : (
                    filterMov.map(c => <MovieCard key={'title' + c.id} movie={c} />)
                )}
            </div>
        </div>
    );
}

export default MovieList;
