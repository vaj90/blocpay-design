import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {SwiperOptions, EffectCoverflow, FreeMode, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-swiper-pricing',
  templateUrl: './swiper-pricing.component.html',
  styleUrls: ['./swiper-pricing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperPricingComponent implements OnInit {
  config: SwiperOptions = {
    //freeMode: true,
    //spaceBetween: 30,
    effect: 'coverflow',
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 'auto',
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
