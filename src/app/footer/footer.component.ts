import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number; 

  constructor() { 
    this.year = this.getYear();
  }

  ngOnInit() {
  }

  getYear(): number {
    let date = new Date();
    return date.getFullYear();
  }
}
