import { MovieModel } from "../../../Models/MovieModel";
import "./MovieCard.css";



interface MovieCardProps{
    movie: MovieModel;
}

function MovieCard(props: MovieCardProps): JSX.Element {
    return (
        <div className="MovieCard">
			{/* <p>ID: {props.movie.id}</p> */}
            <h3>{props.movie.title}</h3>
            <h6>{props.movie.actors}</h6>
            <p>Director: {props.movie.director}</p>
            <p>{props.movie.genres}</p>
            
            <p>Plot: {props.movie.plot}</p>
            <p>{props.movie.runtime} min</p>
            <p>{props.movie.year}</p>
            <img src={props.movie.posterUrl} alt={props.movie.title}/>{""}
        </div>
    );
}

export default MovieCard;
