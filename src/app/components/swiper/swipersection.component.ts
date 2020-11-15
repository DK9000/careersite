import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions, Swiper } from 'swiper';
@Component({
  selector: 'app-swiper',
  templateUrl: './swipersection.component.html',
  styleUrls: ['./swipersection.component.scss'],
})
export class SwiperSectionComponent implements OnInit {
  //Variables for indicators
  private indicatorId = 'col';
  //Array containing information about picture location
  public slideArray = [
    {
      id: '0',
      src: 'assets/pictures/frontpage/grafikr_client_soyaconcept.jpg',
      text: 'SOYACONCEPT · CONVERSION FOCUSED WEBDESIGN',
    },
    {
      id: '1',
      src: 'assets/pictures/frontpage/grafikr_client_twttw.jpg',
      text: 'THEN WE TAKE THE WORLD · AWARD WINNING MANAGEMENT',
    },
    {
      id: '2',
      src: 'assets/pictures/frontpage/grafikr_client_last.jpg',
      text: 'LÄST · BIG AND BOLD E-COMMERCE',
    },
  ];

  //Options for the swiper
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    watchSlidesVisibility: true,
    keyboard: true,
    mousewheel: false,
    
    loop: true,
    centeredSlides: true,
    breakpoints: {
      640: {
        
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1.11,
        spaceBetween: 0,
      },
    },
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor() {}
  ngOnInit(): void {
    //makes the starting indicator column start black, dumb solution but will suffice for test
    document.getElementById('col0').style.backgroundColor = 'black';
  }

  //Method to keep track of the index change
  public onIndexChange(index: number): void {
    //call for method for changing colors on indicator
    this.indicatorColor(index);
    console.log('Swiper index: ', index);
  }

  //Method to handle changes on swipe event
  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  //method for changing the indicator column on the progress tracking
  private indicatorColor(i: number) {
    var classes = document.getElementsByClassName('indicator-col');
    for (let index = 0; index < classes.length; index++) {
      const element = classes[index];
      //if the element id is the same as the index number element
      //change the background of the element
      if (element.id == this.indicatorId + i.toString()) {
        document.getElementById(element.id).style.backgroundColor = 'black';
      } else {
        document.getElementById(element.id).style.backgroundColor = 'lightgray';
      }
    }
  }
}
