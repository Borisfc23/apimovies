import { ListService } from './../../../services/list.service';
import { ConstantUri } from 'src/app/utils/constantUri';
import { Component } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  arrayFromLocalStorage: MovieModel.Movie[] = [];
  movieIMG = ConstantUri.pathIMG;
  loading = true;
  constructor(
    private router: Router,
    private readonly listService: ListService
  ) {}
  viewDetails(id: number) {
    this.router.navigate([`/movies/details/${id}`]);
  }
  ngOnInit(): void {
    const arrayAsString = localStorage.getItem('favorites');
    if (arrayAsString) {
      this.arrayFromLocalStorage = JSON.parse(arrayAsString);
      this.loading = false;
    }
  }
  removeLike(id: number) {
    this.listService.removeFavoriteMovie(id);
  }
  ngDoCheck(): void {
    const newDataFromLocalStorage = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    if (
      JSON.stringify(newDataFromLocalStorage) !==
      JSON.stringify(this.arrayFromLocalStorage)
    ) {
      this.arrayFromLocalStorage = newDataFromLocalStorage;
    }
  }
}
