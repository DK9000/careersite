import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-swiper',
  templateUrl: './swipersection.component.html',
  styleUrls: ['./swipersection.component.scss'], 
})
export class SwiperSectionComponent {
  public show: boolean = true;

  //Array containing information about picture location
  public slideArray = [
    {
      id: '0',
      src: 'assets/pictures/frontpage/grafikr_client_soyaconcept.jpg',
    },
    { id: '1', src: 'assets/pictures/frontpage/grafikr_client_twttw.jpg' },
    { id: '2', src: 'assets/pictures/frontpage/grafikr_client_last.jpg' },
  ];


  //Options for the swiper
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',

    slidesPerView: 1.11,
    watchSlidesVisibility: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    freeMode: true,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor() {}


  //Method to keep track of the index change
  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  //Method to handle changes on swipe event
  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }
}
