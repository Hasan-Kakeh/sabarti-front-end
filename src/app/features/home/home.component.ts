import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { register, type SwiperContainer } from 'swiper/element-bundle';
import { type SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeComponent implements OnInit,AfterViewInit {
  readonly swiperRecommendation = viewChild<ElementRef<SwiperContainer>>(
    'swiperRecommendation',
  );
  readonly zone = inject(NgZone);
  readonly platformId = inject(PLATFORM_ID);
  get swiperCarouselConfig(): SwiperOptions {
    return {
      injectStylesUrls: ['swiper.css'],
      spaceBetween: 10,
      slidesPerView: 1.2,
      slidesOffsetAfter: 10,
      slidesOffsetBefore: 0,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          slidesOffsetAfter: 30,
          slidesOffsetBefore: 30,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          slidesOffsetAfter: 30,
          slidesOffsetBefore: 30,
          spaceBetween: 20,
        },
        648: {
          slidesPerView: 2,
          slidesOffsetAfter: 30,
          slidesOffsetBefore: 30,
          spaceBetween: 20,
        },
        464: {
          slidesPerView: 1.5,

        },
      },
    };
  }
  constructor() {
    register();
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId))
    this.swiperRecommendation()!.nativeElement.swiper.update();
  }
  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      if (isPlatformBrowser(this.platformId)) this.initCarouselSwiper();
    });
  }
  initCarouselSwiper() {
    const swiperElement = this.swiperRecommendation()!.nativeElement;

    console.log({...this.swiperRecommendation()});
    Object.assign(swiperElement, this.swiperCarouselConfig);

    swiperElement.initialize();
  }
}
