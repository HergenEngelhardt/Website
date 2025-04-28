import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../models/asset-service/asset.service.js';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  translate = inject(TranslateService);

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleLanguage(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const targetLang = checkbox.checked ? 'en' : 'de';
    this.translate.use(targetLang);
  }

  navigateToSection(fragment: string) {
    if (this.menuOpen) {
      this.toggleMenu();
    }

    const currentUrl = this.router.url;
    if (
      currentUrl.includes('/imprint') ||
      currentUrl.includes('/impressum') || 
      currentUrl.includes('/privacy') ||
      currentUrl.includes('/datenschutz') || 
      !currentUrl.startsWith('/') 
    ) {
      console.log('Navigating from:', currentUrl, 'to fragment:', fragment);
      this.router.navigate(['/'], { fragment: fragment });
    }
  }

  navigateHome() {
    const currentUrl = this.router.url;
    if (
      currentUrl.includes('/imprint') ||
      currentUrl.includes('/impressum') ||
      currentUrl.includes('/privacy') ||
      currentUrl.includes('/datenschutz')
    ) {
      console.log('Navigating home from:', currentUrl);
      this.router.navigate(['/'], { fragment: 'header' });
    }
  }

  constructor(
    public assetService: AssetService,
    private router: Router
  ) { }
}