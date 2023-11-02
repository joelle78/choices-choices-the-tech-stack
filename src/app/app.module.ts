import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Fetch strapi
import {HttpClientModule} from'@angular/common/http';
import {CommonModule} from "@angular/common";

import {AppComponent} from './app.component';
import {TopHeaderComponent} from './header/top-header/top-header.component';
import {CarouselSliderComponent} from './header/carousel-slider/carousel-slider.component';
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from './main/main.component';
import {MainIntroComponent} from './main/main-intro/main-intro.component';
import {MainRecentStekjesComponent} from './main/main-recent-stekjes/main-recent-stekjes.component';
import { MainAboutPlantSwapComponent } from './main/main-about-plant-swap/main-about-plant-swap.component';
import { FooterComponent } from './footer/footer.component';


// import {StekjesService} from "./main/main-recent-stekjes/stekjes.service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    TopHeaderComponent,
    CarouselSliderComponent,
    MainComponent,
    MainIntroComponent,
    MainRecentStekjesComponent,
    MainAboutPlantSwapComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

