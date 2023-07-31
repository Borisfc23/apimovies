import { MovieModel } from './../models/movie.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  favorite: MovieModel.Movie[] = [];
  arrayFromLocalStorage: MovieModel.Movie[] = [];

  constructor() {
    // Leer las películas almacenadas en el localStorage al inicializar el servicio
    const favoritesFromLocalStorage = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    this.favorite = favoritesFromLocalStorage;
  }

  addFavorite(movie: any): void {
    this.favorite.push({ ...movie });
    localStorage.setItem('favorites', JSON.stringify(this.favorite));
    console.log('favorite:', this.favorite);
  }
  removeFavoriteMovie(id: number): void {
    this.arrayFromLocalStorage = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    const arrayMoviesFavorites = this.arrayFromLocalStorage.filter(
      (item) => item.id != id
    );
    localStorage.setItem('favorites', JSON.stringify(arrayMoviesFavorites));
  }

  getFavoriteStyle(id: number): boolean {
    const pintarHeart = this.favorite.find((item) => item.id == id);
    if (pintarHeart) {
      return true;
    }
    return false;
  }
}
