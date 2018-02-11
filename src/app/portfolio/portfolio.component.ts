import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('portfolioBelt') portfolioBelt: ElementRef;
  @ViewChild('projectWrapper') projectWrapper: ElementRef;
  @ViewChild('projectPreview') projectPreview: ElementRef;
  @ViewChild('backButton') backButton: ElementRef;
  project1Active: boolean = false;
  project2Active: boolean = false;
  project3Active: boolean = false;
  project4Active: boolean = false;
  project5Active: boolean = false;
  project6Active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  hideActiveProject() {
    this.portfolioBelt.nativeElement.style.left = '0%';
    this.projectWrapper.nativeElement.style.display = 'block';

    setTimeout(() => {
      this.projectPreview.nativeElement.style.display = 'none';
      this.project1Active = false;
      this.project2Active = false;
      this.project3Active = false;
      this.project4Active = false;
      this.project5Active = false;
      this.project6Active = false;
    }, 1000);
  }

  showActiveProject(): void {
    this.portfolioBelt.nativeElement.style.left = '-100%';
    this.projectPreview.nativeElement.style.display = 'block';

    setTimeout(() => {
      this.projectWrapper.nativeElement.style.display = 'none';
    }, 1000);
  }
}
