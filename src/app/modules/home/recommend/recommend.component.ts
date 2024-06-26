import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesModel } from 'src/app/models/movies.model';
import { ApiService } from 'src/app/services/api.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
})
export class RecommendComponent extends BaseComponent<MoviesModel.MoviesResponse> {
  recommend: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  movieIMG = ConstantUri.pathIMG;
  public override set setResponseService(value: MoviesModel.MoviesResponse) {
    this.recommend.results = value.results.slice(0, 5);
    console.log(this.recommend.results);
  }
  constructor(
    protected override readonly apiService: ApiService<MoviesModel.MoviesResponse>,
    private readonly router: Router
  ) {
    super(apiService);
  }
  override ngOnInit(): void {
    this.paramsConfig.url = ConstantUri.recommend;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.getRequest();
  }
  /// VER DETALLES
  viewDetails(id: number) {
    this.router.navigate([`/movies/details/${id}`]);
  }
}
