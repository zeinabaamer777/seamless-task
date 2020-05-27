import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
declare var $: any;
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  sliderItems: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.sliderItems = this.dataService.getsliderItems(); 
  }
  // slideConfig = {
  //   "slidesToShow": 3,
  //   "slidesToScroll": 1,
  //   "dots": true,
  //   "centerMode": true,
  //   "focusOnSelect": true,
  //   "arrows":false,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         "slidesToShow": 1,
  //         "slidesToScroll": 1,
  //       }
  //     }
  //   ]
  // };
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "centerMode": true,
    "focusOnSelect": true,
    "arrows":false,
    "autoplay": true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          "slidesToShow": 1,
          "slidesToScroll": 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
  };
  removeSlide() {
    this.sliderItems.length = this.sliderItems.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
