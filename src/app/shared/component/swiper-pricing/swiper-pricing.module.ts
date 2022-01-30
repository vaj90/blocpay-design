import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperPricingComponent } from './swiper-pricing.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [SwiperPricingComponent],
  exports: [SwiperPricingComponent],
})
export class SwiperPricingModule { }
