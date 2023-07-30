import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { ConstantUri } from 'src/app/utils/constantUri';
import { Component, OnInit } from '@angular/core';
import { MoviesModel } from 'src/app/models/movies.model';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent extends BaseComponent<MoviesModel.MoviesResponse> {
  populars: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  movieIMG = ConstantUri.pathIMG;
  override set setResponseService(value: MoviesModel.MoviesResponse) {
    this.populars = value;
  }
  constructor(
    protected override readonly apiService: ApiService<MoviesModel.MoviesResponse>,
    private readonly router: Router
  ) {
    super(apiService);
  }
  override ngOnInit(): void {
    this.paramsConfig.url = ConstantUri.moviesPopular;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.getRequest();
  }
  viewDetail(id: number) {
    this.router.navigate([`/populars/details/${id}`]);
  }
}
