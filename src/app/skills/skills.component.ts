import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  precentageJavaScript: string = 'p85';
  circleTextJavaScript: string = '85%';
  precentageAngular: string = 'p60';
  circleTextAngular: string = '60%';
  precentageHTML: string = 'p80';
  circleTextHTML: string = '80%';
  precentagePHP: string = 'p70';
  circleTextPHP: string = '70%';

  constructor() { }

  ngOnInit() {
  }

}
