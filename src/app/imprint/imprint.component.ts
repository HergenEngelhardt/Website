import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-imprint', 
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink, 
    CommonModule
  ],
  templateUrl: './imprint.component.html', 
  styleUrl: './imprint.component.scss' 
})
export class ImprintComponent implements OnInit {
  
  constructor(
    private viewportScroller: ViewportScroller,
    private translateService: TranslateService
  ) {}
  
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    
    console.log('Current lang:', this.translateService.currentLang);
    console.log('Available translation keys:', this.translateService.instant('IMPRINT'));
  }
  
  forceLanguage(lang: string): void {
    this.translateService.use(lang);
    console.log('Switched to language:', lang);
  }
}