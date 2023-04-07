import { MovieModel } from "../../../Models/MovieModel";
import "./MovieCard.css";



interface MovieCardProps{
    movie: MovieModel;
}

function MovieCard(props: MovieCardProps): JSX.Element {
    return (
        <div className="MovieCard">
			<p>ID: {props.movie.id}</p>
            <p>Title: {props.movie.title}</p>
            <p>Director: {props.movie.director}</p>
            <p>Genres: {props.movie.genres}</p>
            <p>Status: {props.movie.plot}</p>
            <p>Runtime: {props.movie.runtime}</p>
            <p>Year: {props.movie.year}</p>
            <img src={props.movie.posterUrl} alt={props.movie.title}/>{""}
        </div>
    );
}

export default MovieCard;
