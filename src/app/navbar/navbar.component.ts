import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Declare scroll Function from the external file
declare const scrollToElement: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: any){}
  //  add Class on Scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-shrink');
    } else {
      element.classList.remove('navbar-shrink');
    }
  }
  ngOnInit() {  
  }
  // Scroll To target Navbar
  onClick(id:any) {
    scrollToElement(id);
  }
}
