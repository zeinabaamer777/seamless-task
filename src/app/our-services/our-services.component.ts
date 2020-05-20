import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  offers: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.offers = this.dataService.getOffers(); 
  }

}
