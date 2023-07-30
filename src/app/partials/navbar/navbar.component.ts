import { MoviesModel } from 'src/app/models/movies.model';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent extends BaseComponent<MoviesModel.MoviesResponse> {
  isAuth: boolean = false;
  linkActive$ = this.apiService.loginAction$;
  movies: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  search: string = '';
  movieIMG = ConstantUri.pathIMG;
  public override set setResponseService(value: MoviesModel.MoviesResponse) {
    this.movies.results = value.results.slice(0, 4);
  }
  constructor(
    protected override readonly apiService: ApiService<MoviesModel.MoviesResponse>,
    private router: Router
  ) {
    super(apiService);
  }
  override ngOnInit(): void {
    this.apiService.isAutenticated();
  }
  SignOut() {
    this.apiService.signOut();
    this.router.navigate(['login']);
  }
  modelChangeFn(event: any) {
    const inputValue = event;
    this.paramsConfig.url = ConstantUri.searchMovie + inputValue;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.getRequest();
  }
  /// VER DETALLES
  viewDetails(id: number) {
    this.router.navigate([`/movies/details/${id}`]);
    this.modelChangeFn('');
  }
}
