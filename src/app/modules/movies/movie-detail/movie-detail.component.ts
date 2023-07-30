import { ListService } from './../../../services/list.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { Component } from '@angular/core';
import { ConstantUri } from 'src/app/utils/constantUri';
import { MovieModel } from 'src/app/models/movie.model';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent extends BaseComponent<MovieModel.Movie> {
  // Se hereda los metodos y atributos de BaseComponent y lo de <> es el tipo de datos k devuelve ya que esta vinculado con el apiservice
  movie: MovieModel.Movie = {
    adult: true,
    backdrop_path: '',
    belongs_to_collection: null,
    budget: 1,
    genres: [],
    homepage: '',
    id: 1,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 1,
    poster_path: '',
    production_companies: [],
    production_countries: [{ iso_3166_1: '', name: '' }],
    release_date: '',
    revenue: 1,
    runtime: 1,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: true,
    vote_average: 1,
    vote_count: 1,
  };
  movieIMG = ConstantUri.pathIMG;
  override set setResponseService(val: MovieModel.Movie) {
    this.movie = val;
  }
  idMovie: number = 1;
  arrayFromLocalStorage: MovieModel.Movie[] = [];
  favoritesStyles = false;
  constructor(
    protected override readonly apiService: ApiService<MovieModel.Movie>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly listService: ListService,
    private readonly router: Router
  ) {
    super(apiService);
    this.activatedRoute.params.subscribe((val) => {
      this.getMovieDetail(val['id']);
      this.idMovie = val['id'];
    });
  }
  override ngOnInit(): void {
    const arrayAsString = localStorage.getItem('favorites');
    if (arrayAsString) {
      this.arrayFromLocalStorage = JSON.parse(arrayAsString);
    }
    const pintarHeart = this.arrayFromLocalStorage.find(
      (item) => item.id == this.idMovie
    );
    if (pintarHeart) {
      this.favoritesStyles = true;
    }
  }
  private getMovieDetail(id: string) {
    this.paramsConfig.url = ConstantUri.movieDetail + '/' + id;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.getRequest();
  }
  returnPopulars() {
    this.router.navigate(['/populars']);
  }
  returnHome() {
    this.router.navigate(['/']);
  }

  // ADD MOVIE
  isDisabledFavorite: boolean = false;
  onAddFavorite(movie: MovieModel.Movie) {
    this.listService.addFavorite(movie);
    this.isDisabledFavorite = true;
  }
}
