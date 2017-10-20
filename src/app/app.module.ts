import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SkillCircleComponent } from './skill-circle/skill-circle.component';
import { Project1Component } from './projects/project1/project1.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    SkillCircleComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'project1',
        component: Project1Component
      },
      {
        path: 'project2',
        component: Project2Component
      },
      {
        path: 'project3',
        component: Project3Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
