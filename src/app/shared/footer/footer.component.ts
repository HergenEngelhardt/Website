import { Component } from '@angular/core';
import { AssetService } from '../../models/asset-service/asset.service.js';
import { TranslateModule } from '@ngx-translate/core'; 
import { RouterLink, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink, 
    RouterModule
  ], 
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  navigateHome() {
    const currentUrl = this.router.url;
    if (
      currentUrl.includes('/imprint') ||
      currentUrl.includes('/impressum') ||
      currentUrl.includes('/privacy') ||
      currentUrl.includes('/datenschutz')
    ) {
      console.log('Navigating home from footer:', currentUrl);
      this.router.navigate(['/'], { fragment: 'header' });
    }
  }
  
  constructor(
    public assetService: AssetService,
    private router: Router
  ) { }
}