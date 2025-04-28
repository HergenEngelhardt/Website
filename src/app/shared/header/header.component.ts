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
    // Check for both regular routes and potential route variations
    if (
      currentUrl.includes('/imprint') || 
      currentUrl.includes('/impressum') || // In case it's using German route
      currentUrl.includes('/privacy') || 
      currentUrl.includes('/datenschutz') || // In case it's using German route
      !currentUrl.startsWith('/') // Special case for overlays without route change
    ) {
      // Navigate to home with fragment and also log for debugging
      console.log('Navigating from:', currentUrl, 'to fragment:', fragment);
      this.router.navigate(['/'], { fragment: fragment });
    }
  }
  
  constructor(
    public assetService: AssetService,
    private router: Router
  ) {}
}