import { Component, OnInit, Input } from '@angular/core';

export type svgOption = 'Hamburger' | 'Close' | 'Back';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  @Input() svgName: svgOption;
  @Input() style: 'light' | 'dark-blue';

  constructor() { }

  ngOnInit() {
  }

}
