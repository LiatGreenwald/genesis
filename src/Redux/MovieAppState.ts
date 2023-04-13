import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieModel } from "../../src/Models/MovieModel";
import { Notyf } from "notyf";

interface MovieState {
    movies: MovieModel[];
    searchQuery: string;
}


const initialState: MovieState = {
    movies: [],
    searchQuery: "",
}

export enum ActionType {
    GOT_ALL_MOVIES = "GOT_ALL_MOVIES",
    ADDED_MOVIE = "ADDED_MOVIE",
    DELETED_MOVIE = "DELETED_MOVIE",
}


const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      gotAllMovieAction(state, action: PayloadAction<MovieModel[]>) {
        state.movies = action.payload;
      },

      addMovieAction(state, action: PayloadAction<MovieModel>) {
        state.movies.push(action.payload);
      },

      deletedMovieAction(state, action: PayloadAction<number>) {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      },
      filterMoviesAction(state, action: PayloadAction<string>) {
        state.searchQuery = action.payload;
      }

    },
});

export const {
    gotAllMovieAction,
    addMovieAction,
    deletedMovieAction,
    filterMoviesAction
  } = moviesSlice.actions;

  export const moviesReducer = moviesSlice.reducer;

 

class NotificationService{

    private notification = new Notyf({duration:4000, position:{x:"left",y:"top"}});

    public success(message: string) {
        this.notification.success(message);
    }

    public error(message: string) {
        this.notification.error(message);
    }
}

const notifyService = new NotificationService();
export default notifyService;
