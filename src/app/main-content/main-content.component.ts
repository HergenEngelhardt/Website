import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormularComponent } from './contact-formular/contact-formular.component';
import { IntroduceMeComponent } from './introduce-me/introduce-me.component';
import * as AOS from 'aos';

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
export class MainContentComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            let headerOffset = 100; 
            if (fragment === 'projectList') {
              headerOffset = 180; 
            } else if (fragment === 'skillSection') {
              headerOffset = 100; 
            } else if (fragment === 'contactSection') {
              headerOffset = 120;
            }
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: 'smooth'
            });
          }
        }, 400); 
      }
    });
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      mirror: true,
      disableMutationObserver: false
    });
    
    setTimeout(() => {
      AOS.refreshHard();
    }, 300); 
  }

  ngOnDestroy(): void { 
  }
}