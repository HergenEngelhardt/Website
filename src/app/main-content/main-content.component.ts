import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormularComponent } from './contact-formular/contact-formular.component';
import { IntroduceMeComponent } from './introduce-me/introduce-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    IntroduceMeComponent,
    PersonalInfoComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactFormularComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}