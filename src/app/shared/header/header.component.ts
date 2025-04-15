import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../models/asset-service/asset.service.js'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  constructor(public assetService: AssetService) {}
}