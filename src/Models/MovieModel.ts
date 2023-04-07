export interface TopModel {
    genres: string[]
    movies: MovieModel[]
  }
  
  export interface MovieModel {
    id: number
    title: string
    year: string
    runtime: string
    genres: string[]
    director: string
    actors: string
    plot: string
    posterUrl: string
  }
  