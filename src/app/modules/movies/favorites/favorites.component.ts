import { ConstantUri } from 'src/app/utils/constantUri';
import { Component, OnInit } from '@angular/core';
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
  constructor(private router: Router) {}
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
}
