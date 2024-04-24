const baseURL = 'https://api.themoviedb.org/3';
export class ConstantUri {
  public static readonly apiKey = '40183af1d4b8b5d6fdee7059d618be2e';
  public static readonly validateWithLogin =
    baseURL + '/authentication/token/validate_with_login';
  public static readonly tokenNew = baseURL + '/authentication/token/new';
  public static readonly tokenMe =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDE4M2FmMWQ0YjhiNWQ2ZmRlZTcwNTlkNjE4YmUyZSIsInN1YiI6IjYyMjIzY2JjNDJiZjAxMDA0NTcxMzAyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zg95ywWrkDVKFrfJGGFNbJIm7LlbQkX-4OalRyBCy-U';
  public static readonly moviesPopular = baseURL + '/movie/popular';
  public static readonly moviesUpcoming = baseURL + '/movie/upcoming';
  public static readonly moviesDiscover = baseURL + '/discover/movie?page=';
  public static readonly recommend = baseURL + '/movie/3/recommendations';
  public static readonly pathIMG = 'https://image.tmdb.org/t/p/original';
  public static readonly movieDetail = baseURL + '/movie';
  public static readonly searchMovie = baseURL + '/search/movie?query=';
}
