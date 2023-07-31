import { ListService } from './../../../services/list.service';
import { Router } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { Component } from '@angular/core';
import { MoviesModel } from 'src/app/models/movies.model';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent extends BaseComponent<MoviesModel.MoviesResponse> {
  movies: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  arrayPages = new Array(5).fill('');
  movieIMG = ConstantUri.pathIMG;
  public override set setResponseService(value: MoviesModel.MoviesResponse) {
    this.movies.results = value.results;
    console.log('moviesgrid', this.movies.results);
  }
  constructor(
    protected override readonly apiService: ApiService<MoviesModel.MoviesResponse>,
    private readonly listService: ListService,
    private readonly router: Router
  ) {
    super(apiService);
  }
  override ngOnInit(): void {
    this.paramsConfig.url = ConstantUri.moviesDiscover + this.currentPage;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.getRequest();
  }
  //PAGINACION//////////////////
  currentPage = 1;
  onPageChange(page: number) {
    this.currentPage = page;
    this.paramsConfig.url = ConstantUri.moviesDiscover + this.currentPage;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.getRequest();
  }
  /// VER DETALLES
  viewDetails(id: number) {
    this.router.navigate([`/movies/details/${id}`]);
  }
  //ADD FAVORITES
  isDisabledFavorite: boolean = false;
  onAddFavorite(movie: MoviesModel.Result) {
    this.listService.addFavorite(movie);
    this.isDisabledFavorite = true;
  }
  getStyleHeart(id: number): boolean {
    return this.listService.getFavoriteStyle(id);
  }
}
