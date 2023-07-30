import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesModel } from 'src/app/models/movies.model';
import { ApiService } from 'src/app/services/api.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent extends BaseComponent<MoviesModel.MoviesResponse> {
  upcoming: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  movieIMG = ConstantUri.pathIMG;
  public override set setResponseService(value: MoviesModel.MoviesResponse) {
    this.upcoming.results = value.results.slice(0, 5);
    // console.log(this.upcoming.results);
  }
  constructor(
    protected override readonly apiService: ApiService<MoviesModel.MoviesResponse>,
    private readonly router: Router
  ) {
    super(apiService);
  }
  override ngOnInit(): void {
    this.paramsConfig.url = ConstantUri.moviesUpcoming;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.getRequest();
  }
  /// VER DETALLES
  viewDetails(id: number) {
    this.router.navigate([`/movies/details/${id}`]);
  }

  //swipper
  activeIndex = 0;
  slides = [0, 1, 2, 3, 4]; // Índices de las diapositivas

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }
}
