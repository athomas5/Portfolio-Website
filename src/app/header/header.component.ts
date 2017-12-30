import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showNavBar(): void {
    let navBar = document.getElementById('nav');
    navBar.style.top = '0';
  }

  closeNavBar(): void {
    let navBar = document.getElementById('nav');
    navBar.style.top = '-100%';
  }
}
