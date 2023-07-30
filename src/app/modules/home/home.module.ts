import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GridComponent } from './grid/grid.component';
import { RecommendComponent } from './recommend/recommend.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    GridComponent,
    RecommendComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
