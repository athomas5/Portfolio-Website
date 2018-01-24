import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() repoName: string;
  @Input() imageUrl: string;
  @Input() description: string;
  @Input() sourceCodeLink: string;
  @Input() sourceCodeAvailable: boolean;
  @Input() demoLink: string;

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    let url = 'https://api.github.com/repos/athomas5/' + this.repoName;
    fetch(url).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          this.description = data.description;
          this.sourceCodeLink = data.html_url;
          this.demoLink = 'https://' + this.repoName + '.herokuapp.com';
        })
      }
    })
  }

}
