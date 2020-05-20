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
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1500,
    'arrows': false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
