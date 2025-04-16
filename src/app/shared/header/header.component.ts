import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../models/asset-service/asset.service.js'; 
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
 
  translate = inject(TranslateService);
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    this.menuOpen = false;
  }
  constructor(public assetService: AssetService) {}
}