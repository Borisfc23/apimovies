import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent, FavoritesComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
