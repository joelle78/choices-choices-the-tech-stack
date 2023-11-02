import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css']
})

export class CarouselSliderComponent implements OnInit, OnDestroy {
  slidesContainer: HTMLElement | null = null;
  slideWidth: number = 0;
  currentSlide: number = 0;
  intervalId: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.slidesContainer = document.querySelector('.slides');
    const slideItem = document.querySelector('.slides-item') as HTMLElement;

    if (slideItem) {
      this.slideWidth = slideItem.offsetWidth;
    }

    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  // Function to scroll to the next slide
  nextSlide() {
    this.currentSlide++;
    if (this.currentSlide >= 3) {
      this.currentSlide = 0; // Return to the first slide when the end is reached
    }

    this.slidesContainer?.scrollTo({
      left: this.currentSlide * this.slideWidth,
      behavior: 'smooth',
    });
  }

  // Function to autoplay the carousel
  startCarousel() {
    this.intervalId = setInterval(() => this.nextSlide(), 8000); // Switch slides every 8 seconds (adjust as needed)
  }

}




