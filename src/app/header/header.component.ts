import { Component, OnInit } from '@angular/core';
declare const scrollToElement: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 
  
  
  ngOnInit() {
  }

  // Scroll To target Navbar
  onClick(id:any) {
    scrollToElement(id);
  }

}
