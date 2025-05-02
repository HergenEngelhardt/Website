import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { AssetService } from '../../models/asset-service/asset.service.js';
import { TranslateModule } from '@ngx-translate/core'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduce-me',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule, 
    RouterModule
  ],
  providers: [AssetService],
  templateUrl: './introduce-me.component.html',
  styleUrl: './introduce-me.component.scss',
  encapsulation: ViewEncapsulation.None // Ensure styles aren't scoped
})
export class IntroduceMeComponent implements AfterViewInit {
  constructor(public assetService: AssetService) {}
  
  ngAfterViewInit() {
    this.setupButtonAnimations();
  }
  
  setupButtonAnimations() {
    setTimeout(() => {
      const buttons = document.querySelectorAll('.main-start-button p a');
      
      buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
          const buttonText = button.querySelector('.button-text') as HTMLElement;
          if (buttonText) {
            buttonText.style.animation = 'none';
            void buttonText.offsetWidth;
            buttonText.style.animation = 'buttonSlideOut 1s forwards, buttonTickerMove 4s 1s infinite linear';
          }
        });
        button.addEventListener('mouseleave', (e) => {
          const buttonText = button.querySelector('.button-text') as HTMLElement;
          if (buttonText) {
            buttonText.style.animation = '';
          }
        });
      });
    }, 500); 
  }
}