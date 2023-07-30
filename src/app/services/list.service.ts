import { BehaviorSubject, Observable } from 'rxjs';
import { MovieModel } from './../models/movie.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  favorite: MovieModel.Movie[] = [];

  private favoriteSubject = new BehaviorSubject<MovieModel.Movie[]>([]);
  get favoriteAction$(): Observable<MovieModel.Movie[]> {
    return this.favoriteSubject.asObservable();
  }

  addFavorite(movie: MovieModel.Movie): void {
    this.favorite.push({ ...movie });
    localStorage.setItem('favorites', JSON.stringify(this.favorite));
    console.log('favorite:', this.favorite);
  }
}
