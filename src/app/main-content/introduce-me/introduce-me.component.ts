import { Component } from '@angular/core';
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
  styleUrl: './introduce-me.component.scss'
})
export class IntroduceMeComponent {
  constructor(public assetService: AssetService) {}
}